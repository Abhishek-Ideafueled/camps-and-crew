import React, { useEffect } from 'react'
import SodexoDrivesHero from './SodexoDrivesHero'
import Aos from 'aos';
import SodexoDrivesSecond from './SodexoDrivesSecond';

const CsSodexoDrivesMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className='overflow-hidden w-full mt-[76px] lg:mt-[106px] '>
      <SodexoDrivesHero/>
      <SodexoDrivesSecond/>
    </div>
  )
}

export default CsSodexoDrivesMain
