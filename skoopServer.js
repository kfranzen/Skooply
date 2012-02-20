var express = require('express'),
	querystring = require('querystring'),
	skoopdb = require('skoopdb'),
	Skoop = require('skoop'),
	fs = require('fs');

var app = module.exports = express.createServer();

app.configure(function() {
	app.enable("jsonp callback");
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({secret:"skooply"}));
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
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res) {
	res.json({"methods": ["get: Search on any Skoop property; Sort:any Skoop property; Limit: number of values", "create?user=X&attributes={any skoop properties}", "update?skoop={}"]});
});

function parseQueryStr(query) {
	var fields = {};

	if (query != null) {
		for (prop in query) {
			if (prop === "callback" || typeof query[prop] === "function")
				continue;
			else if (query[prop][0] === "{") {
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
		else
			res.send({code:400, message:err.toString()}, 400);
	});
});


/*
 * create skoop using get
 * Takes a list of attributes for a skoop or an array of sets of attributes
 */
app.get('/create', function(req, res) {
	var attributes = parseQueryStr(req.query);
	var user = attributes.user;

	if (!user)
		res.json({code:400, message:"A skoop must include a user identifier."},400);
	else {
		skoopDb.create(user, attributes, function(err, skoop) {
			if (err == null)
				res.json(skoop, null, 201);
			else
				res.send({code:400, message:err.toString()}, 400);
		});
	}
});


/*
 * update skoop
 * Takes a skoop and updates it
 */
app.get('/update', function(req, res) {
	var params = parseQueryStr(req.query);
	var selector = params.selector;
	var attributes = params.attributes;
	var message = ""
	var code = 201;

	if (!selector)
		message = "A selector object must be provided to update skoops.";
	else if (!attributes)
		message = "No attributes provided to update.";

	if (message !== "") {
		res.json({'code':code, 'message':message});
		return;
	}

	skoopDb.update(selector, attributes, function(err) {
		if (err == null)
			res.json({code:202, message:"updated"}, 202);
		else
			res.json({code:400, message:err.toString()}, 400);
	});
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
		if (err != null)
			res.json({code: 400, message: err.toString()}, 400);
		else
			res.json({code:202, message:"removed"}, 202);
	});
});

/*
 * Add and image for a skoop
* Requires a skoop _id and an image file
*/
app.post('/addImage', function(req, res) {
	if (!req.body._id) {
		res.json({code: 404, message: "A skoop _id must be provided."}, 404);
		return;
	}

	// get the temporary location of the file
	var path = req.files.image.path;

   skoopDb.addImage(req.body._id, path, function(err, imgId) {
		if (err != null)
			res.json({code: 400, message: err.toString()}, 400);
		else {
			var selector = { '_id' : req.body._id };
			var fields = { 'image' : imgId.toString() };
			skoopDb.update(selector, fields, function(err) {
				fs.unlink(path, function(err) {
					if (err)
						res.json({code:400, message: err.toString()}, 400);
				});

				if (err)
					res.json({code:400, message: err.toString()}, 400);
				else
					res.json({code:201, message:"added"}, 201);
			});
		}
 	});
});

/*
 * get the image for a skoop
* Requires a skoop _id
* Returns the image
*/
app.get('/getImage', function(req, res) {
	var id = req.query['_id'];

	if (!id) {
		res.json({code: 404, message: "A skoop _id must be provided."}, 404);
		return;
	}

   skoopDb.getImage(id, function(err, data) {
		if (err != null)
			res.json({code: 400, message: err.toString()}, 400);
		else {
			var fileName = './public/images/' + id + '.png';
			fs.writeFile(fileName, data, 'binary', function(err) {
				if (err !== null)
					res.json({code:400, message: "Unable to retrieve image"}, 404);
				else {
					res.download(fileName, function(err) {
						if (!err)
							fs.unlink(fileName);
					});
				}
			});
		}
 	});
});

// run the application
app.listen(5150);
