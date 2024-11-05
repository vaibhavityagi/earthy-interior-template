import React from "react";
import benefit from "../../assets/AboutUs/benefits.png";
import benefits1 from "../../assets/AboutUs/benefits1.png";
import benefits2 from "../../assets/AboutUs/benefits2.png";
import benefits3 from "../../assets/AboutUs/benefits3.png";
import benefits4 from "../../assets/AboutUs/benefits4.png";

const Benefits = () => {
  return (
    <div className="w-[100%]  flex max-md:h-[548px] max-sm:h-[800px]">
      <div className="w-[50%] bg-green-900   max-md:hidden">
        <img src={benefit} className="w-full h-full "/>
      </div>
      <div className="w-[50%] max-md:w-[100%] ">
        <div className=" flex h-[50%] max-sm:flex-col-reverse  ">
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FAFAFA] items-center flex flex-col justify-center">
          <div className=" flex gap-[20px] max-md:gap-[28px] flex-col justify-between  w-[69.13%] ">
              <img src={benefits1} className="w-[76px] h-[80px]" />
              <div className="font-raleway text-[24px] max-sm:text-[16px] font-bold text-[#285A43] leading-[140%]">
                Quality Product
              </div>
              <div className="font-raleway text-[16px] font-light text-[#8490A1] leading-[150%] max-sm:text-[12px] ">
                Lorem Ipsum
              </div>
            </div>
          </div>
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#E5EDE4] items-center flex flex-col justify-center">
          <div className="flex gap-[20px] max-zmd:gap-[10px] flex-col justify-between  w-[69.13%]">
              <img src={benefits2} className="w-[119px] h-[83px]" />
              <div className="font-raleway text-[24px] max-sm:text-[16px] font-bold text-[#285A43] leading-[140%]">
                Breathable & Absorbs CO2
              </div>
              <div className="font-raleway text-[15px] font-light text-[#8490A1] leading-[120%] max-sm:text-[12px]">
                Our Lime Plaster Breathes Like Living Skin. Reducing Moisture
                And Absorbing CO2 For a Healthier.
              </div>
            </div>
          </div>
        </div>
        <div className=" flex h-[50%] max-sm:block">
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#E5EDE4] items-center flex flex-col justify-center">
          <div className="flex gap-[20px] max-md:gap-[10px] flex-col justify-between  w-[69.13%]">
              <img src={benefits3} className="w-[86px] h-[76px] max-md:w-[70px] max-md:h-[61px]" />
              <div className="font-raleway text-[24px] max-sm:text-[16px] font-bold text-[#285A43] leading-[140%]">
                Bio - degradable
              </div>
              <div className="font-raleway text-[15px] font-light text-[#8490A1] leading-[120%] max-sm:text-[12px] ">
                Crafted From Natural Limestone, Our Plaster Eventually Returns
                To The Earth, Leaving No Trace Behind.
              </div>
            </div>
          </div>
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FAFAFA] items-center flex flex-col justify-center">
            <div className="flex gap-[20px] max-md:gap-[10px] flex-col justify-between  w-[69.13%]">
              <img src={benefits4} className="w-[70px] h-[75px]" />
              <div className="font-raleway text-[24px] max-sm:text-[16px] font-bold text-[#285A43] leading-[140%]">
                Zero Carbon Product
              </div>
              <div className="font-raleway text-[15px] font-light text-[#8490A1] leading-[120%] max-sm:text-[12px] ">
                During Production. Any CO2 Released Is Reabsorbed As The Plaster 
                Cures, Making It A Sustainable Choice For A Greener Future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
