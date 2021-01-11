const fs = require('fs');

const filePath = '/Users/manishmahant/Sites/AttainU/cv-raman-back-end/src/hello.text';
try {
    const fileData = fs.readFileSync(filePath,'utf-8');
    console.log(fileData);
} catch (error) {
    console.log(error);
}

fs.readFile(filePath,'utf-8',function(error, data){
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
});


//Synchronous
console.log(1)
console.log(2)

//If I perform some asynchoronous task
//Call an API
//Use of timers
//Or any task that need some extra time to complete
setTimeout(()=>{
    console.log(3)
},2000);

console.log(4)
console.log(5)


setTimeout(()=>{
    console.log(4000)
},4000);

setTimeout(()=>{
    console.log(1000)
},1000);
