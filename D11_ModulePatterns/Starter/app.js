var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2');
greet2.greet();

greet2.greeting = 'changed Hello!';

var greet2b = require('./greet2');
greet2b.greet();

var greet3 = require('./greet3').greet;
greet3();

var greet4 = require('./greet4');
var greet4a = new greet4();
greet4a.greet();
greet4a.greeting = 'changed hello!!!'
var greet4b = new greet4();
greet4b.greet();
greet4a.greet();

var greet5 = require('./greet5');
greet5.greet();
