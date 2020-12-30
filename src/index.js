//How ES6 function is different from ES5 function
/**
 * 1. Syntax
 * var add = function (a,b) {
 *  return a+b;
 * }
 * const add = (a,b) => (a+b);
 * 
 * 2. Argument Binding
 * let myFunc = {
    showArgs() {
        console.log(arguments);
    }
}
myFunc.showArgs(1,2,3,4,"Name");
Here argument binding dosen't works
let myFunc2 = {
    showArgs: () => {
        console.log(arguments);
    }
}
myFunc2.showArgs(1,2,3,4,"Name");
 */

// Use of "this" keyword
// Arrow function does not have there own "this"
// Arrow function if has "this" written inside, then it will always bound to the value of "this"
// in the closest non-arrow parent function


// var abcd; //Declasration;

abcd = 20; //Initialisation

var c, abcd, aa;  //hoisting

// c =20;
// abcd = 20;
// a =10;

let aa = 10;
const bb = 20;

let person = {
    name: "Manish",
    thisIsArrow: () => {
        console.log(`My name is ${this.name}`); //it will work
    },
    thisIsReguar() {
        console.log(`My name is ${this.name}`);  //it will undefined
    }
};
console.log(person.thisIsReguar());

function abc() {
    console.log('checking this for object',this);
    this.day = "wed";
    this.nextDay = function () {
        console.log(`day after ${this.day}`);
    }
}

const ab = new abc();

var aaa = function () {
    console.log('dfdfgdg');
}
                            //"this"
// ab.nextDay = ab.nextDay.bind(ab,aaa);

// ab.nextDay.call(ab,aaa);
// ab.nextDay.apply(ab,[aaa]);
const a = ab.nextDay;


console.log(a());

//This dosen't works in arrow function
const sum = (a,b) => a+b;
const s = new sum();
