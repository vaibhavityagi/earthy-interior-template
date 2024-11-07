import React from "react";
import image from "../../assets/Contact/herobanner.png";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[316px] flex justify-center items-center max-md:h-[235px] max-sm:h-[205px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="font-raleway text-[64px] text-[#403F37] font-bold max-sm:text-[40px]"
        style={{
          textShadow: "2px 2px 2px 5.8px rgba(0, 0, 0, 0.54)", // Text shadow isn't directly available in Tailwind
        }}
      >
        Contact Us
      </div>
    </div>
  );
};

export default HeroSection;
