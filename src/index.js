// 1. Difference b/w ECMA Script and JavaScript.
// ECMAScript2015 || ES6

// 2. If Babel converts ES6 to ES5, then why we study ES6, why ES5 is not enough.


// 3. Importing Packages and using Babel is not quite clear.
// npm install --save lodash axios
// npm i -S lodash axios
// a) which we install as a dependency from npm
const superheroes = require('superheroes');
console.log(superheroes.random())
// b) which we make locally
import helper from './helper';
console.log(helper.sum(5,9))

// 4. Running JS code in terminal using 'npm start' is not clear."

// 5. eS6, destructure not clear. And mapping not clear
const info = {
    firstName: "Manish",
    lastName: "Mahant",
    age: "28",
    gender: "Male",
    employed: true
}

const colors = [ 'red', 'blue', 'green', 'white', 'pink', 'aqua' ]

const [ RED, BLUE, ...REMAINING ] = colors;
console.log(RED);
console.log(BLUE);
console.log(REMAINING);
console.log(colors);

const { firstName:fN, gender, ...remaining } = info;

console.log(fN);
console.log(gender);
console.log(remaining);
console.log(info);

const infoA = {...info};
infoA.firstName = "M";
//{...info}
console.log(info);

const colorCaps = colors.map((color,index)=>{
    console.log(index,color)
    return `${color} is at number ${index+1}`
});
console.log(colorCaps)



const mMap = function(array,cb) {
    let arr = [];
    for (let index = 0; index < array.length; index++) {
        arr.push(cb(array[index],index));
    }
    return arr;
}

const colorMCaps = mMap(colors,(color,index)=>{
    return `${color} is at number ${index+1} by mMap`;
})
console.log(colorMCaps)