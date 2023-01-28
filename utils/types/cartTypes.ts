import { ProductInterface } from "./productTypes";

export interface CartGuestState {
  cartProducts: ProductInterface[];
  total: number;
}
