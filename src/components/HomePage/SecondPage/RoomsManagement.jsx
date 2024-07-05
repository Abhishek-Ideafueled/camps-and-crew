import React from 'react';
import girlreading from '/girlreading.png';
import { CiCircleCheck } from 'react-icons/ci';

const RoomsManagement = () => {
  return (
    <div className="flex items-center shadow-lg h-[465px] rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-1/2">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
          Maximize the utilization of rooms at your remote camp
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-2 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
              Room reservations to accommodate any workflow
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
              Set up rooms or beds exactly as they are laid out at your camp
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
              Easily assign rooms with visual room blocking tools
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-1/2 h-[465px] object-contain rounded-2xl">
      <img src={girlreading} alt="girl reading image" className='w-full h-[465px] rounded-2xl'/>
    </div>
  </div>
  )
}

export default RoomsManagement
