var Emmiter = require('events');

var eventsConfig = require('./config').events;
var emtr = new Emmiter();


emtr.on(eventsConfig.GREET, function(){
    console.log('someone, somewhere said Hello!');
});

emtr.on(eventsConfig.GREET, function(){
    console.log('someone greeted!');
});

console.log('hello');

emtr.emit(eventsConfig.GREET);



