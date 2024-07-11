import React, { useEffect, useState } from 'react';
import logo1 from '/logo1.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Modal from '../HomePage/Modal';
import { HiBars3} from 'react-icons/hi2';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown,setShowDropdown] = useState(false);

  const handleClose=()=>{
    setIsOpen(false);
  }

  useEffect(()=>{
    let curr = window.location.pathname;
    setActiveLink(curr);
  },[])

  return (
    <>
      <header className="bg-white w-full sticky top-0 z-10 border-custom-blue border-b-[1px] flex flex-col items-start">
        <div className="flex flex-row items-center justify-between max-w-[720px] lg:max-w-full min-h-[71px] transition-all duration-150 delay-150 px-3 lg:px-28 py-4 xl:px-0  w-full xl:max-w-[1216px] mx-auto">
          <Link
            to="/"
            className="w-[70px] h-[44px] lg:w-[115px] lg:h-[74px]"
          >
            <img src="/camps_crew_logo2.png" alt="" />
          </Link>
          <div
            className={`hidden lg:flex lg:flex-row gap-12 justify-center items-center text-[#09425D] leading-[1.2rem]"}`}
          >
            <nav className="flex flex-row gap-10 font-gilroyBold font-normal leading-5 ">
              <Link
                to="/"
                className={`${
                  activeLink === "/"
                    ? "text-custom-blue lg:border-b-[1px] border-custom-blue"
                    : ""
                } hover:text-custom-blue cursor-pointer`}
                onClick={() => setActiveLink("/")}
              >
                Home
              </Link>

              <span
                className="flex items-center gap-1 hover:text-custom-blue cursor-pointer"
                // onClick={()=>setIsOpen(true)}
              >
                <p>Solutions</p>
                <IoIosArrowDown />
              </span>
              <Link
                to="/company"
                className={`${
                  activeLink === "/company"
                    ? "text-custom-blue lg:border-b-[1px] border-custom-blue"
                    : ""
                } hover:text-custom-blue cursor-pointer`}
                onClick={() => setActiveLink("/company")}
              >
                Company
              </Link>
              <Link
                to="/case-studies"
                className={`${
                  activeLink === "/case-studies"
                    ? "text-custom-blue lg:border-b-[1px] border-custom-blue"
                    : ""
                } hover:text-custom-blue cursor-pointer`}
                onClick={() => setActiveLink("/case-studies")}
              >
                Case Studies
              </Link>
            </nav>
            <button className="bg-[#5BC0ED] text-center w-[145px] h-[43px] px-4 py-3 font-ttCommonProRegular font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]">
              
              BOOK A DEMO
            </button>
          </div>
          <div className='block lg:hidden items-center' onClick={()=>setShowDropdown(!showDropdown)}>
          <HiBars3 size={30} className='' />
      </div>
        </div>
        
      <div className={`${!showDropdown ? "hidden" : "flex flex-col gap-4 text-[#09425D] items-start md:mx-auto leading-[1.2rem] px-3 ml-auto my-3 max-w-[720px] xl:max-w-[1216px] w-full lg:hidden pb-4 transition-all duration-450 delay-400"}`}>
      <nav className='flex flex-col gap-2  font-gilroyBold font-normal leading-5 text-sm'>
        <Link to="/" className={`${activeLink ==="/" ? "text-custom-blue " :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/")}
        >Home</Link>
        
        <span className='flex items-center gap-1 hover:text-custom-blue cursor-pointer' 
        // onClick={()=>setIsOpen(true)}
        >
          <p >Solutions</p> 
          <IoIosArrowDown />
          </span>
        <Link to="/company" className={`${activeLink ==="/company" ? "text-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/company")}
        >Company</Link>
        <Link to="/case-studies" className={`${activeLink ==="/case-studies" ? "text-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/case-studies")}
        >Case Studies</Link>
      </nav>
       <button className='bg-[#5BC0ED] flex items-center w-[145px] h-[43px] px-4 py-3 font-ttCommonProRegular font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]'> BOOK A DEMO</button>
    
      </div>
      </header>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {/* <>Helloooo</> */}
      </Modal>
    </>
  );
}

export default Header
