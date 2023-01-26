import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../baseURL";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await fetch(`${baseURL}/products`);
    return await response.json();
  }
);

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAll",
  async () => {
    const response = await fetch(`${baseURL}/category`);
    return await response.json();
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id: string | string[]) => {
    const response = await fetch(`${baseURL}/products/${id}`);
    return await response.json();
  }
);
