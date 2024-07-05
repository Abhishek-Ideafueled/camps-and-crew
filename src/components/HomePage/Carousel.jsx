import React from 'react';
import home from '/home.jpg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaRegCircle } from 'react-icons/fa';

const Carousel = () => {
  return (
    <div className='w-full'>
      <div className='bg-home py-[120px] px-28 h-[620px] text-white'>
        {/* <img src={home} alt="" className='absolute inset-0'/> */}
        <div className='flex flex-col w-[600px] gap-[10px] '>
          <span className='font-ttCommonProNormal font-semibold text-sm leading-[1.4rem]'>| SMART LODGE |</span>
          <h1 className='text-h1 font-gilroyBold font-normal leading-[3.6rem]'>The most flexible camp management system on the market </h1>
          <button className='w-[219px] h-[64px] bg-custom-button hover:bg-btn-hover text-center font-ttCommonProNormal font-semibold text-btn-text rounded-[4px] leading-[1.55rem]'>
            SEE ALL FEATURES</button>
        </div>
      </div>
      <div className='flex justify-between px-28 py-5 text-custom-blue '>
      <div className='flex items-center gap-2 '>
        <BsArrowLeft />
        <p className='font-ttCommonProNormal font-semibold leading-[1.6rem]'>SMARTLODGE</p>
      </div>
      <div className='flex items-center gap-[6px]'>
      <FaRegCircle className='' />
      <FaRegCircle />
      </div>
      <div className='flex items-center gap-2'>
        
        <p className='font-ttCommonProNormal font-semibold leading-[1.6rem]'>ENROUTE</p><BsArrowRight />
      </div>

      </div>
    </div>
  )
}

export default Carousel
