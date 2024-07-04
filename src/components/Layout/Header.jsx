import React from 'react';
import logo1 from '/logo1.png';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <div className='flex justify-between px-28 py-4'>
      <img src={logo1} alt="" />
      <div className='flex gap-12 justify-center items-center text-[#09425D]'>
      <div className='flex gap-10 font-gilroyBold font-normal'>
        <p className='hover:text-[#63C1EC] cursor-pointer'>Home</p>
        
        <span className='flex items-center gap-1 hover:text-[#63C1EC] cursor-pointer'><p >Solutions</p> <IoIosArrowDown /></span>
        <p className='hover:text-[#63C1EC] cursor-pointer'>Company</p>
        <p className='hover:text-[#63C1EC] cursor-pointer'>Case Studies</p>
      </div>
    <div className='bg-[#5BC0ED] px-4 py-3 font-ttCommonProRegular font-semibold rounded-[4px] hover:bg-[#53abd1]'>
       <button> BOOK A DEMO</button>
    </div>
      </div>
    </div>
  )
}

export default Header
