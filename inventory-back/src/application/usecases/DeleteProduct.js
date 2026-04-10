export default class DeleteProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    const existing = await this.productRepository.findById(id);
    if (!existing) throw new Error("Producto no encontrado");
    await this.productRepository.delete(id);
  }
}
