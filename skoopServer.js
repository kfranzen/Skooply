var http = require('http'),
	express = require('express'),
	querystring = require('querystring'),
	skoopdb = require('skoopdb'),
	Skoop = require('skoop'),
	skoopSearch = require('skoopsearch'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	log4js = require('log4js');

// setup logger
log4js.configure(process.env['HOME'] + '/www/log4js.json', { 'cwd' : process.env['HOME'] + '/www/logs' });
var logger = log4js.getLogger('skoopServer');
var logLevel = process.env['LOG_LEVEL'];

if (!logLevel)
	logLevel = 'INFO';

logger.setLevel(logLevel);

var app = module.exports = express.createServer();

app.configure(function() {
	app.enable("jsonp callback");
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
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
  log4js.addAppender(log4js.consoleAppender());
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var skoopDb = new skoopdb.SkoopDb('localhost', 27017, {logger:app.logger});

/*
 * Routes for api calls
 */

/*
 * All applies to all paths
 */
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

/*
 * /
 * Returns the available API
 */
app.get('/', function(req, res) {
	res.json({"methods": ["get: Search on any Skoop property; Sort:any Skoop property; Limit: number of values", "create?user=X&attributes={any skoop properties}", "update?skoop={}"]});
});

/*
 * Return the server log
 */
app.get('/logs', function(req, res) {
	fs.readFile(process.env['HOME'] + '/www/logs/skoopServer.log', 'ascii', function(err, data){
		if (err)
			logError(err, 400, res);
		else {
			var lines = data.split("\n");
			res.contentType('text/html');

			lines.forEach(function (line) {
				res.write('<p>' + line + '</p>');
			});

			res.end();
		}
	});
});

/*
 * /get
 * Returns a list of matching skoops
 * @param Skoop.property: Search on any Skoop property
 * @param sort: sort on any Skoop.property
 * @param limit: X limit the number of returned skoops
 */
app.get('/get', function(req, res) {
	var fields = parseQueryStr(req.query);
	var search = new skoopSearch.Search(skoopDb, fields);
	search.execute(function(err, skoops) {
		if (err == null)
			res.json(skoops, null, 200);
		else
			logError(err, 400, res);
	});
});


/*
 * /create
 * Create skoop using get
 * Takes a list of attributes for a skoop or an array of sets of attributes
 */
app.get('/create', function(req, res) {
	var attributes = parseQueryStr(req.query);
	var user = attributes.user;

	if (!user)
		logError("A skoop must include a user identifier.", 400, res);

	skoopDb.create(user, attributes, function(err, skoop) {
		if (err)
			logError(err, 400, res);
		else {
			if (skoop.image)
				fetchImage(skoop);

			res.json(skoop, null, 201);
		}
	});
});

/*
 * /update
 * Update skoop
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
		logError(message, 400, res);
		return;
	}

	skoopDb.update(selector, attributes, function(err) {
		if (err == null) {
			if (attributes.image)
				fetchImage(skoop);

			res.json({code:202, message:"updated"}, 202);
		} else
			logError(err, 400, res);
	});
});

/*
 * /remove
 * Remove a skoop by id or remove all skoops matching the specified criteria
 * If _id is provided it is used exclusively to remove the Object
 * If _id is not provided all other provided fields are used to remove matching objects
 */
app.get('/remove', function (req, res) {
	var fields = parseQueryStr(req.query);

	if ('_id' in fields)
		fields = {'_id' : fields['_id'] };

	skoopDb.remove(fields, function (err) {
		if (err != null)
			logError(err, 400, res);
		else
			res.json({code:202, message:"removed"}, 202);
	});
});

/*
 * /addImage
 * Add and image for a skoop
* Requires a skoop _id and an image file
*/
app.post('/addImage', function(req, res) {
	if (!req.body._id) {
		logError("A skoop _id must be provided.", 400, res);
		return;
	}

	// get the temporary location of the file
	var path = req.files.image.path;

   skoopDb.addImage(req.body._id, path, function(err, imgId) {
		if (err != null)
			logError(err, 400, res);
		else {
			var selector = { '_id' : req.body._id };
			var fields = { 'image' : imgId.toString() };
			skoopDb.update(selector, fields, function(err) {
				fs.unlink(path, function(err) {
					if (err)
						logError(err, 400, res);
				});

				if (err)
					logError(err, 400, res);
				else
					res.json({code:201, message:"added"}, 201);
			});
		}
 	});
});

/*
 * /getImage
 * Get the image for a skoop
* Requires a skoop _id
* Returns the image
*/
app.get('/getImage', function(req, res) {
	var id = req.query['_id'];

	if (!id) {
		logError("A skoop _id must be provided.", 404, res);
		return;
	}

   skoopDb.getImage(id, function(err, data, ext) {
		if (err != null)
			logError(err, 400, res);
		else {
			var fileName = process.env['HOME'] + '/www/public/images/' + id + ext;
			fs.writeFile(fileName, data, 'binary', function(err) {
				if (err !== null)
					logError(err, 400, res);
				else {
					res.download(fileName, function(err) {
						if (err)
							logError(err, 400, res);

						fs.unlink(fileName);
					});
				}
			});
		}
 	});
});

/*
 * Helpers
 */
function logError(err, code, res) {
	logger.error(err.toString());

	if (res)
		res.json({'code':code, message:err.toString()}, code);
}

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

function fetchImage(skoop) {
	var self = this;
	var fileName = path.basename(skoop.image);
	var filePath = process.env['HOME'] + '/www/public/images/' + fileName;
	var urlParts = url.parse(skoop.image);

	var options = {
		host: urlParts.hostname,
	  	port: urlParts.port,
		path: urlParts.path
	};

	var request = http.get(options, function(res){
		 var imagedata = ''
		 res.setEncoding('binary')

		 res.on('data', function(chunk){
			  imagedata += chunk
		 });

		 res.on('end', function(){
			  fs.writeFile(filePath, imagedata, 'binary', function(err){
					if (err)
						logError(err, 400);
					else {
						logger.trace('Wrote file ' + filePath);
						storeImage(skoop, filePath);
					}
			  });
		 });
	});
}

function storeImage(skoop, uri) {
	skoopDb.addImage(skoop._id.toString(), uri, function (err, imgId) {
		if (err == null) {
			logger.trace('Added image for skoop: ' + skoop._id.toString());
			skoop.image = "http://50.18.13.231/getImage?_id=" + skoop._id;
			var selector = { '_id' : skoop._id.toString() };
			var fields = { 'image' : skoop.image };

			skoopDb.update(selector, fields, function(err) {
				if (err)
					logError(err, 400);
			});
		} else {
			// TODO: should update the skoop with bad image or original url
			logError(err, 400);
		}

		// remove the temporary image
		fs.unlink(uri);
	});
}

// run the application
app.listen(5150);
