import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import enroute2 from '/enroute2.jpg';
// import enroute3 from '/enroute3.jpg';
// import enroute4 from '/enroute4.jpg';
// import enroute1 from '/enroute1.jpg';
import './Enroute.css';

const Enroute = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay:true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover:false
      };

  return (
    <div className="banner-slider2 overflow-hidden">
      <Slider {...settings}>
        <div className="relative py-[120px] px-3 lg:px-28 xl:px-0 text-white w-full">
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-1 img-container' ></div>
          <div className="relative px-3 max-w-[600px] xl:px-28  xl:max-w-[1216px] ">
            <div className='flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              A single system to book and manage all your FIFO transport
            </h1>
            <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
        <div className="relative py-[120px] px-3 lg:px-28 xl:px-0 text-white w-full">
        
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-2 img-container2' ></div>
          <div className="relative px-3 max-w-[600px] xl:px-28  xl:max-w-[1216px] ">
            <div className='flex flex-col gap-8 '>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              Book and manage charter flights, buses and more
            </h1>
            <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
        <div className="relative py-[120px] px-3 lg:px-28 xl:px-0 text-white w-full">
        
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-3 img-container' ></div>
          <div className="relative px-3 max-w-[600px] xl:px-28  xl:max-w-[1216px]">
            <div className=' flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              Manage travel and rooms for your workers in one platform
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
        <div className="relative py-[120px] px-3 lg:px-28 xl:px-0 text-white w-full">
         
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-4 img-container2' ></div>
          <div className="relative px-3 max-w-[600px] xl:px-28  xl:max-w-[1216px] ">
            <div className='flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              Book rich GDS content, all within policy
            </h1>
            <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Enroute
