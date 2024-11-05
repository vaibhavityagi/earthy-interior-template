import React, { useState } from "react";
import image from "../../assets/HomePage/Vector.png";
import image1 from "../../assets/HomePage/Vector1.png";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const questions = [
    {
      title: "What payment methods do you accept?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Do you offer free shipping?",
      answer:
        "Yes, we offer free standard shipping on all orders over a certain amount within the continental United States. For orders below that amount or for expedited shipping options, additional fees may apply.",
    },
    {
      title: "How long does it take for delivery?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "What is your return policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Do you offer assembly or installation services?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] px-[92px] pb-[82px] w-full h-full flex justify-center items-center max-sm:px-[24px] max-sm:h-[847px]">
      <div className="h-full flex w-full pt-[82px] gap-[73px] flex-col items-center max-sm:pb-[82px] max-sm:gap-[36px]">
        <div className="flex flex-col gap-[36px] max-sm:gap-[18px]">
          <h2 className="text-[64px] w-full font-bold font-raleway text-center max-md:text-[48px] max-sm:text-[24px]">
            Frequently Asked{" "}
            <span className="text-[#214A3E] italic">Questions</span>
          </h2>
          <p className="text-center font-raleway  text-[#214A3E] text-[20px] max-md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            beatae error laborum.
          </p>
        </div>
        {/* <div className="max-w-[852px] w-full ">
          <ul className="text-[#214A3E]">
            {questions.map((question, index) => (
              <li key={index}>
                <div
                  className={`flex font-raleway justify-between items-left flex-col cursor-pointer border-t border-b border-gray-300 py-[24px] ${
                    activeIndex === index ? "gap-[20px]" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[22px] font-bold w-[796px] max-sm:text-[16px]">
                      {index + 1}. {question.title}
                    </h3>
                    <div>
                      <img
                        src={activeIndex === index ? image1 : image}
                        className=""
                      />
                    </div>
                  </div>
                  <div>
                    {activeIndex === index && (
                      <div className="leading-[28px]">
                        <p className="text-[#214A3E] font-medium text-[18px] max-sm:text-[12px]">
                          {question.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="max-w-[852px] w-full">
          <ul className="text-[#214A3E]">
            {questions.map((question, index) => (
              <li key={index}>
                <div
                  className={`flex font-raleway justify-between items-left flex-col cursor-pointer border-t border-b border-gray-300 py-[24px] ${
                    activeIndex === index ? "gap-[20px]" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[22px] font-bold w-[796px] max-sm:text-[16px]">
                      {index + 1}. {question.title}
                    </h3>
                    <div>
                      <img
                        src={activeIndex === index ? image1 : image}
                        className=""
                      />
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in ${
                      activeIndex === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    {activeIndex === index && (
                      <div className="leading-[28px]">
                        <p className="text-[#214A3E] font-medium text-[18px] max-sm:text-[12px]">
                          {question.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
