import Product from "../../models/Product";

export default async function handler(req, res) {
    console.log(req.query);
    if (req.method=="POST") {
        try {
            for (let i = 0; i < req.body.length; i++) {
                let findProduct  =await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
            }
                
                res.status(200).json({message:"Succesfully Updtaed"})
            }
         catch (error) {
            res.status(200).json({message:error.message})
            
        }
        
    }
    else{
        res.status(400).json({error:"Not a post method"})
    }
  }
  