/**
 * Filename: complex_code.js
 * Description: This code demonstrates a complex and sophisticated implementation of a virtual store
 * with functionality for adding, removing, and listing products, as well as calculating total price.
 */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Store {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    const indexToRemove = this.products.findIndex(product => product.name === productName);
    if (indexToRemove !== -1) {
      this.products.splice(indexToRemove, 1);
      console.log(`Removed product: ${productName}`);
    } else {
      console.log(`Product '${productName}' does not exist in the store.`);
    }
  }

  listProducts() {
    console.log("Products in store:");
    for (const product of this.products) {
      console.log(`- ${product.name}: $${product.price.toFixed(2)}`);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.price;
    }
    console.log(`Total price of all products: $${totalPrice.toFixed(2)}`);
  }
}

// Create products
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 29.99);
const product3 = new Product("Shoes", 49.99);

// Create store
const store = new Store();

// Add products to the store
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);

// List products in the store
store.listProducts();

// Calculate total price
store.calculateTotalPrice();

// Remove a product
store.removeProduct("Pants");

// List products again
store.listProducts();

// Calculate total price again
store.calculateTotalPrice();

// Output:
// Products in store:
// - Shirt: $19.99
// - Pants: $29.99
// - Shoes: $49.99
// Total price of all products: $99.97
// Removed product: Pants
// Products in store:
// - Shirt: $19.99
// - Shoes: $49.99
// Total price of all products: $69.98