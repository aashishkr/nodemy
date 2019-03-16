var EventEmitter  = require('events');
var util  = require('util');


function Greeter() {
    this.greeting  = 'Hello World!';
}

util.inherits(Greeter, EventEmitter);


Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ' from '+ data);
    this.emit('greet', data);
}

var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log('Someone Greeted! by %s',data)
})

greeter1.greet('Tony');