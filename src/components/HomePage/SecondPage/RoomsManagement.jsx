import React from 'react';
import girlreading from '/girlreading.jpg';
import { CiCircleCheck } from 'react-icons/ci';

const RoomsManagement = () => {
  return (
    <div className="grid md:grid-cols-2 shadow-lg w-full min-h-[465px] md:h-[465px] rounded-2xl min-w-[516px] items-center">
    <div className=" lg:px-10 p-6 lg:py-16  height-[420px] w-full md:max-w-[645px]">
      <div className="flex flex-col">
        <div className="text-lg md:text-xl lg:text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
          Maximize the utilization of rooms at your remote camp
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
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
     <button className='bg-custom-button hover:bg-btn-hover mt-4 max-w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="max-w-[571px] h-full  rounded-2xl grid items-center">
      <img src={girlreading} alt="girl reading image" className=' rounded-2xl'/>
    </div>
  </div>
  )
}

export default RoomsManagement
