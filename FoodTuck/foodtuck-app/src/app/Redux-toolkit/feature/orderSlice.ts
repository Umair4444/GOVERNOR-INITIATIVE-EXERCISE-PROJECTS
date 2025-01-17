"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IOrder } from "@/app/utils/Types";

// Define the initial state using that type
const initialState: IOrder[] = [];

export const OrderSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = OrderSlice.actions;
export default OrderSlice.reducer;
