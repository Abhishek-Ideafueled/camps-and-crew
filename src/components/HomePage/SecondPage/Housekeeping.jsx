import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import housekeeping from '/housekeeping.png';

const Housekeeping = () => {
  return (
    <div className="flex items-center shadow-lg h-[465px] rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-1/2">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Ensure rooms are cleaned on time to speed up room turnover and improve resident satisfaction
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-2 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-[#63C1EC]" />
            <span className="text-[#344054]">
            Quickly assign daily workloads to your cleaning staff
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-[#63C1EC]" />
            <span className="text-[#344054]">
            Manage multiple cleaning schedules (light clean, full clean, etc)
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-[#63C1EC]" />
            <span className="text-[#344054]">
            Create and track maintenance tickets for rooms needing service
            </span>
          </div>
        </div>
     <button className='bg-[#EFBC43] mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-[#060F1F] leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-1/2 h-[465px] object-contain rounded-2xl">
      <img src={housekeeping} alt="girl reading image" className='w-full h-[465px] rounded-2xl'/>
    </div>
  </div>
  )
}

export default Housekeeping
