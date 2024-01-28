const express = require('express');
const dbConnect = require('../CURD in mongodb/dbConnect');
const app = express();

app.use(express.json());

app.get('/', async(req, res)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    // console.log(data);
    res.send(data);
});

app.post('/', async(req, res)=>{
    let data = await dbConnect();
    data = await data.insertOne(req.body)
    // console.log(req.body)
    res.send(data)
})

app.listen(5000);