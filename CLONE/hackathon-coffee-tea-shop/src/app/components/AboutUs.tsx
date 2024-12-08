import React from "react";
import Image from "next/image";
import checkbox from "@/app/assets/logo/Check.png";
import aboutus1 from "@/app/assets/aboutus_1.png";
import aboutus2 from "@/app/assets/aboutus_2.png";
import aboutus3 from "@/app/assets/aboutus_3.png";
import { Great_Vibes } from "next/font/google";
import Button from "./Button";

const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const AboutUs = () => {
  return (
    <div className=" w-full grid grid-cols-2 grid-rows-1 justify-items-center mt-20">
      <div className="w-10/12 grid gap-7 border-blue-300">
        <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
          about us
        </h3>
        <h1 className="text-5xl font-bold">
          <span className="text-[#FF9F0D] font-helvetica">We</span>
          Create the best foody product
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex gap-3 items-center">
          <Image src={checkbox} alt="checkbox" className="invert" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <Button title="Read More" />
      </div>
      <div className="w-8/12 grid gap-2">
        <div className="w-full h-1/2">
          <Image src={aboutus1} alt="aboutus" />
        </div>
        <div className="w-full h-full grid grid-cols-2 gap-2">
          <div>
            <Image src={aboutus2} alt="aboutus" />
          </div>
          <div>
            <Image src={aboutus3} alt="aboutus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
