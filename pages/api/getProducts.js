import Product from "../../models/Product";

export default async function handler(req, res) {
  const products = await Product.find({availableqty:{$gt:0}})
    res.status(200).json(products)
  }
  