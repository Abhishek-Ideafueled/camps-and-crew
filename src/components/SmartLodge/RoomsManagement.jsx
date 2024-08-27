import { useState, useRef, useEffect } from "react";
import { roomAccordianData } from "./roomsAccordianData";
import { IoIosArrowDown } from "react-icons/io";

const RoomsManagement = () => {
  const [activeId, setActiveId] = useState(0);
  const [activeImageId, setActiveImageId] = useState(1);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  // useEffect(() => {
  //   const calculatedHeights = contentRefs.current.map(
  //     (el) => el.scrollHeight
  //   );
  //   setHeights(calculatedHeights);
  // }, []);

  const calculateHeights=()=>{
    const calculatedHeights = 
      contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(calculatedHeights);
  }

  useEffect(() => {
    
    window.addEventListener('resize', calculateHeights);
  window.addEventListener('load', calculateHeights); 

  return () => {
    window.removeEventListener('resize', calculateHeights);
    window.removeEventListener('load', calculateHeights);
  };

  }, []);

  useEffect(() => {
    calculateHeights(); 
  }, [activeId]);



  const handleAccordionClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveImageId(id);
    }
  };

  return (
    <div className="w-full py-20">
      <div className="main-container mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[25px] md:text-[32px] lg:text-[36px] lg:leading-[45px] xl:text-h2 text-custom-heading font-gilroyBold xl:leading-[3rem] border-b-[8px] border-b-custom-button">
            Rooms Management
          </h2>
          <span className="text-base md:text-lg text-custom-body font-ttCommonProMedium text-center">
            Achieve nearly 100% room utilization before you build, buy, or rent{" "}
            <br />
            additional accommodations for your remote crews.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full ">
          <div className="py-[35px] max-w-[588px] mx-auto">
            <div className="font-gilroyBold text-[25px] md:text-[32px] leading-[38px] text-custom-heading mb-6 ">
              Flexible Ways to Book Your Rooms
            </div>
            <div className="flex flex-col">
              {roomAccordianData.map((item,index) => (
                <div
                  className="flex flex-col cursor-pointer transition-all duration-450 border-b-[#CDD5DF] border-b-[1px]"
                  key={item.id}
                  onClick={() => handleAccordionClick(item.id)}
                >
                  <div className="font-gilroyBold text-custom-heading text-lg lg:text-xl z-10 leading-[24px] flex items-center justify-between h-[56px]">
                    {item.title}
                    <span
                      className={`${
                        activeId === item.id
                          ? "rotate-180 transition-all duration-500"
                          : "transition-all duration-300"
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                  <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`${
                  activeId === item.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                } 
                                            overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    activeId === item.id
                      ? `${heights[index]}px`
                      : "0",
                }}
              >
                    <div className="text-custom-body font-ttCommonProNormal text-base w-[95%] pb-2">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[480px] max-w-[588px] relative w-full mx-auto">
            <img
              className={`${
                activeImageId === 1 ? "opacity-100 " : "opacity-0"
              } absolute inset-0 w-full h-full transition-all duration-500 rounded-2xl`}
              src="/reporting.jpg"
            />
            <img
              className={`${
                activeImageId === 2 ? "opacity-100 " : "opacity-0"
              } absolute inset-0 w-full h-full transition-all duration-500 rounded-2xl`}
              src="/women-corporate-office-working-computers.jpg"
            />
            <img
              className={`${
                activeImageId === 3 ? "opacity-100 " : "opacity-0"
              } absolute inset-0 w-full h-full transition-all duration-500 rounded-2xl`}
              src="/workers-walk-towards-lobby-mining-camp.jpg"
            />
            <img
              className={`${
                activeImageId === 4 ? "opacity-100 " : "opacity-0"
              } absolute inset-0 w-full h-full transition-all duration-500 rounded-2xl`}
              src="/worker-quarters-remote-mining-camp.jpg"
            />
            <img
              className={`${
                activeImageId === 5 ? "opacity-100 " : "opacity-0"
              } absolute inset-0 w-full h-full transition-all duration-500 rounded-2xl`}
              src="/workforce-loding-permian-basin-texas-sunset.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsManagement;
