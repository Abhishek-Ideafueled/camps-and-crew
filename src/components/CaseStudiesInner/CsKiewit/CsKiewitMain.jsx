import Aos from 'aos';
import React, { useEffect } from 'react'
import KiewitHero from './KiewitHero';
import DemoForm from '../../HomePage/DemoForm';
import './CsKiewitMain.css';
import KiewitSecond from './KiewitSecond';

const CsKiewitMain = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);

  return (
    <div className='w-full mt-[76px] lg:mt-[106px]'>
      <KiewitHero/>
      <KiewitSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsKiewitMain
