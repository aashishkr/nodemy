var person = {
    firstName : '',
    lastName : '',
    fullName : function(){
        return (this.firstName + ' ' + this.lastName);
    }
};

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';


var jane = Object.create(person);
jane.firstName = 'Jane';
jane.lastName = 'Doe';


console.log(john.fullName());
console.log(jane.fullName());