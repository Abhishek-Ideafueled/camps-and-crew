import { useEffect, useRef, useState } from "react";
import { roomAccordianData2 } from "./roomsAccordianData";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

const RoomsManagementSecond = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeImageId, setActiveImageId] = useState(1);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  const calculateHeights=()=>{
    const calculatedHeights = 
      contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(calculatedHeights);
  }

  // useEffect(() => {
    
  //   window.addEventListener('resize', calculateHeights);
  // window.addEventListener('load', calculateHeights); 

  // return () => {
  //   window.removeEventListener('resize', calculateHeights);
  //   window.removeEventListener('load', calculateHeights);
  // };

  // }, []);

  // useEffect(() => {
  //   calculateHeights(); 
  // }, [activeId]);

  setTimeout(()=>{
      calculateHeights();
  },0)


  const handleAccordionClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveImageId(id);
    }
  };

  return (
    <div className="w-full bg-custom-back py-20">
      <div className="main-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-center">
        <div className="md:min-w-[393px] lg:min-w-[513px] xl:w-[666px] min-h-[520px] max-h-max flex flex-col p-6 lg:py-10 lg:px-12 bg-white rounded-2xl z-10">
          <div className="flex flex-col gap-4 mb-6">
            <div className="text-[#189AD2] font-ttCommonProMedium text-sm leading-[22px] font-semibold tracking-[0.56px]">
              ROOMS MANAGEMENT
            </div>
            <div className="font-gilroyBold text-[25px] md:text-[32px] md:leading-[38px] text-custom-heading">
              Flexible Ways to Set Up Your Rooms
            </div>
          </div>
          {roomAccordianData2.map((item, index) => (
            <div
              className="flex flex-col cursor-pointer"
              key={item.id}
            >
              <div
                className={`${
                  activeId === item.id ? "opacity-100" : "opacity-50"
                } font-gilroyBold text-custom-heading text-lg leading-[22px ] z-10 lg:text-xl lg:leading-[24px] flex items-center justify-between h-[56px]`}
                onClick={() => handleAccordionClick(item.id)}
              >
                <span className="flex items-center gap-3">
                  <FaCircleCheck className="text-[#189AD2]" size={30} />
                  {item.title}
                </span>
                <span
                  className={`${
                    activeId === item.id
                      ? "rotate-180 transition-transform duration-500 ease-in-out"
                      : "transition-transform duration-300 ease-in-out"
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
        <div className="h-[250px] md:h-[638px] max-w-[666px] relative z-0 md:ml-[-100px] xl:ml-[-30px]">
          <img
            className={`${
              activeImageId === 1 ? "opacity-100 " : "opacity-0"
            } object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out bg-custom-back  rounded-2xl`}
            src="/permanent-room-remote-camp-canada.jpg"
            alt="Bedroom of a worker at an oil sands camp in Fort McMurray, Canada."
          />
          <img
            className={`${
              activeImageId === 2 ? "opacity-100 " : "opacity-0"
            } object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out rounded-2xl`}
            src="/bunkhouse-multiple-beds-remote-mining-camp-housing.jpg"
            alt="Bunk beds in a shared worker dormitory with windows looking onto a savannah."
          />
          <img
            className={`${
              activeImageId === 3 ? "opacity-100 " : "opacity-0"
            } object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out rounded-2xl`}
            src="/remote-camp-room-jack-and-jill-room.jpg"
            alt="A bedroom with a bed, private sink and desk at a mining camp."
          />
          <img
            className={`${
              activeImageId === 4 ? "opacity-100 " : "opacity-0"
            } object-cover absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out rounded-2xl`}
            src="/two-double-beds-camp-room-cross-shifts.jpg"
            alt="Two matching beds in a shared room for workers."
          />
        </div>
      </div>
    </div>
  );
};

export default RoomsManagementSecond;
