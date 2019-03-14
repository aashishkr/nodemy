// Your Javascript Code Goes Here

function greet(){
    console.log('hi!');
}

greet();

function logGreeting(fn){
    fn();
}

logGreeting(greet);

var  greetTony = function(){
    console.log('Hi Tony!');
}

greetTony();

logGreeting(greetTony);


logGreeting(function() {
    console.log('Hello Tony!')
});

