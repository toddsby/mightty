/**
 * Mightty 
 * Javascript Utility Library UMD
 *
 * @author Drew Toddsby <toddsby@gmail.com>
 * @version 0.1.0
 * 
 * @param  {object}   root    defaults to window
 * @param  {function} factory function literal
 * 
 * @return {object}   exports function expression      
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.mightty = factory();
  }
}(typeof window !== 'undefined' ? window : undefined,function () {

  'use strict';

  var exports = {};

  /**
   * isNil: is value undefined, null, or empty
   * @param {Object} value to be checked
   *  
   * @return {Boolean}
   */
  exports.isNil = function ( value ) {
    if ( typeof value == 'undefined' || value === '' || value === null || value !== value ) return true;
    else return false;
  }

  /**
   * mighttyConsole: pass mulitple arguments to console[log,warn,error]
   *  
   * console log made mightty
   */

  exports.mighttyConsole = (function () {
    return {
      log: function () {
          var args = Array.prototype.slice.call(arguments);
          console.log.apply(console,args);
      },
      warn: function () {
          var args = Array.prototype.slice.call(arguments);
          console.warn.apply(console,args);
      },
      error: function () {
          var args = Array.prototype.slice.call(arguments);
          console.error.apply(console,args);
      }
    }
  }());

  /**
   * isInt is object of type number
   * @param {Object} [obj] value to be checked
   *  
   * @return {Boolean}
   */

  exports.isInt = function ( obj ) {
    if ( isNaN( obj ) || typeof obj !== 'number' ) return false;
    else return true;
  }

  /**
   * isArray is object of type array
   * @param {Object} [obj] value to be checked
   *  
   * @return {Boolean}
   */

  exports.isArr = function ( obj ) {
    return Array.isArray ( obj );
  }

  /**
   * isStrongPassword checks a string for strong password
   * @param {String} [str] string to be checked
   * @param {Object} options
   *
   * must contain at least (1) A-Za-z and (1) 0-9 or special character (#$.@)
   * @defaults {Object} options
   * minChars:4
   * exludedWords:null
   *
   * example: isStrongPassword ( 'mypassword1234', { minChars=8, excludedWords=['password'] } );
   * // returns false
   *  
   * @return {Boolean}
   */

  exports.isStrongPassword = function ( str, options ) {
    var minChars = options.minChars || 4,
    exludedWords = options.exludedWords || [];
    minChars = parseInt(minChars);
    if ( !isInt ( minChars ) ) throw Error('minChars needs to be a integer!');
    if ( !isArr ( excludedWords ) ) throw Error('excludedWords needs to be an array!');
    var strongPassword = '(?=[!-~]*([0-9!-/:-@[-`{-~]))(?=[!-~]*[a-zA-Z])[!-~]{' + minChars + ',}';
    var passwordStrength = new RegExp ( strongPassword, 'g' );
    var excluded = '';
    for (var i = 0; i < excludedWords.length; i++) {
      if ( excludedWords.length < 1 ) return;
      excluded += excludedWords[i];
      if ( i !== excludedWords.length - 1 ) excluded += '|';
    }
    var containsExcluded = new RegExp ( excluded, 'i' );
    if ( passwordStrength.test ( str ) ) return ( excludedWords.length > 0 ) ? !containsExcluded.test ( str ) : true;
    else return false;
  }

  return exports;

}));