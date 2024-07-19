import React, { useEffect } from 'react'
import CompanyHeader from './CompanyHeader'
import AOS from "aos";
import "aos/dist/aos.css";
import FastFacts from './FastFacts';
import OurStory from './OurStory';
import OurMission from './OurMission';
import OurTeam from './OurTeam';

const Company = () => {
  
  useEffect(()=>{
      AOS.init(
        {duration:1000,
          easing: "ease-in-out",
        }
      );
  },[])
  
  return (
    <div className='w-full overflow-hidden mt-[75px] lg:mt-[106px]'>
      <CompanyHeader/>
      <FastFacts/>
      <OurStory/>
      <OurMission/>
      <OurTeam/>
    </div>
  )
}

export default Company
