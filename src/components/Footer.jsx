import React from "react";
import image from "../assets/HomePage/flogo.svg";
import image1 from "../assets/HomePage/x.png";
import image2 from "../assets/HomePage/instagram.png";
import image3 from "../assets/HomePage/facebook.png";
import { Link } from "react-router-dom";

const Footer = () => {

  
  return (
    <footer className="bg-[#214A3E] flex  text-white px-[75px] pb-[15px] pt-[96px] w-full max-md:h-[980px] max-md:pb-[0px] max-zsm:h-[1566px] max-zsm:px-[50px] ">
      <div className="flex flex-col w-full gap-[68px] max-zmd:gap-[96px] max-sm:gap-[69px]">
        {/* Logo and Description */}
        <div className="flex justify-between flex-wrap max-zmd:grid max-zmd:grid-cols-2 max-zmd:gap-[96px] max-zsm:flex max-zsm:flex-col ">
          <div className="pr-[17px] pb-[45px] max-w-[295px]   flex flex-col gap-[25px] max-md:pb-0 max-zsm:items-center max-zsm:max-w-[580px] max-sm:pr-0">
            <div className="flex items-center space-x-3 ">
              <img src={image} alt="Logo" className="h-[137px] w-[139px]" />
            </div>
            <p className="text-[14px] tracking-[5%] leading-[120%] text-left font-roboto font-extralight max-zsm:text-center max-sm:text-[12px]">
              Inspired by the raw beauty of stone, sand, & marble. Our textures
              bring the calming essence of nature indoors, adding depth &
              character.
            </p>
          </div>

          <div className="flex flex-col gap-[27px] text-left h-[247px] max-md:h-[204px]">
            <h3 className="font-bold font-raleway leading-[18px] text-[20px] max-zsm:text-center">
              COMPANY
            </h3>
            <div className="space-y-2 flex flex-col max-zsm:text-center">
              {/* <li className="text-[16px] font-roboto font-extralight leading-[30px]"> */}
              <Link to="/about-us" className="text-[16px] font-roboto font-extralight leading-[30px]">
                  About us
                </Link>
              {/* </li> */}
              {/* <li className="text-[16px] font-roboto font-extralight leading-[30px]"> */}
              <Link to="/about-us" className="text-[16px] font-roboto font-extralight leading-[30px]">
                Partner program
                </Link>
              {/* </li> */}
              {/* <li className="text-[16px] font-roboto font-extralight leading-[30px]"> */}
              <Link to="/contact-us" className="text-[16px] font-roboto font-extralight leading-[30px]">
                Contact us
                </Link>
              {/* </li> */}
              {/* <li className="text-[16px] font-roboto font-extralight leading-[30px]"> */}
              <Link to="/about-us" className="text-[16px] font-roboto font-extralight leading-[30px]">
                Privacy Policy
                </Link>
              {/* </li> */}
            </div>
          </div>

         <div className="flex flex-col gap-[27px] text-left">
            <h3 className="font-bold font-raleway leading-[18px] text-[20px] max-zsm:text-center">
              QUICK LINKS
            </h3>
            <div className="space-y-2 max-md:space-y-[13px] flex flex-col max-zsm:text-center">
              <Link to="/about-us"  className="text-[16px] font-roboto font-extralight leading-[30px]">
                Pricing
                </Link>
              <Link to="/about-us"  className="text-[16px] font-roboto font-extralight leading-[30px]">
                Reviews
                </Link>
              <Link to="/about-us"  className="text-[16px] font-roboto font-extralight leading-[30px]">
                Mail
                </Link>
              <Link to="/contact-us"  className="text-[16px] font-roboto font-extralight leading-[30px]">
                Contact us
                </Link>
            </div>
          </div>

          <div className="text-left flex flex-col space-y-[14px] gap-[8px] max-zsm:text-center max-sm:h-[246px]">
            <h3 className="font-bold tracking-[1.5px] font-raleway text-[20px] leading-[18px]">
              CONTACT
            </h3>
            {/* <p className="text-[24px] font-roboto font-extralight max-md:text-[20px] max-ysm:text-[16px]"> */}
            <p className="text-[24px] font-roboto leading-[120%] font-extralight max-md:text-[20px] max-534px:text-[16px]">
              info@cementolime.com
              <br />
              www.cementolime.com
            </p>
            <p className="font-bold pt-[20px] leading-[18px] tracking-[1.5px] font-raleway text-[20px]">
              HELPLINE
            </p>
            <p className="text-[24px] font-roboto font-extralight leading-[120%] max-md:text-[20px] max-sm:text-[16px]">
              +91 9580628537
            </p>
          </div>
        </div>

        <div>
          {/* Divider Line */}
          <div className="border-t border-[#F5F0D0]   "></div>

          {/* Footer Bottom */}
          <div className="flex flex-row justify-between items-center h-[155px] pt-[49px] pb-[48px] max-xsm:flex-col max-xsm:h-[267px]">
            {/* Left-side content */}
            <div className="w-[306px] h-[71px] flex flex-col gap-[9px] py-[1px] max-sm:text-center">
              <h2 className="text-[32px] leading-[22px] font-italiana">
                Cementolime
              </h2>
              <p className="text-[14px] font-roboto leading-[22px] max-sm:text-center">
                &copy; 2024 Cementolime, Inc. All rights reserved.
              </p>
            </div>

            {/* Right-side (Social Media Icons) */}
            <div className="flex gap-[23px]">
              <div className="w-[60px] cursor-pointer h-[60px] rounded-full flex justify-center items-center bg-white bg-opacity-15 border-white border-[1px] border-opacity-50	 px-[13px] py-[12px]">
                <img src={image1} className="w-[34px] h-[34px]" />
              </div>
              <div className="w-[60px] h-[60px] cursor-pointer rounded-full flex justify-center items-center bg-white bg-opacity-15 border-white border-[1px] border-opacity-50	 px-[13px] py-[12px]">
                <img src={image2} className="w-[30px] h-[30px]" />
              </div>
              <div className="w-[60px] flex justify-center cursor-pointer items-center h-[60px] rounded-full bg-white bg-opacity-15 border-white border-[1px] border-opacity-50	 px-[13px] py-[12px]">
                <img src={image3} className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
