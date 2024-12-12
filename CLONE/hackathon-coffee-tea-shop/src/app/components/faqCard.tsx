import React from "react";
import Image from "next/image";
import plus from "@/app/assets/logo/Plus.png";

const FaqCard = (props: any) => {
  return (
    <div className="py-2 px-4 bg-[#FAF7F2] flex flex-col gap-3 flex-wrap">
      <div className="flex justify-between items-center gap-5 ">
        <h1 className="font-bold text-[16px] md:text-lg">{props.title}</h1>
        <Image src={plus} alt="plus" className="" />
      </div>
      <p className="text-[12px] md:text-[16px] text-start ">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi, dolore?
      </p>
    </div>
  );
};

export default FaqCard;
