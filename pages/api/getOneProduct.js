import Product from "../../models/Product";

export default async function handler(req, res) {
    console.log(req.query.slug);
    try {
        const oneProduct = await Product.find({slug:req.query.slug})
        if (oneProduct.length>0) {
            res.status(200).json({oneProduct})
        }else{
            res.status(404).json({message:"there is no product like that"})
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  }
  