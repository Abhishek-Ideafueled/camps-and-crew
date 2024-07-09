import React, { useEffect, useState } from 'react';
import logo1 from '/logo1.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Modal from '../HomePage/Modal';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose=()=>{
    setIsOpen(false);
  }

  useEffect(()=>{
    let curr = window.location.pathname;
    setActiveLink(curr);
  },[])

  return (
    <>
    <header className='flex justify-between h-[106px] px-28 py-4 sticky top-0 z-10 bg-white border-custom-blue border-b-[1px]'>
      <Link to='/home'> <img src={logo1} alt="" className='w-[115px] h-[74px]' /></Link>
     
      <div className='flex gap-12 justify-center items-center text-[#09425D] leading-[1.2rem]'>
      <nav className='flex gap-10 font-gilroyBold font-normal leading-5'>
        <Link to="/" className={`${activeLink ==="/" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/")}
        >Home</Link>
        
        <span className='flex items-center gap-1 hover:text-custom-blue cursor-pointer' onClick={()=>setIsOpen(true)}><p >Solutions</p> <IoIosArrowDown /></span>
        <Link to="/company" className={`${activeLink ==="/company" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/company")}
        >Company</Link>
        <Link to="/case-studies" className={`${activeLink ==="/case-studies" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/case-studies")}
        >Case Studies</Link>
      </nav>
    <div className='bg-[#5BC0ED] px-4 py-3 font-ttCommonProNormal font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]'>
       <button> BOOK A DEMO</button>
    </div>
      </div>
    </header>
    <Modal isOpen={isOpen} onClose={handleClose}>
      {/* <>Helloooo</> */}
      </Modal>
      
      </>
  )
}

export default Header
