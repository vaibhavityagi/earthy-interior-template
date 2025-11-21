import React from "react";
import image1 from "../../assets/AboutUs/Service1.png";
import image2 from "../../assets/AboutUs/Service2.png";
import image3 from "../../assets/AboutUs/Service3.png";

const Services = () => {
  return (
    <div className="w-[100%]  flex   items-center justify-center py-[112px]  max-md:px-[32px]">
      <div className=" flex  w-full flex-col  max-w-[88.89%] max-md:max-w-[704px] gap-[80px]   ">
        <div className="max-w-[832px] w-full  max-h-[595px]  h-full space-y-[23px] ">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-[#8FA49E]"></div>
            <h2 className="text-[14px] font-raleway font-semibold uppercase  tracking-wider text-[#8FA49E] ml-3">
              OUR SERVICES
            </h2>
          </div>

          <h1 className="text-[64px] w-full max-md:text-[48px] font-raleway font-bold text-[#000000] leading-[72px] max-sm:text-[36px] max-sm:leading-[150%] ">
            We provide the finest <span className="text-[#214A3E] italic">eco-friendly surface solutions</span>{" "}
          </h1>

          {/* Form */}
        </div>
        <div className="flex h-full gap-[32px] w-full max-sm:flex-col ">
          <div className="flex py-[40px]  w-full gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] justify-center items-center flex-col ">
            <div className="flex w-[85.67%] ">
              <img src={image1} className="w-[48px] h-[48px]" />
            </div>
            <div className="flex gap-[16px] w-[85.67%] flex-col ">
              <div className="font-raleway text-[32px] max-ssm:text-[3vw] max-842px:text-[24px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Architectural & Interior design
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                We collaborate with architects and designers to create spaces that feel grounded, elegant, and naturally
                textured. From bespoke wall finishes to curated material palettes, we bring your design vision to life
                with refined craftsmanship.
              </div>
            </div>
          </div>
          <div className="flex py-[40px]  w-full gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] justify-start items-center flex-col ">
            <div className="flex w-[85.67%]  ">
              <img src={image2} className="w-[48px] h-[48px]" />
            </div>
            <div className="flex  gap-[16px] w-[85.67%] flex-col ">
              <div className="font-raleway text-[32px] max-842px:text-[24px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Building Renovation
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                Enhance existing structures with breathable, durable, and timeless finishes. Our eco-friendly materials
                uplift older spaces while maintaining structural integrity and improving air quality.{" "}
              </div>
            </div>
          </div>
          <div className="flex py-[40px] w-full gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] justify-start items-center flex-col ">
            <div className="flex w-[85.67%]  ">
              <img src={image3} className="w-[48px] h-[48px]" />
            </div>
            <div className="flex gap-[16px] w-[85.67%] flex-col  ">
              <div className="font-raleway text-[32px]  max-ssm:text-[3vw] max-842px:text-[24px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Construction Management
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                From planning to execution, we ensure every layer is applied with precision and care. Our team oversees
                the process end-to-end, maintaining the highest standards of sustainability, performance, and
                aesthetics.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
