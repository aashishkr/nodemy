var b = 2;

var change = function(a){
    a=a*3;
};

console.log(b);

change(b);

console.log(b);
console.log(change(b));

function changeObj(c){
    c.prop1 = function() {};
    c.prop2 = {};
};

var d = {};
console.log(d);
changeObj(d);
console.log(d);