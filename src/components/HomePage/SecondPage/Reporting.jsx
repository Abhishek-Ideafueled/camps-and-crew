import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import reporting from '/reporting.png';

const Reporting = () => {
  return (
    <div className="flex items-center shadow-lg w-[1216px] xl:w-full xl:mx-auto h-[465px] rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-1/2">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        300+ reports with the essential data your staff need at every level of your organization
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-2 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            View all camp residents in-house and all rooms scheduled for cleaning
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            See historical or forecasted camp occupancy and much more
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Distribute reports automatically or give view-only access
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-1/2 h-[465px] rounded-2xl">
      <img src={reporting} alt="reporting image" className='w-full h-full object-cover rounded-2xl'/>
    </div>
  </div>
  )
}

export default Reporting
