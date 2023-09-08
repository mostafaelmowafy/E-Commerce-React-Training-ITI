import { IProduct, ProductType } from "../../types";

export default class Product implements IProduct {
  getProduct(): ProductType[] {
    return JSON.parse(localStorage.getItem("products") as string);
  }

  createProduct(product: ProductType) {
    const products = this.getProduct();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }

  removeProduct(id: number): void {
    const products = this.getProduct();
    products.filter((prod) => prod.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
  }
}
