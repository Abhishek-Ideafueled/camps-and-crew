import Aos from 'aos';
import React, { useEffect } from 'react';
import './CsPetroplexMain.css';
import PetroplexHero from './PetroplexHero';
import PetroplexSecond from './PetroplexSecond';
import DemoForm from '../../HomePage/DemoForm';

const CsPetroplexMain = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);

  return (
    <div className='w-full mt-[76px] lg:mt-[106px]'>
        <PetroplexHero/>
        <PetroplexSecond/>
        <DemoForm/>
    </div>
  )
}

export default CsPetroplexMain
