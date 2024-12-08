import React from "react";
import Image from "next/image";
import burgerlogo from "@/app/assets/Hamburger.png";
import winelogo from "@/app/assets/wine.png";
import cookielogo from "@/app/assets/cookie.png";
import Logo from "./LogoCard";
import choose1 from "@/app/assets/choose1.png";
import choose2 from "@/app/assets/fooditems4.png";
import choose3 from "@/app/assets/choose2.png";
import choose4 from "@/app/assets/choose3.png";
import choose5 from "@/app/assets/choose4.png";
import choose6 from "@/app/assets/choose5.png";
import { Great_Vibes } from "next/font/google";

const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const WhyChooseUs = () => {
  return (
    <div className="w-screen grid grid-cols-2 items-start">
      <div className="w-fit gap-4 grid grid-rows-2 p-2 ">
        <div className=" w-full grid grid-cols-2">
          <Image src={choose1} alt="food" />
          <Image
            src={choose2}
            alt="food"
            className="grid self-end px-5 h-3/4"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-6 justify-center ">
          <div className="grid">
            <Image src={choose3} alt="food" />
          </div>
          <div className="w-full grid ">
            <Image src={choose4} alt="food" />
          </div>
          <div className="w-full grid-rows-2 grid -ml-5 ">
            <Image src={choose5} alt="food" />
            <Image src={choose6} alt="food" />
          </div>
        </div>
      </div>

      <div className="w-2/3 grid gap-10">
        <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
          Why Choose us
        </h3>
        <h1 className="text-5xl font-bold">
          <span className="text-[#FF9F0D] font-helvetica">Ex</span>
          ta ordinary taste And Experienced
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex gap-5">
          <Logo image={cookielogo} alt="cookie" title="Cookie" />
          <Logo image={burgerlogo} alt="burger" title="Burger" />
          <Logo image={winelogo} alt="wine" title="Wine" />
        </div>
        <div className="bg-[#FF9F0D] w-3/5 rounded-md ">
          <div className="w-full py-2 px-5 flex items-center justify-around rounded-md bg-white ml-2 text-black ">
            <h1 className="text-[#FF9F0D] text-5xl font-bold">30+</h1>
            <div>
              <h3 className="text-lg">Years Of</h3>
              <h2 className="text-2xl font-bold">Experienced</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
