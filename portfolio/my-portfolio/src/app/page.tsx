import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BgImage from "./components/BgImage";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        {/* <BgImage/> */}
        <HeroSection />
      </div>
    </>
  );
}
