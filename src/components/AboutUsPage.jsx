import { useState } from "react";
import HeroSection from "./AboutUs/HeroSection.jsx";
import Certifications from "./AboutUs/Certifications.jsx";
import About from "./AboutUs/About";
import Benefits from "./AboutUs/Benefits.jsx";
import Services from "./AboutUs/Services.jsx";
import Area from "./AboutUs/Area.jsx";
import Subscribe from "./AboutUs/Subscribe.jsx";

function AboutUsPage() {
  return (
    <div className="w-[100%]">
      <HeroSection />
      <Certifications />
      <About />
      <Benefits />
      <Services />
      <Area />
      <Subscribe />
    </div>
  );
}

export default AboutUsPage;
