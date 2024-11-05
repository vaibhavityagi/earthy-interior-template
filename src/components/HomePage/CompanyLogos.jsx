import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/HomePage/logo1.png";
import logo2 from "../../assets/HomePage/logo2.png";
import logo3 from "../../assets/HomePage/logo3.png";
import logo4 from "../../assets/HomePage/logo4.png";
import logo5 from "../../assets/HomePage/logo5.png";
import logo6 from "../../assets/HomePage/logo6.png";
import logo7 from "../../assets/HomePage/logo7.png";
import logo8 from "../../assets/HomePage/logo8.png";
import logo9 from "../../assets/HomePage/logo9.png";

const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const CompanyLogos = () => (
    <Marquee speed={300}>
      <div className="flex gap-[100px] items-center h-[283px]">
    
      <img src={logo1} className="w-[332px] h-[93px] pl-[100px]" alt="Logo 1" />
      <img src={logo2} className="w-[296px] h-[93px]" alt="Logo 2" />
      <img src={logo3} className="w-[246px] h-[157px]" alt="Logo 3" />
      <img src={logo4} className="w-[213px] h-[154px]" alt="Logo 4" />
      <img src={logo5} className="w-[265px] h-[137px]" alt="Logo 5" />
      <img src={logo6} className="w-[184px] h-[153px]" alt="Logo 6" />
      <img src={logo7} className="w-[257px] h-[103px]" alt="Logo 7" />
      <img src={logo8} className="w-[369px] h-[129px]" alt="Logo 8" />
      <img src={logo9} className="w-[136px] h-[136px]" alt="Logo 9" />
  </div>
  </Marquee>
);

export default CompanyLogos;
