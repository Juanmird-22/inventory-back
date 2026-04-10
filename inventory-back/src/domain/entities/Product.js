export default class Product {
  constructor({ id, name, sku, price, stock }) {
    if (!id || String(id).trim() === "") throw new Error("El id es obligatorio");
    if (!name || String(name).trim() === "") throw new Error("El nombre es obligatorio");
    if (!sku || String(sku).trim() === "") throw new Error("El SKU es obligatorio");

    const numericPrice = Number(price);
    const numericStock = Number(stock);

    if (!Number.isFinite(numericPrice) || numericPrice < 0) {
      throw new Error("El precio debe ser un número mayor o igual a 0");
    }

    if (!Number.isInteger(numericStock) || numericStock < 0) {
      throw new Error("El stock debe ser un entero mayor o igual a 0");
    }

    this.id = String(id).trim();
    this.name = String(name).trim();
    this.sku = String(sku).trim().toUpperCase();
    this.price = numericPrice;
    this.stock = numericStock;
  }
}
