import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'

const AllFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-[526px] gap-5">
      <div className='flex flex-col w-[340px] h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading '>System Integrations</p>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center gap-5'><CiCircleCheck size={25} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            HRIS Systems
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={25} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Electronic Key Systems
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={25} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Accounting Systems
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={25} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Point of Sale Systems
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col w-[340px] h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Meal Tracking</p>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center gap-5'><CiCircleCheck size={30} className="text-custom-blue wid" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Track meal allowances manually or via key swipes
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={30} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Forecast food needed based on future occupancy
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col w-[340px] h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Accounting</p>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center gap-5'><CiCircleCheck size={40} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Automatically produce versioned invoices, board bills or charge sheets
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={40} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Comprehensive record of occupied room nights or meals consumed
            </span></li>
        </ul>
      </div>
       <div className='flex flex-col w-[340px] h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Manage Multiple Camps</p>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center gap-5'><CiCircleCheck size={35} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Manage multiple camps at one or multiple project sites
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={40} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Restrict multi-site access to management or authorized users
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col w-[340px] h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Emergency Response</p>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center gap-5'><CiCircleCheck size={45} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Take roll call digitally for all camp residents on-site during a muster event
            </span></li>
            <li className='flex items-center gap-5'><CiCircleCheck size={35} className="text-custom-blue" />
            <span className="text-custom-body text-sm leading-[1.4rem]">
            Communicate response plans with guests via SMS
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col bg-custom-heading w-[340px] h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-8'>
            <h3 className='text-h3 text-white font-gilroyBold leading-7 font-normal'>See everything SmartLodge has to offer.</h3>
            <button className='bg-custom-button hover:bg-btn-hover text-btn-text font-ttCommonProNormal font-semibold leading-[1.6rem] w-[248px] py-[19px] rounded-[4px]'>TAKE ME TO SMARTLODGE</button>
      </div>
    </div>
  )
}

export default AllFeatures
