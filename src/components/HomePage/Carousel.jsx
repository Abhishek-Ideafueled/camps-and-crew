import React from 'react';
import home from '/home.jpg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaRegCircle } from 'react-icons/fa';

const Carousel = () => {
  return (
    <div className='w-full h-[620px]'>
      <div>
        <img src={home} alt="" />
      </div>
      <div className='flex justify-between px-28 py-5 text-[#63C1EC]'>
      <div className='flex items-center gap-2'>
        <BsArrowLeft />
        <p>SMARTLODGE</p>
      </div>
      <div className='flex items-center gap-[6px]'>
      <FaRegCircle className='' />
      <FaRegCircle />
      </div>
      <div className='flex items-center gap-2'>
        
        <p>ENROUTE</p><BsArrowRight />
      </div>

      </div>
    </div>
  )
}

export default Carousel
