import React from "react";
import Image from "next/image";
import coffee from "@/app/assets/Coffee.png";

const MenuCard = (props: any) => {
  return (
    <div className="flex ">
      <div>
        <Image src={props.image} alt="menu" />
      </div>
      <div className="flex flex-col">
        <Image src={coffee} alt="coffee" />
      </div>
    </div>
  );
};

export default MenuCard;
