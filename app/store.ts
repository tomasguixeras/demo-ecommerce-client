import { configureStore } from "@reduxjs/toolkit";
import categoriesGuestSlice from "../features/guest/categories/categoriesGuestSlice";
import productsGuestSlice from "../features/guest/products/productsGuestSlice";

export const store = configureStore({
  reducer: {
    productsGuest: productsGuestSlice,
    categoriesGuest: categoriesGuestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
