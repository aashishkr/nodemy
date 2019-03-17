var greet  = function(callback){
    console.log('Hello!');
    callback('john');
}

greet(function(data){
    console.log('callback invoked');
    console.log(data);
});