import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import enroute2 from '/enroute2.jpg';
import enroute3 from '/enroute3.jpg';
import enroute4 from '/enroute4.jpg';
import enroute1 from '/enroute1.jpg';
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
    <div className="h-[620px] banner-slider2">
      <Slider {...settings}>
        <div className="relative py-[120px] px-28 xl:px-0 h-[620px] text-white w-full">
          <img
            src={enroute1}
            alt="main enroute"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative  w-full xl:max-w-[1216px] mx-auto ">
            <div className='flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
              A single system to book and manage all your FIFO transport
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
        <div className="relative py-[120px] px-28 xl:px-0 h-[620px] text-white w-full">
          <img
            src={enroute2}
            alt="second enroute"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative  w-full xl:max-w-[1216px] mx-auto ">
            <div className='flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
              Book and manage charter flights, buses and more
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
        <div className="relative py-[120px] px-28 xl:px-0 h-[620px] text-white w-full">
          <img
            src={enroute3}
            alt="third enroute"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative w-full xl:max-w-[1216px] mx-auto">
            <div className=' flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
              Manage travel and rooms for your workers in one platform
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
        </div>
        <div className="relative py-[120px] px-28 xl:px-0 h-[620px] text-white w-full">
          <img
            src={enroute4}
            alt="fourth enroute"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative  w-full xl:max-w-[1216px] mx-auto ">
            <div className='flex flex-col gap-8 w-full'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
              Book rich GDS content, all within policy
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
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
