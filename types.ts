export interface ProductType {
  id: number;
  name: string;
  discreption: string;
  image: string;
}

export interface IProduct {
  getProduct(): ProductType[];

  createProduct(prodcut: ProductType): void;

  removeProduct(id: number): void;
}
