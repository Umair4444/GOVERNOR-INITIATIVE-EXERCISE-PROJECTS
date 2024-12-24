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
          <div className="w-screen flex md:flex-row sm:flex-col-reverse md:justify-between items-center md:items-start gap-4">
            <div className="w-5/12 h-full md:w-4/12 text-center flex flex-col gap-4 items-center justify-center mb-5 md:mb-0 md:mt-12 lg:mt-16 xl:mt-20  ">
              <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl sm:hidden md:block text-left w-full  ">
                Its Quick & Amusing!
              </h3>
              <h1 className="w-screen md:w-auto text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center md:text-left text-balance font-bold lg:mb-5">
                <span className="text-[#FF9F0D] ">Th</span>e Art of speed food
                Quality
              </h1>
              <p className="text-[16px] text-left font-normal sm:hidden lg:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
              <div className="flex justify-start w-full mt-5">
                <Button
                  title="See Menu"
                  width="w-72 md:w-fit"
                  xpadding="px-8 md:px-12"
                  ypadding="py-2 md:py-4"
                  rounded="rounded-xl md:rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-8/12">
              <Image src={heroImage} alt="heroImage" />
            </div>
          </div>
        </div>
    </>
  );
};

export default HeroSection;
