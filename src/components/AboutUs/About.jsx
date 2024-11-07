import React from "react";
import image1 from "../../assets/AboutUs/Image1.png";
import image2 from "../../assets/AboutUs/Image2.png";

const About = () => {
  return (
    <div className="w-[100%]" id="aboutus">
      <section className="flex justify-center items-center w-full">
        <div className=" flex max-md:flex-col  items-center gap-[95px] py-[95px] max-xsm:py-[80px] px-[81px] max-md:px-[68px] max-xsm:px-[24px] justify-center max-md:gap-[103px] max-sm:gap-[26px] max-md:px-[0px]">
          <div className="max-w-[644px] w-full   h-full space-y-[23px] ">
            <div className="flex items-center mb-4">
              <div className="w-[64px] h-[2px] bg-[#8FA49E] "></div>
              <h2 className="text-[14px] font-raleway font-semibold uppercase  tracking-wider text-[#8FA49E] ml-3">
                About Us
              </h2>
            </div>

            <h1 className="text-[64px] w-full   font-raleway font-bold text-[#000000] leading-[72px] max-xsm:leading-[43px] max-md:text-[48px] max-xsm:text-[36px]  ">
              We help to bring your{" "}
              <span className="text-[#214A3E] italic">vision to reality</span>{" "}
            </h1>
            <p className="text-[18px] font-raleway leading-[32px] font-light text-[#444444] text-left max-xsm:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
            <p className="text-[18px] font-raleway leading-[32px] font-light text-[#444444] text-left max-xsm:text-[14px]">
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>

          {/* Right Side - Image Section */}
          <div className=" max-w-[592px] w-full h-[560px] max-sm:h-[348px] flex justify-center gap-[16px] max-sm:gap-[8px]">
            <div className="flex h-full w-full max-sm:w-[43.62%]  max-sm:pt-6">
              <img
                src={image1}
                alt="Decorative Image"
                className=" w-[280px] h-[480px] max-sm:w-full max-sm:h-[258px]"
              />
            </div>
            <div className="flex h-full w-full max-sm:w-[54.46%]  items-end max-sm:pb-6">
              <img
                src={image2}
                alt="Decorative Image"
                className=" w-[280px] h-[480px] max-sm:w-full max-sm:h-[258px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
