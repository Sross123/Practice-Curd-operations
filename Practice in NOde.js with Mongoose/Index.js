// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// mongoose.connect('mongodb://localhost:27017/e-com');

// // Schema
// const productSchema = mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
// })
// // Model
// const Product = mongoose.model('products', productSchema);

// app.use(express.json());

// app.post('/create', async(req, res)=>{
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send("Done");
// })

// app.listen(5000);

const mongoose = require("mongoose");
const express = require('express');
const app = express();
mongoose.connect("mongodb://localhost:27017/e-com");

// Schema
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

// Model
const Product = mongoose.model('products', productSchema);

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await Product.find();
    // console.log(data)
    res.send(data);
});

app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    data = await data.save();
    res.send("Done");
});

app.delete('/delete/category/:_id', async (req, res) => {
    let data = await Product.deleteOne(req.params);
    // console.log(data);
    res.send("Done");
});

app.put('/update/:_id', async (req, res) => {
    // let data = await Product.updateOne(
    //     req.params,
    //     { $set: req.body }
    // )
    // console.log(data);
    // res.send("Update");
});

app.get('/search/:key', async(req, res)=>{
    let data = await Product.find(
        {
            "$or":{
                "name":{
                    $regex:req.params.key
                }
            }
        }
    );
    console.log(req.params.key);
    res.send(data);
})

app.listen(5000);