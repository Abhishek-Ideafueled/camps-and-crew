import React from 'react'
import Slider from 'react-slick';
import './CharteredTransportation.css';

const CharteredTransportation = () => {

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
              slidesToShow: 1.8,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2.3,
            },
          },
          {
            breakpoint: 2200,
            settings: {
              slidesToShow:2.3,
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
              slidesToShow: 1.8,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2.3,
            },
          },
          {
            breakpoint: 2200,
            settings: {
              slidesToShow:2.3,
            },
          },
          
        ],
         rtl:true
      };
      
      
    

  return (
    <div className='w-full bg-custom-back min-h-[726px] text-white'>
        <div className='main-container mx-auto h-full'>
    <div className='flex flex-col md:flex-row gap-5 lg:gap-10 w-full'>
        <div className='py-10 lg:py-20 max-w-[568px] w-full'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2 heading-h2 text-white'>
                    <span className='border-b-4 border-b-custom-button max-w-fit'>
                    Book and Manage
                    </span>
                    <span className='border-b-4 border-b-custom-button max-w-fit'>
                    Chartered Transportation
                    </span>
                    </div>
                   <p className='sub-heading text-white'>
                   EnRoute can be configured to manage seat bookings on any mode of transport required for your remote project operations.
                   </p>
                </div>
                <div className='flex flex-col gap-8 pt-10'>
                    <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="/enroute-charter-air-icon.png" alt="enroute charter air icon" />
                        <span className='font-ttCommonProRegular font-medium text-xl text-white leading-[32px]'>
                        Charter Air
                        </span>
                        
                        
                        </div>
                    <span className=' font-ttCommonProRegular font-normal text-base leading-[25.5px]'>
                        Charter flights, helicopters, sea planes, helijets, etc.
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="/enroute-ground-transport-icon.png" alt="enroute ground transport icon" />
                        <span className='font-ttCommonProRegular font-medium text-xl text-white leading-[32px]'>
                        Ground Transportation
                        </span>
                        
                        
                        </div>
                    <span className=' font-ttCommonProRegular font-normal text-base leading-[25.5px]'>
                    Buses, shuttles, vans, cars, etc.
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="/enroute-marine-vessels-icons.png" alt="enroute marine vessels icons" />
                        <span className='font-ttCommonProRegular font-medium text-xl text-white leading-[32px]'>
                        Marine Vessels
                        </span>
                        
                        
                        </div>
                    <span className=' font-ttCommonProRegular font-normal text-base leading-[25.5px]'>
                    Fast support vessels, supply vessels, crew boats, ferries, etc.
                        </span>
                    </div>
                </div>
        </div>
        <div className='enroute-sliders flex gap-2 md:gap-4 max-w-[608px] h-full mx-auto w-full'>
                <div className='enroute-upwards w-1/2 h-full flex justify-center'>
                    <Slider {...settings}>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="fifo-workers-deplane-tarmac-western-australia.jpg" alt="fifo-workers-deplane-tarmac-western-australia" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="female-fifo-worker-smiles-listens-music-plane.png" alt="female-fifo-worker-smiles-listens-music-plane" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="commercial-plane-hallway-rows-seats.jpg" alt="commercial-plane-hallway-rows-seats" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="fifo-workers-take-ferry-remote-project.jpg" alt="fifo-workers-take-ferry-remote-project" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="man-airport-terminal-texting.jpg" alt="man-airport-terminal-texting" />
                            </div>
                    </Slider>
                </div>
                <div className='enroute-downwards w-1/2 h-full flex justify-center'>
                    <Slider {...settings2}>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="air-canada-planes-parked-gates.png" alt="air-canada-planes-parked-gates" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="fifo-workers-boarding-bus.png" alt="fifo-workers-boarding-bus" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="female-fifo-workers-seated-plane-window.png" alt="female-fifo-workers-seated-plane-window" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="charter-buses-parked-snowy-parking-lot.png" alt="charter-buses-parked-snowy-parking-lot" />
                            </div>
                            <div className='max-w-[246px] md:max-w-[191px] lg:max-w-[288px] lg:w-[216px] xl:max-w-[288px]'>
                             <img 
                             className='rounded-2xl h-[315px] object-cover'
                             src="hotel-bed-open-door-sunny.png" alt="hotel-bed-open-door-sunny" />
                            </div>
                    </Slider>
                </div>
        </div>
    </div>
        </div>
      
    </div>
  )
}

export default CharteredTransportation
