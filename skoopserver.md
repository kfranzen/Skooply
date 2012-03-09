SkoopServer API
===

Definition of the API exposed by the skoop server for accessing and modifying skoops and skoop images, and related data

###Methods
* / - A blank url will return the list of available methods

* /get - Returns a json array of any skoops matching the specified criteria. When called with no parameters all skoops are returned.

	Any combination of skoop attributes can be used to select skoops. When _id is specified any other attributes are ignored.

	Examples:

	/get?user=testuser@email.com - Will return all skoops created by the specified user.
	/get?url=http://www.vendor.com/productPage... - Will return any skoops matching the specified url
	/get?vendor=nike&category=shoes - Will return all skoops for Nike shoes

* /create -
