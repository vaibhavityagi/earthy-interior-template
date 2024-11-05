import React from "react";
import image from "../assets/HomePage/LOGO.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#214A3E] flex justify-center items-center max-zmd:h-[63px] h-[90px] w-[100%]  ">
      {/* Logo */}
      <div className="flex justify-between items-center w-[90%] max-xmd:w-[95%]">
        <img src={image} className=" h-[21px]" />

        <ul className="flex justify-between font-raleway max-w-[533px] max-xmd:items-center flex max-zmd:hidden max-xmd:min-w-[466px]">
          <div
            className="px-[28px] max-xmd:px-[23px] max-xmd:h-[34px] max-xmd:py-[5px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer flex items-center rounded-full text-center"
            onClick={() => navigate("/")}
          >
            <li className="text-white cursor-pointer text-[20px] text-center">
              Home
            </li>
          </div>
          <div
            className="px-[28px] max-xmd:px-[23px] max-xmd:h-[34px] max-xmd:py-[5px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer flex items-center rounded-full text-center"
            onClick={() => navigate("/about-us")}
          >
            <li className="text-white cursor-pointer text-[20px]">About</li>
          </div>
          <div
            className="px-[28px] max-xmd:px-[23px] max-xmd:h-[34px] max-xmd:py-[5px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer flex items-center rounded-full text-center"
            onClick={() => navigate("/products")}
          >
            <li className=" text-white cursor-pointer text-[20px]">Products</li>
          </div>
          <div
            className="px-[28px] max-xmd:px-[23px] max-xmd:h-[34px] max-xmd:py-[5px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer flex items-center rounded-full text-center"
            onClick={() => navigate("/contact-us")}
          >
            <li className=" text-white cursor-pointer text-[20px]">
              Contact Us
            </li>
          </div>
        </ul>

        {/* Explore Button */}
        <button className="bg-[#10251F] max-xmd:text-[20px] font-raleway max-zmd:hidden flex  w-[184px] h-[56px] flex justify-center items-center text-[#ece6d1] px-[46px] py-[17px] rounded-[81px] text-[24px] leading-[120%]">
          EXPLORE
        </button>
        <div class="flex flex-col space-y-1 hidden max-zmd:flex">
          <span class="block w-8 h-1 bg-white"></span>
          <span class="block w-8 h-1 bg-white"></span>
          <span class="block w-8 h-1 bg-white"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
