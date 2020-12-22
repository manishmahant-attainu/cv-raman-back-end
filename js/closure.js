// Functional Programming
// We make independent functions which are only dependent on the parameters passed.
// If you choose to work on OOPS then there is no use of closure, both of them are separate entities
// Closure is simple a function inside a function.

var divisor = 5;

//Function will be called as impure function
function divide(dividend) {
    return dividend/divisor;
}

console.log(divide(10));

function update() {
    divisor = 10;
}

update();

console.log(divide(100))


// Pure function
function pureDivide(divid,divi) {
    return divid/divi;
}

console.log(pureDivide(100,divisor));
var funcs = [];
for(var i=0; i < 5; i++) {
    (function() {
        var c = i*2; // i=4, 8
        funcs.push(function() {
            return console.log(c);
        });
    })()
}

console.log(funcs);

funcs.forEach(function(value) {
    value();
});

//factory function
function jobTitle(title) {
    return function(prefix) {
        return prefix+' '+title;
    }
}

var sales = jobTitle('Salesman');
// console.log(sales('Productive'))
// console.log(sales('Good'))
// console.log(sales('Top'))
// console.log(sales('Useless'))

var managers = jobTitle('Manager');
// console.log(managers('Senior'))
// console.log(managers('Regional'))

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
}
  
var add5 = makeAdder(5);
var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12



var salarayOperation = function (salary, changes) {
    function chnageBy(amount) {
        salary += amount;
    }
    return {
        raise: function() {
            chnageBy(changes);
        },
        lower: function () {
            chnageBy(-changes);
        },
        currentSalary: function() {
            return salary;
        }
    }
};

var manish = salarayOperation(1000,100);
console.log(manish);
var shubham = salarayOperation(10000,1000);
var amit = salarayOperation(100000,10000);

console.log('manish',manish.currentSalary())
console.log('shubham',shubham.currentSalary())
console.log('amit',amit.lower())
console.log('amit',amit.currentSalary())