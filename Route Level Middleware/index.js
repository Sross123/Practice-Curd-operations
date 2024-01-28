const express = require('express');
const app = express();
const middleware = require('./middlewar');
const route = express.Router();

// const reqFilter = (req, res, next)=>{
//     if(!req.query.age){
//         res.send("Please enter age");
//     }else if(req.query.age<18){
//         res.send("You are below 18+")
//     }else{
//         next();
//     }
// }

// app.use(reqFilter)

route.use(middleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});
app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});
route.get('/user', (req, res) => {
    res.send('Welcome to the User Page');
});
route.get('/contact', (req, res) => {
    res.send('Welcome to the Contact Page');
});
app.use('/',route);

app.listen(5000);