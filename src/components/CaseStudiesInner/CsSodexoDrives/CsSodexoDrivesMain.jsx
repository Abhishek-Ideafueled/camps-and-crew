import React, { useEffect } from 'react'
import SodexoDrivesHero from './SodexoDrivesHero'
import Aos from 'aos';
import SodexoDrivesSecond from './SodexoDrivesSecond';
import './CsSodexoDrivesMain.css';
import DemoForm from '../../HomePage/DemoForm';

const CsSodexoDrivesMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <SodexoDrivesHero/>
      <SodexoDrivesSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsSodexoDrivesMain
