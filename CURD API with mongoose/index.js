const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-com');


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const insertInDB = async() =>{
    const Product = mongoose.model('products', productSchema);

    let data = new Product({
        name: "Asus m3 pro",
        price: 200,
        brand: "Asus",
        category: "Mobile"
    });
    // let result = await data.save();
    // console.log(result);
}
// insertInDB();

const updateInDB = async () =>{
    const product = mongoose.model('product', productSchema);

    let data = await product.updateOne(
        {name: "Asus m2 pro"},
        {$set: {price: 12000}}
    )
    console.log(data);
}
// updateInDB();

const deleteInDB = async () =>{
    const product = mongoose.model('products', productSchema);
    const data = await product.deleteOne({name: "Asus m3 pro"});
    console.log(data);
};
// deleteInDB();

const findInDB = async() =>{
    const Product = mongoose.model('products', productSchema);
    const data = await Product.find({brand: "Asus"});
    console.log(data);
}
findInDB();