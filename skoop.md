Skoop data definition
===

A skoop is a javascript object stored in Mongodb and accessed via the SkoopServer API.

###Skoop Attributes

* _id 	 		- (String) Hex string representation of mongodb generated _id
* created 		- (int) Javascript timestamp of skoop creation
* updated 		- (int) Javascript timestamp of last update
* user 	 		- (string) Email of user who created the skoop
* label 	 		- (string) user assigned label for the skoop
* url 		 	- (string) The URL used to create the skoop
* members	 	- (array) An array of the emails of users who have joined the skoop
* vendor 	 	- (string) The Vendor name or domain
* category  	- (string) The category name for the skoop
* product 	 	- (string) The product name
* price 	 		- (float) The listed price of the product
* image 	 		- (string) The url of the image for the skoop
* terms 	 		- (object) Containis category specific skoop terms
* location  	- (shapefile, string id?) The geo location of the skoop
* action 	 	- (string) placeholder for automatic processing instruction
* coupon    	- (string) Coupon code or coupon url provided by the vendor
* granted 	 	- (boolean) Indicates whether the skoop is granted
* active 	 	- (boolean) Indicates whether the skoop is active
* dateToExpire - (int) Javascript timestamp date to expire the Skoop
* tags 			- (array) Array of user assigned tags on the skoop
* error 			- (string) Error message from skoop modification
* featured 		- (boolean) Indicates whether a skoop is featured
* valid			- (boolean) Indicates whether the skoop is valid; read only
* new				- (boolean) Indicates whether the skoop is new and unsaved

###Methods

* Skoop - function(user, properties);
	* user - (string) The email address of the user that created the skoop
	* properties - (array) Any combination of the other skoop attributes
