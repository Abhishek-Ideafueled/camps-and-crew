import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import smartlodge2 from '/smartlodge2.jpg';
import smartlodge3 from '/smartlodge3.jpg';
import smartlodge4 from '/smartlodge4.jpg';
import smartlodge5 from '/smartlodge5.jpg';
import home from '/home.jpg';
import './Carousel.css';

const SmartLodge = () => {

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
    <div className="h-[620px] banner-slider">
        <Slider {...settings}>
          <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
            <img
              src={home}
              alt="home smartlodge"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative  xl:max-w-[1216px] w-full mx-auto ">
              <div className='w-full flex flex-col gap-[10px]'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
                The most flexible camp management system on the market
              </h1>
              <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
                SEE ALL FEATURES
              </button>
              </div>
            </div>
          </div>
          <div className="relative py-[120px] px-28 h-[620px] text-white w-full">
            <img
              src={smartlodge2}
              alt="second smartlodge"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative flex flex-col xl:max-w-[1216px] w-full gap-[10px]">
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
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
            <div className="relative flex flex-col xl:max-w-[1216px] w-full gap-[10px]">
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
                Easy-to-use tools to book and assign rooms at your camp
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
            <div className="relative flex flex-col xl:max-w-[1216px] w-full gap-[10px]">
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
                Technology to help your staff turn rooms faster than ever
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
            <div className="relative flex flex-col xl:max-w-[1216px] w-full gap-[10px]">
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-h1 font-gilroyBold font-normal leading-[3.6rem] w-[600px]">
                Designed to manage camps large or small, in any location
              </h1>
              <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
                SEE ALL FEATURES
              </button>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default SmartLodge
