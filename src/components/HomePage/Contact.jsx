import React, { useState } from "react";
import image from "../../assets/HomePage/contact_image.png";
import emailjs from "emailjs-com";
const ContactUs = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });
  const handleChange = (e) => {
    setShowMsg(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendData = () => {
    setShowMsg(true);
    setFormData({ name: "", number: "", message: "" });
    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     {
    //       name: formData.name,
    //       number: formData.number,
    //       message: formData.message,
    //     },
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (response) => {
    //       console.log(
    //         "Email sent successfully!",
    //         response.status,
    //         response.text
    //       );
    //       setShowMsg(true);
    //       setFormData({ name: "", number: "",  message: "" });
    //     },
    //     (error) => {
    //       console.error("Failed to send email:", error);
    //       alert("An error occurred. Please try again.");
    //     }
    //   );
  };
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
            Let's Create <span className="text-[#214A3E] italic">Something Great</span> Together
          </h1>
          <p className="text-[18px] font-raleway font-light text-[#444444] text-left max-md:text-[12px] max-md:leading-[120%]">
            Share your ideas, requirements, or inspirations with us. Our team will guide you through textures, tones,
            and solutions that bring nature's quiet elegance into your space.
          </p>

          {/* Form */}
          <form className="space-y-[30px] max-md:space-y-[26px]">
            <div className="flex gap-[30px] max-md:gap-[16px]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full max-w-[278px] max-md:h-[49px] placeholder-[#8FA49E] font-raleway placeholder-text-[18px] max-md:text-[14px] h-[57px] p-3 bg-[#E5EDE466] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-full max-w-[278px] placeholder-[#8FA49E] max-md:h-[49px] font-raleway placeholder-text-[18px] max-md:text-[14px] h-[57px] p-3 bg-[#E5EDE466] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Enter Your Message"
                onChange={handleChange}
                className="w-full max-w-[587px] h-[144px] placeholder-[#8FA49E] max-md:h-[99px] font-raleway placeholder-text-[18px] max-md:text-[14px] p-3 bg-[#E5EDE466] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {showMsg && (
                <div className="font-raleway font-bold text-[#8FA49E] text-[18px] max-md:text-[14px]">
                  Your Message has been sent Successfully!
                </div>
              )}
            </div>
            <button
              type="submit"
              onClick={sendData}
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
          <img src={image} alt="Decorative Image" className=" object-cover  shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
