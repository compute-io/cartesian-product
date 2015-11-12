Cartesian Product
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product).

For sets `A` and `B`, the [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) `AxB` is the set of all ordered pairs `(a,b)` where `a` is an element of `A` and `b` is an element of `B`.

<div class="equation" align="center" data-raw-text="" data-equation="eq:cartesian_product">
	<img src="https://cdn.rawgit.com/compute-io/cartesian-product/b18fd81ceb2f312662e396315f00ae9f22640ff4/docs/img/eqn.svg" alt="Equation for a Cartesian product.">
	<br>
</div>

More generally, a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of `n` sets is the set of all ordered tuples `(a,b,c,...)`.


## Installation

``` bash
$ npm install compute-cartesian-product
```


## Usage

``` javascript
var product = require( 'compute-cartesian-product' );
```

#### product( ...x )

Computes a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product). The `function` accepts either an `array` of `arrays` or multiple `arrays`.

``` javascript
var sets = product( [1,2], [3,4], [5,6] );
/*
	[
		[1,3,5],
		[1,3,6],
		[1,4,5],
		[1,4,6],
		[2,3,5],
		[2,3,6],
		[2,4,5],
		[2,4,6]
	]
*/

var sets = product( [[1,2],['a'],[5,6]] );
/*
	[
		[1,'a',5],
		[1,'a',6],
		[2,'a',5],
		[2,'a',6]
	]
*/
```


## Examples

``` javascript
var product = require( 'compute-cartesian-product' );

var sets, a, b, c;

a = ['It','That','The dog'];
b = ['is','was','has never been','will always be'];
c = ['nice','fuzzy','playful','mean','silly'];

sets = product( a, b, c );
console.dir( sets );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](http://compute-io.com) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-cartesian-product.svg
[npm-url]: https://npmjs.org/package/compute-cartesian-product

[travis-image]: http://img.shields.io/travis/compute-io/cartesian-product/master.svg
[travis-url]: https://travis-ci.org/compute-io/cartesian-product

[codecov-image]: https://img.shields.io/codecov/c/github/compute-io/cartesian-product/master.svg
[codecov-url]: https://codecov.io/github/compute-io/cartesian-product?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/cartesian-product.svg
[dependencies-url]: https://david-dm.org/compute-io/cartesian-product

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/cartesian-product.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/cartesian-product

[github-issues-image]: http://img.shields.io/github/issues/compute-io/cartesian-product.svg
[github-issues-url]: https://github.com/compute-io/cartesian-product/issues
