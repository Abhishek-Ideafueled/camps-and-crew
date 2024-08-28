import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import YoutubeModal from '../YoutubeModal';
import Slider from 'react-slick';
import './MiningMain.css';

const MiningSoftwareSolutions = () => {

    const [isOpen,setIsOpen] = useState(false);
    const [play,setPlay] = useState("");

  const openModal=(pid)=>{
   setIsOpen(true);
   setPlay(pid);
  }
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  
     return () => { document.body.style.overflow = 'unset' }
  }, [isOpen]);
  
  
  const closeModal=()=>{
    setIsOpen(false);
  }

  const settings=
  {
    dots: false,
    autoplay:true,
    speed:1000,
    autoplaySpeed:2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    swipeToSlide: false,
    arrows:false,
  };

  const scrollHandler = () => {
    const element = document.getElementById('demoForm');

    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <>
      <div className="w-full bg-custom-back relative">
        <span className="absolute z-0 w-[200px] h-[200px]">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="100"
              y="100"
              width="100"
              height="100"
              transform="rotate(90 100 100)"
              fill="#004461"
            />
            <rect
              x="100"
              width="100"
              height="100"
              transform="rotate(90 100 0)"
              fill="#004461"
            />
            <rect
              x="200"
              width="100"
              height="100"
              transform="rotate(90 200 0)"
              fill="#004461"
            />
          </svg>
        </span>
        <div className="main-container mx-auto py-10 lg:py-20 flex flex-col gap-[30px] lg:gap-[60px] items-center">
          <div className="flex flex-col items-center gap-6 z-10">
            <h2 className="heading-h2 text-white text-center">
              Software Solutions to Manage FIFO Transport
              <br className="hidden md:block" /> and Mining Camp Accommodation
            </h2>
            <span className="sub-heading text-white text-center">
            For years, we've continuously refined our technology to deliver specialized solutions for managing 
            FIFO travel logistics and mine site accommodations. EnRoute streamlines the often complex travel arrangements for FIFO workers,
             while SmartLodge offers comprehensive management of camp operations.
             Watch the videos below to discover how these solutions can optimize the way you transport and house your personnel.
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-4 xl:gap-6 md:gap-8">
            <div className="flex flex-col items-center w-full max-w-[500px] lg:max-w-[636px] z-10 max-h-max">
              <div className="flex flex-col gap-10 bg-[#EAE8E3] px-6 lg:px-14 pt-6 lg:pt-14 pb-28 min-h-[430px] superxl:min-h-[459px] rounded-2xl w-full">
                <button className="bg-custom-button font-gilroyBold w-[85px] h-[35px] rounded-full">
                  EnRoute
                </button>
                <div className="text-xl leading-6 md:text-2xl md:leading-[1.8rem] superxl:text-[32px] font-gilroyBold superxl:leading-[2.4rem] text-custom-heading">
                  A FIFO travel booking engine <br />
                  <span className="flex items-center gap-2">
                    for 
                    <div className="text-slider ">
                      <Slider {...settings}>
                        <div className=" border-b-custom-button border-[1px]">
                          authorized contractors
                        </div>
                        <div className=" border-b-custom-button border-[1px]">
                          travel coordinators
                        </div>
                        <div className=" border-b-custom-button border-[1px]">
                          logistics teams
                        </div>
                        <div className=" border-b-custom-button border-[1px]">
                          transport operators
                        </div>
                      </Slider>
                    </div>
                  </span>
                </div>
                <button className="btn-orange w-[286px] h-[58px] py-4 rounded">
                  <Link to="/fifo-travel-online-booking-tool">
                    SEE ALL ENROUTE FEATURES
                  </Link>
                </button>
              </div>
              <div className="relative mt-[-70px]  w-full h-[250px] lg:h-[300px] flex items-center justify-center gif-container">
                <img
                  className="absolute inset-0 card-thumb rounded-2xl w-[90%] max-w-[585px] h-full object-cover justify-self-center"
                  src="/EnRoute_thumb.png"
                  alt=""
                />
                <img 
                className='absolute inset-0 card-gif opacity-0 rounded-2xl w-[90%] max-w-[585px] h-full object-cover justify-self-center'
                src="/enroute-product-video.gif" alt="" />
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center hover:opacity-80">
                  <span className='cursor-pointer' onClick={()=>openModal("enroute")}>
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
            <div className=" flex flex-col items-center w-full max-w-[500px] lg:max-w-[636px] max-h-max">
              <div className=" flex flex-col gap-10 bg-[#EAE8E3] px-6 lg:px-14 pt-6 lg:pt-14 min-h-[430px] superxl:min-h-[459px] pb-28 rounded-2xl w-full">
                <button className="bg-custom-blue font-gilroyBold w-[120px] h-[35px] rounded-full">
                  SmartLodge
                </button>
                <div className="text-xl leading-6 md:text-2xl md:leading-[1.8rem] superxl:text-[32px] font-gilroyBold superxl:leading-[2.4rem] text-custom-heading">
                  A mine camp management <br /> 
                  <span className="flex items-center gap-2">
                <p className='flex items-center text-nowrap'>solution for</p>
                <br className='hidden lg:block xl:hidden'/> 
                    <div className="text-slider ">
                      <Slider {...settings}>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            front desk staff
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            housekeeping
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            maintenance
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            kitchen staff
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            accounting
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            central teams
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            contracted camp staff
                          </p>
                        </span>
                        <span>
                          <p className=" border-b-[#5BC0ED] border-[1px]">
                            catering companies
                          </p>
                        </span>
                      </Slider>
                    </div>
                  </span>
                </div>
                <button className="btn-orange bg-[#5BC0ED] hover:bg-[#4aadd8] w-[296px] h-[58px] py-4 rounded">
                  <Link to="/software-for-workforce-camp">
                    SEE ALL SMARTLODGE FEATURES
                  </Link>
                </button>
              </div>
              <div className="relative mt-[-70px] w-full h-[250px] lg:h-[300px] flex items-center justify-center gif-container">
                <img
                  className="card-gif absolute inset-0 rounded-2xl w-[90%] max-w-[585px] h-full object-cover justify-self-center"
                  src="/smartlodge-product-video-workforce-camp-software.gif"
                  alt="custom poster"
                />
                <img  
                className='card-thumb absolute inset-0 rounded-2xl w-[90%] max-w-[585px] h-full object-cover justify-self-center'
                src="/SmartLodge_thumb.png" alt="custom poster" />
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center hover:opacity-80">
                  <span className="cursor-pointer" onClick={()=>openModal("smartlodge")}>
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
         <Link href="#demoForm" className='max-w-max' onClick={scrollHandler}>
         <div className='btn-orange hover:bg-transparent border-[1px] border-transparent hover:text-white transition-all duration-200 hover:border-white flex items-center justify-center px-4 py-[14px]'>
            CONTACT SALES
         </div>
         </Link>
        </div>
      </div>
      {isOpen === true && play === "enroute" && (
        <YoutubeModal closeModal={closeModal}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EYw2a7mco6U?si=-rIp2dB4H7N9jzkN"
            frameBorder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </YoutubeModal>
      )}
        {isOpen === true && play !== "enroute" && (
        <YoutubeModal closeModal={closeModal}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/5rt33ZISw9c?si=xeAu4ZHUUwkhIejc"
            frameBorder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </YoutubeModal>
      )}
    </>
  );
}

export default MiningSoftwareSolutions
