import { HomeSection } from "./components/HomeSection";
import { Navbar } from "./components/HomeSection"
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50">
      <HomeSection />
      <WhyChooseUs />
      <OurServices />
      <Pricing />
      <Footer />
    </div>
  );
}
