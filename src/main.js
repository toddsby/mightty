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
  if ( type of value == 'undefined' || value === '' || value === null || value !== value ) return true;
  else return false;
}

export { isNil };