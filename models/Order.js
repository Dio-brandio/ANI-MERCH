const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required:true
  },
  products:[{
    productId:{type:String,required:true},
    quantity:{type:Number,default:1}
  }],
addres:{
    type:String,
    required:true,
},
amount:{type:Number},
status:{type:String,default:"Pending",required:true}
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Order",OrderSchema)