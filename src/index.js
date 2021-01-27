import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { users } from './constants';
const app = express();
const PORT = 5002;
const signedUsers = [];
const openUrlCount = {};
// custom middleware || URL Logger
// it must fullfil few things that it must accept 3 params
//  1st param is your request
//  2nd param is your response
//  3rd param is next function

// Middlewares are registered in the sequential order
const urlLogger = (request,response,next) => {
    openUrlCount[request.url] = openUrlCount[request.url]
        ? openUrlCount[request.url]+1
        : 1
    if(request.body.name === 'Manish Mahant') {
        throw new Error('Manish is not allowed');
        // response.send({
        //     message: 'Manish is not allowed'
        // })
    } else {
        request.body.openUrlCount= openUrlCount;
        next();
    }
}

// A callback is actually a function which can be passed as a parameter inside other function
// this callback function may or may not be execited form the function where it has been passed
// this function can pass some parameters to the callback

// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");

//Defining static assets
app.use(express.static(path.join(__dirname,'assets')));


// n umber of middlewares in express 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(urlLogger);

// same path + same method
//Route 1
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to your main api endpoint'
    })
});

app.get("/players", function(request, response) {
    response.render("players.hbs");
});

app.get('/getUrlOpen', (req, res) => {
    res.json(openUrlCount)
});


//Route 2
app.post('/signup', (req, res) => {
    console.log(req.body);
    signedUsers.push(req.body)
    res.json({
        message: 'posted successfully'
    });
});
app.get('/susers', (req, res) => {
    res.json(signedUsers);
});

//Route 3
app.get('/', (req, res) => {
    res.send('hello world')
});

//Route 4
app.get('/profile', (req,res) => {
    res.json({
        firstName: "Manish",
        lastName: "Mahant",
        gender: "Male",
    })
});

app.get('/users',  (req,res) => {
    res.json(users);
});

app.get('/users/:id/abc/:type',  (req,res) => {
    console.log('query',req.query);
    console.log('params',req.params);
    const user = users.filter(
        // function(i) {
        //     return i.id == req.params.id
        // }
        i => i.id == req.params.id && i.type == req.params.type
    );
    if(user.length) {
        res.json(user[0].name);
    } else {
        res.json({
            message: 'User not found'
        });
    }
    
});

app.get('/home', (req,res) => {
    const homeFilePath = path.join(__dirname,'home.html');
    res.sendFile(homeFilePath)
});


app.get('/hbshome',(req,res)=>{
    const homeFilePath = path.join(__dirname,'home.hbs');
    const data = {
        isLoggedIn:true,
        name:'Manish',
        title: 'Welcome',
        items: [
            'pen',
            'ball',
            'mobile'
        ]
    }
    res.render(homeFilePath,data);
})


//In express parameters count plays a very important role
app.use((error, request, response, next)=>{
    console.log('Error: handler',error)
    response.status(400).send(error)
})

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});
