import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import heroImage from "@/app/assets/Image.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-screen h-full flex justify-between items-center">
          <div className="w-4/12 flex flex-col gap-10  ">
            <h3 className="text-3xl ">Its Quick & Amusing!</h3>
            <h1 className="text-6xl font-bold">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed food
              Quality
            </h1>
            <p className="text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <Button title="See Menu" width="fit" rounded="full"  xpadding="10" ypadding="4"  />
          </div>
          <div className="w-7/12 ">
            <Image src={heroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
