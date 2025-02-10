import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer"; // ✅ Re-added Footer

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <WhyChooseUs />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Footer /> {/* ✅ Re-added Footer here */}
    </div>
  );
}
