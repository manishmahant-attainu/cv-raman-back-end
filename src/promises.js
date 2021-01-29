// Promises were available after es5, i.e. from es6 we got promises

// 1st param is your resolve function no matter what name you give it
// 2nd param is your reject function no matter what name you give it
const p = new Promise((reject,resolve)=>{
    reject('failure');
    resolve('success');
})
.then(res=>{
    setTimeout(() => {
        console.log(res)
    }, 3000);
    return 'anything meaningful which is helpful in next .then';
})
.then(res2=>{
    console.log(res2)
})
.catch(err=>{
    console.log(err);
});

console.log(p);