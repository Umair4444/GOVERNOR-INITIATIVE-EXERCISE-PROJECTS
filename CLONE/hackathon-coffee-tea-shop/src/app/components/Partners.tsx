import React from "react";
import Image from "next/image";
import partner1 from "@/app/assets/partner1.png";
import partner2 from "@/app/assets/partner2.png";
import partner3 from "@/app/assets/partner3.png";
import partner4 from "@/app/assets/partner4.png";
import partner5 from "@/app/assets/partner5.png";
import partner6 from "@/app/assets/partner6.png";

const Partners = () => {
  return (
    <div className="flex flex-col gap-3 mb-10">
      <p className="text-lg text-center">Partners & Clients</p>
      <h2 className="text-5xl font-bold text-center">
        We work with the best pepole
      </h2>
      <div className="flex items-center justify-center gap-6">
        <Image src={partner1} alt="partner" />
        <Image src={partner2} alt="partner" />
        <Image src={partner3} alt="partner" />
        <Image src={partner4} alt="partner" />
        <Image src={partner5} alt="partner" />
        <Image src={partner6} alt="partner" />
      </div>
    </div>
  );
};

export default Partners;
