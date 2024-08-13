import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { RealTimeAccordionData } from './RealTimeCheckInData';
import { FaCircleCheck } from 'react-icons/fa6';

const RealTimeCheckIn = () => {

    const [activeId, setActiveId] = useState(1);
    const [activeImageId, setActiveImageId] = useState(1);
    const [heights, setHeights] = useState([]);
    const contentRefs = useRef([]);
  
    useEffect(() => {
      const calculatedHeights = contentRefs.current.map(
        (el) => el.scrollHeight
      );
      setHeights(calculatedHeights);
    }, []);
  
  
    const handleAccordionClick = (id) => {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
        setActiveImageId(id);
      }
    };

  return (
    <div className="w-full bg-custom-back">
      <div className="main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
        <div className="flex flex-col w-full gap-4 items-center max-w-[959px]">
          <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
            CHARTERED TRANSPORTAION
          </span>
          <h2 className="heading-h2 text-white text-center max-w-[637px]">
            Passenger Check In for Chartered Modes of Transportation
          </h2>
          <span className="sub-heading text-white text-center pt-2">
            The Passenger Check In functionality offered by EnRoute provides
            authorized personnel the ability to digitally manage and monitor
            every stage of workers' journeys, from departure to arrival at camp
            (and vice-versa).
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 w-full items-center">
          <div className="py-2 md:py-[35px] max-w-[588px] mx-auto">
            <div className="flex flex-col ">
              {RealTimeAccordionData.map((item, index) => (
                <div
                  className="flex flex-col cursor-pointer transition-all duration-450 border-b-[#CDD5DF] border-b-[1px]"
                  key={item.id}
                  onClick={() => handleAccordionClick(item.id)}
                >
                  <div className="font-gilroyBold text-white text-lg lg:text-xl z-10 leading-[24px] flex items-center justify-between h-[56px]">
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
                        activeId === item.id ? `${heights[index]}px` : "0",
                    }}
                  >
                    <ul className="flex flex-col gap-2 md:gap-4 text-white font-ttCommonProNormal text-base w-[95%] pb-2">
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6">
                          {/* <FaCircleCheck className="text-[#189AD2] "  size={24}/> */}
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_160_5)">
                              <path
                                d="M24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5C18.6274 24.5 24 19.1274 24 12.5Z"
                                fill="#63C1EC"
                              />
                              <path
                                d="M17.0005 8.75L10.1255 15.625L7.00049 12.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_160_5">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        {item.p1}
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6">
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_160_5)">
                              <path
                                d="M24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5C18.6274 24.5 24 19.1274 24 12.5Z"
                                fill="#63C1EC"
                              />
                              <path
                                d="M17.0005 8.75L10.1255 15.625L7.00049 12.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_160_5">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        {item.p2}
                      </li>
                      {item.p3 && (
                        <li className="flex items-center gap-3">
                          <span className="w-6 h-6">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_160_5)">
                              <path
                                d="M24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5C18.6274 24.5 24 19.1274 24 12.5Z"
                                fill="#63C1EC"
                              />
                              <path
                                d="M17.0005 8.75L10.1255 15.625L7.00049 12.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_160_5">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          </span>
                          {item.p3}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[450px] lg:h-[523px] max-w-[588px] relative w-full mx-auto flex items-center">
            <img
              className={`${
                activeImageId === 1 ? "opacity-100 " : "opacity-0"
              } absolute w-full h-auto transition-all duration-500 rounded-2xl`}
              src="/female-fifo-workers-seated-plane-window2.jpg"
              alt="female-fifo-workers-seated-plane-window"
            />
            <img
              className={`${
                activeImageId === 2 ? "opacity-100 " : "opacity-0"
              } absolute w-full h-auto transition-all duration-500 rounded-2xl`}
              src="/fifo-workers-boarding-bus2.jpg"
              alt='fifo-workers-boarding-bus2'
            />
            <img
              className={`${
                activeImageId === 3 ? "opacity-100 " : "opacity-0"
              } absolute w-full h-auto transition-all duration-500 rounded-2xl`}
              src="/reporting.jpg"
            />
            <img
              className={`${
                activeImageId === 4 ? "opacity-100 " : "opacity-0"
              } absolute w-full h-auto transition-all duration-500 rounded-2xl`}
              src="/worker-quarters-remote-mining-camp.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeCheckIn
