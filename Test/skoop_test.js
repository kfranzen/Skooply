var skoopdb = require('skoopdb'),
    Skoop = require('skoop');

try {
	var skoopDb = new skoopdb.SkoopDb('localhost', 27017, {});
	//skoopDb.validateDb();

	skoopDb.on('inserted', function(skoop) {
		console.log("Handle inserted event");
		console.log(skoop);
	});

	skoopDb.on('error', function(err) {
		console.log("Handle error");
		console.log(err);
	});

	//skoopDb.createSkoop(1, {product:"shoes"}, null);
	//skoopDb.createSkoop(2, {product:"pants"}, null);

 // update
	var query = {user:"2"};
	skoopDb.getSkoops(query, function(err, skoops) {
		if (err == null) {
			console.log("Found " + skoops.length + " skoops");

			for (var i = 0; i < skoops.length; i++) {
				var skoop = skoops[i];
				skoop.vendor = "customerally";

				console.log(skoop);
				skoopDb.updateSkoop(skoop, function(err, skoop) {
					if (err != null)
						console.log(err);
				})
			}
		} else
			console.log(err);
	});
/*
	// delete
	skoopDb.getSkoops({'user':1}, function(err, skoops) {
		if (err == null) {
			for (var i = 0; i < skoops.length; i++) {
				var skoop = skoops[i];
				console.log(skoop);
				skoopDb.removeSkoop(skoop, function(err, skoop) {
					if (err != null)
						console.log(err);
				})
			}
		}
	});*/
} catch (err) {
	console.log(err);
}

