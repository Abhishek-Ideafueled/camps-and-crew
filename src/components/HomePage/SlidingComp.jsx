import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import b2gold from '/b2gold.png';
import agincourtlogo from '/agincourt-logo.png';
import canadianenergy from '/canadian-energy.png';
import permianlodging from '/permian-lodging.png';
import top5canada from '/top-5-canada.png';
import top5logo from '/top5logo.png';
import sodexologo from '/sodexo-logo.png';
import './SlidingComp.css';

const SlidingComp = (props) => {
    const [bgColor,setBgColor] = useState("");
  useEffect(()=>{
      if(window.location.pathname==="/company" || window.location.pathname ==="/software-for-workforce-camp")
      {
        setBgColor("notWhite");
      }
  },[])

  const settings={
        speed: 5000,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 2200,
            settings: {
              slidesToShow:6 ,
            },
          },
          
        ],
  }

  return (
    <div className={`w-full ${bgColor==="notWhite"? "bg-[#FCFBF8]":""}`}>
        <div className="w-full mx-auto flex flex-col gap-14 py-10 sm:py-20">
       {props.showHeading && <h3 className="text-center text-lg sm:text-xl md:text-2xl font-gilroyBold font-normal text-custom-heading">
          Trusted by Companies All Over the World
        </h3>}
            <div className='w-full h-[106px] comp-slider'>
      <Slider {...settings}>
        <div className='single-slide px-4 md:px-6 lg:px-0'>
        <img className='h-[65px] sm:h-full' src={b2gold} alt="b2gold logo" />
        </div>
        <div className='single-slide'>
        <img className='h-[65px] sm:h-full' src={agincourtlogo} alt="agin court logo" />

        </div>
        <div className='single-slide'>
        <img
                 className=' h-[65px] sm:h-full '
                  src={canadianenergy}
                  alt="canadian energy logo"
                />
        </div>
        <div className='single-slide px-4 lg:px-0'>
        <img className='max-h-[106px] object-cover' src="/right-choice-camps-catering.png" alt="right choice camps catering logo" />
        </div>
        <div className='single-slide'>
        <img className='h-[65px] sm:h-full' src={top5logo} alt="top 5 global logo" />
        </div>
        <div className='single-slide px-4 lg:px-0'>
        <img  className="h-[65px] sm:h-[90px]" src={sodexologo} alt="sodexo logo" />
        </div >
        
        <div className='single-slide'>
        <img className='h-[65px] sm:h-full' src={top5canada} alt="top 5 canada logo" />
        </div>
        <div className='single-slide px-4 md:px-6 lg:px-0'>
        <img
                  className="h-[65px] sm:h-[90px]"
                  src={permianlodging}
                  alt="permian lodging logo"
                />
        </div>
        <div className='single-slide'>
        <img className='h-[65px] sm:h-full sm:max-h-[106px] object-cover' src="/denali-universal-services.png" alt="denali universal services logo" />
        </div>
        <div className='single-slide px-4 lg:px-0'>
        <img className='h-[65px] sm:h-full sm:max-h-[106px] h-auto object-cover' src="/cotton-logistics.png" alt="cotton logistics logo" />
        </div>
        
      </Slider>
            </div>
        </div>
      
    </div>
  )
}

export default SlidingComp
