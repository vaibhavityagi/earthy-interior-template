import React from "react";

const Stats = () => {
  return (
    <div className="absolute top-4/2  flex flex-col justify-center  h-[180px] left-1/2 w-[65.69%] max-sm:w-[100%] max-md:w-[78.65%]  transform -translate-x-1/2 -translate-y-1/2 bg-[#2E2D28] z-10">
      {/* <div className="text-white py-6 px-8 max-md:py-[37px] h-[180px] max-md:px-[48px] flex justify-between items-center text-center"> */}
      <div className="text-white max-sm:h-[100px]  flex justify-between items-end text-center">
        <div className="w-[33%] border-r-[1px] border-[#FFFFFF]  flex flex-col h-[100%] justify-center  ">
          <div className=" flex flex-col items-center  ">
            <p className="text-[40px] font-raleway leading-[120%]  max-sm:text-[36px]">
              7
            </p>
            <p className="text-[20px] max-sm:text-[15px] tracking-[1%] font-raleway leading-[130%] font-light w-[112px]">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="w-[33%]  flex flex-col justify-center  h-full   ">
          <div className=" flex flex-col items-center ">
          <p className="text-[40px] font-raleway leading-[120%] max-sm:text-[36px]">
            10k+
          </p>
          <p className="text-[20px] tracking-[1%] font-raleway leading-[130%] font-light max-sm:text-[15px]">
            Customers
          </p>
        </div>
        </div>
        <div className="w-[33%]  border-l-[1px] border-[#FFFFFF] h-full justify-center  flex flex-col    ">
        <div className=" flex flex-col items-center ">
          <p className="text-[40px] font-raleway leading-[120%] max-sm:text-[36px]">
            260+
          </p>
          <p className="text-[20px] tracking-[1%] font-raleway leading-[130%] font-light w-[112px] max-sm:text-[15px]">
            Furnish Variants
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
