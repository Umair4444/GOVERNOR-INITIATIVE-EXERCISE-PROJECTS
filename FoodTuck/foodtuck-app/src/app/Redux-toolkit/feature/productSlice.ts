import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
import { IProduct } from "@/app/utils/Types";
import { products } from "@/app/utils/Mock";

// Define the initial state using that type
const initialState: IProduct[] = products;

export const productSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
