import React, { useEffect } from 'react'
import CompanyHeader from './CompanyHeader'
import AOS from "aos";
import "aos/dist/aos.css";
import FastFacts from './FastFacts';
import OurStory from './OurStory';
import OurMission from './OurMission';

const Company = () => {
  
  useEffect(()=>{
      AOS.init(
        {duration:1000,
          easing: "ease-in-out",
        }
      );
  },[])
  
  return (
    <div className='w-full overflow-hidden'>
      <CompanyHeader/>
      <FastFacts/>
      <OurStory/>
      <OurMission/>
    </div>
  )
}

export default Company
