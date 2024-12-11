import React from "react";
import Image from "next/image";
import cartimage1 from "@/app/assets/psot1.png";
import cartimage2 from "@/app/assets/psot2.png";
import cartimage3 from "@/app/assets/psot3.png";

const CheckOutCardImage = () => {
  return (
    <div className="flex flex-col justify-center gap-2 ">
      <div className="bg-white text-black flex gap-2 m-2">
        <div className="flex items-center">
          <Image src={cartimage1} alt="cartItem" className="h-full" />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[16px]">Chicken Tikka Kabab</h3>
          <h6 className="text-sm">150 gm net</h6>
          <h6 className="text-sm">150$</h6>
        </div>
      </div>
      <div className="border-[1px] w-auto h-px mx-6"></div>
    </div>
  );
};

export default CheckOutCardImage;
