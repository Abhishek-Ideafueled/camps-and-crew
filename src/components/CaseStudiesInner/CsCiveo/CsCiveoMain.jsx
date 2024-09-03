import React, { useEffect } from 'react'
import CiveoHero from './CiveoHero'
import Aos from 'aos';
import CiveoSecond from './CiveoSecond';
import './CsCiveoMain.css';
import DemoForm from '../../HomePage/DemoForm';

const CsCiveoMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <CiveoHero/>
      <CiveoSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsCiveoMain