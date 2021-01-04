//	ES6 Classes
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking.`);
        return this;
    }
}

class Programmer extends Person {
    constructor(name,programmingLanguage) {
        super(name);
        this.programmingLanguage = programmingLanguage;
    }

    writeCode() {
        console.log(`${this.name} is coding.`);
        return  this;
    }
}

class Company extends Programmer {
    constructor(name,programmingLanguage,department) {
        super(name,programmingLanguage);
        this.department = department;
    }
    getDepartment() {
        console.log(`${this.name} is in ${this.department} department.`);
        return  this;
    }
}

const amit = new Company('Amit','JavaScript','FullStack');
console.log(amit.walk().getDepartment().writeCode());


//	ES6 Getters and Setters
console.log('ES6 Getters and Setters');
class Human {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const om = new Human('Om');

om.name = "ES6";

console.log(om._name);
console.log(om.name);

const a = {name: "ES6"};

console.log(`hello this is ${a}`);