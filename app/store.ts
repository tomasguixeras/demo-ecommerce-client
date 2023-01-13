import { configureStore } from "@reduxjs/toolkit";
import guestSlice from "../features/guest/guestSlice";

export const store = configureStore({
  reducer: {
    guest: guestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
