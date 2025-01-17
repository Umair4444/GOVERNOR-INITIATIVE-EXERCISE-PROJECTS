"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import cookie from "@/assets/dish/menudish5.png";
import { useSelector } from "react-redux";
import { IProduct } from "../utils/Types";
// import { products } from "../utils/Mock";

const page = () => {
  // const randomid = Math.floor(Math.random() * 1000 + 1);
  const products = useSelector((state: any) => state.product);

  return (
    <div className="grid grid-cols-3 bg-white text-black">
      {products.map((items: IProduct) => (
        <div key={items.id} className="mx-5 mb-5">
          <div className="px-3 grid w-2/3 gap-2 py-3">
            <div>
              <div>
                <Image src={cookie} alt="cookie" className="w-full" />
              </div>
              <div className="grid gap-2 py-2 justify-center">
                <button type="button">Order Now</button>
                <Link href={`/all-items/${items.id}`}>
                  <button type="button">Detail Card</button>
                </Link>
              </div>
            </div>
            <div className="grid gap-3 content-start pt-5 text-lg">
              <div>Dish Name : {items.title}</div>
              <div>Category : {items.category}</div>
              <div>Price : {items.price}</div>
              <div>Flavors : {items.flavors}</div>
              <div>Toppings : {items.topping}</div>
              <div className="grid grid-flow-col w-fit gap-4 self-center justify-self-center my-3">
                <div>
                  <button
                    type="button"
                    className="px-4 text-lg bg-slate-400 text-white"
                  >
                    -
                  </button>
                </div>
                <div>Add to cart</div>
                <div>
                  <button
                    type="button"
                    className="px-4 text-lg bg-slate-400 text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
