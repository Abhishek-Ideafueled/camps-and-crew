import React, { useEffect, useRef, useState } from 'react';
import video from '/smart-video-player.jpg';
import { Link } from 'react-router-dom';
import '../HomePage/Homepage.css';
import './FifoOperations.css';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const FifoOperations = () => {

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);

    const containerRef = useRef(null);
    
    const setOdo=(entries)=>{
      const [entry] = entries ;
      if(entry.isIntersecting)
        {
          setFirstValue(150);
          setSecondValue(350);
          setThirdValue(74);
        
        }
        else{
          setFirstValue(0);
          setSecondValue(0);
          setThirdValue(0);
        }
    }
const options ={
  root:null,
  rootMargin:'0px',
  threshhold:1.0
}

useEffect(()=>{
    const observer  = new IntersectionObserver(setOdo, options);

    if(containerRef.current) observer.observe(containerRef.current);

    return ()=>{
      observer.disconnect();
    }
},[])


  return (
    <div className="relative bg-[#EAE8E3] pt-20 pr-0 pb-10 pl-0 w-full">
      <div className=" main-container mx-auto">
        <div className=" flex flex-col gap-20 w-full border-[1px] border-b-[#D0D5DD]">
          <div className="text-center text-custom-heading font-gilroyBold font-bold" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
            <h2 className="text-[26px] md:text-[32px] lg:text-h2 lg:leading-[3rem]">
              Streamlining FIFO Operations for 16 Years
            </h2>
          </div>
          <div 
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:mx-auto lg:justify-center md:items-start gap-6 lg:gap-24 md:pb-10">
            <div className='flex flex-col gap-2 max-w-[247px]'>
              <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[75px] lg:w-[120px] text-custom-heading font-gilroyBold font-normal">
              
             <span className='flex items-center justify-center'>
               <Odometer value={firstValue} format="ddd" />
             K </span>
               
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
                Rooms managed for clients operating remote camps and villages
              </span>
            </div>
            <div className='flex flex-col gap-2 max-w-[247px]' ref={containerRef}>
              <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[75px] lg:w-[120px] text-custom-heading font-gilroyBold font-normal">
              
                <span className='flex items-center justify-center'>
               <Odometer value={secondValue} format="ddd" />
                K</span>
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
                FIFO transportation reservations booked and managed annually
              </span>
            </div>
            <div className='flex flex-col gap-2 max-w-[247px]'>
              <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[38px] lg:w-[60px] text-custom-heading font-gilroyBold font-normal">
              
              <span className='flex items-center justify-center'>
               <Odometer value={thirdValue} format="ddd" /></span>
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
                Years combined experience across mining, energy, travel and
                hospitality
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full pt-16 pb-10 gap-4 lg:gap-16">
          <div className="max-w-[600px] xl:w-[600px] h-[340px] lg:min-h-[415px] relative" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
            <img
              src={video}
              alt="insert video player here"
              className="absolute inset-0 bg-center w-full h-full rounded-2xl object-cover"
            />
            
            <div className="relative flex justify-center items-center h-full hover:opacity-90">
              <Link to="#">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_87)">
                  <path
                    d="M80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40Z"
                    fill="#EFBC43"
                  />
                  <path
                    d="M33.7724 54.5263C33.3118 54.5254 32.8594 54.3983 32.4597 54.1576C31.5596 53.6207 31 52.5786 31 51.4473V28.5527C31 27.4182 31.5596 26.3793 32.4597 25.8425C32.869 25.5949 33.3339 25.4676 33.8059 25.4739C34.2779 25.4801 34.7396 25.6197 35.1428 25.878L53.7342 37.5906C54.1216 37.8463 54.441 38.2013 54.6624 38.6225C54.8839 39.0437 55 39.5171 55 39.9984C55 40.4798 54.8839 40.9532 54.6624 41.3744C54.441 41.7955 54.1216 42.1506 53.7342 42.4063L35.1398 54.1221C34.7272 54.3846 34.2546 54.5243 33.7724 54.5263Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_87">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col max-w-[556px] gap-6 z-10" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            <h3 className="text-xl text-center md:text-start md:text-2xl font-gilroyBold text-custom-heading font-normal md:leading-[1.8rem]">
              About the company
            </h3>
            <p className="font-ttCommonProMedium font-medium text-custom-body text-sm leading-[1.32rem] md:text-base lg:leading-[1.6rem]">
              At Camps and Crew, we have set out to build best-of-breed
              technology that facilitates fly-in fly-out operations for travel
              coordinators, on-site camp staff, camp and project management, and
              everyone in-between.
            <br />
            <br />
              Over the years, we have developed a suite of software solutions to
              streamline all aspects of FIFO travel and remote camp management.
              Our solutions support all parties working to ensure remote crews
              are transported and housed safely and efficiently.
            <br />
            <br />
              We work with companies in the mining, energy and construction
              sectors to automate and streamline their operations in order to
              reduce manual processes and the costs associated.
            </p>
            <Link className='text-custom-blue w-[90px] hover:text-custom-body transition-colors duration-300 delay-100 font-ttCommonProRegular font-semibold text-sm md:text-base md:leading-[1.6rem]'>
            READ MORE
            </Link>
            

          </div>
        </div>
        
      </div>
      <div className='absolute right-0 bottom-0 opacity-100 z-0'>
            <svg width="161" height="209" viewBox="0 0 161 209" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_0_3)">
<path d="M0 109H100V209H0V109Z" fill="#E1DED8"/>
<path d="M100 100H200V201H100V100Z" fill="#E1DED8"/>
<path d="M100 0H200V100H100V0Z" fill="#E1DED8"/>
</g>
<defs>
<clipPath id="clip0_0_3">
<rect width="161" height="209" fill="white"/>
</clipPath>
</defs>
</svg></div>
    </div>
  );
}

export default FifoOperations
