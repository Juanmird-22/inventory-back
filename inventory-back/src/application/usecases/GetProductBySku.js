export default class GetProductBySku {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(sku) {
    const product = await this.productRepository.findBySku(String(sku).trim().toUpperCase());
    if (!product) throw new Error("Producto no encontrado");
    return product;
  }
}
