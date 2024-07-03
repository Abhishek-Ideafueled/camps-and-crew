import React from 'react';
import logo1 from '/logo1.png';

const Header = () => {
  return (
    <div className='flex justify-between px-28 py-4'>
      <img src={logo1} alt="" />
      <div className='flex gap-12 justify-center items-center text-[#09425D]'>
      <div className='flex gap-10 '>
        <p>Home</p>
        <p>Solutions</p>
        <p>Company</p>
        <p>Case Studies</p>
      </div>
    <div className='bg-[#5BC0ED] px-4 py-3 font-semibold'>
        BOOK A DEMO
    </div>
      </div>
    </div>
  )
}

export default Header
