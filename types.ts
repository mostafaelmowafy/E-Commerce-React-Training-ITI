export interface ProductType {
  id: number;
  name: string;
  discreption: string;
  image: string;
}

export interface IProduct {
  getAllProducts(): ProductType[];

  getProduct(id: number): ProductType | undefined;

  createProduct(prodcut: ProductType): void;

  removeProduct(id: number): void;
}

////////////////////////////////////////////////

export interface UserType {
  email: string;
  password: string;
  admin: boolean;
}

export interface IUser {
  login(user: UserType): boolean;
  signUp(user: UserType): boolean;
  getUsers(): UserType[];
}
