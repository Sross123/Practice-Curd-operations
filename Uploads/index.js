const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, "uploads");
        },
        filename:(req, file, cb)=>{
            cb(null, file, fieldname+"_"+Date.now+".jpg")
        }
    })
}).single("upload file");


app.post('/upload', (req, res)=>{
    res.send('File uploaded');
});

app.listen(5000);