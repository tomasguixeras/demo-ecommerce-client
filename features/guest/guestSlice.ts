import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const baseURL = `https://demo-ecommerce-api.onrender.com`;
// const baseURL = `http://localhost:3001`;

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

interface GuestState {
  products: any[];
  productDetail: any[];
  categories: any[];
  loading: boolean;
}

const initialState: GuestState = {
  products: [],
  productDetail: [],
  categories: [],
  loading: false,
};

export const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    }),
      builder.addCase(fetchAllProducts.pending, (state, action) => {
        state.loading = true;
      });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
  },
});

export default guestSlice.reducer;
