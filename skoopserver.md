SkoopServer API
===

Definition of the API exposed by the skoop server for accessing and modifying skoops and skoop images, and related data

###Methods
* / - A blank url will return the list of available methods

* /get - Returns a json array of any skoops matching the specified criteria. When called with no parameters all skoops are returned.

	Any combination of skoop attributes can be used to select skoops. When _id is specified any other attributes are ignored.

	####Examples:

	/get?user=testuser@email.com - Will return all skoops created by the specified user.

	/get?url=http://www.vendor.com/productPage... - Will return any skoops matching the specified url

	/get?vendor=nike&category=shoes - Will return all skoops for Nike shoes

* /create - Creates a new skoop.

	Creates a new skoop using the provided skoop attributes.

	####Required Attributes
		* user
		* product or category
		* url

	####Examples:

	/create?user=testuser@email.com&url=http://lastbuy.com/product2

* /update - Update any skoops matching the selection criteria

	#####Parameters

	* selector - A json object containing the skoop attributes to identify the skoop(s) to update.
		If the selector object contains _id all other attributes are ignored.

	* attributes - A json object containing the skoop attributes to be updated.

		May contain any valid skoop attributes.

		Updating the skoop.granted flag to true will cause the skoopServer to grant the skoop. When set it must be combined with a value for the skoop.coupon attribute.

		#####Special attributes

		* addmembers - Array of email addresses for users joining the matched skoop(s)
		* removemembers - Array of email addresses for users to remove from skoops(s)

		#####Examples

		/update?selector={"user":"testuser@email.com", "product":"high tops"}&attributes={"category":"shoes"}

		/update?selector={"_id":4FA3456..."}&attributes={"addmembers":["testuser2@email.com", "testuser3@email.com"]}

* /remove - Remove any skoops matching the specified attributes

	Any valid skoop attributes may be passed to identify skoops to remove. When the selector contains _id all other attributes are ignored.

	#####Examples

	/remove?_id=4FA56...
