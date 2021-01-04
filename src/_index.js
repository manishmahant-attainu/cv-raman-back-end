//ES5 inheritance (prototypal inheritance)
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function() {
    console.log(`${this.name} is walking.`);
}

var bob = new Person('Bob');

console.log(bob);

function Programmer(name, programmingLanguage) {
    this.name = name;
    this.programmingLanguage = programmingLanguage;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
Programmer.prototype.writeCode = function () {
    console.log(`${this.name} is coding.`);
}


var manish = new Programmer('Manish','JavaScript');

console.log(manish);
console.log(manish.walk());
console.log(manish.writeCode());


// const s = {
//     a: '1',
//     b: '2',
//     c: [1,2]
// }
// console.log(s);

// const ss = Object.assign({},s);
// ss.d = "3"
// console.log(ss);
// const abc = {};
// abc.a = "1";
// abc.a = "2";


// console.log(abc)