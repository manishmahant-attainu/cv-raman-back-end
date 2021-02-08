import 'babel-polyfill';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import User from './models/User';

const session = require('express-session');
const cookieParser = require('cookie-parser');
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri,{
    useUnifiedTopology: true
});

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set("view engine", "hbs");

app.use(cookieParser());
app.use(session({ secret: 'sess_secret', cookie: { maxAge: 60000 }}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.locals.title = "Express Application";

const PORT = 5002;

let users = [{
    id:1, name: "Manish", email: 'manish@yopmail.com', password: "1"
}];
let userCount = 1;

const layout = path.join('layouts','index');

const isLoggedIn = (req,res,next) => {
    if(req.cookies.user && typeof req.cookies.user !== 'string') {
        next();
    } else {
        return res.redirect('/login');
    }
}

app.get('/',(req,resp)=>{
    resp.json({
        message: 'Welcome'
    })
});

app.get('/signup',(req,resp)=>{
    resp.render('signup',{
        title: 'Sign Up',
        layout,
        name: '',
        email:''
    })
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
    const isUserExisting = users.filter(i=>i.email == req.body.email);
    
    if(isUserExisting.length) {
        error.email = 'User already exists.';
        return res.render('signup',{...data,error});
    }
    ++userCount;
    users.push(User({id: userCount,...req.body}));
    res.redirect('/login');
});

app.get('/logout',(req,res)=>{
    req.session.user = '';
    res.redirect('/login');
});

app.get('/login',(req,res)=>{
    console.log(req.cookies)
    if(req.cookies.user && typeof req.cookies.user !== 'string') {
        return res.redirect('/profile');
    }
    res.render('login',{
        title: 'Login',
        layout,
        email:''
    })
});

app.post('/login',(req,res)=>{
    const error = {};
    const user = users.filter(i=>(i.email==req.body.email && i.password == req.body.password));
    if(user.length) {
        // req.session.user = user[0];

        return res.cookie('user',user[0]).redirect('/profile');
    } else {
        error.email = 'Invalid email or password'
    }
    res.render('login',{
        title: 'Login',
        layout,
        email:req.body.email,
        error
    })
});

app.get('/profile',isLoggedIn,(req,res)=> {
    console.log(req.cookies)
    console.log(typeof req.cookies.user)
    res.render('profile',{
        title: 'Profile',
        layout,
        user: req.session.user
    });
});


// I am fetching the data and I need this data
app.get('/api/books', async (req,res)=>{
    await client.connect();
    const database = client.db('cv_raman');
    const collection = database.collection('books');
    // here also async call
    const books = await collection.find({});
    const allValues = await books.toArray();
    await client.close();
    res.json({
        message: "Listing Books",
        data: allValues,
    })
});

// I just want to update the info, and don't need the data
app.patch('/api/books/:isbn',async (req, resp)=> {
    await client.connect();
    const database = client.db('cv_raman');
    const collection = database.collection('books');
    collection.updateOne(
        {
            isbn:req.params.isbn
        },
        {
            $set:{
                status:true
            }
        }    
    ).then(() => {
        client.close();
    });
    resp.json({
        message: 'Updated successfully'
    });
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});