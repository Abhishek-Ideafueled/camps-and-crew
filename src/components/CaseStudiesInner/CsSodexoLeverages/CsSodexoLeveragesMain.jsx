import React, { useEffect } from 'react'
import SodexoLeveragesHero from './SodexoLeveragesHero'
import Aos from 'aos';
import SodexoLeveragesSecond from './SodexoLeveragesSecond';
import './CsSodexoLeveragesMain.css';
import DemoForm from '../../HomePage/DemoForm';

const CsSodexoLeveragesMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <SodexoLeveragesHero/>
      <SodexoLeveragesSecond/>
      <DemoForm/>
    </div>
  )
}

export default CsSodexoLeveragesMain
