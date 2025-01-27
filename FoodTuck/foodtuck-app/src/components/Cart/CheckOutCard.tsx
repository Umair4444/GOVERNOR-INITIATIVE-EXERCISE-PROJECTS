"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "@/app/utils/Types";
import { removeFromCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Button from "@/components/ui/myButton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const CheckOutCard = () => {
  const checkout = useSelector((state: { cart: ICart[] }) => state.cart);
  const dispatch = useDispatch();

  const calculateTotal = (item: ICart) => {
    if (item.discount) {
      if (typeof item.discount === "string" && item.discount.includes("%")) {
        return (
          item.price *
          (1 - Number(item.discount.replace("%", "")) / 100) *
          item.quantity
        );
      } else if (typeof item.discount === "number") {
        return (item.price - item.discount) * item.quantity;
      }
    }
    return item.price * item.quantity;
  };


  return (
    <div className="bg-white text-black mt-20 border-2 flex flex-col mx-2 pb-2 rounded-md">
      <Accordion type="single" collapsible>
        {checkout.map((res: ICart) => (
          <AccordionItem key={res.uuid} value={`item-${res.uuid}`}>
            <div className="flex flex-col gap-2 px-2">
              {/* Accordion Header */}
              <AccordionTrigger className="flex justify-between bg-white text-black p-2 border-b-2 relative">
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <Image
                      src={res.image}
                      alt="cartItem"
                      width={200}
                      height={200}
                      className="w-20"
                    />
                  </div>
                  <div className="flex flex-c.ol items-start">
                    <h3 className="font-bold text-[16px]">{res.title}</h3>
                    <h6 className="text-sm">Quantity : {res.quantity} Pcs</h6>
                    <h6 className="text-sm">
                      {res.availability ? "Available" : "Not Available"}
                    </h6>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(res.uuid))}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
                >
                  <MdDelete className="text-xl" />
                </button>
              </AccordionTrigger>

              {/* Accordion Content */}
              <AccordionContent className="flex flex-col gap-2 px-3 py-2 border-b-2">
                <div className="flex justify-between">
                  <h2>Sub Total</h2>
                  <h2>{Math.round(res.price * res.quantity)}</h2>
                </div>
                <div className="flex justify-between">
                  <h2>Delivery Charges</h2>
                  <h2>
                    {res.delivery_charges
                      ? res.delivery_charges
                      : "Free Delivery"}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h2>Discount</h2>
                  {res.discount
                    ? typeof res.discount === "string" &&
                      res.discount.includes("%")
                      ? Math.round(
                          res.price *
                            (1 - Number(res.discount.replace("%", "")) / 100) *
                            res.quantity
                        )
                      : typeof res.discount === "number"
                        ? Math.round((res.price - res.discount) * res.quantity)
                        : res.price * res.quantity
                    : Math.round(res.price * res.quantity)}{" "}
                </div>
                <div className="flex justify-between text-lg pb-3 border-b-2">
                  <h2>Total</h2>
                  <h2>{Math.round(calculateTotal(res))}</h2>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex justify-between text-xl pb-3 border-b-2 px-3 my-5 shadow-xl items-center text-black font-bold">
        <h2>Total</h2>
        <h2>
          {Math.round(
            checkout.reduce((total: number, item: ICart) => {
              return total + calculateTotal(item);
            }, 0)
          )}
        </h2>
      </div>

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
