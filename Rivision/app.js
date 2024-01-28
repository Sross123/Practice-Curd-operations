const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("Hello from the other side...")
})
app.post('/student', (req, res)=>{
    res.send("Hello from the other side...")
})

app.listen(Port, ()=>{
    console.log(`http://localhost:${Port}`)
})