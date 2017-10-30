'use strict'

var util = require( 'util' )

/**
 * @link https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript#answer-35966534
 *
 * @param {number} code
 * @param {string} message
 *
 * @constructor
 */
function DatabaseError( code, message ) {
  Error.captureStackTrace( this, DatabaseError )
  this.name = DatabaseError.name
  this.code = code
  this.message = message
}

util.inherits( DatabaseError, Error )

module.exports = DatabaseError
