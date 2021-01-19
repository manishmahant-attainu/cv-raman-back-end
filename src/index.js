//Asynchronous way 
import 'babel-polyfill';
import 'isomorphic-fetch';

function task() {
    return new Promise(function(res,rej){
        setTimeout(() => {
            res('done');
        }, 5000);
    });
}

function task2() {
    return new Promise(function(res,rej){
        setTimeout(() => {
            res('done 2');
        }, 2000);
    });
}

function task3() {
    return new Promise(function(res,rej){
        setTimeout(() => {
            rej('done 3');
        }, 1000);
    });
}

// task3()
// .then(res => console.log(res))
// .catch(e => console.log('error:',e))


// Async/Await
// Await only works with async functions
// if you are using await beside a function, that function must return a promise
async function runTask() {
    try {
        const data = await task(); //5000
        console.log(data)
        const data2 = await task2(); //2000
        console.log(data2)
        const todo = await fetch('http://localhost:5002/todos');
        console.log(todo)
        const data3 = await task3(); //1000    
        console.log(data3)
        console.log('task done');
    } catch (error) {
        console.log('error:',error)
    }
}
runTask();
console.log('random content');
