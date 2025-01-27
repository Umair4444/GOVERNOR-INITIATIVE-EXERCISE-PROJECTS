"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { AppDispatch, RootState } from "@/app/Redux-toolkit/store";
import { fetchProducts } from "@/app/Redux-toolkit/feature/productSlice";
import { IProduct } from "@/app/utils/Types";

const Page = ({ params }: { params: { item: string } }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Find the product dynamically after products are fetched
  const find: IProduct | undefined = products.find(
    (item: IProduct) => item.slug === params.item
  );

  // Local state for cart item
  const [cartItem, setCartItem] = useState<any | null>(null);

  useEffect(() => {
    if (find) {
      setCartItem({
        id: find.id,
        title: find.title,
        image: find.image,
        slug: find.slug,
        price: find.price,
        category: find.category,
        description: find.description,
        flavors: find.flavors,
        topping: find.toppings,
        quantity: 1,
        discount: find.discount,
        availability: find.available ? "Available" : "Not Available",
        uuid: find.uuid,
      });
    }
  }, [find]);

  if (status === "loading")
    return <p className="text-lg text-gray-400">Loading...</p>;
  if (status === "failed")
    return <p className="text-lg text-red-500">Error: {error}</p>;
  if (!find) return <h1 className="text-xl font-semibold">No Product Found</h1>;

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(addToCart(cartItem)); // Add item to the cart
      setCartItem({ ...cartItem, quantity: 1 }); // Reset the quantity
    }
  };

  return (
    <div className="bg-white py-10 px-4">
      <div className="flex justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          {/* Product Image */}
          <div className="relative">
            <Image
              src={find.image || "/default-image.jpg"} // Fallback to default image
              alt={find.title}
              className="w-full h-72 object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* Product Details */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-black">{find.title}</h2>
            <p className="text-lg text-gray-700 mt-2">{find.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <span className="text-xl text-yellow-500 font-semibold">
                  Category:{" "}
                </span>
                <span className="text-lg text-black">{find.category}</span>
              </div>
              <div>
                <span className="text-xl text-yellow-500 font-semibold">
                  Price:{" "}
                </span>
                <span className="text-lg font-bold text-black">
                  ${find.price}
                </span>
              </div>
            </div>

            {/* Extras */}
            <div className="mt-4">
              <h3 className="text-xl text-black">Extras:</h3>
              {Array.isArray(find.toppings) && find.toppings.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {find.toppings.map((topping: string, index: number) => (
                    <span
                      key={index}
                      className="bg-yellow-500 text-black py-1 px-3 rounded-full text-sm font-semibold"
                    >
                      {topping}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-2 text-gray-500">No Extra Items</div>
              )}
            </div>

            {/* Quantity Control */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity: Math.max(cartItem.quantity - 1, 1),
                    })
                  }
                  className="bg-gray-300 hover:bg-gray-400 text-black text-4xl px-4 py-2 rounded-full"
                >
                  -
                </button>
                <span className="mx-4 text-lg font-semibold text-black">
                  {cartItem?.quantity || 1}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity: (cartItem?.quantity || 1) + 1,
                    })
                  }
                  className="bg-gray-300 hover:bg-gray-400 text-black text-4xl px-4 py-2 rounded-full"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                aria-label="Add to cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
