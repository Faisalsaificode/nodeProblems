// src/models/product.model.js
// Please don't change the pre-written code
// Import the necessary modules here

// Import the module namespace so we can handle named/default/CommonJS exports
import * as productsModule from "../assets/products.js";

export default class ProductModel {
  fetchProducts = () => {
    // 1) If the module has a named export `products`, return it
    if (productsModule && Array.isArray(productsModule.products)) {
      return productsModule.products;
    }

    // 2) If the module has a default export that's an array, return it
    if (productsModule && Array.isArray(productsModule.default)) {
      return productsModule.default;
    }

    // 3) If the module itself is (unexpectedly) an array-like value on the namespace,
    //    look for the first exported value that is an array and return it.
    const firstArrayExport = Object.values(productsModule).find((v) =>
      Array.isArray(v)
    );
    if (firstArrayExport) {
      return firstArrayExport;
    }

    // 4) If nothing found, throw a helpful error so it's clear what to fix.
    throw new Error(
      "Could not find an exported products array in src/assets/products.js. " +
        "Expected `export default [...]`, `export const products = [...]`, or similar."
    );
  };
}
