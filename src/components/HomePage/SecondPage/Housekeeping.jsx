import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import housekeeping from '/housekeeping.jpg';

const Housekeeping = () => {
  return (
    <div className="grid md:grid-cols-2 shadow-lg w-full min-h-[465px] md:h-[465px] rounded-2xl min-w-[516px] items-center">
    <div className="lg:px-10 p-6 lg:py-16  height-[420px] w-full md:max-w-[645px]">
      <div className="flex flex-col">
        <div className="text-lg md:text-xl lg:text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Ensure rooms are cleaned on time to speed up room turnover and improve resident satisfaction
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Quickly assign daily workloads to your cleaning staff
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Manage multiple cleaning schedules (light clean, full clean, etc)
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Create and track maintenance tickets for rooms needing service
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[47px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="max-w-[571px] h-full  rounded-2xl grid items-center">
      <img src={housekeeping} alt="housekeeping image" className=' rounded-2xl'/>
    </div>
  </div>
  )
}

export default Housekeeping
