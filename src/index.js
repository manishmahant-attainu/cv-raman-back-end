// var abc;
// console.log(abc);
// abc = 10;

//In let and const there will be no variable hoisting (tempral dead zone)
// console.log(a)
// console.log(b)
// const a = "1";
// let b = "2";


// we can declare variable with help of "var" several times
// var abc = 10;
// var abc = 12;
// console.log(abc);

// We cannot redcalre the variables with "let" or "const"
// const b = 1;
// const b = 2;
// console.log(b);

// let a = 1;
// let a = 2;
// console.log(a);

// "let" allows you to reassign the value but "const" does not
// const b = 2;
// b = 4;
// let a = 2;
// a = 4;

// console.log(a);

//Scoping Rules

// var is of not block scope
// "let" and "const" are of block scope
// function run() {
//     var abc = "abc";
//     const bcd = "bcd";
//     console.log(abc,bcd);
//     {
//         const bcd = "bcd v 2"
//         let cde = "cde";
//         console.log(cde);
//         console.log(bcd);
//         var abc = "abc v2";
//     }
//     console.log(bcd);
//     console.log(abc);
// }

// run();

// Scope explained by removing closure
// var funcs = [];
// for(let i=0; i < 5; i++) {
//     let c = i*2; // i=4, 8
//     funcs.push(function() {
//         return console.log(c);
//     });
// }

// console.log(i);
// console.log(funcs);

// funcs.forEach(function(value) {
//     value();
// });

// for(let i=0; i<=5; i++) {
//     console.log(i);
// }

// Destructuring
// it can happen only in your arrays and objects;
const person1 = {};
// This will not work
//person1 = { name: 'Manish' };
//But this will
person1.name = "Manish";

// let student = {};
// student = { name: 'Manish' };
// console.log(student);

person1.gender = "male";
console.log(person1);

const person2 = {
    name: "Django",
    gender: "unknown"
}
const person3 = {
    name: "anyname",
    gender: "anygender"
}

//decalre  define property names as per the value type     which variable you want ti destructure 
// const      { gender, name }                             =  person1;

// const { name: anyVariableName, gender: ornythingyoulike } = person2;
// const { name: anyName, gender: anyGender } = person3;

// console.log('name   ===>', name);
// console.log('gender ===>', gender);

// console.log(' anyVariableName name    ===>', anyVariableName);
// console.log(' ornythingyoulike gender ===>', ornythingyoulike);

// console.log(' person3 name    ===>', anyName);
// console.log(' person3 gender ===>', anyGender);

const person = {
    name: "AnyName",
    age: 38,
    gender: "AnyGender",
    eyeSight: "ok",
    legs: 2,
    hands: 1
}
// "..." while desctructuring are called "rest operators"
let { eyeSight, ...anyVariableName } = person;

console.log(eyeSight);
console.log(anyVariableName);

const numbers = [1,2,3,4,5,6,7,8];

const [ a1,a2,a3, ...anyvarname ] = numbers;

console.log(anyvarname);
