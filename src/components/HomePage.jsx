import { useState } from "react";
import HeroSection from "./HomePage/HeroSection";
import NewArrivalsSection from "./HomePage/NewArrivalsSection";
import TestimonialSection from "./HomePage/TestimonialSection";
import FAQSection from "./HomePage/FAQSection";
import CraftsSection from "./HomePage/CraftsSection";
import Texture from "./HomePage/Texture";
import ContactUs from "./HomePage/Contact";
import Collection from "./HomePage/Collection";
import CompanyLogos from "./HomePage/CompanyLogos";

function HomePage() {
  return (
    <div className="w-[100%]">
      <HeroSection />
      <CompanyLogos />
      <Collection />
      <Texture />
      <NewArrivalsSection />
      <CraftsSection />
      {/* <TestimonialSection /> */}
      <ContactUs />
      <FAQSection />
    </div>
  );
}

export default HomePage;
