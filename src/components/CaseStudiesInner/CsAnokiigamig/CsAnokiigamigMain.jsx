import React, { useEffect } from 'react';
import './CsAnokiigamigMain.css';
import Aos from 'aos';
import AnokiiHero from './AnokiiHero';

const CsAnokiigamigMain = () => {


    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
      }, []);
    

  return (
    <div className=' w-full mt-[76px] lg:mt-[106px] '>
      <AnokiiHero/>
      
    </div>
  )
}

export default CsAnokiigamigMain
