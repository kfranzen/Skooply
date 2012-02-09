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
	res.json({"methods": ["get: Search on any Skoop property; Sort:any Skoop property; Limit: number of values", "create?user=X&attributes={any skoop properties}", "update?skoop={}"]});
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

function parseSkoopProperties (fields) {
	var properties = {};
	var skoop = new Skoop.Skoop(1, {});
	var keys = Object.keys(skoop);

	for (prop in fields) {
		for (var i = 0; i < keys.length; i++) {
			if (prop === keys[i])
				properties[prop] = fields[keys[i]];
		}
	}

	return properties;
}

/*
 * returns a list of matching skoops
 * @param Skoop.property: Search on any Skoop property
 * @param sort: sort on any Skoop.property
 * @param limit: X limit the number of returned skoops
 */
app.get('/get', function(req, res) {
	var fields = parseQueryStr(req.query);
   var sort = fields.sort;
   var limit = fields.limit;
   var options = {};
   var query = parseSkoopProperties(fields);

	if (sort)
		options['sort'] = sort;

	if (limit)
		options['limit'] = limit;

	skoopDb.fetch(query, options, function(err, skoops) {
		if (err == null)
			res.json(skoops, null, 200);
		else {
			res.contentType('text/html');
			res.send(error, null, 400);
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
		res.contentType('text/html');
		res.send("A skoop must include a user identifier.\n");
	} else {
		skoopDb.create(user, fields, function(err, skoop) {
			if (err == null)
				res.json(skoop, null, 200);
			else {
				res.contentType('text/html');
				res.send(error, null, 400);
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
		res.contentType('text/html');
		res.send('Must update a valid skoop.');
	} else if (!('user' in fields['skoop'])) {
		res.contentType('text/html');
		res.send("The object is not a valid skoop.");
	} else if (!('_id' in fields['skoop']) || !fields['skoop']['_id']) {
		res.contentType('text/html');
		res.send("Undefined skoop");
	}else {
		var skoop = new Skoop.Skoop(fields['skoop']['user'], fields['skoop']);
		retVal = false;
		skoopDb.update(skoop, function(err, skoop) {
			if (err == null)
				res.json(skoop, null, 200);
			else {
				res.contentType('text/html');
				res.send(error, null, 400);
			}
		});
	}
});

/*
 * remove a skoop by id or remove all skoops matching the specified criteria
 * If _id is provided it is used exclusively to remove the Object
 * If _id is not provided all other provided fields are used to remove matching objects
 */
app.get('/remove', function (req, res) {
	var fields = parseQueryStr(req.query);

	if ('_id' in fields)
		fields = {'_id' : fields['_id'] };

	skoopDb.remove(fields, function (err) {
		res.contentType('text/html');

		if (err != null)
			res.send(err, null, 400);
		else
			res.send('removed');
	});
});

// run the application
app.listen(5150);
