import React, { useEffect } from 'react'
import CompanyHeader from './CompanyHeader'
import AOS from "aos";
import "aos/dist/aos.css";
import FastFacts from './FastFacts';

const Company = () => {
  
  useEffect(()=>{
      AOS.init();
  },[])
  
  return (
    <div className='w-full'>
      <CompanyHeader/>
      <FastFacts/>
    </div>
  )
}

export default Company
