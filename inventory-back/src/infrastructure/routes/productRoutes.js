import { Router } from "express";

export default function productRoutes(controller) {
  const router = Router();

  router.get("/products", (req, res) => controller.getAll(req, res));
  router.get("/products/id/:id", (req, res) => controller.getById(req, res));
  router.get("/products/sku/:sku", (req, res) => controller.getBySku(req, res));
  router.post("/products", (req, res) => controller.create(req, res));
  router.put("/products/:id", (req, res) => controller.update(req, res));
  router.delete("/products/:id", (req, res) => controller.delete(req, res));

  return router;
}
