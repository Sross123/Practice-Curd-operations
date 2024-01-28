const express = require('express');
const route = express.Router();
const app = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("Please enter age in query string");
    }else if(req.query.age<18){
        res.send("You are to access this website");
    }else{
        next();
    }
}
route.use(reqFilter)
route.get('/', (req, res)=>{
    res.send("This is Home Page");
});

app.get('/about', (req, res)=>{
    res.send("This is About Page");
});

app.get('/contact', (req, res)=>{
    res.send("This is Contact Page");
});

app.get('/user', (req, res)=>{
    res.send("This is User Page");
});

app.use('/', route)

app.listen(3500);