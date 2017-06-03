"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "ssrd",
			"path": "ssrd/ssrd.js",
			"file": "ssrd.js",
			"module": "ssrd",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ssrd.git",
			"test": "ssrd-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Interface factory for simple data storage creation and connection.

		This will wrap any blueprint that implements
	@end-module-documentation

	@include:
		{

		}
	@end-include
*/

//: @server:
const Storage = require( "./storage.js" );
//: @end-server

//: @server:
const Storage = require( "./storage.support.js" );
//: @end-server

const ssrd = function ssrd( blueprint ){
	/*;
		@meta-configuration:
			{
				"blueprint:required": "function"
			}
		@end-meta-configuration
	*/

	

	return blueprint;
};

module.exports = ssrd;
