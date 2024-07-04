import React from 'react';
import logo2 from '/logo2.png';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#181C20] text-white font-ttCommonProRegular'>
      <div className='pt-14 pb-20 px-28 flex justify-between items-start flex-wrap gap-6'>
        <div className='flex flex-col w-[344px] gap-6'>
        <img src={logo2} alt="" className='w-[130px] h-[93px]' />
        <p className='text-sm text-[#CAD5DE] font-ttCommonProRegular'>Camps & Crew simplifies crew and lodge management, partnering with housing providers, energy, and mining companies to streamline operations and reduce costs.</p>
        </div>
        <div className='flex flex-col w-[320px] gap-4'>
            <p className='font-gilroyBold font-normal'>Solutions</p>
        <a href="#" className='hover:underline text-[#CAD5DE]'>Software to Manage Remote Workforce Camps</a>
        <a href="#" className='hover:underline text-[#CAD5DE]'>Online Booking Tool for FIFO Travel Logistics</a>
        </div>
        <div className='flex flex-col w-[90px]'>
            <p className='font-gilroyBold font-normal'>Resources</p>
            <a href="#" className='hover:underline text-[#CAD5DE]'>Blog</a>
            <a href="#" className='hover:underline text-[#CAD5DE]'>Case Studies</a>
        </div>
        <div className='flex flex-col w-[206px] gap-4'>
        <p className='font-gilroyBold font-normal'>Company</p>
        <p className='text-[#CAD5DE]'>About us</p>
        <div className='flex gap-2 text-[#CAD5DE]'>
        <BsTelephone className='mt-2'/>
        <div className='flex flex-col'>
        <a href="#" className='hover:underline text-[#CAD5DE]'>USA : +1 6197983914</a>
        <a href="#" className='hover:underline text-[#CAD5DE]'>CA : +1 2898072990</a>
        <a href="#" className='hover:underline text-[#CAD5DE]'>Global: +1 8002138556</a></div>
        </div>
       <div className='flex items-center text-[#CAD5DE] gap-2'>
       <FaRegEnvelope />
       <a href="#" className='hover:underline text-[#CAD5DE]'>info@campsandcrew.com</a>
       </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 h-[54px] text-sm border-t-[1px] border-[#FFFFFF1A] text-[#CAD5DE]'>
        <span className='border-[#CAD5DE] border-r-[1px] px-2'> Copyright © 2024</span>
        <span className='px-2'>Privacy Policy</span>
      </div>
    </div>
  )
}

export default Footer
