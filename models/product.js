const products = [];

module.exports = class Product {
  constructor(t, d) {
    this.title = t;
    this.desc = d;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
