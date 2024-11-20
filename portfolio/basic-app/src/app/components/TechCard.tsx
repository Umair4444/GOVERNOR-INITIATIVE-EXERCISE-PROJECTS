import React from "react";
import Image from "next/image";

type CardProps = {
  img_url: any;
};

const TechsCard = ({ img_url }: CardProps) => {
  return (
    <>
      <div className="flex flex-col rounded-2xl w-fit overflow-hidden shadow-lg bg-slate-500 text-center mx-10 mt-10 hover:scale-110 cursor-pointer ">
        <Image
          src={img_url}
          alt={"service-image"}
          width={400}
          height={200}
          className=" rounded-lg"
        ></Image>
      </div>
    </>
  );
};

export default TechsCard;
