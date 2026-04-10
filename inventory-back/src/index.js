import dotenv from "dotenv";
import createApp from "./app.js";
import { buildContainer } from "./infrastructure/config/container.js";
import { connectMongo } from "./infrastructure/database/mongo.js";

dotenv.config();

const useMongo = await connectMongo();
const { productController } = buildContainer({ useMongo });
const app = createApp(productController);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
