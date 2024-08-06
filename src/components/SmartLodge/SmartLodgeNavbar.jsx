import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SmartLodgeNavbar = () => {
    const [activeId,setActiveId] = useState("");
    const [showNav,setShowNav] = useState();

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        setActiveId(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

     
      useEffect(()=>{
        const handleShowNav=()=>{
            if(window.scrollY >= 2300)
            {
                setShowNav(true);
            }else setShowNav(false);
        }

        window.addEventListener("scroll",handleShowNav);
return ()=>{
    window.removeEventListener("scroll",handleShowNav)
}
    },[])

  return (
    <div className={`${showNav ? 'w-full bg-custom-back z-30 h-[74px] lg:h-[106px]' : 'w-0 h-0 z-0 bg-transparent'} fixed top-0 `}>
        <div className='main-container mx-auto flex items-center h-full'>
         <ul className='flex items-center overflow-x-auto text-nowrap lg:text-wrap no-scrollbar'>

       <Link href="/#roomsManagement" onClick={()=>handleClickScroll("roomsManagement")}>
       <li className={`${activeId ==="roomsManagement"? 'text-custom-button border-b-custom-button border-b-[4px]' : 'text-white'} text-base font-gilroyBold px-3 text-center`}>
       Rooms Management
       </li></Link>
       <Link href="/#reception" onClick={()=>handleClickScroll("reception")}>
       <li className={`${activeId ==="reception"? 'text-custom-button border-b-custom-button border-b-[4px]' : 'text-white'} text-base font-gilroyBold px-3 text-center`}>
       Reception & Front Desk
       </li></Link>
       <Link href="/#housekeeping" onClick={()=>handleClickScroll("housekeeping")}>
       <li className={`${activeId ==="housekeeping"? 'text-custom-button border-b-custom-button border-b-[4px]' : 'text-white'} text-base font-gilroyBold px-3 text-center`}>
     
       Housekeeping & Maintenance
                        
       </li></Link>
       <Link href="/#reports" onClick={()=>handleClickScroll("reports")}>
       <li className={`${activeId ==="reports"? 'text-custom-button border-b-custom-button border-b-[4px]' : 'text-white'} text-base font-gilroyBold px-3 text-center`}>
      Reporting & Analytics
       </li></Link>
       <Link href="/#systemIntegrations" onClick={()=>handleClickScroll("systemIntegrations")}>
       <li className={`${activeId ==="systemIntegrations"? 'text-custom-button border-b-custom-button border-b-[4px]' : 'text-white'} text-base font-gilroyBold px-3 text-center`}>
       System Inegrations
       </li></Link>
       <Link href="/#features" onClick={()=>handleClickScroll("features")}>
       <li className={`${activeId ==="features"? 'text-custom-button border-b-custom-button border-b-[4px]' : 'text-white'} text-base font-gilroyBold px-3 text-center`}>
      Additional Features
       </li></Link>
         </ul>
        </div>
      
    </div>
  )
}

export default SmartLodgeNavbar

