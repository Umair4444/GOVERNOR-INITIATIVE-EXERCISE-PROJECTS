import React from "react";
import Image from "next/image";
import chef1 from "@/app/assets/chef1.png";
import chef2 from "@/app/assets/chef2.png";
import chef3 from "@/app/assets/chef3.png";

const Chefcard = (props: any) => {
  return (
    <div className="flex flex-col items-center ">
      <Image src={chef1} alt="chef"/>
      <h1 className="text-[20px] font-bold">{props.name}</h1>
      <h1 className="text-lg">{props.profession}</h1>
    </div>
  );
};

export default Chefcard;
