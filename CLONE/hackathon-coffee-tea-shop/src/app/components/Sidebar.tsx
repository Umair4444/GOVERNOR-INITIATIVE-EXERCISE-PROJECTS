import React from "react";
import Image from "next/image";
import facebook from "@/app/assets/logo/FacebookLogo.png";
import twitter from "@/app/assets/logo/TwitterLogo.png";
import pintrest from "@/app/assets/logo/PinterestLogo.png";

const Sidebar = () => {
  return (
    <div className="w-fit h-full">
      <div className="w-[3%] flex flex-col gap-10 items-center mx-10">
        <div className="w-[1px] h-[150px] border-[1px]"></div>
        <div className="flex flex-col gap-6 cursor-pointer w-5">
          <Image src={facebook} alt="facebook" className="invert " />
          <Image src={twitter} alt="twitter" className="invert" />
          <Image src={pintrest} alt="pintrest" className="invert" />
        </div>
        <div className="w-[1px] h-[150px] border-[1px]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
