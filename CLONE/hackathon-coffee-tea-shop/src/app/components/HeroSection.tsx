import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import heroImage from "@/app/assets/Image.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <div className="flex ">
        <div className=" hidden md:block">
          <Sidebar />
        </div>
        <div className="w-screen h-full flex md:flex-row sm:flex-col-reverse md:justify-between items-center md:items-start gap-4">
          <div className="w-full md:w-4/12 text-center flex flex-col gap-10 justify-center items-center ">
            <h3 className="text-xl md:text-3xl sm:hidden md:w-full  ">
              Its Quick & Amusing!
            </h3>
            <h1 className="w-full text-xl md:text-4xl lg:text-6xl  font-bold">
              <span className="text-[#FF9F0D] ">Th</span>e Art of speed food
              Quality
            </h1>
            <p className="text-[16px] font-normal sm:hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <Button
              title="See Menu"
              width="w-72 md:w-fit"
              xpadding="px-8 md:px-12"
              ypadding="py-2 md:py-4"
              rounded="rounded-xl md:rounded-full"
            />
          </div>
          <div className="w-7/12">
            <Image src={heroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
