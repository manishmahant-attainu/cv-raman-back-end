import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5002;
const users = [];

app.set('views',path.join(__dirname,'views'));
app.set("view engine", "hbs");

const layout = path.join('layouts','index');

//Defining static assets
app.use(express.static(path.join(__dirname,'assets')));


// number of middlewares in express 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.end('welcome to express');
});

app.get('/intro',(req,res)=>{
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
});

app.get('/signup',(req,res)=> {
    const data = {
        layout:layout,
        users,
        title: 'Sign Up',
        name: '',
        email: '',
        address: '',
    };
    res.render('signup.hbs',data);
});

app.post('/signup',(req,res)=> {
    const error = {};
    const data = {
        layout,
        title: 'Sign Up',
        ...req.body
    }
    if(!req.body.name) {
        error.name = 'Please enter the name';
        res.render('signup',{...data,error});
        return;
    }
    users.push(req.body);
    res.redirect('/signup');
});

app.get('/users',(req,res)=>{
    res.render('users.hbs',{
        title:'User Listing',
        users
    });
});

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});
