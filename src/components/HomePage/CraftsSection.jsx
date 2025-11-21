import { useNavigate } from "react-router-dom";
import image1 from "../../assets/HomePage/recent_work_1.png";
import image2 from "../../assets/HomePage/recent_work_2.png";
import image3 from "../../assets/HomePage/recent_work_3.png";
import image4 from "../../assets/HomePage/recent_work_4.png";
const CraftsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  flex  h-full items-center justify-center py-[126px] px-[77px] max-635px:px-[18px] ">
      {/* Title and description */}
      <div className="  flex flex-col w-full  items-center justify-center gap-[64px]  max-md:gap-[14px]">
        <div className="flex flex-row   h-[213px] w-full  px-[10px] py-[10px] max-sm:px-[0] justify-between items-center  max-xmd:max-w-[91.99%] max-md:max-w-[94.9%] max-sm:max-w-[388px] max-635px:h-[94px]">
          <div className="flex flex-col w-[546px] gap-[9px]">
            <div className="flex items-center ">
              <div className="w-[64px] h-[2px] bg-[#8FA49E] max-ssm:w-[22px]"></div>
              <h2 className="text-[14px] font-raleway uppercase tracking-wider text-[#8FA49E] ml-3">Recent works</h2>
            </div>
            <h2 className="text-[60px] font-bold font-raleway text-left leading-[72px] max-ymd:text-[40px] max-xmd:text-[48px] max-sm:text-[24px] max-xmd:leading-[120%]">
              Recent Crafts Made with Care
            </h2>
          </div>
          <div className="">
            {/* Line */}
            <p className="text-[#8490A1] max-md:hidden font-raleway max-w-[581px] w-full text-[24px] text-right leading-[28px] max-xmd:text-[16px] max-md:text-[15px] max-xmd:leading-[150%] max-xmd:max-w-[461px] max-md:max-w-[244px] max-635px:text-[12px] max-xmd:leading-[120%] max-sm:max-w-[158px] max-635px:hidden">
              At Claymist, every space is crafted with intention.
            </p>
            <p className="text-[#8490A1] font-raleway hidden max-md:block w-screen text-right leading-[28px] max-md:text-[15px] max-xmd:leading-[150%] max-md:max-w-[244px] max-635px:text-[12px] max-635px:hidden">
              From soft clay-plastered walls to natural timber textures, our recent works reflect a quiet elegance that
              elevates the everyday. Each project blends modern simplicity with earthy warmth—designed to make your
              rituals feel calmer, slower, and more meaningful.{" "}
            </p>
            <p className="text-[#8490A1] font-raleway hidden w-full text-[24px] text-right max-635px:text-[12px] max-sm:leading-[120%] max-635px:w-[158px] max-635px:block">
              Let the craftsmanship speak for itself.{" "}
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center py-[10px] px-[10px] ">
          <div className="flex flex-col w-full h-[1236px] max-md:h-[594px] max-635px:h-[382px] items-center gap-[36px] max-xmd:gap-[64px] max-md:gap-[14px] max-sm:gap-[29px]">
            {/* Left column - Single image */}
            <div className=" h-[50%]  w-full flex flex-row justify-center gap-[36px] max-xmd:gap-[33px] ">
              <div
                style={{ backgroundImage: `url(${image2})` }}
                className="w-[66%] relative h-full cursor-pointer bg-cover bg-center  h-[100%] flex justify-center items-center group"
                aria-label="Craft 2"
                onClick={() => {
                  navigate("/products");
                  window.scrollTo(0, 0); // Scrolls to the top of the page
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Show More Button */}
                <div
                  className="max-md:text-[15px] text-white text-[36px] underline max-635px:text-[12px] cursor-pointer font-raleway opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  onClick={() => {
                    navigate("/products");
                    window.scrollTo(0, 0); // Scrolls to the top of the page
                  }}
                >
                  Show More
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${image1})` }}
                className="relative w-[33%] h-full  bg-cover bg-center cursor-pointer h-[100%] flex justify-center items-center group"
                aria-label="Craft 1"
                onClick={() => {
                  navigate("/products");
                  window.scrollTo(0, 0); // Scrolls to the top of the page
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Show More Button */}
                <div
                  className="max-md:text-[15px] text-white text-[36px] underline max-635px:text-[12px] cursor-pointer font-raleway opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  onClick={() => {
                    navigate("/products");
                    window.scrollTo(0, 0); // Scrolls to the top of the page
                  }}
                >
                  Show More
                </div>
              </div>
            </div>

            {/* Right column - Two images stacked */}
            <div className="w-full flex flex-row justify-center gap-[36px]   max-xmd:gap-[33px] h-[50%] ">
              <div
                style={{ backgroundImage: `url(${image4})` }}
                className="relative w-[33%] h-full  bg-cover bg-center cursor-pointer  h-[100%] flex justify-center items-center group"
                aria-label="Craft 4"
                onClick={() => {
                  navigate("/products");
                  window.scrollTo(0, 0); // Scrolls to the top of the page
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Show More Button */}
                <div
                  className="max-md:text-[15px] text-white text-[36px] underline max-635px:text-[12px] cursor-pointer font-raleway opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  onClick={() => {
                    navigate("/products");
                    window.scrollTo(0, 0); // Scrolls to the top of the page
                  }}
                >
                  Show More
                </div>
              </div>

              <div
                style={{ backgroundImage: `url(${image3})` }}
                className="relative w-[66%] h-full bg-cover cursor-pointer bg-center flex justify-center items-center group"
                aria-label="Craft 3"
                onClick={() => {
                  navigate("/products");
                  window.scrollTo(0, 0); // Scrolls to the top of the page
                }}
              >
                {/* Translucent Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Show More Button */}
                <div
                  className="max-md:text-[15px] text-white text-[36px] underline max-635px:text-[12px] cursor-pointer font-raleway opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  onClick={() => {
                    navigate("/products");
                    window.scrollTo(0, 0); // Scrolls to the top of the page
                  }}
                >
                  Show More
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
