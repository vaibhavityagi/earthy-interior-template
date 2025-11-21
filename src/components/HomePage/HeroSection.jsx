import React, { useState, useEffect } from "react";
import image1 from "../../assets/HomePage/carousel_1.png";
import image2 from "../../assets/HomePage/carousel_2.png";
import image3 from "../../assets/HomePage/carousel_3.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  // Array of images for the carousel
  const images = [image1, image2, image3];
  const navigate = useNavigate();

  // State to track the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to control the automatic carousel
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Change image every 2 seconds if autoplay is enabled
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }

    // Clear interval on component unmount or when autoplay is disabled
    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  // Handle dot click and stop autoplay
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false); // Stop autoplay when a dot is clicked
  };

  return (
    <section
      className="relative bg-cover bg-center h-[760px] w-full p-[10px] flex justify-center items-center max-sm:h-[520px]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 0.2s ease-in-out",
        backgroundSize: "cover",
        // backgroundPosition:"center"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: 1 }}></div>
      <div className="w-[1228px] flex flex-col items-center justify-center gap-[180px]">
        <div className="relative z-10 flex flex-col justify-center items-center h-full gap-[25px] text-center px-4">
          <h1 className="text-[64px] font-raleway font-bold text-white text-center leading-[120%] max-md:text-[32px] max-sm:text-[24px]">
            Where Clay Meets Calm
          </h1>
          <p className="text-[24px] font-raleway text-white max-md:text-[20px] max-sm:text-[12px]">
            Natural textures and handcrafted finishes that bring,
            <br />
            warmth, softness, and timeless beauty into your spaces.
          </p>

          <button
            className="font-raleway w-[330px] max-sm:w-[250px] max-sm:h-[44px] h-[63px] gap-[16px] hover:gap-[22px] hover:w-[336px] text-[20px] bg-white/5 max-sm:text-[14px] backdrop-blur-sm hover:backdrop-blur-lg border border-white text-white py-[16px] px-[23px] rounded-[97px] transition-all flex items-center justify-center relative"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            aria-label="Explore our collection"
            onClick={() => {
              navigate("/products");
              window.scrollTo(0, 0); // Scrolls to the top of the page
            }}
          >
            Explore Finishes
            <span className="w-[57px] max-sm:w-[40px] h-[1px] bg-white inline-block relative">
              <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
            </span>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="relative w-[200px] justify-between flex gap-[10px] ">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[60px] cursor-pointer h-[9px] rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-[#FFFFFF] opacity-[52%]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
