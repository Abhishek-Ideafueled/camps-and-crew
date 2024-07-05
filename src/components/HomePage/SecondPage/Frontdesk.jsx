import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import frontdesk from '/frontdesk.png';

const Frontdesk = () => {
  return (
    <div className="flex items-center shadow-lg h-[465px] rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-1/2">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Simplify check in and check out to reduce strain on your reception staff
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-2 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-[#344054]">
            View all arrivals and departures, track no-shows and go-shows
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-[#344054]">
            Digital registration documents to reduce paper waste
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-[#344054]">
            Enable camp residents to check in on mobile phones or kiosks
            </span>
          </div>
        </div>
     <button className='bg-[#EFBC43] mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-[#060F1F] leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-1/2 h-[465px] rounded-2xl">
      <img src={frontdesk} alt="girl reading image" className='w-full h-full rounded-2xl'/>
    </div>
  </div>
  )
}

export default Frontdesk
