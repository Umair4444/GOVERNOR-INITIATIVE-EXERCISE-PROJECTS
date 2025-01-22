import React from "react";
import Image from "next/image";
import cartimage1 from "@/assets/dish/menu1 (2).png";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "@/app/utils/Types";
import { removeFromCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { MdDelete } from "react-icons/md";

const CheckOutCardImage = () => {
  const checkout = useSelector((state: ICart) => state.cart);
  console.log("check", checkout);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center gap-2">
      {checkout.map((res: any) => (
        <div key={res.id} className="bg-white text-black flex gap-2 m-2 justify-between">
          <div className="flex gap-3">
            <div className="flex items-center">
              <Image src={cartimage1} alt="cartItem" className="w-20" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-[16px]">{res.title}</h3>
              <h6 className="text-sm">{res.quantity}</h6>
              <h6 className="text-sm">
                {res.availability ? "Available" : "Not Available"}
              </h6>
            </div>
          </div>
          <div>
            <button
              onClick={() => dispatch(removeFromCart(res.uuid))}
              className="text-red-500 hover:text-red-700"
            >
              <MdDelete className="text-xl" />
            </button>{" "}
          </div>
        </div>
      ))}
      <div className="border-[1px] w-auto h-px mx-6"></div>
    </div>
  );
};

export default CheckOutCardImage;
