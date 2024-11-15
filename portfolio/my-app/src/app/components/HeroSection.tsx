import React from "react";
import Image from "next/image";
import freelancer from "@/app/images/business-women-pointing.png";

const Hero = () => {
  return (
    <div className="bgImage pt-24">
      <main className="w-full h-screen  flex flex-row justify-around items-center gap-2">
        <div className="w-6/12 h-full text-center  flex flex-col items-center justify-center gap-3 max-md:scale-75 max-md:h-4 ">
          <h1 className="text-3xl font-extrabold uppercase">Umair Ali Khan</h1>
          <h2 className="text-2xl font-medium text-wrap px-10">
            A Solopreneur, A Web-Developer & An AI-Agent
          </h2>
          <p className="text-center px-10 text-wrap max-sm:hidden">
            A Software Developer Who wants to keep up with new trends and
            technology.
          </p>
          <p className="text-center px-10 text-wrap max-sm:hidden ">
            A freelancer wnats to deliver to the best of my abilities
          </p>
          <div className="flex items-center gap-8 mt-10">
            <button className="buttons max-md:w-40">Hire Me</button>
            <button className="buttons max-md:w-40">Explore More</button>
          </div>
        </div>
        <div className="w-6/12 h-full items-center justify-center relative top-7 flex max-md:hidden ">
          <Image
            src={freelancer}
            alt="freelancer"
            height={100}
            width={400}
            className=""
          ></Image>
        </div>
      </main>
    </div>
  );
};

export default Hero;
