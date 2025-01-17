"use client";

import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./feature/productSlice";
import OrderSlice from "./feature/orderSlice";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    order: OrderSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
