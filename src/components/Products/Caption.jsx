import React from "react";
import image1 from "../../assets/Product/Rectangle1.png";
import image2 from "../../assets/Product/Rectangle2.png";

const Caption = () => {
  return (
    <div className="w-full h-full py-[128px] max-sm:py-[45px] flex justify-center items-center">
      <div className="font-display text-[86px] max-md:text-[40px] max-sm:text-[24px] font-playfair text-[#000000] w-[91.18%] leading-[128px] max-md:leading-[200%] font-semibold italic text-center">
        Our{" "}
        <img
          src={image1}
          className="w-[318px] h-[128px] max-md:w-[263px] max-md:h-[95px] max-sm:w-[130px] max-sm:h-[47px] inline-block "
          alt="Decorative text"
        />{" "}
        Contemporary Selections at Cementolime For The Modern{" "}
        <img
          src={image2}
          className="w-[318px] h-[128px] max-md:w-[263px] max-md:h-[95px] max-sm:w-[130px] max-sm:h-[47px] inline-block "
          alt="Decorative text"
        />{" "}
        Human
      </div>
    </div>
  );
};

export default Caption;
