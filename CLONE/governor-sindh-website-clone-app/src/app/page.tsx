import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardSlots from "./components/CardSlots";
import SliderSlots from "./components/SliderSlots";
import CoreCourse from "./components/CoreCourse";
import AdvancedCourse from "./components/AdvanceCourse";
import Dropdown from "./components/dropmenu";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardSlots />
      <SliderSlots />
      <CoreCourse />
      <AdvancedCourse />
    </>
  );
}
