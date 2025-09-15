// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    try {
      const model = new ProductModel();
      const products = model.fetchProducts();

      // Render the 'product' EJS view with the products array
      return res.render("product", { products });
    } catch (err) {
      console.error("Error in getProducts:", err);
      return res.status(500).send("Internal Server Error");
    }
  };
}
