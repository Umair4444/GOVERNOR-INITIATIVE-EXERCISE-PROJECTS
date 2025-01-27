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
  const { status, error, products } = useSelector(
    (state: RootState) => state.product
  );
  console.log(products);

  const router = useRouter();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-5 py-10">
      {products.map((product: IProduct) => (
        <div key={product.id} className="shadow-sm shadow-yellow-500">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full"
            width={500}
            height={500}
          />
          <h3 className="text-xl">{product.title}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          {product.discount && (
            <p className="text-red-500">Discount: {product.discount}% Off</p>
          )}
          <button
            onClick={() => router.push(`/all-items/${product.slug}`)}
            className="bg-yellow-500 px-6 py-1 w-full"
          >
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
