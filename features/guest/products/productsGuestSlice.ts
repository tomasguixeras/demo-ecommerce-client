import { createSlice } from "@reduxjs/toolkit";
import { productsGuestState } from "../../../utils/types/productTypes";
import { fetchAllProducts, fetchProductById } from "./actionsProductsGuest";

const initialState: productsGuestState = {
  products: [],
  productDetail: [],
  loading: false,
};

export const productsGuestSlice = createSlice({
  name: "productsGuest",
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
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
  },
});

export default productsGuestSlice.reducer;
