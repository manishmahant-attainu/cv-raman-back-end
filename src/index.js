import constants, { PORT } from './constants';
// const server = require('express');
// const app = server();
// console.log(app);

//createServer function requires a callback(function which can accept params)
const http = require('http');
const server = http.createServer((req,resp)=>{
    // console.log(req.url);
    // if(req.url === '/phones') {
    //     resp.setHeader('Content-Type','application/json');
    //     resp.end(JSON.stringify(constants));
    // }
    resp.end('<h1>Some text content</h1>');
});

server.listen(PORT, ()=>{
    console.log(`Listening to: http://localhost:${PORT}`)
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/about-me', (req, res) => {
//     console.log(req.url);
//     res.json(constants)
// })

// app.get('/projects', (req, res) => {
//     res.json(constants)
// })

// app.get('/contact-me', (req, res) => {
//     res.json(constants)
// })

// app.get('*', (req, res) => {
//     res.send('Page Not Found')
// })

// app.listen(PORT, 'localhost', ()=>{
//     console.log(`Listening to: http://localhost:${PORT}`)
// });
