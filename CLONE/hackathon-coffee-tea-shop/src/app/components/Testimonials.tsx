import React from "react";
import Image from "next/image";
import client from "@/app/assets/client.png";
import quotes from "@/app/assets/Quotes.png";
import ShoppingCart from "./ShoppingCart";
import fullstars from "@/app/assets/fullstar.png";
import emptystars from "@/app/assets/emptystar.png";
import Ratings from "./ratings";

const Testimonials = () => {
  return (
    <div className="text-black bg-white w-screen flex items-start justify-center flex-col px-32 ">
      <div className="flex items-start justify-start flex-col mb-32">
        <h2 className="text-yellow-500 text-3xl">Testimonials</h2>
        <h1 className="text-5xl font-bold">What our client are saying</h1>
      </div>
      <div className="shadow-2xl w-2/3 pb-10 mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <div className="relative bottom-20 -mb-20">
            <Image src={client} alt="client" />
          </div>
          <div className=" ">
            <Image src={quotes} alt="quotes" />
          </div>
          <div className="text-center px-40">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              cumque at eaque blanditiis praesentium, laboriosam cum saepe porro
              fuga quae voluptates, dolorem suscipit autem. Nisi omnis
              repudiandae quisquam corporis hic?
            </p>
          </div>
          <div>
            <Ratings rating="3" />
          </div>
          <div>
            <h1>Alam Hussain</h1>
            <h2>Food Specialist</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
