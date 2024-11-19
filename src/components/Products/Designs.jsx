import React, { useRef, useState, useEffect } from "react";
import image1 from "../../assets/Product/1.png";
import image2 from "../../assets/Product/2.png";
import image3 from "../../assets/Product/3.png";
import image4 from "../../assets/Product/4.png";
import image5 from "../../assets/Product/5.png";
import image6 from "../../assets/Product/6.png";
import image7 from "../../assets/Product/7.png";
import image8 from "../../assets/Product/8.png";
import image9 from "../../assets/Product/9.png";
import modal1 from "../../assets/Product/modal1.png";
import modal2 from "../../assets/Product/modal2.png";
import modal3 from "../../assets/Product/modal3.png";
import modal4 from "../../assets/Product/modal4.png";
import modal5 from "../../assets/Product/modal5.png";
import modal6 from "../../assets/Product/modal6.png";
import cir1 from "../../assets/Product/cir1.png";
import cir2 from "../../assets/Product/cir2.png";
import cir3 from "../../assets/Product/cir3.png";
import cir4 from "../../assets/Product/cir4.png";

const Designs = () => {
  const [modal, setModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState({});
  const modalRef = useRef(null)
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModal(false); // Close the modal
    }
  };
  useEffect(() => {
    if (modal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup the listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modal]);
  const modalData = [
    {
      image: modal1,
      title: "Stone Finish",
      tag: "Smooth",
      desc1: "Italian Elegance, Reimagined.",
      desc2:
        "Inspired by the timeless grace of Italian Marmorino. Our stone finish offers a smooth plaster with a captivating medium texture and subtle depth. Not too bold, not too plain, it's the perfect touch for interiors seeking refined taste and understated luxury.",
      sheen: "Mid: Low Lusture",
      texture: "Smooth: No granularity",
      tonal: "Low: Minimal mottling in all colors",
      areas1: "Interior & Exterior",
      areas2: "Walls & Ceilings",
      areas3: "Natural Buildings",
    },
    {
      image: modal2,
      title: "Sand Finish",
      tag: "Coarse",
      desc1: "Textured Serenity, Inspired by Tradition:",
      desc2:
        "Embrace the tranquility of Japan's Shikkui tradition with our Sand Finish. This coarse-grained plaster, infused with lightweight aggregates, evokes the timeless allure of sandstone, adobe, or raw concrete, creating spaces of textured serenity.",
      sheen: "None: Matte ",
      texture: "Coarse: High granularity",
      tonal: "Low: Minimal mottling",
      areas1: "Interior & Exterior",
      areas2: "Walls & Ceilings",
      areas3: "Natural Buildings",
    },
    {
      image: modal3,
      title: "Marble Finish",
      tag: "Polished",
      desc1: "Venetian Opulence for Modern Spaces:",
      desc2:
        "Indulge in the luxury of Venetian plaster with our Marble Finish. This ultra-smooth, polished finish showcases mesmerizing tonal variations that deepen with darker hues. Transform The accent walls into havens of opulence, radiating a pearlescent glow and silky touch.",
      sheen: "High lusture: reflective",
      texture: "Smooth: polished",
      tonal: "High: mottling increases with darker colors",
      areas1: "Interior only",
      areas2: "Walls & Ceilings",
      areas3: "Kitchen",
    },
    {
      image: modal4,
      title: "Tadelakt Finish",
      tag: "Polished",
      desc1: "Moroccan Heritage, Water-Resistant Elegance",
      desc2:
        "Our Tadelakt Finish, inspired by Moroccan tradition, infuses lime plaster with olive oil soap for a burnished, water-repellent finish. This timeless technique elevates bathrooms and showers with earthy warmth and a touch of history.",
      sheen: "Mild: Low lusture",
      texture: "Smooth: No granularity",
      tonal: "HighLow: movement and mottling may increase with darker colors",
      areas1: "Interior & Exterior",
      areas2: "Showers Bathrooms",
      areas3: "Kitchens",
    },
    {
      image: modal5,
      title: "Travertine Finish",
      tag: "Coarse",
      desc1: "The Prestige of Travertine, Redefined:",
      desc2:
        "Experience the elegance of Travertine stone with our Travertine Lime Plaster.  This meticulously crafted finish, made with white marble powders and advanced binders, mimics the natural variations and depth of real stone, adding a touch of prestige to any space.",
      sheen: "None: matte",
      texture: "Coarse: high granularity",
      tonal: "Low: minimal mottling",
      areas1: "Interior & Exterior",
      areas2: "Walls & Ceiling",
      areas3: "Natural Building",
    },
    {
      image: modal6,
      title: "Distressed Finish",
      tag: "Polished + Coarse ",
      desc1: "A Story Etched in Time:",
      desc2:
        "Our Distressed Finish is more than just aesthetics; it's a narrative. It emulates the weathered beauty of natural stone with a low shine and a textured surface that invites touch. Subtle polished accents add a contemporary flair, creating a bold, natural statement in any room.",
      sheen: "None: matte",
      texture: "Coarse: high granularity",
      tonal: "Low: minimal mottling",
      areas1: "Interior & Exterior",
      areas2: "Walls & Ceiling",
      areas3: "Natural Building",
    },
  ];

  const handleModal = (data) => {
    console.log(data)
    setSelectedModal(data)
    setModal(true)

  }
  const handleDownload = () => {
    // Provide the path to the PDF in the `public` folder
    const link = document.createElement("a");
    link.href = `/sample.pdf`; // Update with your actual file path
    link.download = "catalogue.pdf"; // Filename for the downloaded PDF
    link.click();
  };
  return (
    <div className="w-full flex justify-center pb-[83px] pt-[246px]">
      <div className="flex h-full justify-center items-center gap-[88px] max-md:gap-[64px] flex-col w-[83.89%] max-md:w-[89.58%] max-sm:w-[70.82%]">
        <div className="flex flex-col w-full items-center gap-[26px]">
          <div className="text-[64px] font-bold leading-[120%] font-raleway text-[#000000] text-center max-md:text-[36px] max-sm:text-[32px]">
            Illuminate Your Space with{" "}
            <span className="text-[#214A3E] italic">
              <br />
              Captivating Designs
            </span>
          </div>
          <div className="text-[24px] leading-[120%] text-[#758195]  max-w-[76.3%] max-md:text-[16px] text-center font-raleway">
            Inspired By The Raw Beauty Of Stone, Sand, & Marble. Our Textures
            Bring The Calming Essence Of Nature Indoors, Adding Depth &
            Character
          </div>
        </div>
        <div className="flex flex-col gap-[88px] max-md:gap-[64px] w-full max-md:flex-row max-sm:flex-col  h-full">
          <div className="flex w-full h-[25vw] max-md:h-full gap-[64px] max-md:flex-col">
            {/* <div
            className="rounded-[50%] w-full h-full max-md:h-[300px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
         
            <div
              className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
              style={{
                maxWidth: "80%", 
                overflowWrap: "break-word",
              }}
            >
              MARBLE FINISH
            </div>
          </div>
          <div
            className="rounded-[50%] max-md:h-[300px] w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
             <div
              className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
              style={{
                maxWidth: "80%", 
                overflowWrap: "break-word",
              }}
            >   CONCRETE BLOCK FINISH
            </div>
          </div>
          <div
            className="rounded-[50%] max-md:h-[300px] w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
             <div
              className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
              style={{
                maxWidth: "80%", 
                overflowWrap: "break-word",
              }}
            > STONE FINISH
            </div>
          </div> */}
            <div
              className="rounded-md flex w-[25vw] cursor-pointer h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[2])} 
            >
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
                
              >
                MARBLE FINISH
              </div>
            </div>
            <div
              className="rounded-md flex w-[25vw] cursor-pointer h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[3])}
            >
              {" "}
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                CONCRETE BLOCK FINISH
              </div>
            </div>
            <div
              className="rounded-md flex w-[25vw] cursor-pointer h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[0])} 
            >
              {" "}
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                STONE FINISH
              </div>
            </div>
          </div>
          <div className="flex w-full max-md:h-full h-[25vw] max-md:w-full gap-[64px] max-md:flex-col">
            <div
              className="rounded-md flex w-[25vw] cursor-pointer h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[2])}
            >
              {" "}
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[10vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                PITTED FINISH
              </div>
            </div>
            <div
              className="rounded-md flex w-[25vw] cursor-pointer h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[5])} 
            >
              {" "}
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[9vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                DISTRESSED FINISH
              </div>
            </div>
            <div
              className="rounded-md flex w-[25vw] cursor-pointer h-[25vw] max-md:w-full max-md:h-[40vw] max-sm:h-[70vw] items-center justify-center"
              style={{
                // width: "25vw",
                // height: "25vw",
                backgroundImage: `url(${image6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
                onClick={() => handleModal(modalData[4])} 
            >
              {" "}
              <div
                className="text-[3vw] max-md:text-[5vw] max-sm:text-[9vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                TRAVERTINE FINISH
              </div>
            </div>
          </div>
          <div className="flex w-full h-[25vw] gap-[64px] max-md:hidden">
            <div
              className="rounded-md flex items-center cursor-pointer justify-center"
              style={{
                width: "25vw",
                height: "25vw",
                backgroundImage: `url(${image7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[2])}
            >
              <div
                className="text-[3vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                DEBOSSED FINISH
              </div>
            </div>
            <div
              className="rounded-md flex items-center cursor-pointer justify-center"
              style={{
                width: "25vw",
                height: "25vw",
                backgroundImage: `url(${image8})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
                onClick={() => handleModal(modalData[1])} 
            >
              <div
                className="text-[3vw] leading-[120%] font-raleway font-bold text-[#000000] text-center overflow-hidden"
                style={{
                  maxWidth: "70%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                SAND FINISH
              </div>
            </div>
            <div
              className="rounded-md cursor-pointer flex items-center justify-center"
              style={{
                width: "25vw",
                height: "25vw",
                backgroundImage: `url(${image9})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleModal(modalData[2])}
            >
              <div
                className="text-[3vw] leading-[120%] font-raleway font-bold text-[#FFFFFF] text-center overflow-hidden"
                style={{
                  maxWidth: "70%",
                  overflowWrap: "break-word",
                }}
              >
                {" "}
                CRISS CROSS FINISH
              </div>
            </div>
          </div>
        </div>
        <button className=" px-[24px] py-[13px] bg-[#214A3E] leading-[120%] gap-[14px] hover:bg-[#1D352E]  hover:w-[203px] transition-all duration-200 hover:gap-[20px] text-white text-[19px] rounded-full   w-[197px] h-[50px] flex items-center justify-center">
          <div
            className="font-raleway text-[20px] font-medium"
            onClick={handleDownload}
          >
            Know More
          </div>
          <span className=" w-[29px] h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
        </button>
        {modal && (
          <div
            className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            // onClick={handleCloseModal}
          >
            <div
              className="bg-[#031602] p-4 rounded-lg h-[842px] w-[595px] flex items-center justify-between flex-col"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <img
                src={selectedModal.image}
                alt="Design preview"
                className="w-[533px] h-[363px]"
              />
              <div className="w-[500px]">
                <div className="font-raleway text-[40px] tracking-[8%] leading-[60px] text-white font-light">
                  {/* Stone Finish */}
                  {selectedModal.title}
                </div>
                <div className="text-[15px] tracking-[8%] leading-[22.5px] text-white font-thin font-raleway">
                  {selectedModal.tag}
                </div>
                <div className="text-[15px] tracking-[8%] leading-[21.9px] text-white font-extralight font-raleway">
                  {selectedModal.desc1} <br />
                 {selectedModal.desc2}
                </div>
              </div>
              <div className="flex  w-[509px] h-[150px] justify-between">
                <div className="w-[92px] h-[111px] flex flex-col justify-between">
                  <img src={cir1} className="w-[45px] h-[45px]" />
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white font-bold">
                    SHEEN
                  </div>
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white">
                    {/* Mid: Low Lusture */}
                 {selectedModal.sheen}
                  </div>
                </div>
                <div className="w-[100px] h-[111px] flex flex-col justify-between">
                  <img src={cir2} className="w-[45px] h-[45px]" />
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white font-bold">
                    TEXTURE
                  </div>
                  <div className="font-raleway text-[10px] leading-[15.64px] tracking-[8%] text-white">
                    {/* Smooth: No granularity */}
                 {selectedModal.texture}
                  </div>
                </div>
                <div className="w-[119px] h-[111px] flex flex-col justify-between">
                  <img src={cir3} className="w-[45px] h-[45px]" />
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white font-bold">
                    TONAL VARIATION
                  </div>
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white">
                    {/* Low: Minimal mottling in all colors */}
                 {selectedModal.tonal}
                  </div>
                </div>
                <div className="w-[108x] h-[111px] flex flex-col justify-between">
                  <img src={cir4} className="w-[45px] h-[45px]" />
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white font-bold">
                    SUITABLE AREAS
                  </div>
                  <div className="font-raleway text-[10px] leading-[11.74px] tracking-[8%] text-white">
                    {/* Interior & Exterior */}
                 {selectedModal.areas1}
                    <br />
                    {/* Walls & Ceilings  */}
                 {selectedModal.areas2}<br />
                 {selectedModal.areas3}
                    {/* Natural Buildings */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Designs;
