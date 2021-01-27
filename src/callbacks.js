function pr(data) {
    console.log(data);
}
function square(data) {
    console.log(data*data);
}

function sum(a,b,cb) {
    const s = a+b;
    if(s>5) {
        setTimeout(() => {
            cb(s);
        }, 3000);
        setTimeout(() => {
            cb(9);
        }, 2000);
    } else {
        console.log('Not Good')
    }
}

sum(3,3,square);
//
//
//
console.log('Not');