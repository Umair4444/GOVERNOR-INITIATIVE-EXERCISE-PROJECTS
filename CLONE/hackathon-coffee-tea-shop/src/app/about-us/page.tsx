import React from "react";
import TopCard from "../components/TopCard";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import WhyChooseUs2 from "../components/WhyChooseUs2";
import Image from "next/image";
import person from "@/app/assets/Person.png";
import coffee from "@/app/assets/Coffee.png";
import student from "@/app/assets/Student.png";
import bgimage from "@/app/assets/bgimage.png";
import chef from "@/app/assets/chef.png";
import Chefcard from "../components/Chefcard";
import Testimonials from "../components/Testimonials";

const AboutUs = () => {
  const teamMembers = [
    { image: chef, name: "Henry", profession: "Chef" },
    { image: chef, name: "Anna", profession: "Sous Chef" },
    { image: chef, name: "James", profession: "Pastry Chef" },
    { image: chef, name: "Laura", profession: "Chef de Partie" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Top Section */}
      <TopCard title="About Us" />

      {/* Hero Section */}
      <div className="py-20">
        <AboutUsHeroSection />
      </div>

      {/* Why Choose Us */}
      <div className="text-black text-center">
        <h1 className="text-5xl font-bold mb-4">Why Choose Us</h1>
        <p className="w-11/12 md:w-2/3 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          nulla voluptas eveniet error neque laborum.
        </p>
      </div>
      <WhyChooseUs2 />

      {/* Highlights Section */}
      <div className="flex flex-wrap justify-around items-center text-black pb-24 w-full">
        {[
          {
            img: student,
            title: "Best Chef",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
          },
          {
            img: coffee,
            title: "120 Items Food",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
          },
          {
            img: person,
            title: "Best Environment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 max-w-xs"
          >
            <Image src={item.img} alt={item.title} />
            <h1 className="text-2xl font-bold text-center">{item.title}</h1>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="">
        <div className="relative h-[6] w-full">
          <Image
            src={bgimage}
            alt="Background"
            // layout="fill"
            objectFit="cover"
            height={500}
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold">Team Member</h1>
          <p className="w-11/12 md:w-2/3 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            consequatur a nostrum voluptates neque aliquid ipsa quas et animi?
            Eveniet.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <Chefcard
              key={index}
              image={member.image}
              name={member.name}
              profession={member.profession}
              width="w-1/3 md:w-2/3 lg:w-full"
            />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default AboutUs;
