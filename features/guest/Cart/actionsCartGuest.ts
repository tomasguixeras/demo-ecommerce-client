import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../baseURL";

export const fetchProductsByIds = createAsyncThunk(
  "products/ByIds",
  async (productsIds: number[]) => {
    const response = await fetch(
      `${baseURL}/products/byids?ids=[${productsIds}]`
    );
    return await response.json();
  }
);

export const calculateTotal = createAction(
  "products/calculateTotal",
  function calculateTotal(price, quantity) {
    return {
      payload: price * quantity,
    };
  }
);
