'use strict';
// Assignment
var year = 2020;
console.log('Assignment =', year);

var x = 5;
var y = 10;

x += y; // x = x + y;
console.log('x += y', x);

x -= y; // x = x - y;
console.log('x -= y', x);

x *= y; // x = x * y;
console.log('x *= y', x);

x /= y; // x = x / y;
console.log('x /= y', x);

x %= y; // x = x % y;
console.log('x %= y', x);

x **= y; // x = x ** y;
console.log('x **= y', x);


//Arithmetic Operators
// Addition
var sum = 5 + 6;
console.log('sum',sum);
// Substraction
var sub = 5 - 6;
console.log('sub',sub);
// Multiplication
var mul = 5 * 6;
console.log('mul',mul);
// Division  "/" is for getting the quotent
var div = 5/6;
console.log('div',div);
// Modulus "%"
var mod = 8%6;
console.log('mod',mod);
// Exponentiation **
var expo = 2**4;
console.log('expo',expo);

//Increment
var preinc = ++year;
console.log('year',year);
var postinc = year++;
console.log('preinc',preinc);
console.log('postinc',postinc);
console.log('year',year);

//Decrement
var predec = --year;
console.log('year',year);
var postdec = year--;
console.log('predec',predec);
console.log('postdec',postdec);
console.log('year',year);


// Comparison Operators
var age = '18';
console.log(typeof age)
console.log(typeof 18)
console.log('== ',18 == age);
console.log('=== ',18 === age);
console.log('!= ',18 != age);
console.log('!== ',18 !== age);
console.log('>= ',18 >= age);
console.log('<= ',18 <= age);
console.log(
    age <= 18 ? 'yes' : 'no'
);
if(age < 18) {
    console.log('YOU ARE NOT ALLOWED');
} else if(age === 18 ) {
    console.log('JUST ALLOWED ===')
} else if(age == 18 ) {
    console.log('JUST ALLOWED ==')
} else {
    console.log('YOU ARE ALLOWED');
}

// Logical operators
document.write(
    (age == 18 && year == 2020) ? "you are 18 in 2020" : "not in 2020\n"
)
document.write(
    (age === 18 || year == 2020) ? "you are 18 in 2020\n" : "not in 2020\n"
)
document.write(
    (age !== 18) ? "you are not 18 in 2020\n" : "in 2020\n"
)

// if(age == 18 && year == 2020) {

// } else {

// }