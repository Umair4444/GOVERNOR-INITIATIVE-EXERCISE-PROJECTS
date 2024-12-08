import React from "react";
import TopCard from "../components/TopCard";
import MenuCard from "../components/MenuCard";
import Menucard3 from "@/app/assets/menu3.png";
import Menucard4 from "@/app/assets/menu4.png";

const MenuPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <div>
          <TopCard />
        </div>
        <div className="flex flex-col ">
          <MenuCard image={Menucard3} />
          <MenuCard image={Menucard4} flexDirection="flex-row-reverse" />

        </div>
      </div>
    </>
  );
};

export default MenuPage;
