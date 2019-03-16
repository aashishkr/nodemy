// Your Javascript Code Goes Here
var firstName = 'Jane';

(function(lastName){
    var firstName = 'John';
    console.log(firstName + ' ' + lastName );
}('doe'));


console.log(firstName);