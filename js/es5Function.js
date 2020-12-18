// 1. set of statements
// 2. grouped together
// 3. we give that group a name
// 4. it can accept the values we provide
// 5. returns or performs a task on the give/not given values
// console.log({})

function sumSub(a,b) {
    var sum = a+b;
    var sub = a-b;

    // return "sum sub";

    // return [sum,sub];

    return {
        addition: sum,
        substraction: sub,
    };
}

var results = sumSub(10,5);
console.log(
    results
);


var tv = {
    isOn: false
}

console.log(JSON.stringify(tv));

function turnOn(device) {
    device.isOn = true;

    //no electricity
    device = {
        isOn: false
    };
}

turnOn(tv);

console.log(tv)


function sum(a,b) {
    console.log(a,b)
    return a+b;
}
// console.log(sum(2,3));

function sub(a,b) {
    return a-b;
}

function taskWrapper(c,a,b) {
    console.log(c)
    return c(a,b);
}

console.log(taskWrapper(sum,12,5));


var cars = ['volvo', 'innova', 'bmw', 'bmw', 'bmw'];
console.log(cars);

function filterTask(item) {
    console.log(item);
    return item === 'bmw';
}

console.log(cars.filter(filterTask));