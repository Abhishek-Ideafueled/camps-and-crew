import React, { useEffect } from 'react';
import './CsPermianLodgingMain.css';
import Aos from 'aos';
import DemoForm from '../../HomePage/DemoForm';
import PermianHero from './PermianHero';

const CsPermianLodgingMain = () => {

    
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);

  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <PermianHero/>
    </div>
  )
}

export default CsPermianLodgingMain
