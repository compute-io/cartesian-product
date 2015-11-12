'use strict';

var product = require( './../lib' );

var sets, a, b, c;

a = ['It','That','The dog'];
b = ['is','was','has never been','will always be'];
c = ['nice','fuzzy','playful','mean','silly'];

sets = product( a, b, c );
console.dir( sets );
