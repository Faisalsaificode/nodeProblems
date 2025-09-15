// src/models/product.model.js
import products from "../assets/products.js";

export default class ProductModel {
  fetchProducts = () => {
    return products;
  };
}
