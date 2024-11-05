import React from "react";
import instagram from "../../assets/Product/instagram.png";
import image1 from "../../assets/Product/Image11.png";
import image2 from "../../assets/Product/Image22.png";
import image3 from "../../assets/Product/image33.png";
import image4 from "../../assets/Product/Image44.png";
const Gallery = () => {
  return (
    <div className="bg-[#F8F8F8] flex justify-center items-center w-full h-[739px]  max-sm:h-screen">
      <div className="w-[90.9%] h-[467px] max-md:h-[573px]  max-sm:h-full flex flex-col justify-between max-sm:justify-center max-sm:gap-[20px]">
        <div className="flex w-full justify-between items-center max-sm:flex-col max-sm:gap-[15px]">
          <div className="font-italiana text-[32px] text-[#000000]">
            Cementolime
          </div>
          <div className="font-raleway text-[16px] text-[#665244] flex gap-[8px]">
            <img src={instagram} className="w-[25px] h-[24px]" />
            <div>FOLLOW US ON INSTAGRAM</div>
          </div>
        </div>
        <div className="flex gap-[30px] w-full max-sm:h-[1020px] h-[392px] max-sm:items-center max-md:h-[498px] max-sm:w-[100%]  max-md:flex-col">
          <div className="w-[50%] max-md:w-[100%]  h-[100%] max-md:h-[50%] justify-center max-sm:w-[328px] flex gap-[30px] max-sm:flex-col">
            <div
              className="w-[50%]  h-[100%] max-sm:h-[50%] max-sm:w-[100%]"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="w-[50%] h-[100%] max-sm:h-[50%] max-sm:w-[100%]"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="w-[50%] max-md:h-[50%] max-md:w-[100%] max-sm:w-[328px]  h-[100%] flex gap-[30px] max-sm:flex-col">
            <div
              className="w-[50%] h-[100%] max-sm:h-[50%] max-sm:w-[100%] flex justify-center items-center"
              style={{
                backgroundImage: `url(${image3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-[#FFFFFF] font-regular text-[18px] font-raleway underline">
                SEE MORE
              </div>
            </div>
            <div
              className="w-[50%] h-[100%] max-sm:h-[50%] max-sm:w-[100%]"
              style={{
                backgroundImage: `url(${image4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
