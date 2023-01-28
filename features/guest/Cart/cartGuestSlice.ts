import { createSlice } from "@reduxjs/toolkit";
import { CartGuestState } from "../../../utils/types/cartTypes";
import { calculateTotal, fetchProductsByIds } from "./actionsCartGuest";

const initialState: CartGuestState = {
  cartProducts: [],
  total: 0,
};

export const cartGuestSlice = createSlice({
  name: "cartGuest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByIds.fulfilled, (state, action) => {
      state.cartProducts = action.payload;
    });
    builder.addCase(calculateTotal, (state, action) => {
      state.total = +action.payload;
    });
  },
});

export default cartGuestSlice.reducer;
