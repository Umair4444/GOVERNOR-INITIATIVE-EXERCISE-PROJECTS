import React from "react";
import TopCard from "../components/TopCard";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import WhyChooseUs2 from "../components/WhyChooseUs2";

const aboutUs = () => {
  return (
    <div className="bg-white">
      <div>
        <TopCard title="About Us" />
      </div>
      <div className="py-20">
        <AboutUsHeroSection />
      </div>
      <div>
        <WhyChooseUs2 />
      </div>
    </div>
  );
};

export default aboutUs;
