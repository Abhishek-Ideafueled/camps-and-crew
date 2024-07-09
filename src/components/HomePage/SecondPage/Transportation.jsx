import React from 'react';
import transportation from '/transportation.jpg';
import { CiCircleCheck } from 'react-icons/ci';

const Transportation = () => {
  return (
  
    <div className="flex items-center shadow-lg w-full h-[465px] rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-[645px]">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Book and manage your charter flights, buses, or any mode of transport managed internally
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Set up routes for all modes of transportation
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Quickly create and clone scheduled trips weeks to months out
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Track the cost of every route or leg of your FIFO transportation
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-[571px] h-[465px] rounded-2xl">
      <img src={transportation} alt="chartered transportation image" className=' rounded-2xl'/>
    </div>
  </div>
  )
}

export default Transportation
