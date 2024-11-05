import React from "react";
import location from "../../assets/Contact/location.png";
import clock from "../../assets/Contact/clock.png";
import phone from "../../assets/Contact/phone.png";

const ContactForm = () => {
  return (
    <div className="w-full h-[1144px] max-sm:h-[1305px] flex justify-center items-center max-sm:py-[58px]">
      <div className=" w-[73.63%] max-md:w-[96.22%] h-[879px] max-sm:h-full  flex flex-col justify-between">
        <div className="flex w-full items-center flex-col  ">
          <div className="font-raleway font-bold text-[36px] ">
            Get In Touch With Us
          </div>
          <div className="font-raleway text-[16px] font-light text-[#9F9F9F] max-w-[644px] text-center">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
        </div>
        <div className="flex gap-[30px] max-sm:flex-col items-center">
          <div className="w-[72.24%] max-sm:w-full flex justify-center items-center">
            <div className="w-[83.67%] h-[637px] max-sm:w-full flex flex-col justify-between">
              {/* <form> */}
              <div className="font-raleway text-[16px]">Your Name</div>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-[#F5F8F4] placeholder:font-raleway placeholder:text-[16px] w-full h-[75px] p-3"
              />
              <div className="font-raleway text-[16px]">Email Address</div>
              <input
                type="text"
                placeholder="JohnDoe@gmail.com"
                className="bg-[#F5F8F4] placeholder:font-raleway placeholder:text-[16px] w-full h-[75px] p-3"
              />
              <div className="font-raleway text-[16px]">Subject</div>
              <input
                type="text"
                placeholder="This is optional"
                className="bg-[#F5F8F4] placeholder:font-raleway placeholder:text-[16px] w-full h-[75px] p-3"
              />
              <div className="font-raleway text-[16px]">Message</div>
              {/* <input
                type="text"
                placeholder="Hi I'd like to ask about"
                className="bg-[#F5F8F4] placeholder:font-raleway placeholder:text-[16px] w-full h-[120px] pt-2 pl-3"
              /> */}
              <textarea
                placeholder="Hi I'd like to ask about"
                className="bg-[#F5F8F4] placeholder:font-raleway placeholder:text-[16px] w-full h-[120px] p-3 resize-none"
              />

              {/* </form> */}
            </div>
          </div>
          <div className="w-[44.74%] max-sm:w-full flex flex-col h-full max-sm:items-center">
            <div className="w-full h-[363px] justify-between flex flex-col max-sm:w-[70%] ">
              <div className="flex gap-[34px] ">
                <div className="w-[22px] h-[29px] mt-2">
                  <img src={location} className="w-full h-full" />
                </div>
                <div className="flex flex-col   ">
                  <div className="font-raleway font-semibold text-[24px] ">
                    Address
                  </div>
                  <div className="font-raleway text-[16px] font-light">
                    Address
                  </div>
                </div>
              </div>
              <div className="flex gap-[25px]">
                <div className="w-[30px] h-[30px] mt-2">
                  <img src={phone} className="w-full h-full" />
                </div>
                <div className="flex flex-col ">
                  <div className="font-raleway font-semibold text-[24px] ">
                    Phone
                  </div>
                  <div className="font-roboto text-[20px] font-light">
                    +91 9580682537
                  </div>
                </div>
              </div>
              <div className="flex gap-[34px]">
                {/* <div className="w-[23px] h-[23px] mt-2"> */}
                  <img src={clock} className="w-[23px] h-[23px] mt-2" />
                {/* </div> */}
                <div className="flex flex-col ">
                  <div className="font-raleway font-semibold text-[24px] ">
                    Working Time
                  </div>
                  <div className="font-raleway text-[16px] font-light">
                    Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                    21:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
