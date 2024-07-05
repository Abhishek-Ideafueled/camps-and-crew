import React, { useEffect, useState } from 'react';
import logo1 from '/logo1.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(()=>{
    let curr = window.location.pathname;
    setActiveLink(curr);
  },[])

  return (
    <div className='flex justify-between px-28 py-4 sticky top-0 bg-white border-custom-blue border-b-[1px]'>
      <img src={logo1} alt="" />
      <div className='flex gap-12 justify-center items-center text-[#09425D] leading-[1.2rem]'>
      <div className='flex gap-10 font-gilroyBold font-normal leading-5'>
        <Link to="/" className={`${activeLink ==="/" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/")}
        >Home</Link>
        
        <span className='flex items-center gap-1 hover:text-custom-blue cursor-pointer'><p >Solutions</p> <IoIosArrowDown /></span>
        <Link to="/company" className={`${activeLink ==="/company" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/company")}
        >Company</Link>
        <Link to="/case-studies" className={`${activeLink ==="/case-studies" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/case-studies")}
        >Case Studies</Link>
      </div>
    <div className='bg-[#5BC0ED] px-4 py-3 font-ttCommonProNormal font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]'>
       <button> BOOK A DEMO</button>
    </div>
      </div>
    </div>
  )
}

export default Header
