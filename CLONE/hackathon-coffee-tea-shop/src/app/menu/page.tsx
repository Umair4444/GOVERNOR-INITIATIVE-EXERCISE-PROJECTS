import React from "react";
import TopCard from "../components/TopCard";
import MenuCard from "../components/MenuCard";
import Menucard3 from "@/app/assets/menu3.png";
import Menucard4 from "@/app/assets/menu4.png";

const MenuPage = () => {
  return (
    <div>
      <div>
        <TopCard />
      </div>
      <div>
        <MenuCard image={Menucard3} />
      </div>
    </div>
  );
};

export default MenuPage;
