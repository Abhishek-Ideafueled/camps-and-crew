import React from 'react';
import b2gold from '/b2gold.png';
import agincourtlogo from '/agincourt-logo.png';
import canadianenergy from '/canadian-energy.png';
import permianlodging from '/permian-lodging.png';
import top5canada from '/top-5-canada.png';
import top5logo from '/top5logo.png';
import sodexofull from '/sodexofull.png';
import sodexologo from '/sodexo-logo.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlidingCompanies.css";

const SlidingCompanies = () => {
  // const settings = {
  //   dots: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 0.5,
  //   autoplay: true,
  //   autoplaySpeed: 1,
  //   speed: 2000,
  //   infinite: true,
  //   cssEase: 'linear', 
  //   pauseOnHover: true,
  //   pauseOnFocus: true,
  //   responsive: [
  //     {
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 0.5,
  //       },
  //     },
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 0.5,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 0.5,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 0.5,
  //       },
  //     }
  //   ],
  // };

  const settings={
    speed: 13000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        // variableWidth: true,
        responsive: [
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow:2 ,
                },
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              }
            ],
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full mx-auto flex flex-col gap-14 my-10 sm:my-20">
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-gilroyBold font-normal text-custom-heading">
          Trusted by Companies All Over the World
        </h3>
        {/* <div className='w-full company-slider h-[106px]'>
          <Slider {...settings}>
            <div>
            <div className=''>
              <img className=' max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={b2gold} alt="b2gold logo" />
            </div>
            </div>
            <div>
            <div className=''>
              <img className=' max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={agincourtlogo} alt="agin court logo" />
            </div>
            </div>
            <div>
            <div className=''>
              <img className=' max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={canadianenergy} alt="canadian energy logo" />
            </div>
            </div>
            <div>

           
            <div className=''>
              <img className='max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={top5logo} alt="top 5 global logo" />
            </div>
            </div>
            <div>
            <div className=''>
              <img className='max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={permianlodging} alt="permian lodging logo" />
            </div>
            </div>
            <div>
            <div className=''>
              <img className='max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={sodexofull} alt="sodexo logo" />
            </div>
            </div>
            <div>
            <div className=''>
              <img className='max-h-[106px] lg:h-[106px] object-contain xl:w-[318px]' src={top5canada} alt="top 5 canada logo" />
            </div>
            </div>
          </Slider>
        </div> */}
        <div className="w-auto company-slider min-h-[106px]">
          <Slider {...settings}>
            <div className="inner-slides flex items-center">
              <div className="w-[33.33%]  sm:w-auto flex justify-center">
                <img className='h-[65px] sm:h-full' src={b2gold} alt="b2gold logo" />
              </div>

              <div className="w-[33.33%]  sm:w-auto flex justify-center">
                <img className='h-[65px] sm:h-full' src={agincourtlogo} alt="agin court logo" />
              </div>

              <div className="w-[33.33%]  sm:w-auto flex justify-center">
                <img
                 className='h-[65px] sm:h-full'
                  src={canadianenergy}
                  alt="canadian energy logo"
                />
              </div>
            </div>
            <div className=" inner-slides flex items-center">
              <div className="w-[33.33%]  sm:w-auto flex justify-center">
                <img className='h-[65px] sm:h-full' src={top5logo} alt="top 5 global logo" />
              </div>
              <div className="w-[33.33%]  sm:w-auto flex justify-center ">
                <img  className="max-h-[80px]" src={sodexologo} alt="sodexo logo" />
              </div>
              <div className="w-[33.33%]  sm:w-auto flex justify-center">
                <img className='h-[65px] sm:h-full' src={top5canada} alt="top 5 canada logo" />
              </div>
            </div>
            <div className="inner-slides flex items-center">
              <div className="w-[33.33%]  sm:w-auto flex justify-center">
                <img
                  className="max-h-[80px]"
                  src={permianlodging}
                  alt="permian lodging logo"
                />
              </div>

              <div className="w-[33.33%]  sm:w-auto flex justify-center ">
                <img
                 className='h-[65px] sm:h-full'
                  src={canadianenergy}
                  alt="canadian energy logo"
                />
              </div>
              <div className="w-[33.33%]  sm:w-auto flex justify-center ">
                <img  className="max-h-[80px]" src={sodexologo} alt="sodexo logo" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SlidingCompanies;
