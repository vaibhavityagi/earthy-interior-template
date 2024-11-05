import image1 from "../../assets/HomePage/11.png";
import image2 from "../../assets/HomePage/22.png";
import image3 from "../../assets/HomePage/33.png";
import image4 from "../../assets/HomePage/44.png";
const CraftsSection = () => {
  return (
    <div className="w-full  flex  h-full items-center justify-center py-[126px] px-[77px] max-635px:px-[18px] ">
      {/* Title and description */}
      <div className="  flex flex-col w-full  items-center justify-center gap-[64px]  max-md:gap-[14px]">
        <div className="flex flex-row   h-[213px] w-full  px-[10px] py-[10px] max-sm:px-[0] justify-between items-center  max-xmd:max-w-[91.99%] max-md:max-w-[94.9%] max-sm:max-w-[388px] max-635px:h-[94px]">
          <div className="flex flex-col w-[546px] gap-[9px]">
            <div className="flex items-center ">
              <div className="w-[64px] h-[2px] bg-[#8FA49E] max-ssm:w-[22px]"></div>
              <h2 className="text-[14px] font-raleway uppercase tracking-wider text-[#8FA49E] ml-3">
                Recent works
              </h2>
            </div>
            <h2 className="text-[60px] font-bold font-raleway text-left leading-[72px] max-ymd:text-[40px] max-xmd:text-[48px] max-sm:text-[24px] max-xmd:leading-[120%]">
              Some of <span className="text-[#214A3E] italic">our crafts</span>{" "}
              <br />
              made with love
            </h2>
          </div>
          <div className="">
            {/* Line */}
            <p className="text-[#8490A1] max-md:hidden font-raleway max-w-[581px] w-full text-[24px] text-right leading-[28px] max-xmd:text-[16px] max-md:text-[15px] max-xmd:leading-[150%] max-xmd:max-w-[461px] max-md:max-w-[244px] max-635px:text-[12px] max-xmd:leading-[120%] max-sm:max-w-[158px] max-635px:hidden">
              We’ve designed and curated pieces that are a cut above your
              average home goods, because when you level up your everyday
              objects, you elevate your daily rituals. Let the magic happen.
            </p>
            <p className="text-[#8490A1] font-raleway hidden max-md:block w-screen text-right leading-[28px] max-md:text-[15px] max-xmd:leading-[150%] max-md:max-w-[244px] max-635px:text-[12px] max-635px:hidden">
              We’ve designed and curated pieces that are a cut above your
              average home goods, because when you level up
            </p>
            <p className="text-[#8490A1] font-raleway hidden w-full text-[24px] text-right max-635px:text-[12px] max-sm:leading-[120%] max-635px:w-[158px] max-635px:block">
              Our innovative finishes, from polished plasters to limewash,
              combine luxury and sustainability,
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center py-[10px] px-[10px] ">
          <div className="flex flex-col w-full h-[1236px] max-md:h-[594px] max-635px:h-[382px] items-center gap-[36px] max-xmd:gap-[64px] max-md:gap-[14px] max-sm:gap-[29px]">
            {/* Left column - Single image */}
            <div className=" h-[50%]  w-full flex flex-row justify-center gap-[36px] max-xmd:gap-[33px] ">
              <div
                style={{ backgroundImage: `url(${image2})` }}
                className="w-[66%] h-full  bg-cover bg-center  h-[100%] "
                aria-label="Craft 2"
              ></div>
              <div
                style={{ backgroundImage: `url(${image1})` }}
                className="w-[33%] h-full  bg-cover bg-center  h-[100%] "
                aria-label="Craft 1"
              ></div>
            </div>

            {/* Right column - Two images stacked */}
            <div className="w-full flex flex-row justify-center gap-[36px]   max-xmd:gap-[33px] h-[50%] ">
              <div
                style={{ backgroundImage: `url(${image4})` }}
                className="w-[33%] h-full  bg-cover bg-center  h-[100%] "
                aria-label="Craft 4"
              ></div>

              <div
                style={{ backgroundImage: `url(${image3})` }}
                className="relative w-[66%] h-full bg-cover bg-center h-[100%]"
                aria-label="Craft 3"
              >
                {/* Flex container for centering the button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="max-w-[225px] max-md:text-[15px] max-md:max-w-[167px] max-md:h-[47px] w-full h-[63px] border-white/50 border-2 bg-white/5 text-white text-[20px] rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition max-635px:h-[33px] max-sm:w-[120px] max-635px:text-[12px] font-raleway">
                    Show More
                    <span className="w-[57px] max-md:w-[35px] h-[1px] ml-3 bg-white inline-block relative max-sm:w-[28px]">
                      <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftsSection;
