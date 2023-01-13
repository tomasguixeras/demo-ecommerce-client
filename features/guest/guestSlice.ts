import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const baseURL = `https://demo-ecommerce-api.onrender.com`;

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await fetch(`${baseURL}/products`);
    return await response.json();
  }
);

interface GuestState {
  products: any[];
}

const initialState: GuestState = {
  products: [],
};

export const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default guestSlice.reducer;
