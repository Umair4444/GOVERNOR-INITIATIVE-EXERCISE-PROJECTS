import React from "react";
import Chefgallery from "../components/Chefgallery";
import TopCard from "../components/TopCard";

const chefPage = () => {
  return (
    <div>
      <TopCard title="Chef" />
      <Chefgallery />
    </div>
  );
};

export default chefPage;
