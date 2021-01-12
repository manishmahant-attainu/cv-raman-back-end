const fs = require('fs');

const filePath = '/Users/manishmahant/Sites/AttainU/cv-raman-back-end/src/hello.text';

//Synchronous way of reading the file
try {
    const fileData = fs.readFileSync(filePath,'utf-8');
    // console.log(fileData);
} catch (error) {
    console.log(error);
}

//Async way of reading the file
fs.readFile(filePath,'utf-8',function(error, data){
    if(error) {
        console.log(error)
    } else {
        // console.log(data)
    }
});

// fs.writeFile(filePath,'Writing with nodejs FS module',function(err){
//     console.log(err);
// })

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


//RAM
const b = Buffer.alloc(10);

b.write('This is cv raman batch and we are learning NodeJs');
console.log(b);

const c = Buffer.from('This is cv raman batch and we are learning NodeJs');
console.log(c);

var fileData = '';
//create read stream
const rs = fs.createReadStream(filePath);
rs.setEncoding('utf-8');


//1 when we receive the data
//2 when the data is completely recevied, end 
//3 when there is an error
//4 when the data transfer finishes, finish

rs.on('data', function(chunk){
    // console.log(chunk);
    console.log('======================================');
    fileData += chunk;
})

rs.on('error', function(error){
    console.log(error);
})

rs.on('end', function(){
    // console.log(fileData);
})

rs.on('finish', function(){
    console.log('finished');
});

let interval = ''; 

// setTimeout
var timeout = setTimeout(function(){
    console.log('Clearing Interval')
    clearInterval(interval);
},10000);


// setInterval
interval = setInterval(function(){
    console.log(Date())
},1000);
console.log('interval',interval);

// setInterval(function(){
//     console.log('ssaas',Date())
// },1000);

var aa = [1,2,3,4,5];

// clearTimeout(timeout);

