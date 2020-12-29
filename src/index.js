// Template literals
const a = 10;
const b = 15;
const c = 15;
const name = "Manish";
const personArr = [
    "Manish", "Mahant", 2
]

const personObj = {
    name: "Manish"
}

function sum() {
    return a+b;
}

            //sum of a variable and  a variable is an expression
const str = `sum of ${c} and ${b} is ${sum()}`;

console.log(str);

// MultiLines
function greetHello(name) {
    // return 'Hello, '+'\n'+ name
    return `Hello,
Manish`;
}

console.log(greetHello('Manish'));
//       ${}                        ${}
// Hello NAME. How is the wether at LOCATION.


//Tag Functions in literals
function covertToUpperTagfn(literal,...values) {
    console.log('static string',literal);
    console.log('dynamic values', values);
    let output = "";
    for(let i = 0; i < literal.length; i++){
        output += literal[i];
        if(i < values.length) {
            output += values[i];
        }
    }
    return output.toUpperCase();
}
let firstName = "Manish";
let lastName = "Mahant";
let company = "Company";
let location = "Earth";
let result = covertToUpperTagfn `Hello, ${firstName} ${lastName} this is a ${company} on ${location}`;
console.log(result);

// literal[0] + values[0] +literal[1] + values[1]

// static string [ 'Hello, ', ' ', ' this is a ', ' on ', '' ]
// dynamic values [ 'Manish', 'Mahant', 'Company', 'Earth' ]


// New String methods (includes, repeat, startsWith, endsWith)

const strr = "this is cv raman batch"+'\n';
console.log(strr.includes("raman",11));

console.log(strr.repeat(2+2))

console.log(strr.startsWith('this'));

console.log(strr.split(''));

console.log(strr.endsWith('this'));


// Arrow functions || Fat Arrow

//ES5
function multiply(p1,p2) {
    return p1*p2;
}
//ES5
var multipl = function(p1,p2) {
    return p1*p2;
}

//ES6
const multip = (p1,p2) => {
    p1 = p1**2;
    p2 = p2**2;
    return p1*p2;
};
console.log((multip(3,9)));

const square = p => p**2;
console.log(square(9));

const conf = n => ({name:n});

console.log(conf("Manish"));