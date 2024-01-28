const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";
const client = new MongoClient(url);

const dbConnect = async () =>{
    let result = await client.connect();
    let db = result.db('e-com');
    let collection  = db.collection('products');
    return collection;
}
module.exports = dbConnect();