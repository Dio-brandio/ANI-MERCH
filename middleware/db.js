const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/animerch",  {
    useNewUrlParser: true,
  }).then(()=>{
    console.log("Connected Succesfully")
  }).catch((e)=>{
    console.log(e);
    console.log("Not Connected")
  })