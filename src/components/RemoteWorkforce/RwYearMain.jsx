import React, { useLayoutEffect } from 'react'
import RwYearSlider from './RwYearSlider';
import RwYearScroll from './RwYearScroll';
import { Link } from 'react-router-dom';
import Testing from '../Testing';

const RwYearMain = () => {


  const scrollToTop = () => {
    window.scrollTo(0, 0)
}



  return (
    <div className='w-full bg-[#F5F3EF] py-10 lg:py-20'>
        <div className='main-container mx-auto  flex flex-col gap-[30px] lg:gap-[60px] items-center'>
        <div className='flex flex-col gap-6 items-center max-w-[900px] text-center '>
                <div className='flex flex-col items-center gap-4'>
            <h2 className='heading-h2'  data-aos="fade-down">
            Building SmartLodge Alongside Our Clients
            </h2>
            <span  data-aos="fade-up"  data-aos-delay="100">
            <svg width="173" height="16" viewBox="0 0 173 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144.5 1)" stroke="#647787"/>
</svg>
            </span>
                </div>
            <span className='sub-heading'>
            Since 2007, we have had the privilege of working with our workforce accommodation partners across the globe to shape 
            SmartLodge into the robust platform it is today. Below is a timeline highlighting select milestones of this collaborative journey.
            </span>
            </div>
            </div>
            <div className='hidden md:block'>
            {/* <RwYearSlider/> */}
            <Testing/>
            </div>
            <div className='md:hidden'>
            <RwYearScroll/>
            </div>
            <div className='w-full flex items-center justify-center mt-5'>
              <div className='max-w-max' onClick={scrollToTop}>

              
            <Link to="/company" className='max-w-max z-10'>
            <div className='btn-orange px-6 smalls:px-10 py-[19px] rounded'>
            LEARN MORE ABOUT OUR HISTORY
            </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default RwYearMain
