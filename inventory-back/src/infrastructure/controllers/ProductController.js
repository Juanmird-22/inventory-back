export default class ProductController {
  constructor({ createProduct, getAllProducts, getProductById, getProductBySku, updateProduct, deleteProduct }) {
    this.createProduct = createProduct;
    this.getAllProducts = getAllProducts;
    this.getProductById = getProductById;
    this.getProductBySku = getProductBySku;
    this.updateProduct = updateProduct;
    this.deleteProduct = deleteProduct;
  }

  async create(req, res) {
    try {
      const product = await this.createProduct.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await this.getAllProducts.execute();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const product = await this.getProductById.execute(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getBySku(req, res) {
    try {
      const product = await this.getProductBySku.execute(req.params.sku);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const product = await this.updateProduct.execute(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await this.deleteProduct.execute(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
