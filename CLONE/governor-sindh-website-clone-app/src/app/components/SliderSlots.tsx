import React from "react";
import Slider from "./SliderCard";

const SliderSlots = () => {
  return (
    <div className=" w-full px-28 my-8">
      <div className="flex w-full  mx-auto justify-center gap-2 ">
        <Slider img_url="/4.jpg" alt_title="First Image" />
        <Slider img_url="/5.jpg" alt_title="Second Image" />
      </div>
    </div>
  );
};

export default SliderSlots;