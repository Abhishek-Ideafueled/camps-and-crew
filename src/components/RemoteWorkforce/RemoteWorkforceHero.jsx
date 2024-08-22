import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import './RemoteWorkforceMain.css';

const RemoteWorkforceHero = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed:0,
    pauseOnHover:true,
     adaptiveHeight:false,
     cssEase: 'linear',
     arrows:false,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow:1.6,
        },
      },
      {
        breakpoint: 2200,
        settings: {
          slidesToShow:1.6 ,
        },
      },
      
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed:0,
    pauseOnHover:true,
     adaptiveHeight:false,
     cssEase: 'linear',
     arrows:false,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow:1.6,
        },
      },
      {
        breakpoint: 2200,
        settings: {
          slidesToShow:1.6 ,
        },
      },
      
    ],
    rtl:true
  };


  const handleClickScroll = () => {
    const element = document.getElementById('demoForm');

    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className='w-full bg-[#f7f5f2]'>
        <div className='main-container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='flex flex-col gap-10 py-10 lg:py-20'>
        <div className='flex flex-col gap-4'>
            <span className='font-ttCommonProRegular font-semibold text-sm leading-[22px] text-[#189AD2]'>
            | WORKFORCE ACCOMMODATIONS |
            </span>
            <h1 className='heading-h1'> 
            Technology for Camp Management Providers
            </h1>
            <p className='font-ttCommonProMedium font-medium text-lg leading-6 lg:text-xl lg:leading-8 text-custom-body'>
            Delivering best-in-class software solutions to streamline your daily operations, enhance your service offering, and drive up your bottom line.
            </p>
        </div>
        <div className='w-full'>
            <Link className='flex w-[203px]' onClick={handleClickScroll}>
                    <div className='btn-orange w-[203px] h-[64px] flex items-center px-10 text-nowrap rounded'>CONTACT SALES</div>
            </Link>
        </div>
        </div>
        <div className='remote-sliders'>
        <div className='remote-upwards flex items-center justify-center gap-3 lg:gap-7'>
        <div className="remote-upwards w-1/2 h-full">
              <Slider {...settings}>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="/rw-slider-01.png"
                    alt="woman-backpack-looks-onto-plane-airport"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="rw-slider-02.png"
                    alt="people-seated-rows-commercial-plane"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover "
                    src="rw-slider-03.png"
                    alt="man-rolls-suitcase-baggage-carousel-area"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="rw-slider-04.png"
                    alt="fifo-workers-take-ferry-remote-project"
                  />
                </div>
              </Slider>
            </div>
            <div className="remote-downwards w-1/2 h-full">
              <Slider {...settings2}>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="/rw-slider-05.png"
                    alt="parking-lot-workforce-camp"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="/rw-slider-06.png"
                    alt="fifo-worker-driving-to-camp-dido"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="/rw-slider-07.png"
                    alt="man-entering-hotel-room"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="/rw-slider-06.png"
                    alt="hotel-bed-open-door-sunny"
                  />
                </div>
              </Slider>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default RemoteWorkforceHero
