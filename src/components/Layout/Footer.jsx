import React from 'react';
import logo2 from '/logo2.png';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full bg-[#181C20] text-white font-ttCommonProRegular'>
      <div className='w-full xl:max-w-[1216px] mx-auto'>
      <div className='pt-14 pb-20 px-28 xl:px-0 flex justify-between items-start flex-wrap gap-6'>
        <div className='flex flex-col w-[344px] gap-6'>
        <img src={logo2} alt="" className='w-[130px] h-[93px]' />
        <p className='text-sm text-[#CAD5DE] font-ttCommonProRegular leading-[1.4rem]'>Camps & Crew simplifies crew and lodge management, partnering with housing providers, energy, and mining companies to streamline operations and reduce costs.</p>
        </div>
        <div className='flex flex-col w-[330px] gap-4'>
            <p className='font-gilroyBold font-normal leading-[1.23rem]'>Solutions</p>
        <Link to="#" className='hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]'>Software to Manage Remote Workforce Camps</Link>
        <Link to="#" className='hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]'>Online Booking Tool for FIFO Travel Logistics</Link>
        </div>
        <div className='flex flex-col w-[100px] gap-4'>
            <p className='font-gilroyBold font-normal'>Resources</p>
            {/* <a href="#" className='hover:underline text-[#CAD5DE]'>Blog</a> */}
            <Link to="#" className='w-full hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]'>Case Studies</Link>
        </div>
        <div className='flex flex-col w-[206px] gap-4'>
        <p className='font-gilroyBold font-normal'>Company</p>
        <Link to="#" className='text-[#CAD5DE] hover:underline font-ttCommonProNormal font-normal leading-[1.6rem]'>About us</Link>
        <div className='flex gap-2 text-[#CAD5DE]'>
        <BsTelephone className='mt-2'/>
        <div className='flex flex-col'>
        <Link to="#" className='hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]'>USA : +1 6197983914</Link>
        <Link to="#" className='hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]'>CA : +1 2898072990</Link>
        <Link to="#" className='hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]'>Global: +1 8002138556</Link></div>
        </div>
       <div className='flex items-center text-[#CAD5DE] gap-2'>
       <FaRegEnvelope />
       <Link to="#" className='hover:underline text-[#CAD5DE]'>info@campsandcrew.com</Link>
       </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 h-[54px] text-sm border-t-[1px] border-[#FFFFFF1A] text-[#CAD5DE] font-ttCommonProNormal font-medium leading-[1.4rem]'>
        <span className='border-[#CAD5DE] border-r-[1px] px-2'> Copyright © 2024</span>
        <Link to="#" className='px-2 hover:underline'>Privacy Policy</Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer
