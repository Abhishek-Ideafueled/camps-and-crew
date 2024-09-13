import Aos from 'aos';
import React, { useEffect } from 'react';
import './CsRightChoiceMain.css';
import RightChoiceHero from './RightChoiceHero';

const CsRightChoiceMain = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);


  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
        <RightChoiceHero/>
    </div>
  )
}

export default CsRightChoiceMain
