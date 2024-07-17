import React, { useEffect } from 'react'
import CompanyHeader from './CompanyHeader'
import AOS from "aos";
import "aos/dist/aos.css";

const Company = () => {
  
  useEffect(()=>{
      AOS.init();
  },[])
  
  return (
    <div className='w-full'>
      <CompanyHeader/>
    </div>
  )
}

export default Company
