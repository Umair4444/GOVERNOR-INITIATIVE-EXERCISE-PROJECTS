import React from "react";
import TopCard from "../components/TopCard";
import AboutUs from "../components/AboutUs";
import AboutUsHeroSection from "../components/AboutUsHeroSection";

const aboutUs = () => {
  return (
    <div className="bg-white">
      <div>
        <TopCard title="About Us" />
      </div>
      <div className="py-20">
        {/* <AboutUs /> */}
        <AboutUsHeroSection />
      </div>
    </div>
  );
};

export default aboutUs;
