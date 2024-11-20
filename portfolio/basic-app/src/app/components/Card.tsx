import React from "react";
import Image from "next/image";

type CardProps = {
  img_url: any;
  alt_title: string;
  hovereffect?: string;
};

const Card = ({ img_url, alt_title, hovereffect }: CardProps) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center rounded-none outline-none w-full shadow-lg bg-slate-300 text-center mx-10 mt-10 ${hovereffect} `}
      >
        <Image src={img_url} alt={alt_title} className=" rounded-xl w-full "></Image>
        <h2 className="text-xl py-1 font-extrabold text-center uppercase bg-inherit w-full h-full">
          {alt_title}
        </h2>
      </div>
    </>
  );
};

export default Card;
