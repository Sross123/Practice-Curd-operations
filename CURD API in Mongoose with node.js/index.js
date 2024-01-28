const express = require('express');
require('./config');
const Product = require('./product');
const app = express();


app.use(express.json());

// get method
app.get("/list", async (req, res) => {
    let data = await Product.find();
    res.send(data);
});

// post method
app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();

    console.log(result);
    res.send(result);
});

app.delete('/delete/:_id', async (req, res) => {
    let data = await Product.deleteOne(req.params);
    console.log(data);
    res.send(data);
});

app.put('/update/:_id', async (req, res) => {
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    )
    console.log(data)
})

app.get("/search/:key", async(req, res)=>{
    let data = await Product.find();
    console.log(data);
});

app.listen(5000);