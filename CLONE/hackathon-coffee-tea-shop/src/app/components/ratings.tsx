import React from "react";
import Image from "next/image";
import emptystar from "@/app/assets/emptystar.png";
import fullstar from "@/app/assets/fullstar.png";
import img1 from "@/app/assets/Mask Group.png";

const Ratings = (props: any) => {
  return (
    <div>
      <div className=" flex items-center">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-bold">{props.item}</h1>
          <div className="flex flex-col items-start">
            <div className="flex gap-2">
              {Array.from({ length: props.maxStars || 5 }).map((_, index) => (
                <Image
                  key={index}
                  src={index < props.rating || 0 ? fullstar : emptystar} // Choose filled or empty
                  alt={index < props.rating ? "Filled Star" : "Empty Star"}
                  width={20}
                  height={20}
                  className="inline-block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
