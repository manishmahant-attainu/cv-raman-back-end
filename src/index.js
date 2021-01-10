// Closures ? Where to use ? Advantages ?
// Hoisting ? How actually hoisting works for var, let and const ?
// Pure Functions?
// "this" keyword (referencing)
// Callbacks
// call() bind() apply()?



// let person = {
//     name: "Manish",
//     thisIsArrow: () => {
//         console.log(`My name is ${this.name}`); //it will work
//     },
//     thisIsReguar() {
//         console.log(`My name is ${this.name}`);  //it will undefined
//     }
// };
// console.log(person.thisIsReguar());

// var funcs = [];
// for(var i=0; i < 5; i++) {
//     (function() {
//         var c = i*2; // i=4, 8
//         funcs.push(function() {
//             return console.log(c);
//         });
//     })()
// }

// console.log(funcs);

//Closures

//1. What are closures?
//Lexical Scoping in JS

var a = 2;

// function print() {
//     var a = 22;
//     console.log(a);
// }
// print();

// const obj = {
//     key:a
// }
// console.log(obj)

// const arr = [a];
// console.log(arr)

function outer() {
    var a = 20;
    function inner() {
        console.log(a);
    }
    return inner;
}

var a = 21;

// console.log(
//     outer()()
// );

let counter = 0;
// function incrementCounter(){
//     counter++;
// }
// incrementCounter();
// console.log(counter);
// counter++;
// console.log(counter);
function incrementCounter() {
    let counter = 0;
    return function incrementing() {
        counter++;
        return counter;
    }
}

const counter1 = incrementCounter();
// console.log(counter1());
const counter2 = incrementCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter);


function multiplyFactory() {
    const mutiplications = {};
    return function multiply(p1,p2) {
        console.log(mutiplications);
        if(!mutiplications[`${p1}${p2}`]) {
            mutiplications[`${p1}${p2}`] = p1*p2;
        }
        return mutiplications[`${p1}${p2}`];
    }
}
const multiplication = multiplyFactory();
// console.log(multiplication(3,3));
// console.log(multiplication(3,3));
// console.log(multiplication(3,9));
// console.log(multiplication(3,9));


// Hoisting ? How actually hoisting works for var, let and const ?
// console.log(a);
// var a = "2";


// var a;
// console.log(a)
// a = "2";

// Pure Functions?
// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(5,6))

//"this" keyword (referencing)
//"this" is only available in side an object;

const info = {
    name: "Manish",
    getName: function () {
        return this.name;
    }
};
const b = info.getName;
// console.log(
//     info.getName()
// );
// console.log(b());

// Q. When to use the "new" keyword ?
// when you want to use your function as a class
// when you want to make object from a function
// whne you want to make an instance of an object
function UserModel(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const person1 = new UserModel("Manish","Mahant");
console.log(person1.firstName);

console.log(this);