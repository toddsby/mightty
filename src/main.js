'use strict';

/**
 * Mightty
 * Javascript Utility Library ES2015
 *
 * @author Drew Toddsby <toddsby@gmail.com>
 * @version 0.1.0
 */


/**
 * isNil: is value undefined, null, or empty
 * @param {Object} value to be checked
 *  
 * @return {Boolean}
 */

const isNil = ( value ) => {
  if ( typeof value == 'undefined' || value === '' || value === null || value !== value ) return true;
  else return false;
}

/**
 * mighttyConsole: pass mulitple arguments to console[log,warn,error]
 *  
 * console log made mightty
 */

class mighttyConsole {

    static log () {
        let args = Array.prototype.slice.call(arguments);
        console.log.apply(console,args);
    }
    static warn () {
        let args = Array.prototype.slice.call(arguments);
        console.warn.apply(console,args);
    }
    static error () {
        let args = Array.prototype.slice.call(arguments);
        console.error.apply(console,args);
    }

}

export { isNil,
         mighttyConsole
       };