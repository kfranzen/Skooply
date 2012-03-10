SkoopServer API
===

Definition of the API exposed by the skoop server for accessing and modifying skoops and skoop images, and related data

###Methods
* / - A blank url will return the list of available methods

* /get - Returns a json array of any skoops matching the specified criteria. When called with no parameters all skoops are returned.

	####Parameters:
	* skoop.attribute = value

		Attributes specified directly will do an exact match search

	* criteria = An object specifying a search criteria

		criteria {

			field: The name of the skoop attribute to search
			fields: An array of skoop attributes to search.
			op: Specifies the operation. Values=(like, contains, not contains, exists, not exists, ne, gt, lt, gte, lte)
			values: An array of one or more values.
		}

		A criteria object may only contain one field or fields attribute.

		When using "op":"like" the search performs a regex search of the form '/^value/'. Like only allows one value.

		#####Extended fields

		The value of criteria.field can be set to "text". When "text" is specified all text fields will be searched for the specified text values.

	* conjunction = "and", "or"

		If not specified defaults to "and"

	* sort = skoop.attribute

	* limit = number of skoops to return

	####Examples:

	/get?user=testuser@email.com - Will return all skoops created by the specified user.

	/get?url=http://www.vendor.com/productPage... - Will return any skoops matching the specified url

	/get?vendor=nike&category=shoes - Will return all skoops for Nike shoes

	/get?criteria={"field":"members", "op":"contains", "values":["kfranzen@gmail.com", "daniel@labasse.net", "gttsoft@gmail.com"]}

	/get?vendor=Nike&criteria={"field":"product", "op":"contains", "values":["high top", "running shoe", "cross trainer"]}

	/get?criteria={"field":"product","op":"like","values":["bike"]}

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
