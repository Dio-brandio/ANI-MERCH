import Product from "../../models/Product";
import connection from "../../middleware/db";

export default async function handler(req, res) {
  const products = await Product.find()
    res.status(200).json(products)
  }
  