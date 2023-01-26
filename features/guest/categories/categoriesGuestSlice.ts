import { createSlice } from "@reduxjs/toolkit";
import { CategoriesGuestState } from "../../../utils/types/categoryTypes";
import { fetchAllCategories } from "./actionsCategoriesGuest";

const initialState: CategoriesGuestState = {
  categories: [],
};

export const categoriesGuestSlice = createSlice({
  name: "categoriesGuest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesGuestSlice.reducer;
