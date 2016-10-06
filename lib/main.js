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

  return exports;

}));