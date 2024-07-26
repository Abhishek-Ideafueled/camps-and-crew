import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import smartlodge2 from '/smartlodge2.jpg';
// import smartlodge3 from '/smartlodge3.jpg';
// import smartlodge4 from '/smartlodge4.jpg';
// import smartlodge5 from '/smartlodge5.jpg';
// import home from '/home.jpg';
import './SmartLodge.css';
import '../Homepage.css';
// import { afterMakingChange, beforeMakingChange } from './test';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const SmartLodge = () => {


      const settings = {
        customPaging: function(i) {
          return (
            <button>
             <svg className="progress-round" width="18" height="18"><circle className="circle-origin" r="7" cx="9" cy="9"></circle></svg><span><b></b></span>
            </button>
          );
        },
          dotsClass: "slick-dots slick-thumb",
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay:true,
        autoplaySpeed: 3500,
        cssEase: "ease-in-out",
        pauseOnHover:false,
      };

      
    
      

  return (
    <div className="banner-slider overflow-hidden">
        <Slider {...settings}>
          <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
            <div  className="absolute inset-0 h-auto bottom-0 bg-home img-container" >
         
            </div>
          <div className='min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center' data-aos="fade-up" data-aos-duration="1000">
          <div className="relative main-container mx-auto ">
              <div className='w-full flex flex-col gap-8' 
              // data-aos="fade-up" data-aos-duration="2000"
                data-animate="bottom" >
                <div className='flex flex-col gap-[10px] slider-heading'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                The most flexible camp <br /> management system <br /> on the market
              </h1>
              </div>
              <button
              
              className="max-w-[219px] h-[54px] btn-orange text-center leading-[0.9rem] text-sm lg:text-base rounded-[4px] lg:leading-[1.55rem] slider-desc">
              <Link to='/software-for-workforce-camp'>  SEE ALL FEATURES </Link>
              </button>
              </div>
            </div>
          </div>
           
          </div>
           <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
         
            <div className='absolute inset-0 h-auto bottom-0 img-container bg-smartlodge-2' ></div>
            <div className=' min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
            <div className="relative main-container mx-auto">
              <div className='flex flex-col gap-8 w-full' data-animate="bottom" >
              <div className='flex flex-col gap-[10px]'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal  lg:leading-[3.6rem] max-w-[600px]">
                Maximize room <br /> utilization before <br /> you buy, build or rent
              </h1>
              </div>
              <button
              
              className="max-w-[219px] h-[54px] btn-orange text-center leading-[0.9rem] text-sm lg:text-base rounded-[4px] lg:leading-[1.55rem]">
              <Link to='/software-for-workforce-camp'>  SEE ALL FEATURES </Link>
              </button>
              </div>
            </div></div>
          </div>
          <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
          
            <div className='absolute inset-0 h-auto bottom-0 bg-smartlodge-3 img-container' ></div>
            <div className=' min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
            <div className="relative main-container mx-auto">
              <div className='flex flex-col gap-8 w-full ' data-animate="bottom" >
                <div className='flex flex-col gap-[10px]'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                Easy-to-use tools <br /> to book and assign <br /> rooms at your camp
              </h1>
              </div>
              <button
              
              className="max-w-[219px] h-[54px] btn-orange text-center rounded-[4px] leading-[0.9rem] text-sm lg:text-base lg:leading-[1.55rem]">
              <Link to='/software-for-workforce-camp'>  SEE ALL FEATURES </Link>
              </button></div>
            </div>
            </div>
          </div>
          <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
          
            <div className='absolute inset-0 w-full h-auto bottom-0 bg-smartlodge-4 img-container' ></div>
            <div className=' min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
            <div className="relative main-container mx-auto">
              <div className='flex flex-col gap-8 w-full' data-animate="bottom" >
                <div className='flex flex-col gap-[10px]'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                Technology to help <br /> your staff turn rooms <br /> faster  than ever
              </h1>
              </div>
              <button
              
              className="max-w-[219px] h-[54px] btn-orange text-center rounded-[4px] leading-[0.9rem] text-sm lg:text-base lg:leading-[1.55rem]">
              <Link to='/software-for-workforce-camp'>  SEE ALL FEATURES </Link>
              </button>
              </div>
            </div>
            </div>
          </div>
          <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
        
            <div className='absolute inset-0 w-full h-auto bottom-0 bg-smartlodge-5 img-container' ></div>
            <div className=' min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
            <div className="relative main-container mx-auto">
              <div className='flex flex-col gap-8 w-full' data-animate="bottom" >
              <div className='flex flex-col gap-[10px] slider-heading'>
              <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem] ">
                | SMART LODGE |
              </span>
              <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
                Designed to manage <br /> camps large or small, <br /> in any location
              </h1>
              </div>
              <button
              
              className="max-w-[219px] h-[54px] btn-orange text-center rounded-[4px] text-sm lg:text-base lg:leading-[1.55rem] slider-desc">
              <Link to='/software-for-workforce-camp'>  SEE ALL FEATURES </Link>
              </button>
              </div>
            </div>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default SmartLodge
