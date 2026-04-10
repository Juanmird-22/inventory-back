import Product from "../../domain/entities/Product.js";

export default class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(data) {
    const existingSku = await this.productRepository.findBySku(String(data.sku || "").trim().toUpperCase());
    if (existingSku) {
      throw new Error("Ya existe un producto con ese SKU");
    }

    const product = new Product(data);
    return this.productRepository.save(product);
  }
}
