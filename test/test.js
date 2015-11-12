/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	product = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-cartesian-product', function tests() {

	it( 'should export a function', function test() {
		expect( product ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided an input argument which is not an array', function test() {
		var values,
			i;

		values = [
			'5',
			5,
			null,
			NaN,
			undefined,
			true,
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				product( [1,2], value, [3,4] );
			};
		}
	});

	it( 'should throw an error if provided a single input argument which is not an array of arrays', function test() {
		var values,
			i;

		values = [
			'5',
			5,
			null,
			NaN,
			undefined,
			true,
			{},
			[],
			[[],1],
			[[],[],{}],
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				product( value );
			};
		}
	});

	it( 'should throw an error if not provided two or more arrays (array of arrays)', function test() {
		expect( badValue ).to.throw( Error );
		function badValue() {
			product( [[]] );
		}
	});

	it( 'should return an empty set if any input array is empty', function test() {
		var sets;

		sets = product( [], [null,'a'] );
		assert.deepEqual( sets, [] );

		sets = product( [1,2], [3,4], [] );
		assert.deepEqual( sets, [] );

		sets = product( [[1,2],[],[3,4]] );
		assert.deepEqual( sets, [] );
	});

	it( 'should return the Cartesian product (separate input arrays)', function test() {
		var expected,
			sets;

		sets = product( [1,2],[3,4],[5,6] );

		expected = [
			[1,3,5],
			[1,3,6],
			[1,4,5],
			[1,4,6],
			[2,3,5],
			[2,3,6],
			[2,4,5],
			[2,4,6]
		];

		assert.deepEqual( sets, expected );
	});

	it( 'should return the Cartesian product (array of arrays)', function test() {
		var expected,
			sets;

		sets = product( [[1,2],['a'],[5,6]] );

		expected = [
			[1,'a',5],
			[1,'a',6],
			[2,'a',5],
			[2,'a',6]
		];

		assert.deepEqual( sets, expected );
	});

});
