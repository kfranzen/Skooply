var express = require('express'),
	querystring = require('querystring'),
	skoopdb = require('skoopdb'),
	Skoop = require('skoop');

var app = module.exports = express.createServer();

app.configure(function() {
	app.enable("jsonp callback");
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(require('stylus').middleware({ src: __dirname + '/public' }));
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var skoopDb = new skoopdb.SkoopDb('localhost', 27017, {logger:app.logger});


// routes
app.get('/', function(req, res) {
	res.json({"methods": ["get?query={fields}", "create?user=X&attributes={}", "update?skoop={}"]});
});

function parseQueryStr(query) {
	var fields = {};

	if (query != null) {
		for (prop in query) {
			if (prop === "callback" || typeof query[prop] === "function")
				continue;
			else if (prop === "skoop") {
				var val = query[prop];
				var obj = JSON.parse(val);
				fields[prop] = obj;
			} else
				fields[prop] = query[prop];
		}
	}

	return fields;
}

/*
 * returns a list of matching skoops
 * @param fields is null or an object contain the skoop attributes and values to be searched
 */
app.get('/get', function(req, res) {
	var fields = parseQueryStr(req.query);

	skoopDb.fetch(fields, function(err, skoops) {
		if (err == null)
			res.json(skoops);
		else {
			res.contentType('text');
			res.send(err);
		}
	});
});


/*
 * create skoop using get
 * Takes a list of fields for a skoop or an array of sets of fields
 */
app.get('/create', function(req, res) {
	var fields = parseQueryStr(req.query);
	var user = fields.user;

	if (!user) {
		res.contentType('text');
		res.send("A skoop must include a user identifier.\n");
	} else {
		skoopDb.create(user, fields, function(err, skoop) {
			if (err == null)
				res.json(skoop);
			else {
				res.contentType('text');
				res.send(err);
			}
		});
	}
});


/*
 * update skoop
 * Takes a skoop and updates it
 */
app.get('/update', function(req, res) {
	var fields = parseQueryStr(req.query);

	if (!('skoop' in fields)) {
		res.contentType('text');
		res.send('Must update a valid skoop.');
	} else if (!('user' in fields['skoop'])) {
		res.contentType('text');
		res.send("The object is not a valid skoop.");
	} else if (!('_id' in fields['skoop']) || !fields['skoop']['_id']) {
		res.contentType('text');
		res.send("Undefined skoop");
	}else {
		var skoop = new Skoop.Skoop(fields['skoop']['user'], fields['skoop']);
		retVal = false;
		skoopDb.update(skoop, function(err, skoop) {
			if (err == null)
				res.json(skoop);
			else {
				res.contentType('text');
				res.send(err);
			}
		});
	}
});

// run the application
app.listen(5150);
