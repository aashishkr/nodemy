var files = require('fs');


var greet = files.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

var greet2 = files.readFile(__dirname+'/greet.txt', 'utf8', function(error, data) {
    if(error !== null){
        console.log('Read failed of ' + this.__dirname);
    }
    else{
        console.log('read data : '+ data);
    }
});

console.log('File read started');