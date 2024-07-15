import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import reporting from '/reporting.jpg';

const Reporting = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between shadow-custom-shadow min-h-[300px] mx-auto lg:h-[465px] rounded-2xl items-center">
    <div className=" flex flex-col lg:px-10 p-6 lg:py-16 min-h-[300px] max-w-[492px] md:max-w-[645px]">
      {/* <div className="flex flex-col"> */}
        <div className="text-lg md:text-xl lg:text-2xl text-custom-heading py-4 font-gilroyBold font-normal lg:leading-[1.8rem]]">
        300+ reports with the essential data your staff need at every level of your organization
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
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
     <button className='bg-custom-button hover:bg-btn-hover mt-4 max-w-[179px] h-[55px] md:h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text text-sm md:text-base  md:leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    {/* </div> */}
    <div className="max-w-[348px] lg:max-w-[571px] lg:h-full justify-self-center  rounded-2xl flex items-center">
      <img src={reporting} alt="reporting image" className=' lg:rounded-2xl object-contain'/>
    </div>
  </div>
  )
}

export default Reporting
