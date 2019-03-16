var Emmiter = require('./emmiter');

var emtr = new Emmiter();


emtr.on('greet', function(){
    console.log('someone, somewhere said Hello!');
});

emtr.on('greet', function(){
    console.log('someone greeted!');
});

console.log('hello');

emtr.emmit('greet');



