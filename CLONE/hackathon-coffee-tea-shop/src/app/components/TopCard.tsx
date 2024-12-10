import React from "react";
import Topcard from "@/app/assets/TopCard.png";

const TopCard = (props:any) => {
  return (
    <div
      className="h-[410px] bg-center bg-cover"
      style={{ backgroundImage: `url(${Topcard.src})` }}
    >
      <div className="flex flex-col justify-center pt-24 gap-10">
        <h1 className="text-white text-4xl font-bold text-center">
          Our {props.title}
        </h1>
        <h1 className="text-white text-xl font-bold text-center ">
          {"Home > "} <span className="text-orange-500">{props.title}</span>
        </h1>
      </div>
    </div>
  );
};

export default TopCard;
