'use strict';

var DatabaseError = require( '../src/index' )
var tap = require( 'tap' )

tap.test( 'DatabaseError',
  function ( t ) {
    var error = new DatabaseError( 24, 'database error message' );

    t.same( error.name, 'DatabaseError', '.name should be `Database`' )
    t.same( error.code, 24, '.error should be `24`' )
    t.same( error.message, 'database error message', '.message should be `database error message`' )
    t.match( error.stack, 'test/index.test.js:8:17', '.stack should contain `test/index.test.js:8:17`' )
    t.end()
  }
)
