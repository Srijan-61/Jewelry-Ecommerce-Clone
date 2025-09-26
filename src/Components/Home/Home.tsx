import HeroSection from "./HeroSection";
import { ProductSection } from "./productSectiom";
import ExclusiveCollection from "./ExclusiveCollection";
import OurStory from "./OurStory";
import WhyChooseUs from "./WhyChooseUs";
import LargeImageSection from "./LargeImageSection";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <div className="bg-gray-200">
      <div className="bg-primary overflow-hidden">
        <HeroSection />
        <ProductSection />
        <ExclusiveCollection />
        <OurStory />
        <WhyChooseUs />
        <LargeImageSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default Home;
