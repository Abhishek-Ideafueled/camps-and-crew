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
        pauseOnHover:false
      };

  return (
    <div className="banner-slider2 overflow-hidden">
      <Slider {...settings}>
        <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-1 img-container2' ></div>
          <div className='min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
          <div className="relative main-container mx-auto">
            <div className='flex flex-col gap-8 w-full'>
            <div className='flex flex-col gap-[10px]'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              A single system  to book <br /> and manage all your <br /> FIFO transport
            </h1>
            </div>
            <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div></div>
        </div>
        <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
        
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-2 img-container2' ></div>
          <div className='min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
          <div className="relative main-container mx-auto ">
            <div className='w-full flex flex-col gap-8 '>
              <div className='flex flex-col gap-[10px]'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              Book and manage <br /> charter flights, <br /> buses and more
            </h1>
            </div>
            <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
          </div>
        </div>
        <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
        
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-3 img-container2' ></div>
          <div className='min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
          <div className="relative main-container mx-auto ">
            <div className=' flex flex-col gap-8 w-full'>
              <div className='flex flex-col gap-[10px]'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              Manage travel and <br /> rooms for your workers <br /> in one platform
            </h1></div>
            <button className="w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
          </div>
        </div>
        <div className="relative min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] text-white w-full">
         
          <div className='absolute inset-0 h-auto bottom-0 bg-enroute-4 img-container2' ></div>
          <div className='min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] flex items-center justify-center'>
          <div className="relative main-container mx-auto ">
            <div className='flex flex-col gap-8 w-full'>
              <div className='flex flex-col gap-[10px]'>
            <span className="font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]">
              | ENROUTE |
            </span>
            <h1 className="text-[26px] md:text-[37px] lg:text-h1 font-gilroyBold font-normal lg:leading-[3.6rem] max-w-[600px]">
              Book rich GDS content, all within policy
            </h1></div>
            <button className="max-w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]">
              SEE ALL FEATURES
            </button>
            </div>
          </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Enroute
