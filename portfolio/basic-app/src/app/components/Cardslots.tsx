import React from "react";
import Card from "./Card";
import backgroundImage from "@/app/images/card.jpg";

const Cardslots = () => {
  let idx = 0;
  return (
    <>
      <div className="flex flex-col pt-20">
        <div className=" flex flex-col items-center justify-center gap-3 mb-10">
          <h1 className="text-center text-4xl font-black uppercase mt-10 mb-10 px-5 ">
            Featured Projects
          </h1>
          <p className="text-wrap text-justify px-20 overflow-hidden text-xl max-sm:hidden">
            Every project I take on is an opportunity to create something
            impactful. From concept to completion, I craft tailored solutions
            that help my clients stand out in their industries. Below, you’ll
            find a collection of my work—each project telling its own story of
            creativity, collaboration, and results. Dive into these case studies
            to see how I bring ideas to life and deliver results that speak for
            themselves.{" "}
          </p>
        </div>

        <div className="flex flex-row  min-h-full w-full  items-center gap-4 justify-center text-center max-sm:flex-col">
          <Card
            img_url={backgroundImage}
            alt_title={`Project ${idx++}`}
            hovereffect="hover:rotate-3 hover:bg-black"
          />
          <Card
            img_url={backgroundImage}
            alt_title={`Project ${idx++}`}
            hovereffect="hover:scale-105 hover:bg-black"
          />
          <Card
            img_url={backgroundImage}
            alt_title={`Project ${idx++}`}
            hovereffect="hover:-rotate-3 hover:bg-black"
          />
        </div>
      </div>
    </>
  );
};

export default Cardslots;
