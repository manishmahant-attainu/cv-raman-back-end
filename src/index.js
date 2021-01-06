import 'babel-polyfill';

// The data type symbol is a primitive data type. 
// The Symbol() function returns a value of type symbol, has static properties
// that expose several members of built-in objects, has static methods that expose the
// global symbol registry, and resembles a built-in object class,
// but is incomplete as a constructor because it does not support the syntax "new Symbol()".  
// Every symbol value returned from Symbol() is unique`

// Symbol.iterator symbol specifies the default iterator for an object. Used by for...of.

// 1. iterable  /on which we can perform iteration object/array
// 2. iteration /process of accessing every element inside and iterable
// 3. iterator  for/ for of/for in/map 

// Iterators with generators

// for(let i=0;i<10;i++) {
//     console.log(i); //0
// }

const iterator = {
    step: 0,
    next: function() {
        this.step++;
        switch (this.step) {
            case 1:
                return { value: this.step, done: 'false'}
            case 2:
                return { value: this.step, done: 'false'}
            case 3:
                return { value: this.step, done: 'false'}
            default:
                return { value: undefined, done: 'true'}
        }
    }
}

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//Closure {makingh a contained environment}
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
// result = it.next();
// console.log(result);
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log(result);
// console.log(it.next());

// Generators (functions)
function* makeRangeIterators(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i; //yield keyword in generator functions only returns { value: '', done: false|true }
    }
    // return iterationCount;
}
const its = makeRangeIterators(1, 10, 2);

// console.log(its.next());
// console.log(its.next());
// console.log(its.next());
// console.log(its.next());
// console.log(its.next());
// console.log(its.next());
// console.log(its.next());
// console.log(its.next());

function* getValue() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
const a = getValue();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
