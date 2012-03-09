Skoop data definition
===

A skoop is a javascript object stored in Mongodb and accessed via the SkoopServer API.

###Skoop Attributes

_id - 	 Hex string representation of mongodb generated _id
created - Javascript timestamp of skoop creation
updated - Javascript timestamp of last update
user -	 String email of user who created the skoop
label - 			// string user assigned label
url - 			// the url of the product for the skoop if any
members = [];			// array of emails of users who have joined the Skoop
vendor - ;			// string identifier for vendor
category - ;		// string category name
product - ;			// string product name
price - ;         // float the listed price of the product
image - ;			// string the url of the image for the skoop
terms - ;			// object containing skoop terms
location - ;		// shapefile, string id?
action - ;			// string placeholder for automatic processing
coupon - ;			// coupon code or coupon url
granted = false;		// boolean indicates if the skoop is granted
active = true;			// boolean indicates if the skoop is active
dateToExpire - ;	// timestamp date to expire the Skoop
tags = [];				// array of string tags on skoop
error - ;			// string error message
featured = false;		// boolean indicates it is a featured skoop

	// accessor: valid
	Object.defineProperty(this, 'valid', {value: function() {
		if (!this.user) {
			this.error = "No user provided.";
			return false;
		}

		if (!(this.category || this.product)) {
			this.error = "Either a product or category must be provided.";
			return false;
		}

		return true;
	}, enumerable : false, configurable : true});

	// accessor: new
	Object.defineProperty(this, 'new', {value: function() {
		if (!this._id)
			return true;
		else
			return false;
	}, enumerable: false, configurable: true});


var Skoop = function(user, properties) {
	// data members

	if (typeof properties === "object") {
		this._id = properties['_id'] != null ? properties['_id'] : null;
		this.active = properties['active'] != null ? properties['active'] : true;
		this.created = properties['created'] != null ? properties['created'] : Date.now();
		this.update = properties['updated'] != null ? properties['updated'] : Date.now();
		this.vendor = properties['vendor'] != null ? properties['vendor'] + '' : null;
		this.members = properties['members'] != null ? properties['members'] : [];
		this.category = properties['category'] != null ? properties['category'] + '' : null;
		this.product = properties['product'] != null ? properties['product'] + '' : null;
		this.price = properties['price'] != null ? properties['price'] : null;
		this.image = properties['image'] != null ? properties['image'] + '' : null;
		this.timeFrame = properties['timeFrame'] != null ? properties['timeFrame'] : null;
		this.terms = properties['terms'] != null ? properties['terms'] : null;
		this.location = properties['location'] != null ? properties['location'] : null;
		this.action = properties['action'] != null ? properties['action'] + '' : null;
		this.coupon = properties['coupon'] != null ? properties['coupon'] + '' : null;
		this.tags = properties['tags'] != null ? properties['tags'] : [];
		this.featured = properties['featured'] != null ? properties['featured'] : null;
		this.granted = properties['granted'] != null ? properties['granted'] : null;
		this.dateToExpire = properties['dateToExpire'] != null ? properties['dateToExpire'] : null;
		this.url = properties['url'] != null ? properties['url'] : null;
	}
};

exports.Skoop = Skoop;
