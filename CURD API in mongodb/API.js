const express = require('express');
const app = express();
const dbConnect = require('./dbConnect');
const port  = 5000;


app.use(express.json());

app.get('/', async (req, res)=>{
    let data = await dbConnect;
    data = await data.find({}).toArray();
    // console.log(data);
    res.send(data);
});

app.post('/', async(req, res)=>{
    let data = await dbConnect;
    data = await data.insert(req.body);
    // console.log(req.body);
    res.send(data);
})

app.put('/', async(req, res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.body.name},
        {$set:req.body}
    )
    // console.log(result);
    res.send({result:"updated"})
})

app.listen(port);