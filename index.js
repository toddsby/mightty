'use strict';

/**
 * Mightty
 * Javascript Helper Library
 *
 * @author Drew Toddsby <toddsby@gmail.com>
 * @version 0.1.0
 */


/**
 * cUN: Check for undefined, null, or empty
 * @param {Object} value to be checked
 *  
 * @return {Boolean}
 */

export const cUN = ( value ) => {
  if ( type of value == 'undefined' || value === '' || value === null || value !== value ) return true;
  else return false;
}