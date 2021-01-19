import 'isomorphic-fetch';

// What is a callback? Its a function passed as an argument, which may or may not be called.
// Why callback is used? For achievieing async behaviour.
// Callback hell? callbacks inside callbacks
function c3() {

}

function c2(c) {
    c()
}

function c1(c) {
    c(c3);
}

function m1(c) {
    c(c2);
}

m1(c1);

// Promises (ES6)
// 3 states
//  1. Pending
//  2. resolved
//  3. rejected

// const p = new Promise(function(resolve,reject){
//     // console.log(typeof resolve)
//     setTimeout(() => {
//         reject('manish');    
//     }, 6000);
//     setTimeout(() => {
//         resolve(2);    
//     }, 5000);
    
// });
//Success Handling
// p.then(r=>{
//     console.log(r)
//     return r*2;
// }).then(r=>{
//     console.log(r)
//     return r*4;
// })

//Error handling
// p.catch(e=>{
//     console.log(e);
// });

// console.log(p);

/** ******************************************************************** **/

// function info(j) {
//     console.log('info');
//     console.log(j);
// }

// function mainFunc(i) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => i(json))
//         .catch(e => i(e))
// }

// mainFunc(info);
// console.log('anything')

/** ******************************************************************** **/

// setTimeout(() => {
//     console.log('setTimeout url');
// }, 2000);

// function pr(url){
//     return new Promise(function(resolve,reject){
//         fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(e => reject(e))
//     })
// }
// pr('https://jsonplaceholder.typicode.com/todos/1')
//  .then(function(response){
//     console.log(response);
// })

// console.log(2222)


/** ******************************************************************** **/

// Events

// Sends the event
// Receives the event
var event = require('events');
var eventEmitter = new event.EventEmitter();

const listener1 = (chunck,p1,p2) => {
    console.log('listener 1 executed')
    console.log(chunck);
    console.log(p1);
    console.log(p2);
}

const listener2 = () => {
    console.log('listener 2 executed')
}

eventEmitter.on('connection',listener1);
eventEmitter.on('connection',listener2);
eventEmitter.on('data',listener1);
eventEmitter.on('end',listener2);
eventEmitter.on('finish',listener1);
eventEmitter.on('a',listener2);
eventEmitter.on('b',listener2);

eventEmitter.emit('data','mm,mms',2,3)