var express = require('express'),
	skoopdb = require('skoopdb');

var app = module.exports = express.createServer();

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

var skoopDb = new skoopdb.SkoopDb('localhost', 27017, {});

app.get('/', function(req, res){
  skoopDb.getSkoops({}, function(err, skoops) {
		if (err == null) {
			res.send(skoops);
			res.send("\n");
		} else
			res.send(err);
	});
});

app.listen(5150);
