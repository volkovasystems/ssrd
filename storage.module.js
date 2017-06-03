"use strict";

/*;
	@submodule-license:
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
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "letgo",
			"path": "letgo/catcher.module.js",
			"file": "catcher.module.js",
			"module": "letgo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/letgo.git",
			"test": "letgo-test.js",
			"global": false
		}
	@end-submodule-configuration

	@submodule-documentation:

	@end-submodule-documentation

	@include:
		{
			"diatom": "diatom"
		}
	@end-include
*/

const diatom = require( "diatom" );

const Storage = diatom( "Storage" );

Storage.prototype.initialize = function initialize( option ){
	/*;
		@meta-configuration:
			{
				"option:required": "object"
			}
		@end-meta-configuration
	*/

	this.option = option;

	return this;
};

/*;
	@method-documentation:
		Create physical storage.
	@end-method-documentation
*/
Storage.prototype.createStorage = function createStorage( option, callback ){
	/*;
		@meta-configuration:
			{
				"option:required": "object",
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( falze( option ) || !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	backd.bind( self )( pyp( arguments, FUNCTION ) )( null, false );

	return this;
};

/*;
	@method-documentation:
		Connect to the physical storage.
	@end-method-documentation
*/
Storage.prototype.connectStorage = function connectStorage( option, callback ){
	/*;
		@meta-configuration:
			{
				"option:required": "object",
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( falze( option ) || !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	backd.bind( self )( pyp( arguments, FUNCTION ) )( null, false );

	return this;
};

/*;
	@method-documentation:
		Disconnect to physical storage.
	@end-method-documentation
*/
Storage.prototype.disconnectStorage = function disconnectStorage( option, callback ){
	/*;
		@meta-configuration:
			{
				"option:required": "object",
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( falze( option ) || !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	backd.bind( self )( pyp( arguments, FUNCTION ) )( null, false );

	return this;
};

/*;
	@method-documentation:
		Turn off physical storage.

		Connections must be disconnected first.
	@end-method-documentation
*/
Storage.prototype.shutdownStorage = function shutdownStorage( option, callback ){
	/*;
		@meta-configuration:
			{
				"option:required": "object",
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( falze( option ) || !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	callback = backd.bind( self )( pyp( arguments, FUNCTION ) );

	return ntangle( this, callback, null, false );
};

/*;
	@method-documentation:
	@end-method-documentation
*/
Storage.prototype.destroyStorage = function destroyStorage( option, callback ){
	/*;
		@meta-configuration:
			{
				"option:required": "object",
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( falze( option ) || !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	backd.bind( self )( pyp( arguments, FUNCTION ) )( null, false );

	return this;
};

/*;
	@method-documentation:
	@end-method-documentation
*/
Storage.prototype.backupStorage = function backupStorage( option, callback ){
	/*;
		@meta-configuration:
			{
				"option:required": "object",
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( falze( option ) || !protype( option, OBJECT ) ){
		throw new Error( "invalid option" );
	}

	backd.bind( self )( pyp( arguments, FUNCTION ) )( null, false );

	return this;
};

module.exports = Storage;
