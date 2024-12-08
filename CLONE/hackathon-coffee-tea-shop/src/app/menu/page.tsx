import React from "react";
import TopCard from "../components/TopCard";
import MenuCard from "../components/MenuCard";
import Menucard3 from "@/app/assets/menu3.png";
import Menucard4 from "@/app/assets/menu4.png";
import ClientReviews from "../components/ClientReviews";
import Partners from "../components/Partners";

const MenuPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20 bg-white text-black ">
        <div>
          <TopCard title="Menu" />
        </div>
        <div className="flex flex-col ">
          <MenuCard image={Menucard3} />
          <MenuCard image={Menucard4} flexDirection="flex-row-reverse" />
          <ClientReviews />
          <MenuCard image={Menucard3} />
          <MenuCard image={Menucard4} flexDirection="flex-row-reverse" />
          <Partners />
        </div>
      </div>
    </>
  );
};

export default MenuPage;
