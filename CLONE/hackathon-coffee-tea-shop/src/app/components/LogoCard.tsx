import React from "react";
import Image from "next/image";

const Logo = (props: any) => {
  return (
    <div className="">
      <div className="bg-[#FF9F0D] h-fit w-fit py-2 px-4 flex flex-col gap-2">
        <Image src={props.image} alt={props.alt} className="" />
      </div>
      <h2 className="text-center p-2">{props.title}</h2>{" "}
    </div>
  );
};

export default Logo;
