// If you want to get some information from a file, that file must export something
// In the file which you want some data of other file, must import

// import constants, { PORT, HOST } from './constants';
// import * as constants from './constants';
// import someName from './constants';
// console.log(constants);
// console.log(PORT);
// console.log(HOST);

// import helper from './helper'; 
// const helper = require('./helper.js')
// const constants = require('./constants.js')
// import constants from './constants';
import constants, { PORT } from './constants';
const http = require('http');
// console.log(constants);
// console.log(JSON.stringify(constants));
const server = http.createServer((req,resp)=>{
    console.log(req.url);
    if(req.url === '/phones') {
        resp.setHeader('Content-Type','application/json');
        resp.end(JSON.stringify(constants));
    }
    resp.end(<h1>Some text content</h1>);
});
// console.log(server);
server.listen(PORT);

// const htttp = {
//     createServerr: function(cb) {
//         const req = {};
//         const resp = {};
        
//         return {
//             listenn: function(port) {
//                 //whenever some thing happens 
//                 cb(req,resp);
//             }
//         }
//     }
// }
// const serverr = htttp.createServerr((req,resp) => {

// })

// console.log(serverr);