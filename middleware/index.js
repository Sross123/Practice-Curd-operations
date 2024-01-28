const express = require('express');
const app = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("Please provide age");
    }
    else if(req.query.age < 18){
        res.send("You are not allow to access this website");
    }else{
        next();
    }
}
app.use(reqFilter)
app.get('/',(req,res)=>{
    res.send("Welcome to the home page");
});
app.get('/about', (req, res)=>{
    res.send("Welcome to the about page");
});
app.get('/user', (req, res)=>{
    res.send("Welcome to the user Page")
})

app.listen(3500);