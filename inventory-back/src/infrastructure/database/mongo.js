import mongoose from "mongoose";

export async function connectMongo() {
  if (!process.env.MONGO_URI) {
    console.log("MONGO_URI no configurada. Se usará repositorio en memoria.");
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado correctamente");
    return true;
  } catch (error) {
    console.log("No se pudo conectar a MongoDB. Se usará repositorio en memoria.");
    console.log(error.message);
    return false;
  }
}
