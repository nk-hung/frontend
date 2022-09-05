import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ST } from "next/dist/shared/lib/utils";
import { STATUS } from "../../shared/constants/status";

// first, create the thunk => will generate three Redux action creator (pending, fulfilled, rejected)
export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const res = await axios.get("http://localhost:5000/shoe/all");
  return res.data;
});

const initialState = {
  products: [],
  status: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUS.ERROR;
    });
  },
});

export default productsSlice.reducer;
