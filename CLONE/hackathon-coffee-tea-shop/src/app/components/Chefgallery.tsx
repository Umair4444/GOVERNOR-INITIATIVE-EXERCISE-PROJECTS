import React from "react";
import Chefcard from "./Chefcard";
import chef1 from "@/app/assets/chef1.png";
import chef2 from "@/app/assets/chef2.png";
import chef3 from "@/app/assets/chef3.png";
import chef4 from "@/app/assets/chef4.png";

const Chefgallery = () => {
  return (
    <div className="bg-white text-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 md:px-4 py-20">
      <Chefcard image={chef1} name="Johny" profession="Chef" />
      <Chefcard image={chef2} name="David" profession="Chef" />
      <Chefcard image={chef3} name="Daniel" profession="Chef" />
      <Chefcard image={chef4} name="Leonardo" profession="Chef" />
      <Chefcard image={chef2} name="Michael" profession="Chef" />
      <Chefcard image={chef1} name="Solomon" profession="Chef" />
      <Chefcard image={chef3} name="Edison" profession="Chef" />
      <Chefcard image={chef4} name="Albert" profession="Chef" />
      <Chefcard image={chef1} name="Steve" profession="Chef" />
      <Chefcard image={chef3} name="Camen" profession="Chef" />
      <Chefcard image={chef2} name="Tom" profession="Chef" />
      <Chefcard image={chef4} name="Nicholas" profession="Chef" />
    </div>
  );
};

export default Chefgallery;
