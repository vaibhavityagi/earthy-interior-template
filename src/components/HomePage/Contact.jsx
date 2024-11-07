import React from "react";
import image from "../../assets/HomePage/rectangle-47.png";
const ContactUs = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className=" flex items-center gap-[95px] py-[95px] px-[81px] max-md:w-[685px] justify-center max-xmd:gap-[49px] max-md:gap-[35px] max-md:px-[0px]">
        <div className="max-w-[644px] w-full max-h-[595px] h-full space-y-[23px] max-md:w-[341px] max-md:h-[532px]">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-[#8FA49E] max-md:w-[32px]"></div>
            <h2 className="text-[14px] font-raleway font-semibold uppercase  tracking-wider text-[#8FA49E] ml-3">
              Contact Us
            </h2>
          </div>

          <h1 className="text-[54px] font-raleway font-bold text-[#000000] leading-[62px] max-md:text-[32px] max-xmd:text-[36px] max-xmd:leading-[120%]">
            Let’s Create{" "}
            <span className="text-[#214A3E] italic">Something Great</span>{" "}
            Together
          </h1>
          <p className="text-[18px] font-raleway font-light text-[#444444] text-left max-md:text-[12px] max-md:leading-[120%]">
            Lorem ipsum tempor dolor elementum tellus non ipsum faucibus. Justo,
            magna mauris posuere auctor justo. Habitant proin aliquet volutpat
            leo ultricies.
          </p>

          {/* Form */}
          <form className="space-y-[30px] max-md:space-y-[26px]">
            <div className="flex gap-[30px] max-md:gap-[16px]">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full max-w-[278px] max-md:h-[49px] placeholder-[#8FA49E] font-raleway placeholder-text-[18px] max-md:text-[14px] h-[57px] p-3 bg-[#E5EDE466] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full max-w-[278px] placeholder-[#8FA49E] max-md:h-[49px] font-raleway placeholder-text-[18px] max-md:text-[14px] h-[57px] p-3 bg-[#E5EDE466] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              className="w-full max-w-[587px] h-[144px] placeholder-[#8FA49E] max-md:h-[99px] font-raleway placeholder-text-[18px] max-md:text-[14px] p-3 bg-[#E5EDE466] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-[#214A3E] font-raleway w-[150px] h-[50px] hover:bg-[#1D352E]  hover:w-[164px] transition-all duration-200 text-white px-[24px] py-[13px] rounded-[89px] text-[20px] flex items-center justify-between group"
            >
              Submit
              <span className="ml-[14px] w-8 h-[1px] bg-white inline-block relative transition-all duration-200 group-hover:ml-[20px]">
                <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
              </span>
            </button>
          </form>
        </div>

        {/* Right Side - Image Section */}
        <div className=" max-w-[538px] h-[666px] flex justify-center max-md:w-[309px] max-md:h-[532px] max-ymd:hidden">
          <img
            src={image}
            alt="Decorative Image"
            className=" object-cover  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
