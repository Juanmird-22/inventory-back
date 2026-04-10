import ProductRepository from "../../domain/repositories/ProductRepository.js";

export default class InMemoryProductRepository extends ProductRepository {
  constructor() {
    super();
    this.products = [];
  }

  async save(product) {
    this.products.push(product);
    return product;
  }

  async findAll() {
    return [...this.products];
  }

  async findById(id) {
    return this.products.find((product) => product.id === id) ?? null;
  }

  async findBySku(sku) {
    return this.products.find((product) => product.sku === sku) ?? null;
  }

  async update(id, productData) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new Error("Producto no encontrado");
    this.products[index] = productData;
    return productData;
  }

  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new Error("Producto no encontrado");
    this.products.splice(index, 1);
  }
}
