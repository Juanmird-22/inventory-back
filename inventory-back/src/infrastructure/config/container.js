import CreateProduct from "../../application/usecases/CreateProduct.js";
import DeleteProduct from "../../application/usecases/DeleteProduct.js";
import GetAllProducts from "../../application/usecases/GetAllProducts.js";
import GetProductById from "../../application/usecases/GetProductById.js";
import GetProductBySku from "../../application/usecases/GetProductBySku.js";
import UpdateProduct from "../../application/usecases/UpdateProduct.js";
import ProductController from "../controllers/ProductController.js";
import InMemoryProductRepository from "../repositories/InMemoryProductRepository.js";
import MongoProductRepository from "../repositories/MongoProductRepository.js";

export function buildContainer({ useMongo = false } = {}) {
  const repository = useMongo ? new MongoProductRepository() : new InMemoryProductRepository();

  const createProduct = new CreateProduct(repository);
  const getAllProducts = new GetAllProducts(repository);
  const getProductById = new GetProductById(repository);
  const getProductBySku = new GetProductBySku(repository);
  const updateProduct = new UpdateProduct(repository);
  const deleteProduct = new DeleteProduct(repository);

  const productController = new ProductController({
    createProduct,
    getAllProducts,
    getProductById,
    getProductBySku,
    updateProduct,
    deleteProduct,
  });

  return { repository, productController };
}
