"use client";
import React from "react";
import CheckOutCardImage from "./CheckOutCardImage";
import Button from "@/components/ui/myButton";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "@/app/utils/Types";
import { removeFromCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { MdDelete } from "react-icons/md";

const CheckOutCard = () => {
  const checkout = useSelector((state: ICart) => state.cart);
  // console.log("check", checkout);
  const dispatch = useDispatch();

  return (
    <div className="bg-white text-black mt-20 border-2 flex flex-col mx-2 pb-2 rounded-md">
      <div className="mb-5">
        <CheckOutCardImage />
      </div>

      {checkout.map((res: any) => (
        <div key={res.id} className="flex flex-col gap-2 px-2 ">
         
          <div className="flex justify-between">
            <h2>Sub Total</h2>
            <h2>{res.price * res.quantity}</h2>
          </div>
          <div className="flex justify-between">
            <h2>Delivery Charges</h2>
            <h2>{res.delivery_charges}0</h2>
          </div>
          <div className="flex justify-between">
            <h2>Discount</h2>
            <h2>{res.discount}</h2>
          </div>
          <div className="flex justify-between">
            <h2>Tax$54.60</h2>
            <h2>Free</h2>
          </div>
          <div className="flex justify-between text-lg pb-3 border-b-2">
            <h2>Total</h2>
            <h2 className="font-bold">$54.76</h2>
          </div>
        </div>
      ))}
      <Button
        title="Place an order ->"
        width="w-full"
        xpadding="px-10"
        ypadding="py-2"
        rounded="rounded-md"
      />
    </div>
  );
};

export default CheckOutCard;
