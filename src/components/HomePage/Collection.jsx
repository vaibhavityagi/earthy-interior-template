import React, { useState } from "react";
import image1 from "../../assets/HomePage/collection_1.png";
import trendy from "../../assets/HomePage/collection_2.png";
import aes from "../../assets/HomePage/collection_3.png";

const Collection = () => {
  const [hovered, setHovered] = useState(null);
  const handleDownload = () => {
    // Provide the path to the PDF in the `public` folder
    const link = document.createElement("a");
    link.href = `/sample.pdf`; // Update with your actual file path
    link.download = "catalogue.pdf"; // Filename for the downloaded PDF
    link.click();
  };
  return (
    <div className="flex items-center w-full justify-end h-full py-[90px] pl-[68px] max-xmd:pl-[0] max-md:justify-end  max-sm:pl-[10px]">
      <div className="w-full h-full gap-[93px]  max-w-[96.3%] flex items-center flex-row justify-between max-md:flex-col max-md:justify-center max-md:items-start  max-sm:max-h-[576px] max-md:h-[886px] max-md:gap-[45px]">
        {/* Left Content */}
        {/* <div className="w-full bg-red-900  max-w-[40.6%] flex flex-col gap-[36px] max-md:gap-[0]  justify-between  max-md:items-center max-sm:max-w-full max-sm:pr-[20px] max-md:pr-[40px] max-md:max-w-full max-xmd:max-w-[41.7%] max-md:flex-row "> */}
        <div className="w-full  max-w-[557px] flex flex-col gap-[36px] max-md:gap-[0]  justify-between  max-md:items-center max-sm:max-w-full max-sm:pr-[20px] max-md:pr-[40px] max-md:max-w-full max-xmd:max-w-[41.7%] max-md:flex-row ">
          <h1 className="text-[64px] font-bold  font-raleway text-left leading-[120%] max-md:text-[40px] max-xmd:text-[48px] max-sm:text-[24px]">
            Elevating Spaces with Nature-Driven Craft <span className="text-[#214A3E] italic">Eco-Friendly</span>{" "}
            Elegance
          </h1>
          <p className="text-[#758195] text-left max-534px:hidden font-raleway text-[20px] leading-[120%] max-xmd:text-[15px] max-xmd:max-w-[406px] max-sm:text-[12px] max-md:max-w-[301px] max-sm:max-w-[153px] max-md:text-right">
            Our clay and lime finishes blend modern elegance with natural warmth. Each surface is hand-troweled to
            create depth, purity, and a calm visual harmony for interiors and exteriors.{" "}
          </p>
          <p className="text-[#758195] hidden max-534px:block text-left font-raleway text-[20px] leading-[120%] max-xmd:text-[15px] max-sm:text-[12px] max-md:max-w-[301px] max-sm:max-w-[153px] max-md:text-right">
            Our innovative finishes, from polished plasters to limewash, combine luxury and sustainability.
          </p>

          {/* Button for Large Screens */}
          <div className="flex max-md:hidden">
            <button
              className="bg-[#214A3E] hover:bg-[#1D352E]  hover:w-[308px] transition-all duration-200 hover:gap-[20px] gap-[14px] text-white px-[24px] py-[13px] text-[20px] rounded-[89px] font-raleway flex items-center justify-between max-xmd:text-[15px]"
              onClick={handleDownload}
            >
              Explore Our Collection
              <span className=" w-[29px] h-[1px] bg-white inline-block relative">
                <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex w-full h-[592px] gap-[32px] pr-[10px] max-md:gap-[27px] max-sm:gap-[13px]">
          <div
            className={`relative flex-shrink ${
              hovered === "second" || hovered === "third" ? "w-[25%] pl-[10px]" : "w-[50%] h-full"
            } transform transition-width duration-700 ease-out rounded-[20px]`}
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`relative w-[48px]  font-raleway font-bold text-white text-[32px] max-md:text-[40px] 
                transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] top-[90%] left-[8%] whitespace-nowrap max-md:left-[15%] max-sm:text-[20px]`}
              style={{
                textShadow: "4px 4px 5.8px rgba(0, 0, 0, 0.54)", // Text shadow isn't directly available in Tailwind
              }}
            >
              Best Seller
            </div>
          </div>
          <div
            className={`relative flex-shrink ${
              hovered === "second" ? "w-[50%]" : "w-[25%] h-full"
            } transform transition-width rounded-[20px] duration-700 ease-out`}
            style={{
              backgroundImage: `url(${aes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setHovered("second")}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`relative font-raleway font-bold text-white text-[32px] max-md:text-[40px] 
                transform -translate-x-1/2 w-[48px] -translate-y-1/2 rotate-[-90deg] top-[90%] left-[12%] whitespace-nowrap max-md:left-[25%]  max-sm:text-[20px]`}
              style={{
                textShadow: "4px 4px 5.8px rgba(0, 0, 0, 0.54)", // Text shadow isn't directly available in Tailwind
              }}
            >
              Trendy
            </div>
          </div>
          <div
            className={`relative flex-shrink ${
              hovered === "third" ? "w-[50%]" : "w-[25%] h-full"
            } transform transition-width rounded-[20px] duration-700 ease-out`}
            style={{
              backgroundImage: `url(${trendy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setHovered("third")}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`relative font-raleway font-bold text-white text-[32px] max-md:text-[40px] 
                transform -translate-x-1/2 w-[48px] -translate-y-1/2 rotate-[-90deg] top-[90%] left-[12%] max-md:left-[25%] max-sm:text-[20px]`}
              style={{
                textShadow: "4px 4px 5.8px rgba(0, 0, 0, 0.54)", // Text shadow isn't directly available in Tailwind
              }}
            >
              Aesthetic
            </div>
          </div>
        </div>

        {/* Button for Medium Screens */}
        <div className="hidden max-md:flex mt-4 w-full  justify-center">
          <button className="bg-[#214A3E] text-white px-[24px] py-[13px] text-[20px] leading-[120%] rounded-[89px] font-raleway flex items-center justify-between max-xmd:text-[15px] max-md:pl-[13px]">
            Explore Our Collection
            <span className="ml-[14px] w-[29px] h-[1px] bg-white inline-block relative">
              <span className="absolute  right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
