import express from 'express';
import path from 'path';
import { users } from './constants';
const app = express();
const PORT = 5002;

//Defining static assets
app.use(express.static(path.join(__dirname,'assets')));

// same path + same method
//Route 1
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to your main api endpoint'
    })
});

//Route 2
app.post('/', (req, res) => {
    res.json({
        message: 'posted successfully'
    })
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

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});
