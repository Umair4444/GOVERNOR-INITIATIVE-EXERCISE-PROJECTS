import React from "react";
import FaqCard from "./faqCard";

const Faqs = () => {
  return (
    <div className="">
      <div className="bg-white text-[#333333] py-24">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-5xl font-bold">Questions Looks Here</h1>
          <p className="text-[16px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestiae ipsa totam
            quidem?
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-4 ">
          <FaqCard title="How we serve food?" />
          <FaqCard title="How is our food quality?" />
          <FaqCard title="How do we give home delivery?" />
          <FaqCard title="How can we get in touch with you?" />
          <FaqCard title="What will be delivered? And When?" />
          <FaqCard title="Is this restaurant 24 hours open?" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
