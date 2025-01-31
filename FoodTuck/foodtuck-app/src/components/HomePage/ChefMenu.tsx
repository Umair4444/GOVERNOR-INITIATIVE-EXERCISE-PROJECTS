import { Great_Vibes } from "next/font/google";
import React from "react";
import food from "@/assets/dish/fooditems4.png";
import food1 from "@/assets/dish/Image.png";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const ChefMenu = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center gap-6 text-center mt-5 md:mt-10 lg:mt-20">
          <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
            Food Gallery
          </h3>
          <h1 className="text-5xl font-bold">
            <span className="text-[#FF9F0D] font-helvetica">Ch</span>oose Food
            Itmes
          </h1>
        </div>

        <Tabs defaultValue="breakfast" className="mt-10">
          <TabsList className="bg-black text-white flex justify-evenly items-center gap-6 text-xl font-bold uppercase ">
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="breakfast"
            >
              Breakfast
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="lunch"
            >
              Lunch
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="dinner"
            >
              Dinner
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="snacks"
            >
              Snacks
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="soups"
            >
              Soups
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="drinks"
            >
              Drinks
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-yellow-500 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-black"
              value="deserts"
            >
              Deserts
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="breakfast"
            className="mt-5 px-10 flex justify-between items-start"
          >
            <div className="w-72">
              <Image src={food1} alt="main image" />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-white grid grid-cols-2 gap-x-24 gap-y-4">
                <div className="flex gap-4">
                  <div className="w-16">
                    <Image src={food} alt="food" />
                  </div>
                  <div>
                    <h1>Lettuce Leaf</h1>
                    <p>description of dish</p>
                    <h2>Price of dish</h2>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="lunch"></TabsContent>
          <TabsContent value="dinner"></TabsContent>
          <TabsContent value="snacks"></TabsContent>
          <TabsContent value="soups"></TabsContent>
          <TabsContent value="drinks"></TabsContent>
          <TabsContent value="deserts"></TabsContent>
        </Tabs>

        <div></div>
      </div>
    </div>
  );
};

export default ChefMenu;
