import React from "react";
import banner from "../../assets/AboutUs/subscription.png";

const Subscribe = () => {
  return (
    <div
      className="w-[100%] h-[400px] max-md:h-[338px] max-sm:h-[426px] px-[100px] max-md:px-[36px]  justify-center flex items-center "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center max-sm:flex-col w-full max-sm:gap-[32px]">
        <div className="font-raleway max-w-[570px] max-md:max-w-[262px] w-full text-[24wwpx]  text-[#FFFFFF] leading-[150%] max-md:text-[16px] max-sm:text-[20px] max-sm:max-w-[349px]">
          <span className="font-bold italic text-[32px]">Join Our Mailing List</span> to Receive updates on new
          textures, project inspirations, and exclusive Claymist insights
        </div>
        <form className="flex gap-[25px] amx-sm:gap-[32px] max-sm:flex-col w-full justify-end max-sm:items-center ">
          <input
            placeholder="Enter your email"
            className="placeholder-text-[16px] placeholder-font-raleway placeholder-text-[#FFFFFF] px-[25px] rounded-[5px] py-[12px] w-full max-w-[470px] max-md:max-w-[238px] max-sm:max-w-full h-[48px] bg-transparent border-2 border-[#FFFFFF] "
          />
          <button className=" bg-[#214A3E] text-[#FFFFFF] flex items-center justify-center font-raleway font-bold max-md:font-medium text-[16px] rounded-[5px] w-[145px] h-[48px] max-md:w-[130px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
