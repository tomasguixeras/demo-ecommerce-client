import { CategoryInterface } from "./categoryTypes";
import { ProductInterface } from "./productTypes";

export enum SubcategoriesStatus {
  ENABLE = "enable",
  DISABLE = "disable",
  DELETED = "deleted",
}

export interface SubcategoryInterface {
  id: number;
  name: string;
  icon: string;
  status: SubcategoriesStatus;
  createdAt: Date;
  products: ProductInterface[];
  category: CategoryInterface;
}
