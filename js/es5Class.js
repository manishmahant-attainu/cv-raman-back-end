//ES5 || ECMA Script 5 || Common JS || Vanilla JS
//European Computer Manufacturers Association 
var a = 4;
var b = 5;

function sum(a,b) {
    return a+b;
}

console.log(sum(a,b));

//Person
//name
//age
//heigth
//weight
//gender


//In JS you can call a function as methods also
//In js there are 2 ways of using a function/method
//1. is to simply call the function
//2. is to make an object of that function

//We need to decide first before making any function, about its use

//If i decide to call the function simply just by name. Then it must return something or it must change something.

//If I decide to make an object out of a function that means I am TREATING that function
// as a Class, because at the end what we get is an Object with some properties which are
// accesible


function Person(name,age,height,weight,gender) {
    
    //self as in python
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    // this.getNames = function () {
    //     return names+ ' Perosn';
    // }
}

Person.prototype.getNames = function () {
    return names;
}

var names = "Person";

var person1 = new Person('Sam',28,'6\'',75,'Male');
console.log(person1);
console.log(person1.getNames());


console.log({
    name: "Sam",
    age: 28,
    height: "6'",
    weight: 75,
    gender: "Male"
});

function UserModel() {
    name = "UserModel";
    this.getName = function() {
        return name;
    }

}

var user = new UserModel(); //Making Object here
//object has key:value pairs

// console.log({
//     getName: function() {
//         return 'name';
//     }
// })

// console.log(user)