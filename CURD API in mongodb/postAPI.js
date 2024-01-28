const express = require('express');
const dbConnect = require('../CURD in mongodb/dbConnect');
const app = express();

app.post('/', async(req, res)=>{
    res.send({food: "Food is on the way"})
})

app.listen(3500);