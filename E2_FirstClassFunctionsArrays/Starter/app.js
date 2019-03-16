var obj = {
    greet : 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


a = [];

a.push(function(){
    console.log('Hello World1!');
});

a.push(function(){
    console.log('Hello World2!');
});

a.push(function(){
    console.log('Hello World3!');
});

a.forEach(function(item) {
    item();    
});