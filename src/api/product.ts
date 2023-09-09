import { IProduct, ProductType } from "../../types";

export default class Product implements IProduct {
  getAllProducts(): ProductType[] {
    return JSON.parse(localStorage.getItem("products") as string);
  }

  getProduct(id: number): ProductType | undefined {
    const products = this.getAllProducts();

    return products.find((prod) => prod.id === id);
  }

  createProduct(product: ProductType) {
    const products = this.getAllProducts();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }

  removeProduct(id: number): void {
    const products = this.getAllProducts();
    products.filter((prod) => prod.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
  }
}
