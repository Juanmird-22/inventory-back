import Product from "../../domain/entities/Product.js";

export default class UpdateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id, data) {
    const existing = await this.productRepository.findById(id);
    if (!existing) throw new Error("Producto no encontrado");

    const nextSku = String(data.sku ?? existing.sku).trim().toUpperCase();
    const skuOwner = await this.productRepository.findBySku(nextSku);
    if (skuOwner && skuOwner.id !== id) {
      throw new Error("Ya existe otro producto con ese SKU");
    }

    const product = new Product({
      id,
      name: data.name ?? existing.name,
      sku: nextSku,
      price: data.price ?? existing.price,
      stock: data.stock ?? existing.stock,
    });

    return this.productRepository.update(id, product);
  }
}
