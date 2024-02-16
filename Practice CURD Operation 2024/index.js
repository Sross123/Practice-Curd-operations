const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set("strictQuery", true);
// connect mongodb
mongoose.connect("mongodb://localhost:27017/e-com");

// Schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// Model
const productModel = mongoose.model("product", ProductSchema);

app.use(express.json());

app.get("/", async (req, res) => {
  const result = await productModel.find();
  res.json(result.length > 1 ? result : "No record found");
});

app.post("/store", async (req, res) => {
  let data = await productModel(req.body);
  let result = data.save();
  res.status(200).json({ result });
});

app.put("/update/:id", async(req, res)=>{
    const {id} = req.params
    let result = await productModel.findByIdAndUpdate(id,{
        $set:req.body
    });
    res.json("Record updated successfully")
})

app.delete("/destroy/:id", async(req, res)=>{
    const {id} = req.params;
    console.log(id)
    const result = await productModel.deleteOne(id);
    res.status(200).json(result);

})

app.get("/search/:key", async(req, res)=>{
    const {key} = req.params
    let data = await productModel.findOne({_id:key})
    res.status(200).json(data)
})

app.listen(3000, () => {
  console.log("Server connected...");
});
