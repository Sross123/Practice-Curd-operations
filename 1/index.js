const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/e-com');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const Product = mongoose.model('products', productSchema);

app.use(express.json());

app.get('/', async(req, res)=>{
    let data = await Product.find();
    console.log(data);
    res.send("Done");
});

app.post('/add', async(req, res)=>{
    let data = new Product(req.body);
    let result = await data.save()
    console.log(result);
    res.send("Done");
});


app.listen(5000)