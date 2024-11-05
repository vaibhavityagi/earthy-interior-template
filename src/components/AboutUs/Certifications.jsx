import React from "react";
import logo from "../../assets/AboutUs/logo1.png";

const Certifications = () => {
  return (
    <div className="w-[100%] h-[158px] bg-[#2E2D28]  max-md:px-[0px] py-[22px] px-[96px] flex items-center justify-center ">
      <div className="flex items-center   w-[1161px] w-full justify-between">
        <div className="h-[46px] w-[109px] flex flex-col justify-between items-center opacity-[50%] transform -rotate-90">
          <div className="font-playfair italic text-[20px] text-[#FFFFFF] leading-[32px]">
            Certification
          </div>
          <div className="w-[64px] h-[1px] bg-[#FFFFFF] opacity-[50%]"></div>
        </div>

        <div className="flex gap-[31px] max-sm:gap-[14px]   items-center">
          <div className="w-[80px] h-[80px]">
            <img src={logo} className="w-full h-full" />
          </div>
          <div className="p-[10px] flex flex-col gap-[10px] max-md:p-[0]">
            <div className="text-[#FFFFFF] text-[40px] leading-[32px] font-playfair max-md:text-[24px] max-sm:text-[16px]">
              ISO 14001:2015 Certified
            </div>
            <div className="font-raleway text-[20px] max-sm:max-w-[210px] leading-[32px] text-[#807E6D] max-md:text-[14px] max-sm:leading-[120%] max-md:leading-[16.8px]">
              The ISO 14001 standard helps businesses to recognise and control
              their environmental impact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
