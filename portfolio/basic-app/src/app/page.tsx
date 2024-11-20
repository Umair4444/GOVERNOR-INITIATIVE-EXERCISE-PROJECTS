import Image from "next/image";
import Hero from "./components/HeroSection";
import Card from "./components/Card";
import Cardslots from "./components/Cardslots";
import TechsCards from "./components/TechCardsSlots";

export default function Home() {
  return (
    <>
      <Hero />
   
      <Cardslots />
      <TechsCards />
    </>
  );
}
