import React from 'react';
import b2gold from '/b2gold.png';
import agincourtlogo from '/agincourt-logo.png';
import canadianenergy from '/canadian-energy.png';
import permianlodging from '/permian-lodging.png';
import top5canada from '/top-5-canada.png';
import top5logo from '/top5logo.png';
import sodexofull from '/sodexofull.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlidingCompanies.css";

const SlidingCompanies = () => {
  // const settings = {
  //   dots: false,
  //   fade: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   waitForAnimate: false,
  //   autoplay:true,
  //   autoplaySpeed: 3000,
  //   cssEase: 'ease-out',
  //   pauseOnHover:false
  // };

const settings ={  dots: false,
            slidesToShow: 5,
            slidesToScroll: 0.12,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 300,
            infinite: true,
            cssEase: 'linear',
            pauseOnHover: true,
            pauseOnFocus: true,
            draggable: false,
            swipe: false,
            touchMove: false,
            focusOnSelect: false,
            accessibility: false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
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
                        slidesToShow: 2,
                    },
                }
            ],}

  return (
    <div className=' w-full'>
        <div className='w-full mx-auto flex flex-col gap-14 py-20'>

      <h3 className='text-center text-2xl font-gilroyBold font-normal text-custom-heading'>Trusted by Companies All Over the World</h3>
      <div className='w-full px-8 xl:px-0 company-slider'>
<Slider {...settings}>

        <span className='justify-self-center'><img src={b2gold} alt="b2gold logo" /></span>
      <span className='justify-self-center '><img src={agincourtlogo} alt="agin court logo" /></span> 
      <span className='justify-self-center '><img src={canadianenergy} alt="canadian energy logo" /></span> 
      <span className='justify-self-center '> <img src={top5logo} alt="top 5 global logo" /></span>  
      <span className='justify-self-center '><img src={permianlodging} alt="permian lodging logo" /></span> 
      <span className='justify-self-center '> <img src={sodexofull} alt="sodexo logo" /></span> 
      <span className='justify-self-center '> <img src={top5canada} alt="top 5 canada logo" /></span> 
     
     
       
</Slider>
      </div>
      </div>
    </div>
  )
}

export default SlidingCompanies
