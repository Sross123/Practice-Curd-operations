// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const getData = async ()=>{
//     let result = await client.connect();
//     let db = result.db("e-com");
//     let collection = db.collection("products");
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();

const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000';
const client = new MongoClient(url)

// const getData = async ()=>{
//     let result = await client.connect();
//     let db = result.db('e-com');
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();

const dbConnect = async() =>{
    let result = await client.connect();
    let db = result.db('e-com');
    return db.collection('products');
}
module.exports = dbConnect; 