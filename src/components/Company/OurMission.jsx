import React from 'react';
import '../HomePage/Homepage.css';
import Slider from 'react-slick';
import './OurMission.css';
import flexibility from '/about-flexibility-icon.png'; 
import  innovate from '/about-innovation-icon.png';
import openness from '/about-openness-icon.png';
import service from '/about-service-icon.png';

const OurMission = () => {

    const settings = {
        dots: false,
        fade: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover:false,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow:3.5,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2.2,
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
      };
    

  return (
    <div className='w-full h-[757px] md:h-[850px]'>
        <div className='main-container mx-auto py-10 md:py-20 lg:py-28 flex flex-col gap-[24px] md:gap-[40px] lg:gap-[60px]'>
            <div className='flex flex-col gap-6 items-center'>
                    <div className='flex flex-col gap-4 items-center'>
                    <h1 className='font-gilroyBold text-custom-heading sm:text-[25px] md:text-[32px] lg:text-[40px] lg:leading-[3rem]'>
                        Our Mission and Values
                        </h1>
                    <div data-aos="fade-up" data-aos-delay="100">
                    <svg
                width="174"
                height="16"
                viewBox="0 0 174 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.584 0.722656L1.58396 15.7227" stroke="#647787" />
                <path d="M46.584 0.722656L36.584 15.7227" stroke="#647787" />
                <path d="M81.584 0.722656L71.584 15.7227" stroke="#647787" />
                <path d="M116.584 0.722656L106.584 15.7227" stroke="#647787" />
                <path d="M151.584 0.722656L141.584 15.7227" stroke="#647787" />
                <path d="M18.584 0.722656L8.58396 15.7227" stroke="#647787" />
                <path d="M53.584 0.722656L43.584 15.7227" stroke="#647787" />
                <path d="M88.584 0.722656L78.584 15.7227" stroke="#647787" />
                <path d="M123.584 0.722656L113.584 15.7227" stroke="#647787" />
                <path d="M158.584 0.722656L148.584 15.7227" stroke="#647787" />
                <path d="M25.584 0.722656L15.584 15.7227" stroke="#647787" />
                <path d="M60.584 0.722656L50.584 15.7227" stroke="#647787" />
                <path d="M95.584 0.722656L85.584 15.7227" stroke="#647787" />
                <path d="M130.584 0.722656L120.584 15.7227" stroke="#647787" />
                <path d="M165.584 0.722656L155.584 15.7227" stroke="#647787" />
                <path d="M32.584 0.722656L22.584 15.7227" stroke="#647787" />
                <path d="M67.584 0.722656L57.584 15.7227" stroke="#647787" />
                <path d="M102.584 0.722656L92.584 15.7227" stroke="#647787" />
                <path d="M137.584 0.722656L127.584 15.7227" stroke="#647787" />
                <path d="M172.584 0.722656L162.584 15.7227" stroke="#647787" />
                <path d="M39.584 0.722656L29.584 15.7227" stroke="#647787" />
                <path d="M74.584 0.722656L64.584 15.7227" stroke="#647787" />
                <path d="M109.584 0.722656L99.584 15.7227" stroke="#647787" />
                <path d="M144.584 0.722656L134.584 15.7227" stroke="#647787" />
              </svg>
                    </div>
                    <p className='max-w-[809px] font-ttCommonProMedium font-medium text-center text-custom-body text-base sm:text-[18px] sm:leading-7'>
                    Our mission is to streamline the management of FIFO travel and remote accommodations, reducing inefficiencies and operational costs in the process. Our values guide us as we drive towards our mission.
                    </p>
                    </div>
            </div>
            <div className='mission-banner'>
            <Slider {...settings}>
                <div className='slide-outer'>
                <div className='w-auto flex flex-col border-[#CDD5DF] border-[1px] gap-[60px] p-6'>
                <div className=''>
                    <img src={innovate} alt="about innovation icon" />
                </div>
                <div className='flex flex-col gap-6'>
                        <h2 className='font-gilroyBold text-custom-heading text-2xl' >Innovation</h2>
                        <p className='font-ttCommonProMedium text-custom-body text-sm font-medium'>
                        We consistently strive to challenge ourselves, seeking innovative ways to help our clients more efficiently manage their fly-in fly-out operations. We are fortunate to work with clients that bring vast expertise and often serve as the driving force behind new product development.
                        </p>
                </div>
                </div>
                </div>
                <div className='slide-outer'>
                <div className='w-auto flex flex-col border-[#CDD5DF] border-[1px] gap-[60px] p-6'>
                <div className=''>
                    <img src={service} alt="about service icon" />
                </div>
                <div className='flex flex-col gap-6'>
                        <h2 className='font-gilroyBold text-custom-heading text-2xl' >Innovation</h2>
                        <p className='font-ttCommonProMedium text-custom-body text-sm font-medium'>
                        We consistently strive to challenge ourselves, seeking innovative ways to help our clients more efficiently manage their fly-in fly-out operations. We are fortunate to work with clients that bring vast expertise and often serve as the driving force behind new product development.
                        </p>
                </div>
                </div>
                </div>
                <div className='slide-outer'>
                <div className='w-auto flex flex-col border-[#CDD5DF] border-[1px] gap-[60px] p-6'>
                <div className=''>
                    <img src={flexibility} alt="about flexibility icon" />
                </div>
                <div className='flex flex-col gap-6'>
                        <h2 className='font-gilroyBold text-custom-heading text-2xl' >Innovation</h2>
                        <p className='font-ttCommonProMedium text-custom-body text-sm font-medium'>
                        We consistently strive to challenge ourselves, seeking innovative ways to help our clients more efficiently manage their fly-in fly-out operations. We are fortunate to work with clients that bring vast expertise and often serve as the driving force behind new product development.
                        </p>
                </div>
                </div>
                </div>
                <div className='slide-outer'>
                <div className='w-auto flex flex-col border-[#CDD5DF] border-[1px] gap-[60px] p-6'>
                <div className=''>
                    <img src={openness} alt="about openness icon" />
                </div>
                <div className='flex flex-col gap-6'>
                        <h2 className='font-gilroyBold text-custom-heading text-2xl' >Innovation</h2>
                        <p className='font-ttCommonProMedium text-custom-body text-sm font-medium'>
                        We consistently strive to challenge ourselves, seeking innovative ways to help our clients more efficiently manage their fly-in fly-out operations. We are fortunate to work with clients that bring vast expertise and often serve as the driving force behind new product development.
                        </p>
                </div>
                </div>
                </div>
            </Slider>
            </div>
        </div>
      
    </div>
  )
}

export default OurMission
