import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import reservations from '/reservations.jpg';

const Reservations = () => {
  return (
    <div className="flex items-center shadow-lg h-[465px] w-full rounded-2xl">
    <div className=" px-10 py-16  height-[420px] w-[645px]">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Quickly create reservations for workers on roster rotations weeks or months out
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Set up rotation schedules for your most common rotations. Eg 14x14, 21x7, 4x3
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Book travelers from differing board points on a single roster template
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Flexible roster templates reduce the number of rosters that must be set up
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-[571px] h-[465px] rounded-2xl">
      <img src={reservations} alt="reservations image" className=' rounded-2xl'/>
    </div>
  </div>
  )
}

export default Reservations
