import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import smartlodge2 from '/smartlodge2.jpg';
// import smartlodge3 from '/smartlodge3.jpg';
// import smartlodge4 from '/smartlodge4.jpg';
// import smartlodge5 from '/smartlodge5.jpg';
// import home from '/home.jpg';
import './SmartLodge.css';

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
    <div className="banner-slider">
        <Slider {...settings}>
          <div className="relative py-[120px] px-28 xl:px-0 text-white w-full">
            <div  className="absolute inset-0 w-full h-auto bottom-0 bg-remote-camp img-container" >
            {/* <img
              src="/remote-camp-modular-buildings-exterior.jpg"
              alt="home smartlodge"
              className=''
            /> */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative  xl:max-w-[1216px] w-full mx-auto ">
              <div className='w-full flex flex-col gap-8'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                The most flexible camp management system on the market
              </h1>
              <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal leading-[0.9rem] text-sm lg:text-base font-semibold text-btn-text rounded-[4px] lg:leading-[1.55rem]">
                SEE ALL FEATURES
              </button>
              </div>
            </div>
          </div>
          {/* <div className="relative py-[120px] px-28 xl:px-0 text-white w-full">
         
            <div className='absolute inset-0 w-full h-auto bottom-0 bg-smartlodge-2 img-container' ></div>
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative  xl:max-w-[1216px] w-full mx-auto">
              <div className='flex flex-col gap-8 w-full'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal  lg:leading-[3.6rem] max-w-[600px]">
                Maximize room utilization before you buy, build or rent
              </h1>
              <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProRegular text-sm lg:text-base font-semibold text-btn-text rounded-[4px] lg:leading-[1.55rem]">
                SEE ALL FEATURES
              </button>
              </div>
            </div>
          </div>
          <div className="relative py-[120px] px-28 xl:px-0 text-white w-full">
          
            <div className='absolute inset-0 w-full h-auto bottom-0 bg-smartlodge-3 img-container' ></div>
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative  xl:max-w-[1216px] w-full mx-auto">
              <div className='flex flex-col gap-8 w-full '>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                Easy-to-use tools to book and assign rooms at your camp
              </h1>
              <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
                SEE ALL FEATURES
              </button></div>
            </div>
          </div>
          <div className="relative py-[120px] px-28 xl:px-0 text-white w-full">
          
            <div className='absolute inset-0 w-full h-auto bottom-0 bg-smartlodge-4 img-container' ></div>
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative  xl:max-w-[1216px] w-full mx-auto">
              <div className='flex flex-col gap-8 w-full'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                Technology to help your staff turn rooms faster than ever
              </h1>
              <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
                SEE ALL FEATURES
              </button>
              </div>
            </div>
          </div>
          <div className="relative py-[120px] px-28 xl:px-0 text-white w-full">
        
            <div className='absolute inset-0 w-full h-auto bottom-0 bg-smartlodge-5 img-container' ></div>
            <div className="absolute inset-0 w-full h-full bg-smart-lodge"></div>
            <div className="relative  xl:max-w-[1216px] w-full mx-auto">
              <div className='flex flex-col gap-8 w-full'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                Designed to manage camps large or small, in any location
              </h1>
              <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
                SEE ALL FEATURES
              </button>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
  )
}

export default SmartLodge
