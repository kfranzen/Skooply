var express = require('express'),
	skoopdb = require('skoopdb'),
	Skoop = require('skoop');

var app = module.exports = express.createServer(express.logger());
app.enable("jsonp callback");

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
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

	skoopDb.getSkoops(fields, function(err, skoops) {
		if (err == null)
			res.json(skoops);
		else {
			res.contentType('text');
			res.send(err);
		}
	});
});

// create skoops
/*
 * create using get
 */
app.get('/create', function(req, res) {
	var fields = parseQueryStr(req.query);
	var user = fields.user;

	if (!user) {
		res.contentType('text');
		res.send("A skoop must include a user identifier.\n");
	} else {
		skoopDb.createSkoop(user, fields, function(err, skoop) {
			if (err == null)
				res.json(skoop);
			else {
				res.contentType('text');
				res.send(err);
			}
		});
	}
});

// update skoop
/*
 * update skoop
 */
app.get('/update', function(req, res) {
	var fields = parseQueryStr(req.query);
	var id = fields._id;
	// should replace this with alternate skoop constructor?
	var user = fields.user;

	if (!id || !user) {
		res.contentType('text');
		res.send("A valid skoop must include an _id and a user.");
	} else {
		var skoop = new Skoop.Skoop(user, fields);

		retVal = false;
		skoopDb.updateSkoop(skoop, function(err, skoop) {
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
