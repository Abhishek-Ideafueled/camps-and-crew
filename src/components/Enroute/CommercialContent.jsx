import React from 'react'
import Slider from 'react-slick';
import './CharteredTransportation.css';

const CommercialContent = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
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
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 2200,
            settings: {
              slidesToShow:3 ,
            },
          },
          
        ],
      };

      const settings2 = {
        dots: false,
        infinite: true,
        speed: 5000,
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
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 2200,
            settings: {
              slidesToShow:3 ,
            },
          },
          
        ],
         rtl:true
      };
      
      
    

  return (
    <div className="w-full  min-h-[726px] relative bg-[#FCFBF8]">
      <div className="main-container mx-auto z-10 h-full">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10 md:items-center h-full">
          <div className="py-10 lg:py-20 max-w-[568px] z-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 heading-h2">
                <span className="border-b-4 border-b-custom-button max-w-fit">
                  Book Commercial Content
                </span>
                <span className="border-b-4 border-b-custom-button max-w-fit">
                  in EnRoute
                </span>
              </div>
              <p className="sub-heading">
                EnRoute provides travel teams with the ability to book and
                manage commercial travel reservations alongside chartered
                transportation, offering a comprehensive solution for all your
                FIFO travel needs.
              </p>
            </div>
            <div className="flex flex-col gap-8 pt-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-[50px] h-[50px]">
                    <img
                      src="/Enroute-commercial-flights-icon.png"
                      alt="Enroute commercial flights icon"
                    />
                  </span>

                  <span className="font-ttCommonProMedium font-medium text-xl leading-[32px] text-[#212529]">
                    Commercial Flights
                  </span>
                </div>
                <span className=" font-ttCommonProRegular font-normal text-base leading-[25.5px] text-[#212529]">
                  Charter flights, helicopters, sea planes, helijets, etc.
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-[50px] h-[50px] ">
                    <img
                      src="/enroute-hotels-icon.png"
                      alt="enroute hotels icon"
                    />
                  </span>

                  <span className="font-ttCommonProMedium font-medium text-xl leading-[32px] text-[#212529]">
                    Hotels
                  </span>
                </div>
                <span className=" font-ttCommonProRegular font-normal text-base leading-[25.5px] text-[#212529]">
                  Book hotel stays for workers who have overnight layovers due
                  to connecting flights, or for those experiencing travel
                  disruptions while traveling to or from camp.
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-[50px] h-[50px] flex items-center">
                    <img
                      src="/enroute-rental-cars-icon.png"
                      alt="enroute rental cars icon"
                    />
                  </span>

                  <span className="font-ttCommonProMedium font-medium text-xl leading-[32px] text-[#212529]">
                    Rental Cars
                  </span>
                </div>
                <span className=" font-ttCommonProRegular font-normal text-base leading-[25.5px] text-[#212529]">
                  Reserve rental cars for workers requiring self-drive (DIDO)
                  options for the last stretch to camp or those needing to
                  transport themselves between disconnected drop-off and pickup
                  points during their journey.
                </span>
              </div>
            </div>
          </div>
          <div className="enroute-sliders flex gap-2 md:gap-8 w-full h-full mx-auto z-10">
            <div className="enroute-upwards w-1/2 h-full">
              <Slider {...settings}>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="woman-backpack-looks-onto-plane-airport.jpg"
                    alt="woman-backpack-looks-onto-plane-airport"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="people-seated-rows-commercial-plane.jpg"
                    alt="people-seated-rows-commercial-plane"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover "
                    src="man-rolls-suitcase-baggage-carousel-area.jpg"
                    alt="man-rolls-suitcase-baggage-carousel-area"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="fifo-workers-take-ferry-remote-project.jpg"
                    alt="fifo-workers-take-ferry-remote-project"
                  />
                </div>
                {/* <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="fifo-workers-take-ferry-remote-project.jpg"
                    alt="fifo-workers-take-ferry-remote-project" 
                  />
                </div> */}
              </Slider>
            </div>
            <div className="enroute-downwards w-1/2 h-full">
              <Slider {...settings2}>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="parking-lot-workforce-camp.jpg"
                    alt="parking-lot-workforce-camp"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="fifo-worker-driving-to-camp-dido.jpg"
                    alt="fifo-worker-driving-to-camp-dido"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="man-entering-hotel-room.jpg"
                    alt="man-entering-hotel-room"
                  />
                </div>
                <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="hotel-bed-open-door-sunny2.jpg"
                    alt="hotel-bed-open-door-sunny"
                  />
                </div>
                {/* <div className="max-w-[246px] md:max-w-[156px] lg:max-w-[216px] xl:max-w-[288px]">
                  <img
                    className="rounded-2xl h-[315px] object-cover"
                    src="hotel-bed-open-door-sunny.jpg"
                    alt="hotel-bed-open-door-sunny"
                  />
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 bottom-0 z-0'>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_171_5)">
<path d="M200 100H100V200H200V100Z" fill="#ECE7E0"/>
<path d="M100 100H0V200H100V100Z" fill="#ECE7E0"/>
<path d="M100 0H0V100H100V0Z" fill="#ECE7E0"/>
</g>
<defs>
<clipPath id="clip0_171_5">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg>

      </div>
    </div>
  );
}

export default CommercialContent
