import React from "react";
import image1 from "../../assets/Contact/services1.png";
import image2 from "../../assets/Contact/services2.png";
import image3 from "../../assets/Contact/services3.png";
import image4 from "../../assets/Contact/services4.png";

const Services = () => {
  return (
    <div className=" flex bg-[#E5EDE4] w-full h-[270px] max-sm:h-[621px] max-md:h-[316px] max-md:px-4 items-center justify-center">
      <div className="w-[92.64%]  max-sm:h-[473px] max-sm:gap-[38px] max-md:w-[602px] max-sm:w-[338px] flex justify-between 1560px:gap-[13vw] items-center max-md:h-[217px] max-sm:flex-col">
        {/* <div className="flex  bg-red-900 w-[700px] max-sm:h-[50%] max-md:w-[52.32%] h-full max-sm:w-full justify-between max-md:flex-col"> */}
        <div className="flex   w-[52.46%] max-sm:h-[50%] max-md:w-[52.32%] h-full max-sm:w-full justify-between max-md:flex-col">
        {/* <div className="flex   w-[52.47%] max-sm:h-[50%] max-md:w-[52.32%] h-full max-sm:w-full justify-between max-md:flex-col"> */}
          <div className="flex items-center   gap-[10px]">
            <div className="w-[60px] h-[60px]">
              <img src={image1} className="w-full h-full" />
            </div>
            <div className="flex flex-col w-full">
              <div className="font-raleway text-[25px] leading-[150%] font-bold">
                High Quality
              </div>
              <div className="font-raleway text-[20px] leading-[150%] font-light">
                crafted from top materials
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[60px] h-[60px]">
              <img src={image2} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <div className="font-raleway text-[25px] w-full leading-[150%] font-bold">
                Warranty Protection
              </div>
              <div className="font-raleway text-[20px] leading-[150%] font-light">
                Over 2 years
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex h-full justify-between w-[41.54%] max-sm:h-[50%]  max-sm:w-full max-md:w-[40.7%]  max-md:flex-col"> */}
        <div className="flex h-full justify-between w-[41.55%] max-sm:h-[50%]  max-sm:w-full max-md:w-[40.7%]  max-md:flex-col">
          <div className="flex items-center gap-[10px] ">
            <div className="w-[60px] h-[60px]">
              <img src={image3} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <div className="font-raleway text-[25px] leading-[150%] font-bold">
                Free Shipping
              </div>
              <div className="font-raleway text-[20px] leading-[150%] font-light">
                Order over 150 $
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[60px] h-[60px]">
              <img src={image4} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <div className="font-raleway text-[25px] leading-[150%] font-bold">
                24/7 Support
              </div>
              <div className="font-raleway text-[20px] leading-[150%] font-light">
                Dedicated Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
