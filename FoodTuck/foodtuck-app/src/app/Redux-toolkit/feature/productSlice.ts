import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/app/utils/Types"; // Make sure this is properly defined
import { client } from "@/sanity/lib/client";

// ProductState interface
interface ProductState {
  products: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

// Fetch products using createAsyncThunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const query = `*[_type == "food"]{
      _id,
      title,
      slug,
      category,
      available,
      description,
      toppings,
      flavors,
      tags,
      price,
      "image": image.asset->url
    }`;

    // no cahcing 
    const products = await client.fetch(query, {}, { cache: "no-store" }); // Disable caching
    return products.map((item: any) => ({
      id: item._id,
      title: item.title,
      slug: item.slug.current,
      available: item.available,
      description: item.description,
      image: item.image,
      tags: item.tags,
      category: item.category,
      flavors: item.flavors,
      toppings: item.toppings,
      price: item.price,
      discount: item.discount,
    }));
  }
);

// Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload); // Log fetched products
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
