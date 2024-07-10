import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import checkmark from '/Checkmark.png';

const AllFeatures = () => {
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto">
      <div className='flex flex-col min-w-[176px] xl:max-w-[392px] min-h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading '>System Integrations</p>
        <hr className='border-[1px] border-[ #D0D5DD] w-[100px]'/>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            HRIS Systems
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" /></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Electronic Key Systems
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" /></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Accounting Systems
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" /></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Point of Sale Systems
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col min-w-[176px] xl:max-w-[392px] min-h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Meal Tracking</p>
        <hr className='border-[1px] border-[ #D0D5DD] w-[100px]'/>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Track meal allowances manually or via key swipes
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Forecast food needed based on future occupancy
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col min-w-[176px] xl:max-w-[392px] min-h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Accounting</p>
        <hr className='border-[1px] border-[ #D0D5DD] w-[100px]'/>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className='w-[14px] h-[14px]'/></span>
            <span className="text-custom-body text-sm leading-[1.4rem]md:max-w-[176px] lg:max-w-[298px]">
            Automatically produce versioned invoices, board bills or charge sheets
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className='w-[14px] h-[14px]'/></span>
            <span className="text-custom-body text-sm leading-[1.4rem]md:max-w-[176px] lg:max-w-[298px]">
            Comprehensive record of occupied room nights or meals consumed
            </span></li>
        </ul>
      </div>
       <div className='flex flex-col min-w-[176px] xl:max-w-[392px] min-h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Manage Multiple Camps</p>
        <hr className='border-[1px] border-[ #D0D5DD] w-[100px]'/>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Manage multiple camps at one or multiple project sites
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Restrict multi-site access to management or authorized users
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col min-w-[176px] xl:max-w-[392px] min-h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-4'>
        <p className='text-2xl leading-7 font-gilroyBold font-normal text-custom-heading'>Emergency Response</p>
        <hr className='border-[1px] border-[ #D0D5DD] w-[100px]'/>
        <ul className='flex flex-col gap-4 font-ttCommonProNormal'>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Take roll call digitally for all camp residents on-site during a muster event
            </span></li>
            <li className='flex items-center justify-start gap-3 2xl:justify-between'><span className='w-[14px] h-[14px]'><img src={checkmark} alt="" className=''/></span>
            <span className="text-custom-body text-sm leading-[1.4rem] md:max-w-[176px] lg:max-w-[298px]">
            Communicate response plans with guests via SMS
            </span></li>
        </ul>
      </div>
      <div className='flex flex-col bg-custom-heading min-w-[176px] xl:max-w-[392px] min-h-[265px] rounded-xl border-[1px] border-custom-blue py-10 px-5 gap-8'>
            <h3 className='text-h3 text-white font-gilroyBold leading-7 font-normal'>See everything SmartLodge has to offer.</h3>
            <button className='bg-custom-button hover:bg-btn-hover text-btn-text font-ttCommonProNormal font-semibold leading-[1.6rem] max-w-[248px] py-[19px] rounded-[4px]'>TAKE ME TO SMARTLODGE</button>
      </div>
    </div>
  )
}

export default AllFeatures
