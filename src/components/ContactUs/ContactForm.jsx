import React, { useState } from "react";
import location from "../../assets/Contact/location.png";
import clock from "../../assets/Contact/clock.png";
import phone from "../../assets/Contact/phone.png";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setShowMsg(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendData = () => {
    setShowMsg(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     {
    //       user_name: formData.name,
    //       user_email: formData.email,
    //       subject: formData.subject,
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
    //       setFormData({ name: "", email: "", subject: "", message: "" });
    //     },
    //     (error) => {
    //       console.error("Failed to send email:", error);
    //       alert("An error occurred. Please try again.");
    //     }
    //   );
  };
  return (
    <div className="w-full h-[1144px] max-sm:h-[1305px] max-sm:h-[1455px] flex justify-center items-center max-sm:py-[58px]">
      <div className=" w-[73.63%] max-md:w-[96.22%] h-[993px] max-sm:h-full  max-sm:w-[84.47%] flex flex-col justify-between  ">
        <div className="flex w-full items-center flex-col gap-[19px] max-sm:gap-[28px] ">
          <div className="font-raleway font-bold text-center text-[36px] max-sm:text-[32px] ">
            Get In Touch With Us
          </div>
          <div className="font-raleway text-[16px] font-light text-[#9F9F9F] max-w-[644px] text-center">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
        </div>
        <div className="flex gap-[30px]  max-sm:flex-col items-center">
          <div className="w-[72.24%] max-sm:w-full flex justify-center items-center">
            <div className="w-[83.67%]  gap-y-[36px] max-sm:w-full flex flex-col justify-between">
              {/* <form> */}
              <div>
                <div className="font-raleway text-[16px]">Your Name</div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="John Doe"
                  className="bg-[#F5F8F4] placeholder:font-raleway mt-4 placeholder:text-[16px] w-full h-[75px] p-3"
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="font-raleway text-[16px]">Email Address</div>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="JohnDoe@gmail.com"
                  className="bg-[#F5F8F4] placeholder:font-raleway mt-4 placeholder:text-[16px] w-full h-[75px] p-3"
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="font-raleway text-[16px]">Subject</div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  placeholder="This is optional"
                  className="bg-[#F5F8F4] placeholder:font-raleway mt-4 placeholder:text-[16px] w-full h-[75px] p-3"
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="font-raleway text-[16px]">Message</div>

                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Hi I'd like to ask about"
                  className="bg-[#F5F8F4] placeholder:font-raleway mt-4 placeholder:text-[16px] w-full h-[120px] p-3 resize-none"
                  onChange={handleChange}
                />
              </div>
              {showMsg && (
                <div className="font-raleway font-bold text-[#8FA49E] text-[18px] max-md:text-[14px]">
                  Your Message has been sent Successfully!
                </div>
              )}

              <button
                type="submit"
                className="bg-[#214A3E]  font-raleway w-[150px] h-[50px] hover:bg-[#1D352E]  hover:w-[164px] transition-all duration-200 text-white px-[24px] py-[13px] rounded-[89px] text-[20px] flex items-center justify-between group"
                onClick={sendData}
              >
                Submit
                <span className="ml-[14px] w-8 h-[1px] bg-white inline-block relative transition-all duration-200 group-hover:ml-[20px]">
                  <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
                </span>
              </button>
              {/* </form> */}
            </div>
          </div>
          <div className="w-[44.74%] max-sm:w-full  flex flex-col h-full max-sm:items-center">
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
