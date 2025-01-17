import HeroSection from "@/components/extra/Hero-Component";
import AboutUsHeroSection from "@/components/About-Us-Component";
import FoodGalleryComponent from "@/components/Food-Gallery-Component";
import WhyChooseUsComponent from "@/components/Why-Choose-Us-Component";
import ChefMenu from "@/components/ChefMenu";
import { CarouselDemo } from "@/components/Hero-Section";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div>
        {/* <HeroSection /> */}
        <CarouselDemo />
        <AboutUsHeroSection />
        <FoodGalleryComponent />
        <WhyChooseUsComponent />
        <ChefMenu />
      </div>
    </main>
  );
}
