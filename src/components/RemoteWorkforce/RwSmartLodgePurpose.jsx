import React, { useEffect, useState } from 'react';
import YoutubeModal from '../YoutubeModal';
import { Link } from 'react-router-dom';

const RwSmartLodgePurpose = () => {

    const [isOpen,setIsOpen] = useState(false);

    const openModal=()=>{
      setIsOpen(true);
    }
  
    useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
  
       return () => { document.body.style.overflow = 'unset' }
    }, [isOpen]);
  
  
    const closeModal=()=>{
      setIsOpen(false);
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

  return (
    <>
    <div className='w-full bg-custom-back max-h-max relative'>
        <div className='main-container mx-auto py-10 lg:py-20'>
        <div className='w-[90%] mx-auto flex flex-col items-center text-center gap-8 md:gap-0'>
            <div
            data-aos="fade-up"
            className='bg-[#EAE8E3] flex flex-col gap-6 md:gap-10 lg:pt-[60px] px-6 pt-6 pb-8 md:pb-[160px] lg:px-20 lg:py-[180px] rounded-2xl'>
                <div className='flex items-center border-[1px] border-custom-blue rounded-full max-w-max pl-3 h-[60px] mx-auto' >
                   <h3 className='text-custom-heading pr-3 font-gilroyBold  text-base smalls:text-lg smalls:leading-[24px] md:text-xl md:leading-[24px] xl:text-2xl xl:leading-[28.8px]'>
                   A Deeper Look At
                   </h3>
                   <div className='h-full bg-custom-blue rounded-full flex items-center justify-center px-6 py-3 text-btn-text font-gilroyBold text-base smalls:text-lg smalls:leading-[24px] md:text-xl md:leading-[24px] xl:text-2xl xl:leading-[28.8px]'>
                        SmartLodge
                   </div>
                </div>
               <h2 className='heading-h2'>
               Software Purpose-Built for Remote Camps and Villages
               </h2>
               <span className='sub-heading'>
               For many years, we've continuously iterated upon our technology to develop a
                market-leading camp management system able to support remote projects across industries.
                 SmartLodge is designed to comprehensively support remote accommodation providers, able to facilitate 
                 everything from front desk operations and housekeeping to meal tracking,
                billing, detailed reporting and more. Watch the video below for a quick overview of the system. 
               </span>
            </div>
            <div
             data-aos="fade-up"  data-aos-delay="100"
            className='w-[90%] h-[160px] smalls:h-[260px] md:h-[364px] max-h-[560px] lg:h-[560px] mt-0 md:mt-[-100px] z-10'>           
            <div className="relative px-14 w-full h-full flex items-center justify-center">
                <img
                  className="absolute inset-0 rounded-2xl w-full h-full sm:w-full justify-self-center"
                  src="/smartlodge-product-video-workforce-camp-software.gif"
                  alt=""
                />
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center hover:opacity-80">
                  
                   <span onClick={openModal} className='cursor-pointer'>
                    <svg
                      width="100%"
                      height="100%"
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
                    </span>
                  
                </div>
              </div>
               </div>
        </div>
        <div className='w-full flex items-center justify-center mt-12'>
        <div className='max-w-max z-10' onClick={scrollToTop}>
           <Link to="/software-for-workforce-camp" className='max-w-max z-10'>
            <div className='btn-orange px-6 smalls:px-10 py-[19px] rounded'>
            SEE ALL SMARTLODGE FEATURES
            </div>
            </Link> </div>  
        </div>
        </div>
      <div className='absolute right-0 bottom-0 z-0'>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="80" y="80" width="80" height="80" transform="rotate(-90 80 80)" fill="#004461"/>
<rect x="80" y="160" width="80" height="80" transform="rotate(-90 80 160)" fill="#004461"/>
<rect y="160" width="80" height="80" transform="rotate(-90 0 160)" fill="#004461"/>
</svg>


      </div>
    </div>
    {
isOpen && <YoutubeModal closeModal={closeModal}>
 
  <iframe  
  className='w-full h-full'
  src="https://www.youtube.com/embed/5rt33ZISw9c" frameBorder="0"></iframe>
</YoutubeModal>
    }
    </>
  )
}

export default RwSmartLodgePurpose
