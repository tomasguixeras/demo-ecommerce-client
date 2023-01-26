import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../baseURL";

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAll",
  async () => {
    const response = await fetch(`${baseURL}/category`);
    return await response.json();
  }
);
