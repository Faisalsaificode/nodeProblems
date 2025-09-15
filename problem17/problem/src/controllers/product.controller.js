// src/controllers/product.controller.js
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    const model = new ProductModel();
    const products = model.fetchProducts();

    // optional custom headers to show server-side customization
    res.set("X-Powered-By", "Express-Product-App");
    res.set("Cache-Control", "no-store");

    return res.status(200).json(products);
  };
}
