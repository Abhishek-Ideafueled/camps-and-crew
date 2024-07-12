import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import frontdesk from '/frontdesk.jpg';

const Frontdesk = () => {
  return (
    <div className="flex flex-col md:flex-row shadow-lg min-h-[465px] mx-auto lg:h-[465px] rounded-2xl items-center">
    <div className=" flex flex-col lg:px-10 p-6 lg:py-16 min-h-[300px] max-w-[492px] md:max-w-[645px]">
      {/* <div className="flex flex-col"> */}
        <div className="text-lg md:text-xl lg:text-2xl text-custom-heading py-4 font-gilroyBold font-normal lg:leading-[1.8rem]">
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
     <button className='bg-custom-button hover:bg-btn-hover mt-4 max-w-[179px] h-[55px] md:h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-[#060F1F] text-sm md:text-base  md:leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    {/* </div> */}
    <div className="max-w-[348px] lg:max-w-[571px] lg:h-full justify-self-center  rounded-2xl flex items-center">
      <img src={frontdesk} alt="front desk image" className='lg:rounded-2xl object-contain'/>
    </div>
  </div>
  )
}

export default Frontdesk
