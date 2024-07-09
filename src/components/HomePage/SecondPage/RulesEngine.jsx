import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import rulesEngine from '/rulesEngine.jpg';

const RulesEngine = () => {
  return (
    <div className="flex items-center shadow-lg h-[465px] rounded-2xl w-full xl:mx-auto">
    <div className=" px-10 py-16  height-[420px] w-[645px]">
      <div className="flex flex-col">
        <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal leading-[1.8rem]">
        Implement a travel policy aligned with your organization’s needs
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Set up single or multi-layer approvals, when required
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Define fields or reportable conditions required to book
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <CiCircleCheck className="text-custom-blue" />
            <span className="text-custom-body">
            Define commercial content that is in- and out-of-policy
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 w-[179px] h-[64px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    </div>
    <div className="w-[571px] h-[465px] rounded-2xl">
      <img src={rulesEngine} alt="rules engine image" className='w-full h-full object-cover rounded-2xl'/>
    </div>
  </div>
  )
}

export default RulesEngine
