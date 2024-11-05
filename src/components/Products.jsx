import React from "react";
import HeroSections from "./Products/HeroSection";
import Designs from "./Products/Designs";
import Experience from "./Products/Experience";
import Gallery from "./Products/Gallery";
import Caption from "./Products/Caption";
import Stats from "./Products/Stats";

const Products = () => {
  return (
    <div>
      <HeroSections />
      <Stats />
      <Designs />
      <Experience />
      <Caption />
      <Gallery />
    </div>
  );
};

export default Products;
