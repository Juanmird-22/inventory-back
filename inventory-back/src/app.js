import express from "express";
import cors from "cors";
import productRoutes from "./infrastructure/routes/productRoutes.js";

export default function createApp(productController) {
  const app = express();

  app.use(cors({ origin: "*" }));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      message: "API de inventario funcionando",
      endpoints: {
        list: "GET /api/products",
        getById: "GET /api/products/id/:id",
        getBySku: "GET /api/products/sku/:sku",
        create: "POST /api/products",
        update: "PUT /api/products/:id",
        delete: "DELETE /api/products/:id"
      }
    });
  });

  app.get("/api/health", (req, res) => {
    res.json({ ok: true });
  });

  app.use("/api", productRoutes(productController));

  app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
  });

  return app;
}
