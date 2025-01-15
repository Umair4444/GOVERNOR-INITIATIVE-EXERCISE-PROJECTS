import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import FoodGallery from "./components/FoodGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientReviews from "./components/ClientReviews";

export default function Home() {
  return (
    < >
    <div className=" scroll-smooth">

      <HeroSection />
      <AboutUs />
      <FoodGallery />
      <WhyChooseUs/>
      <ClientReviews /> 
    </div>
    </>
  );
}
