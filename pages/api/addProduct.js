import Product from "../../models/Product";
require('../../middleware/db')

export default async function handler(req, res) {
    if (req.method=="POST") {
        try {
                for (let i = 0; i < req.body.length; i++) {
                let newProduct = new Product({
                      title: req.body[i].title,
                      slug:req.body[i].slug,
                      desc: req.body[i].desc,
                      category: req.body[i].category,
                      imgsrc:req.body[i].imgsrc,
                      size:req.body[i].size,
                      color:req.body[i].color,
                      price:req.body[i].price,
                      availableqty:req.body[i].availableqty,
                })
                await newProduct.save()
                
            }
            res.status(200).json({message:"Succesfully saved"})
        } catch (error) {
            res.status(200).json({message:error.message})
            
        }
        
    }
    else{
        res.status(400).json({error:"Not a post method"})
    }
  }
  