'use strict';

/**
 * Mightty
 * Javascript Utility Library ES2015
 *
 * @author Drew Toddsby <toddsby@gmail.com>
 * @version 0.1.2
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

/**
 * isInt is object of type number
 * @param {Object} [obj] value to be checked
 *  
 * @return {Boolean}
 */

const isInt = ( obj ) => {
  if ( isNaN( obj ) || typeof obj !== 'number' ) return false;
  else return true;
}

/**
 * isArray is object of type array
 * @param {Object} [obj] value to be checked
 *  
 * @return {Boolean}
 */

const isArr = ( obj ) => {
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

const isStrongPassword = ( str, { minChars=4, excludedWords=[] } = {} ) => {
  minChars = parseInt(minChars);
  if ( !isInt ( minChars ) ) throw Error('minChars needs to be a integer!');
  if ( !isArr ( excludedWords ) ) throw Error('excludedWords needs to be an array!');
  let strongPassword = '(?=[!-~]*([0-9!-/:-@[-`{-~]))(?=[!-~]*[a-zA-Z])[!-~]{' + minChars + ',}';
  let passwordStrength = new RegExp ( strongPassword, 'g' );
  let excluded = '';
  for (let i = 0; i < excludedWords.length; i++) {
    if ( excludedWords.length < 1 ) return;
    excluded += excludedWords[i];
    if ( i !== excludedWords.length - 1 ) excluded += '|';
  }
  let containsExcluded = new RegExp ( excluded, 'i' );
  if ( passwordStrength.test ( str ) ) return ( excludedWords.length > 0 ) ? !containsExcluded.test ( str ) : true;
  else return false;
}

export { isNil,
         mighttyConsole,
         isInt,
         isArr,
         isStrongPassword
       };