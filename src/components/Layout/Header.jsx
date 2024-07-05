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
    <div className='flex justify-between px-28 py-4'>
      <img src={logo1} alt="" />
      <div className='flex gap-12 justify-center items-center text-[#09425D]'>
      <div className='flex gap-10 font-gilroyBold font-normal'>
        <Link to="/" className={`${activeLink ==="/" ? "text-[#63C1EC] border-b-[1px] border-[#63C1EC]" :""} hover:text-[#63C1EC] cursor-pointer`}
        onClick={()=>setActiveLink("/")}
        >Home</Link>
        
        <span className='flex items-center gap-1 hover:text-[#63C1EC] cursor-pointer'><p >Solutions</p> <IoIosArrowDown /></span>
        <Link to="/company" className={`${activeLink ==="/company" ? "text-[#63C1EC] border-b-[1px] border-[#63C1EC]" :""} hover:text-[#63C1EC] cursor-pointer`}
        onClick={()=>setActiveLink("/company")}
        >Company</Link>
        <Link to="/case-studies" className={`${activeLink ==="/case-studies" ? "text-[#63C1EC] border-b-[1px] border-[#63C1EC]" :""} hover:text-[#63C1EC] cursor-pointer`}
        onClick={()=>setActiveLink("/case-studies")}
        >Case Studies</Link>
      </div>
    <div className='bg-[#5BC0ED] px-4 py-3 font-ttCommonProRegular font-semibold rounded-[4px] hover:bg-[#53abd1]'>
       <button> BOOK A DEMO</button>
    </div>
      </div>
    </div>
  )
}

export default Header
