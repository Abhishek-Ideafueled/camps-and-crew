import React from 'react'
import Slider from 'react-slick';
import b2gold from '/b2gold.png';
import agincourtlogo from '/agincourt-logo.png';
import canadianenergy from '/canadian-energy.png';
import permianlodging from '/permian-lodging.png';
import top5canada from '/top-5-canada.png';
import top5logo from '/top5logo.png';
import sodexologo from '/sodexo-logo.png';
import './SlidingComp.css';

const SlidingComp = () => {

  const settings={
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow:6 ,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            },
          }
        ],
  }

  return (
    <div className='w-full'>
        <div className="w-full mx-auto flex flex-col gap-14 my-10 sm:my-20">
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-gilroyBold font-normal text-custom-heading">
          Trusted by Companies All Over the World
        </h3>
            <div className='w-full h-[106px] comp-slider'>
      <Slider {...settings}>
        <div className='single-slide'>
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
        <div className='single-slide'>
        <img className='h-[65px] sm:h-full' src={top5logo} alt="top 5 global logo" />
        </div>
        <div className='single-slide'>
        <img  className="h-[65px] sm:h-full" src={sodexologo} alt="sodexo logo" />
        </div >
        <div className='single-slide'>
        <img className='h-[65px] sm:h-full' src={top5canada} alt="top 5 canada logo" />
        </div>
        <div className='single-slide'>
        <img
                  className="max-sm:h-[65px] sm:max-h-[80px] sm:mt-2"
                  src={permianlodging}
                  alt="permian lodging logo"
                />
        </div>
      </Slider>
            </div>
        </div>
      
    </div>
  )
}

export default SlidingComp
