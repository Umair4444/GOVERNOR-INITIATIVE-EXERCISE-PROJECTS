import React from "react";
import Topcard from "@/assets/TopCard.png";

const TopCard = (props: any) => {
  return (
    <div
      className="bg-center h-96 bg-cover w-full"
      style={{ backgroundImage: `url(${Topcard.src})` }}
    >
      <div className="h-full flex flex-col justify-center items-center text-center gap-4">
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
