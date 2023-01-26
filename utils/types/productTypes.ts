import { BrandInterface } from "./brandTypes";
import { CategoryInterface } from "./categoryTypes";
import { SubcategoryInterface } from "./subcategoryTypes";

export enum ProductStatus {
  ENABLE = "enable",
  DISABLE = "disable",
}

export interface ProductInterface {
  id: number;
  model: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  createdAt: Date;
  status: ProductStatus;
  brand: BrandInterface;
  category: CategoryInterface;
  subcategory: SubcategoryInterface;
}

export interface productsGuestState {
  products: ProductInterface[];
  productDetail: ProductInterface | [];
  loading: boolean;
}
