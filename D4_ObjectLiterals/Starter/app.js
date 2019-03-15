// Your Javascript Code Goes Here

var person = {
    'firstName' : 'Aashish',
    'lastName' : 'Kumar',
     'greet'  : function(){
        console.log('Hi '+this.firstName + ' ' + this.lastName + '!');
    }
};



person.greet();

console.log(person['firstName']);

person['greet']();