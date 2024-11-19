import { useState } from "react";
import image from "../assets/HomePage/LOGO.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-[#214A3E] flex justify-center items-center h-[90px] w-[100%]">
        {/* Logo */}
        <div className="flex justify-between cursor-pointer items-center w-[90%] max-xmd:w-[95%]">
          <img src={image} className="h-[21px]" onClick={() => navigate("/")} />

          {/* Hamburger Icon */}
          <div
            className="flex flex-col space-y-1 cursor-pointer hidden max-zmd:flex"
            onClick={toggleMenu}
          >
            <span
              className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>

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
              <li className=" text-white cursor-pointer text-[20px]">
                Products
              </li>
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
          <button
            onClick={() => navigate("/products")}
            className="bg-[#10251F] max-xmd:text-[20px] font-raleway max-zmd:hidden flex w-[184px] h-[50px] justify-center items-center text-[#ece6d1] px-[46px] py-[17px] rounded-[81px] text-[20px] leading-[120%]"
          >
            EXPLORE
          </button>
        </div>
      </nav>
      <div className="relative">
        <div
          className={`absolute top-0 left-0 w-full px-[29px] bg-[#214A3E] flex-col justify-between
      ${isMenuOpen ? "flex h-[349px] py-[25px]" : "h-0 overflow-hidden "}
      transition-all duration-300 ease-out z-50
    `}
          onClick={toggleMenu}
        >
          {/* Your menu content goes here */}
          <div
            className="text-[20px] text-[#FFFFFF] font-raleway cursor-pointer leading-[120%]"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div className="h-0.5 w-full bg-[#8FA49E]"></div>
          <div
            className="text-[20px] text-[#FFFFFF] font-raleway cursor-pointer leading-[120%]"
            onClick={() => navigate("/about-us")}
          >
            About
          </div>
          <div className="h-0.5 w-full bg-[#8FA49E]"></div>
          <div
            className="text-[20px] text-[#FFFFFF] font-raleway cursor-pointer leading-[120%]"
            onClick={() => navigate("/products")}
          >
            Product
          </div>
          <div className="h-0.5 w-full bg-[#8FA49E]"></div>
          <div
            className="text-[20px] font-raleway text-[#FFFFFF] cursor-pointer leading-[120%]"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </div>
          <div className="h-0.5 w-full bg-[#8FA49E]"></div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/products")}
              className="bg-[#10251F] font-raleway flex w-[285px] cursor-pointer h-[56px] justify-center items-center text-[#FFFCDB] rounded-[100px] text-[20px] leading-[120%]"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
