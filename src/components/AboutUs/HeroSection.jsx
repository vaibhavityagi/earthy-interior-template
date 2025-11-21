import React from "react";
import image from "../../assets/AboutUs/hero.png";
import image1 from "../../assets/AboutUs/Vector.png";

const HeroSections = () => {
  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative bg-cover bg-center h-[621px] w-full flex flex-col justify-end items-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-[#0F0F0F] bg-opacity-[33%] max-w-[772px] max-md:max-w-[598px] max-sm:max-w-[395px] max-sm:text-[30px] max-md:text-[48px] px-[33px] py-[25px] font-raleway text-center text-[64px] leading-[120%] text-[#FFFEF6] font-bold">
        Crafting Timeless Spaces with Natural Elegance
      </div>
      <div
        className="text-[20px] flex flex-col cursor-pointer h-[238px] max-sm:h-[320px] items-center justify-center font-roboto leading-[32px] text-[#BDBDBD]"
        onClick={handleScrollToAboutUs}
      >
        <div className="h-[32px]">ABOUT US</div>
        <div className="w-[31px] h-[31px] flex justify-center items-center hover:translate-y-[5px] transition-transform duration-200">
          <img src={image1} className="w-[16px] h-[9px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
