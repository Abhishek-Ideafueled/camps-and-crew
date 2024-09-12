import React, { useEffect } from 'react';
import './CsCleanHarborMain.css';
import Aos from 'aos';
import DemoForm from '../../HomePage/DemoForm';
import CleanHarborHero from './CleanHarborHero';
import CleanHarborSecond from './CleanHarborSecond';

const CsCleanHarborMain = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);
    

  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <CleanHarborHero/>
      <CleanHarborSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsCleanHarborMain
