import React from "react";
import Image from "next/image";
import facebook from "@/assets/logo/FacebookLogo.png";
import twitter from "@/assets/logo/TwitterLogo.png";
import pintrest from "@/assets/logo/PinterestLogo.png";

const SideLogoBar = () => {
  return (
    <div className="w-fit h-full">
      <div className="w-[2%] h-full flex flex-col gap-14 items-center justify-center mx-10">
        <div className="w-[1px] h-2/6 border-[1px]"></div>
        <div className="flex flex-col gap-6 cursor-pointer w-5">
          <Image src={facebook} alt="facebook" className="invert " />
          <Image src={twitter} alt="twitter" className="invert" />
          <Image src={pintrest} alt="pintrest" className="invert" />
        </div>
        <div className="w-[1px] h-2/6 border-[1px]"></div>
      </div>
    </div>
  );
};

export default SideLogoBar;
