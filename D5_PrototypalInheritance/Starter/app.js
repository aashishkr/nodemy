// Your Javascript Code Goes Here


var person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

person.prototype.greet = function(){
    console.log('Hi ' + this.firstName + ' ' + this.lastName + '!');
};

var johnDoe = new person('john','doe');


johnDoe.greet();
