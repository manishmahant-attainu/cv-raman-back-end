import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import User from './models/User';

const multer = require('multer');
const diskStorage = multer.diskStorage({
    destination: function(req,file,callback) {
        callback(null,path.join(__dirname,'uploads'));
    },
    filename: function name(req,file,callback) {
        const fileName = file.fieldname+'-'+Date.now()+path.extname(file.originalname);
        req.fileName = fileName;
        callback(null,fileName);
    }
});

const allowedImageExt = ['.png','.jpg','.jpeg','.bmp','.svg','.gif'];

const upload = multer({
    storage: diskStorage,
    fileFilter: function(req,file,callback) {
        const ext = path.extname(file.originalname);
        if(allowedImageExt.includes(ext)) {
            return callback('Only .png extension allowed',null);
        }
        callback(null,true);
    }
});

const app = express();
const PORT = 5002;
let users = [];
let userCount = 0;

app.set('views',path.join(__dirname,'views'));
app.set("view engine", "hbs");

const layout = path.join('layouts','index');

//Defining static assets
app.use(express.static(path.join(__dirname,'assets')));
app.use(express.static(path.join(__dirname,'uploads')));


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

app.post('/signup',upload.single('profileImage'),(req,res)=> {
    const error = {};
    console.log(req.body);
    console.log(req.fileName);
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
    users.push(User({...req.body,fileName:req.fileName}));
    res.redirect('/signup');
});

app.get('/users',(req,res)=>{
    res.render('users.hbs',{
        title:'User Listing',
        users
    });
});

app.get('/api/users',(req,res)=>{
    console.log(req.query);
    let status = 200;
    let message = 'Listing users.';
    res.status(status).json({
        data: users,
        message
    });
});

app.get('/api/users/:id',(req,res)=>{
    let status = 200;
    let message = 'User data.';
    let data = {};
    let userExists = users.filter(user => user.id == req.params.id);
    if(!userExists.length) {
        message = 'No such user found';
        status = 404;
    } else {
        data = userExists[0];
    }
    res.status(status).json({
        data,
        message
    })
});

app.post('/api/users',upload.single('profileImage'),(req,res)=>{
    console.log(req.fileName);
    ++userCount;
    const userData = User({
        id:userCount,
        ...req.body,
        fileName: req.fileName
    });
    users.push(userData);
    res.status(201).json({
        data: userData,
        message: 'New user created'
    })
});

app.put('/api/users/:id',(req,res)=>{
    let userData;
    let message = 'User updated.';
    userData = users.filter(user => user.id == req.params.id);
    if(userData.length) {
        users = users.map(user => {
            if(user.id == req.params.id){
                userData = User({ 
                    id:user.id,
                    ...req.body
                })
                return userData;
            }
            return user;
        });
    } else {
        ++userCount;
        userData = User({id:userCount,...req.body});
        users.push(userData);
        message = 'New user created.';
    }

    res.status(201).json({
        data: userData,
        message
    })
});

app.patch('/api/users/:id',(req,res)=>{
    let userData;
    let status = 200;
    let message = 'User updated.';
    userData = users.filter(user => user.id == req.params.id);
    if(userData.length) {
        users = users.map(user => {
            if(user.id == req.params.id){
                userData = User({ 
                    id:user.id,
                    ...req.body
                })
                return userData;
            }
            return user;
        });
    } else {
        message = 'No such user found';
        status = 404;
    }

    res.status(status).json({
        data: userData,
        message
    })
});

app.delete('/api/users/:id',(req,res)=>{
    let status = 200;
    let message = 'User deleted.';
    let userExists = users.filter(user => user.id == req.params.id);
    if(userExists.length) {
        users = users.filter(user => user.id != req.params.id)
    } else {
        message = 'No such user found';
        status = 404;
    }

    res.status(status).json({
        data: userExists,
        message
    })
})

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});


// REST APIs
// REST: Representational State Transfer | architectural style
// API: Appication Program Interface | end points
