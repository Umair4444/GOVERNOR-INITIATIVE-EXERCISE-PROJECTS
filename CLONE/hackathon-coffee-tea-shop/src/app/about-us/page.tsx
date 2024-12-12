import React from "react";
import TopCard from "../components/TopCard";
import AboutUs from "../components/AboutUs";

const aboutUs = () => {
  return (
    <div>
      <div>
        <TopCard title="About Us" />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
};

export default aboutUs;
