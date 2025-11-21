import React from "react";
import image from "../../assets/HomePage/new_arrival.png";
import { useNavigate } from "react-router-dom";
const NewArrivalsSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative h-[615px] flex items-start justify-start px-[260px] py-[98px] w-full max-md:px-[100px] max-sm:px-[35px] bg-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}

      {/* Content */}
      <div className="relative z-10 text-white w-[383px] flex flex-col gap-[23px]">
        <div className="flex items-center relative">
          {/* Line */}
          <div className="w-[64px] h-[2px] bg-white mr-3"></div>
          {/* New Arrivals Text */}
          <p className="uppercase font-raleway tracking-widest font-bold text-[14px]">New Arrivals</p>
        </div>
        <h1 className="text-[48px] font-raleway font-bold leading-[109%] text-left">Discover the latest clay</h1>

        {/* Button with Arrow */}
        <button
          className=" font-raleway hover:bg-[#1D352E]  hover:w-[185px] transition-all duration-200 w-[179px] hover:gap-[20px] h-[50px] flex gap-[14px] text-[20px] relative bg-[#214A3E] py-[13px] px-[20px] rounded-full text-white  flex items-center justify-center transition-all"
          onClick={() => {
            navigate("/products");
            window.scrollTo(0, 0); // Scrolls to the top of the page
          }}
        >
          Purchase
          <span className="  w-[29px] h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
