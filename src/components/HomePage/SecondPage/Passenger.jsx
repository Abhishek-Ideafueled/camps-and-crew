import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import passengers from '/passenger.png';

const Passenger = () => {
  return (
    <div className="flex items-center shadow-lg h-[465px] lg:w-[1216] xl:w-full xl:mx-auto rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-1/2">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Monitor your workers at every step of their journey to and from camp
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-2 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Track no-shows and go-shows at every leg of the journey
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Alerts for travel anomalies warn if any trip segments are out of sync
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Quickly re-route passengers due to weather, capacity, etc.
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-1/2 h-[465px] rounded-2xl">
      <img src={passengers} alt="passenger image" className='w-full h-full object-cover rounded-2xl'/>
    </div>
  </div>
  )
}

export default Passenger
