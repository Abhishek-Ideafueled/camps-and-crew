import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import frontdesk from '/frontdesk.jpg';

const Frontdesk = () => {
  return (
    <div className="grid md:grid-cols-2 shadow-lg w-full min-h-[465px] p-6 lg:p-0 gap-2 lg:gap-0 md:h-[465px] rounded-2xl min-w-[516px] items-center">
    <div className=" lg:px-10 lg:py-16  height-[420px] w-full md:max-w-[645px]">
      <div className="flex flex-col">
        <div className="text-lg md:text-xl lg:text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Simplify check in and check out to reduce strain on your reception staff
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            View all arrivals and departures, track no-shows and go-shows
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Digital registration documents to reduce paper waste
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Enable camp residents to check in on mobile phones or kiosks
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 max-w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-[#060F1F] leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="max-w-[571px] h-full  rounded-2xl grid items-center">
      <img src={frontdesk} alt="front desk image" className=' rounded-2xl'/>
    </div>
  </div>
  )
}

export default Frontdesk
