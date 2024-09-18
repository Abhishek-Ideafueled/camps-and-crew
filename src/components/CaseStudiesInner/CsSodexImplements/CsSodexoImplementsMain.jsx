import Aos from 'aos';
import React, { useEffect } from 'react';
import './CsSodexoImplementsMain.css';
import SodexoImplementsHero from './SodexoImplementsHero';
import SodexoImplementsSecond from './SodexoImplementsSecond';
import DemoForm from '../../HomePage/DemoForm';

const CsSodexoImplementsMain = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);


  return (
    <div className='w-full mt-[76px] lg:mt-[106px]'>
      <SodexoImplementsHero/>
      <SodexoImplementsSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsSodexoImplementsMain
