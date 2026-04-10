import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    sku: { type: String, required: true, unique: true, uppercase: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model("Product", productSchema);
