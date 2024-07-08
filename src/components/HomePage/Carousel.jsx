import React from 'react';
import home from '/home.jpg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaRegCircle } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import smartlodge2 from '/smartlodge2.jpg';
import smartlodge3 from '/smartlodge3.jpg';
import smartlodge4 from '/smartlodge4.jpg';
import smartlodge5 from '/smartlodge5.jpg';
import './Carousel.css';

const Carousel = () => {

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
    <div className="w-full">
      {/* <div className='bg-home py-[120px] px-28 h-[620px] text-white'> 
         <img src={home} alt="" className='absolute inset-0'/> 
         <div className='flex flex-col w-[600px] gap-[10px]'>
          <span className='font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]'>| SMART LODGE |</span>
          <h1 className='text-h1 font-gilroyBold font-normal leading-[3.6rem]'>The most flexible camp management system on the market </h1>
          <button className='w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]'>
            SEE ALL FEATURES</button>
        </div>
      </div> */}
  <div className='h-[620px] banner-slider'>
      <Slider {...settings}>
        <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
          <img
            src={home}
            alt="home smartlodge"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative flex flex-col w-[600px] gap-[10px]">
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | SMART LODGE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem]">
              The most flexible camp management system on the market
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
          </div>
        </div>
        <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
          <img
            src={smartlodge2}
            alt="second smartlodge"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative flex flex-col w-[600px] gap-[10px]">
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | SMART LODGE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem]">
              Maximize room utilization before you buy, build or rent
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
          </div>
        </div>
        <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
          <img
            src={smartlodge3}
            alt="third smartlodge"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative flex flex-col w-[600px] gap-[10px]">
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | SMART LODGE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem]">
            Easy-to-use tools
to book and assign
rooms at your camp
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
          </div>
        </div>
        <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
          <img
            src={smartlodge4}
            alt="fourth smartlodge"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative flex flex-col w-[600px] gap-[10px]">
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | SMART LODGE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem]">
            Technology to help
your staff turn rooms
faster than ever
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
          </div>
        </div>
        <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
          <img
            src={smartlodge5}
            alt="fifth smartlodge"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
          <div className="relative flex flex-col w-[600px] gap-[10px]">
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | SMART LODGE |
            </span>
            <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem]">
            Designed to manage
camps large or small,
in any location 
            </h1>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
          </div>
        </div>
      </Slider>
</div>
      <div className="flex justify-between px-28 py-5 text-custom-blue ">
        <div className="flex items-center gap-2 ">
          <BsArrowLeft />
          <p className="font-ttCommonProNormal font-semibold leading-[1.6rem]">
            SMARTLODGE
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          <FaRegCircle className="" />
          <FaRegCircle />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-ttCommonProNormal font-semibold leading-[1.6rem]">
            ENROUTE
          </p>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Carousel
