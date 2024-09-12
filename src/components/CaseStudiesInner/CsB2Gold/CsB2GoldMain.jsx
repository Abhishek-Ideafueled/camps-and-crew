import React, { useEffect } from 'react'
import Aos from 'aos';
import DemoForm from '../../HomePage/DemoForm';
import B2GoldHero from './B2GoldHero';
import B2GoldSecond from './B2GoldSecond';

const CsB2GoldMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <B2GoldHero/>
      <B2GoldSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsB2GoldMain
