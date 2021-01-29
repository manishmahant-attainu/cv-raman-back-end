import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5002;
let users = [];
let userCount = 0;

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

app.get('/api/users',(req,res)=>{
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

app.post('/api/users',(req,res)=>{
    ++userCount;
    const userData = {id:userCount,...req.body};
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
                userData = { 
                    id:user.id,
                    ...req.body
                }
                return userData;
            }
            return user;
        });
    } else {
        ++userCount;
        userData = {id:userCount,...req.body};
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
                userData = { 
                    id:user.id,
                    ...req.body
                }
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
