import ProductRepository from "../../domain/repositories/ProductRepository.js";
import ProductModel from "../database/models/ProductModel.js";

export default class MongoProductRepository extends ProductRepository {
  async save(product) {
    const created = await ProductModel.create(product);
    return created.toObject();
  }

  async findAll() {
    return ProductModel.find().sort({ name: 1 }).lean();
  }

  async findById(id) {
    return ProductModel.findOne({ id }).lean();
  }

  async findBySku(sku) {
    return ProductModel.findOne({ sku }).lean();
  }

  async update(id, productData) {
    const updated = await ProductModel.findOneAndUpdate({ id }, productData, { new: true }).lean();
    if (!updated) throw new Error("Producto no encontrado");
    return updated;
  }

  async delete(id) {
    const deleted = await ProductModel.findOneAndDelete({ id }).lean();
    if (!deleted) throw new Error("Producto no encontrado");
  }
}
