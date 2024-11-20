import React from "react";
import Card from "./Card";
import Image from "next/image";
import TechCard from "./TechCard";
import codingsymbol from "@/app/images/coding.jpg";
import html from "@/app/images/html2.jpg";
import nextjs from "@/app/images/nextjs-cover.jpg";
import mongodb from "@/app/images/mongoDB.jpg";
import tailwind from "@/app/images/tailwind.png";

const TechsCardsSlots = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-3 mt-12 mb-10 ">
          <Image
            className="mt-20 rounded-full "
            src={codingsymbol}
            alt={"logo"}
            width={70}
          ></Image>
          <h1 className="text-center text-4xl font-black uppercase mt-20">
            Services
          </h1>
        </div>
        <h3 className="text-wrap text-center px-20 overflow-hidden text-xl">
          I Provide and have expertise in the following Programs
        </h3>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <TechCard img_url={html} />
          <TechCard img_url={nextjs} />
          <TechCard img_url={mongodb} />
          <TechCard img_url={tailwind} />
        </div>
      </div>

      <div></div>
    </>
  );
};

export default TechsCardsSlots;
