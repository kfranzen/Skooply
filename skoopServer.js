var express = require('express'),
	skoopdb = require('skoopdb');

var app = module.exports = express.createServer(express.logger());

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
	res.send("methods: get?query={fields}, create?user=X&attributes={}, update?skoop={}");
});

function parseQueryStr(query) {
	var fields = {};

	if (query != null) {
		for (prop in query) {
			if (typeof query[prop] === "function")
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
app.get('/get', function(req, res){
	var fields = parseQueryStr(req.query);

	skoopDb.getSkoops(fields, function(err, skoops) {
		if (err == null) {
			res.contentType('json');
			res.send(skoops);
			res.send("\n");
		} else {
			res.contentType('text');
			res.send(err);
			res.send("\n");
		}
	});
});

// create skoops
/*
 *
 */

// run the application
app.listen(5150);
