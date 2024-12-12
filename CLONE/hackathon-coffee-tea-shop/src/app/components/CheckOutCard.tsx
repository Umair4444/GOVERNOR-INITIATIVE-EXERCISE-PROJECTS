import React from "react";
import CheckOutCardImage from "./CheckOutCardImage";
import Button from "./Button";

const CheckOutCard = () => {
  return (
    <div className="bg-white text-black mt-20 border-2 flex flex-col mx-2 pb-2 rounded-md">
      <div className="mb-5">
        <CheckOutCardImage />
        <CheckOutCardImage />
        <CheckOutCardImage />
      </div>
      <div className="flex flex-col gap-2 px-2 ">
        <div className="flex justify-between">
          <h2>Sub-Total</h2>
          <h2>$130</h2>
        </div>
        <div className="flex justify-between">
          <h2>Shipping</h2>
          <h2>Free</h2>
        </div>
        <div className="flex justify-between">
          <h2>Discount</h2>
          <h2>25%</h2>
        </div>
        <div className="flex justify-between">
          <h2>Tax$54.60</h2>
          <h2>Free</h2>
        </div>
        <div className="flex justify-between text-lg pb-3 border-b-2">
          <h2>Total</h2>
          <h2 className="font-bold">$54.76</h2>
        </div>
        <Button
          title="Place an order ->"
          width="w-full"
          xpadding="px-10"
          ypadding="py-2"
          rounded="rounded-md"
        />
      </div>
    </div>
  );
};

export default CheckOutCard;
