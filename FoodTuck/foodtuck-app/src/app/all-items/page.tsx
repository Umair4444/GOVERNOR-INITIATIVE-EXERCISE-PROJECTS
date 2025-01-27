"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux-toolkit/store";
import { IProduct } from "../utils/Types";
import { fetchProducts } from "../Redux-toolkit/feature/productSlice";
import { useRouter } from "next/navigation";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.product
  );

  const router = useRouter();

  // Fetch products on initial render if status is idle
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
      {products.map((product: IProduct) => (
        <div
          key={product.id}
          className="shadow-sm shadow-yellow-500 rounded-lg overflow-hidden bg-white"
        >
          {/* Product Image */}
          <div className="relative w-full h-64">
            <Image
              src={product.image}
              alt={product.title}
              className="object-cover"
              layout="fill"
            />
          </div>
          {/* Product Details */}
          <div className="p-4">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-sm font-semibold text-gray-700">
              Category: {product.category}
            </p>
            <p className="text-lg font-bold text-gray-800">Price: ${product.price}</p>
            {product.discount > 0 && (
              <p className="text-sm text-red-500">
                Discount: {product.discount}% Off
              </p>
            )}
            {/* Order Now Button */}
            <button
              onClick={() => router.push(`/all-items/${product.slug}`)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 mt-4 w-full rounded-md"
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
