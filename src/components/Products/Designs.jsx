import React from "react";
import image1 from "../../assets/Product/1.png";
import image2 from "../../assets/Product/2.png";
import image3 from "../../assets/Product/3.png";
import image4 from "../../assets/Product/4.png";
import image5 from "../../assets/Product/5.png";
import image6 from "../../assets/Product/6.png";
import image7 from "../../assets/Product/7.png";
import image8 from "../../assets/Product/8.png";
import image9 from "../../assets/Product/9.png";

const Designs = () => {
  return (
    <div className="w-full flex justify-center pb-[83px] pt-[246px]">
      <div className="flex h-full justify-center items-center gap-[88px] max-md:gap-[64px] flex-col w-[83.89%] max-md:w-[89.58%] max-sm:w-[70.82%]">
        <div className="flex flex-col w-full items-center gap-[26px]">
          <div className="text-[64px] font-bold leading-[120%] font-raleway text-[#000000] text-center max-md:text-[36px] max-sm:text-[32px]">
            Illuminate Your Space with{" "}
            <span className="text-[#214A3E] italic">
              <br />
              Captivating Designs
            </span>
          </div>
          <div className="text-[24px] leading-[120%] text-[#758195]  max-w-[76.3%] max-md:text-[16px] text-center font-raleway">
            Inspired By The Raw Beauty Of Stone, Sand, & Marble. Our Textures
            Bring The Calming Essence Of Nature Indoors, Adding Depth &
            Character
          </div>
        </div>
        <div className="flex flex-col gap-[88px] max-md:gap-[64px] w-full max-md:flex-row max-sm:flex-col  h-full">
          <div className="flex w-full h-[25vw] max-md:h-full gap-[64px] max-md:flex-col">
            {/* <div
            className="rounded-[50%] w-full h-full max-md:h-[300px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
         
            <div
              className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
              style={{
                maxWidth: "80%", 
                overflowWrap: "break-word",
              }}
            >
              MARBLE FINISH
            </div>
          </div>
          <div
            className="rounded-[50%] max-md:h-[300px] w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
             <div
              className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
              style={{
                maxWidth: "80%", 
                overflowWrap: "break-word",
              }}
            >   CONCRETE BLOCK FINISH
            </div>
          </div>
          <div
            className="rounded-[50%] max-md:h-[300px] w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
             <div
              className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
              style={{
                maxWidth: "80%", 
                overflowWrap: "break-word",
              }}
            > STONE FINISH
            </div>
          </div> */}
            <div
              className="rounded-full flex w-[25vw] h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                MARBLE FINISH
              </div>
            </div>
            <div
              className="rounded-full flex w-[25vw] h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >   <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                CONCRETE BLOCK FINISH
              </div>
            </div>
            <div
              className="rounded-full flex w-[25vw] h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >   <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                STONE FINISH
              </div>
            </div>
          </div>
          <div className="flex w-full max-md:h-full h-[25vw] max-md:w-full gap-[64px] max-md:flex-col">
          <div
              className="rounded-full flex w-[25vw] h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >     <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                PITTED FINISH
              </div>
            </div>
            <div
              className="rounded-full flex w-[25vw] h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >   <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[9vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                DISTRESSED FINISH
              </div>
            </div>
            <div
              className="rounded-full flex w-[25vw] h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >    <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[9vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                TRAVERTINE FINISH
              </div>
            </div>
          </div>
          <div className="flex w-full h-[25vw] gap-[64px] max-md:hidden">
          <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: "25vw",
                height: "25vw",
                backgroundImage: `url(${image7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="text-[3vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                DEBOSSED FINISH
              </div>
            </div>
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: "25vw",
                height: "25vw",
                backgroundImage: `url(${image8})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="text-[3vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "70%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                SAND FINISH
              </div>
            </div>
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: "25vw",
                height: "25vw",
                backgroundImage: `url(${image9})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="text-[3vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "70%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                CRISS CROSS FINISH
              </div>
            </div>
          </div>
        </div>
        <button className=" px-[24px] py-[13px] bg-[#214A3E] leading-[120%] gap-[14px] hover:bg-[#1D352E]  hover:w-[203px] transition-all duration-200 hover:gap-[20px] text-white text-[19px] rounded-full   w-[197px] h-[50px] flex items-center justify-center">
          <div className="font-raleway text-[20px] font-medium">Know More</div>
          <span className=" w-[29px] h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Designs;
