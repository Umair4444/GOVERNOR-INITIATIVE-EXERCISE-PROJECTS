import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-[1920px] h-[461px] bg-[#043873] pt-[140px] pb-[32px] px-[220px] flex gap-48 text-white">
      <div className="w-[1480px] h-[289px] flex flex-col gap-28">
        <div className="w-[1480px] h-[169px] flex gap-28">
          <div className="w-[296px] h-[169px] flex flex-col gap-4">
            <Image src={"/Logo.png"} alt="logo" width={191} height={34} />
            <p className="font-normal text-lg w-[240px] h-[120px]">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="w-[295px] h-[127px] flex flex-col gap-4">
            <ul className=" font-bold text-lg">
              Products
              <li className="list-none font-normal text-lg">Overview</li>
              <li className="list-none font-normal text-lg">Pricing</li>
              <li className="list-none font-normal text-lg">
                Customer Storeies
              </li>
            </ul>
          </div>
          <div className="w-[295px] h-[127px] flex flex-col gap-4">
            <ul className=" font-bold text-lg">
              Resource
              <li className="list-none font-normal text-lg">Blog</li>
              <li className="list-none font-normal text-lg">
                Guides & tutorials{" "}
              </li>
              <li className="list-none font-normal text-lg">Help center </li>
            </ul>
          </div>
          <div className="w-[295px] h-[127px] flex flex-col gap-4">
            <ul className=" font-bold text-lg">
              Company
              <li className="list-none font-normal text-lg">About Us</li>
              <li className="list-none font-normal text-lg">Career </li>
              <li className="list-none font-normal text-lg">Media Kit</li>
            </ul>
          </div>
        </div>
      <div>
        <p className="font-normal text-lg text-center">©2021 Whitepace LLC.</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
