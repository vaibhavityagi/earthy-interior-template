import React from "react";
import logo from "../../assets/AboutUs/logo1.png";

const Certifications = () => {
  return (
    <div className="w-full h-[158px] bg-[#2E2D28] pl-10 max-md:pl-0 flex items-center ">
      <div className="flex items-center w-[87.3%]  justify-between max-md:w-[93.4%]">
        <div className="h-[46px] w-[109px] flex flex-col left-[0%] justify-between  items-center opacity-[50%] transform -rotate-90">
          <div className="font-playfair italic text-[20px] text-[#FFFFFF] leading-[32px]">
            Certification
          </div>
          <div className="w-[64px] h-[1px] bg-[#FFFFFF] opacity-[50%]"></div>
        </div>

        <div className="flex gap-[31px] w-[81.5%] max-sm:gap-[14px] items-center max-md:w-[73.2%]">
          <img src={logo} className="w-[80px] h-[80px]" />
          <div className="p-[10px] flex flex-col gap-[10px] max-md:w-full max-md:p-[0]">
            <div className="text-[#FFFFFF] text-[40px] leading-[32px] font-playfair max-md:text-[24px] max-sm:text-[16px]">
              ISO 14001:2015 Certified
            </div>
            <div className="font-raleway text-[20px] max-sm:max-w-[210px] text-[#807E6D] max-md:text-[14px] leading-[120%] max-md:leading-[16.8px]">
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
