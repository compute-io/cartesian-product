'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isArrayArray = require( 'validate.io-array-array' );


// CARTESIAN PRODUCT //

/**
* FUNCTION: cartesianProduct( ...x )
*	Computes the Cartesian product.
*
* @param {Array[]|...Array} x - input array(s)
* @returns {Array[]} Cartesian product
*/
function cartesianProduct() {
	var tuple,
		sets,
		lens,
		out,
		len,
		N,
		v,
		i, j, k;

	len = arguments.length;
	if ( len === 1 ) {
		sets = arguments[ 0 ];
		if ( !isArrayArray( sets ) ) {
			throw new TypeError( 'invalid input argument. A single input argument must be an array of arrays. Value: `' + sets + '`.' );
		}
		len = sets.length;
		if ( len < 2 ) {
			throw new Error( 'invalid input argument. Input argument must consist of two or more arrays. Value: `' + sets + '`.' );
		}
	} else {
		sets = new Array( len );
		for ( i = 0; i < len; i++ ) {
			sets[ i ] = arguments[ i ];
			if ( !isArray( sets[ i ] ) ) {
				throw new TypeError( 'invalid input argument. All input arguments must be arrays. Value: `' + sets[ i ] + '`.' );
			}
		}
	}
	out = [];

	// If any set (array) is empty, the Cartesian product is empty...
	lens = new Array( len );
	for ( i = 0; i < len; i++ ) {
		lens[ i ] = sets[ i ].length;
		if ( lens[ i ] === 0 ) {
			return out;
		}
	}
	/**
	* Basic idea is similar to number counting, except the base for each digit can vary.
	*
	* Algorithm:
	*	1. determine the bases for each "digit"; i.e., the number of elements in each set.
	*	2. iterate through the ones place.
	*	3. once all ones digits have been exhausted, carry a 1 to the tens digit.
	*	4. repeat (2-3).
	*	5. continue carrying to the next digit until all digits have been exhausted (no more carries).
	*	6. return.
	*
	* Note: the implementation below uses an absolute index `i` and modulo arithmetic to "carry" from one digit to the next.
	*/
	N = len - 1;
	i = 0;
	while ( true ) {
		tuple = new Array( len );
		j = i;
		for ( k = N; k >= 0; k-- ) {
			// Use modulo arithmetic to determine an index and place the corresponding value in a tuple:
			v = sets[ k ][ j%lens[ k ] ];
			tuple[ k ] = v;

			// Determine how many indices to carry to the next "digit":
			j = ( j / lens[k] ) | 0; // cast to integer
		}
		// Once we start carrying from the left-most "digit", we are done...
		if ( j > 0 ) {
			break;
		}
		out.push( tuple );
		i += 1;
	}
	return out;
} // end FUNCTION cartesianProduct()


// EXPORTS //

module.exports = cartesianProduct;
