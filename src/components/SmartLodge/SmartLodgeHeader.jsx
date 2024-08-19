import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import YoutubeModal from '../YoutubeModal';
import { Link, animateScroll as scroll } from "react-scroll";

const SmartLodgeHeader = () => {
  const [isOpen,setIsOpen] = useState(false);

  const openModal=()=>{
    setIsOpen(true);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

     return () => { document.body.style.overflow = 'unset' }
  }, [isOpen]);


  const closeModal=()=>{
    setIsOpen(false);
  }

  const handleClickScroll = () => {
    const element = document.getElementById('demoForm');

    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };


  

  return (
    <>
    <div className=" w-full bg-custom-back h-full min-h-[580px] py-10 lg:py-20">
      <div className="main-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <span className="text-custom-blue font-ttCommonProRegular tracking-[0.8px] font-semibold text-sm leading-[1.4rem]">
                SOFTWARE FOR WORKFORCE ACCOMMODATION
              </span>
              <span className=" text-white heading-h1">
                Flexible Software to Manage Your Remote Workforce Lodging
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 w-full justify-center lg:justify-start">
            <Link to="demoForm" onClick={handleClickScroll}><div className="btn-orange w-[210px] lg:w-[187px] cursor-pointer flex items-center justify-center h-[58px] rounded-[4px] hover:bg-white transition-all duration-300 text-btn-text">
           BOOK A DEMO     
              </div></Link>
             <Link to="demoForm" onClick={handleClickScroll}>  <div className="font-ttCommonProNormal font-semibold cursor-pointer w-[210px] lg:w-[187px] flex items-center justify-center h-[58px] rounded-[4px] hover:bg-white hover:text-btn-text hover:border-white transition-all duration-300 text-custom-button border-[1px] border-custom-button">
              SPEAK TO SALES
              </div></Link>
            </div>
          </div>
          <div className="w-full max-w-[588px] h-[340px] lg:h-[420px] justify-self-center">
          <div className="relative px-14 w-full h-full flex items-center justify-center">
                <img
                  className="absolute inset-0 rounded-2xl w-full h-full sm:w-full justify-self-center"
                  src="/smartlodge-product-video-workforce-camp-software.gif"
                  alt=""
                />
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center hover:opacity-80">
                  
                   <span onClick={openModal} className='cursor-pointer'>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_87)">
                        <path
                          d="M80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40Z"
                          fill="#EFBC43"
                        />
                        <path
                          d="M33.7724 54.5263C33.3118 54.5254 32.8594 54.3983 32.4597 54.1576C31.5596 53.6207 31 52.5786 31 51.4473V28.5527C31 27.4182 31.5596 26.3793 32.4597 25.8425C32.869 25.5949 33.3339 25.4676 33.8059 25.4739C34.2779 25.4801 34.7396 25.6197 35.1428 25.878L53.7342 37.5906C54.1216 37.8463 54.441 38.2013 54.6624 38.6225C54.8839 39.0437 55 39.5171 55 39.9984C55 40.4798 54.8839 40.9532 54.6624 41.3744C54.441 41.7955 54.1216 42.1506 53.7342 42.4063L35.1398 54.1221C34.7272 54.3846 34.2546 54.5243 33.7724 54.5263Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_87">
                          <rect width="80" height="80" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    </span>
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    {
isOpen && <YoutubeModal closeModal={closeModal}>
 
  <iframe  
  className='w-full h-full'
  src="https://www.youtube.com/embed/5rt33ZISw9c" frameBorder="0"></iframe>
</YoutubeModal>
    }
    </>
  )
}

export default SmartLodgeHeader
