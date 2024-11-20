import React from "react";
import benefit from "../../assets/AboutUs/benefits.png";
import benefits1 from "../../assets/AboutUs/benefits1.png";
import benefits2 from "../../assets/AboutUs/benefits2.png";
import benefits3 from "../../assets/AboutUs/benefits3.png";
import benefits4 from "../../assets/AboutUs/benefits4.png";

const Benefits = () => {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="text-[64px] max-md:text-[48px] max-sm:text-[36px] font-bold font-raleway text-[#081310]">
        Why Choose Us?
      </div>
      <div className="text-[24px] max-md:text-[20px] max-sm:text-[14px] max-md:w-[60%] max-sm:w-[82%] font-roboto text-[#8FA49E] w-[62%] text-center leading-[120%] tracking-[5%]">
        Lorem ipsum Crafted From Natural Limestone, Our Plaster Eventually
        Returns To The Earth, Leaving No Trace Behind.
      </div>
      {/* <div className="w-[50%] bg-green-900   max-md:hidden">
        <img src={benefit} className="w-full h-full "/>
      </div> */}
      <div className="w-[89.24%] max-md:w-[90%]  mt-[60px]  flex flex-col gap-[50px]">
        <div className=" flex w-full gap-[20px] max-md:flex-wrap  ">
          <div className="flex gap-[20px]  w-[66%] max-md:w-[100%] max-sm:flex-col">
            <div className="w-[50%] shadow-lg max-sm:w-[100%] max-sm:h-[50%] bg-[#FFFFFF] px-[24px] flex flex-col justify-center py-[46px]">
              <div className=" flex gap-[20px] max-md:gap-[28px] flex-col h-full max-sm:items-center ">
                <img src={benefits1} className="w-[76px] h-[80px]" />
                <div className="font-raleway text-[32px] font-bold text-[#285A43] leading-[140%] ">
                  Quality Product
                </div>
                <div className="font-raleway text-[20px] font-light text-[#8490A1] leading-[150%] max-sm:leading-[24px] max-sm:text-center ">
                  Our Lime Plaster Breathes Like Living Skin. Reducing Moisture
                  And Absorbing CO2 For a Healthier. More Comfortable Home
                </div>
              </div>
            </div>
            <div className="w-[50%] shadow-lg max-md:w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FFFFFF] px-[24px] flex flex-col justify-center py-[46px]">
              <div className="flex gap-[20px] max-zmd:gap-[10px] flex-col h-full max-sm:items-center">
                <img src={benefits2} className="w-[119px] h-[83px]" />
                <div className="font-raleway text-[32px] max-sm:text-center font-bold text-[#285A43] leading-[140%]">
                  Breathable & Absorbs CO2
                </div>
                <div className="font-raleway text-[20px] font-light text-[#8490A1] max-sm:text-center leading-[120%] max-sm:leading-[24px]">
                  Our Lime Plaster Breathes Like Living Skin. Reducing Moisture
                  And Absorbing CO2 For a Healthier. More Comfortable Home
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] w-[33%] max-md:w-[100%] max-sm:flex-col">
            {/* <div className=" flex h-[50%] max-sm:block"> */}
            <div className="w-[100%] shadow-lg max-md:w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FFFFFF] px-[24px] flex flex-col justify-center py-[46px]">
              <div className="flex gap-[20px] max-md:gap-[10px] flex-col h-full max-sm:items-center">
                <img
                  src={benefits3}
                  className="w-[86px] h-[76px] max-md:w-[70px] max-md:h-[61px]"
                />
                <div className="font-raleway text-[32px] font-bold text-[#285A43] leading-[140%]">
                  Bio - degradable
                </div>
                <div className="font-raleway text-[20px] font-light text-[#8490A1] max-sm:text-center leading-[120%] max-sm:leading-[24px] ">
                  Crafted From Natural Limestone, Our Plaster Eventually Returns
                  To The Earth, Leaving No Trace Behind.
                </div>
              </div>
            </div>
            <div className="w-[50%] hidden max-md:flex shadow-lg max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FFFFFF] px-[24px] flex-col justify-center py-[46px]">
              <div className="flex gap-[20px] max-md:gap-[10px] max-sm:items-center flex-col h-full">
                <img
                  src={benefits4}
                  className="w-[86px] h-[76px] max-md:w-[70px] max-md:h-[61px]"
                />
                <div className="font-raleway text-[32px] max-sm:text-center font-bold text-[#285A43] leading-[140%]">
                  Zero Carbon Product
                </div>
                <div className="font-raleway text-[20px] font-light text-[#8490A1] max-sm:text-center leading-[120%] max-sm:leading-[24px]">
                  During Production. Any CO2 Released Is Reabsorbed As The
                  Plaster Cures, Making It A Sustainable Choice For A Greener
                  Future.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-md:hidden shadow-lg max-sm:w-[100%] max-sm:h-[50%] h-[289px] pl-[50px] bg-[#FFFFFF] flex flex-col justify-center">
          <div className="flex gap-[20px] max-md:gap-[10px] flex-col   ">
            <img src={benefits4} className="w-[70px] h-[75px]" />
            <div className="font-raleway text-[32px] max-sm:text-[16px] font-bold text-[#285A43] leading-[140%]">
              Zero Carbon Product
            </div>
            <div className="font-raleway text-[20px] font-light text-[#8490A1] leading-[120%] max-sm:text-[12px] ">
              During Production. Any CO2 Released Is Reabsorbed As The Plaster
              Cures, Making It A Sustainable Choice For A Greener Future.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
