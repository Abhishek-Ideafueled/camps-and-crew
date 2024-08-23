import React, { useEffect } from 'react'
import MiningHero from './MiningHero';
import MiningLogoSplide from './MiningLogoSplide';
import MiningTechnology from './MiningTechnology';
import Testimonials from '../SmartLodge/Testimonials';
import Aos from 'aos';
import MiningWorkforceManagement from './MiningWorkforceManagement';
import MiningSoftwareSolutions from './MiningSoftwareSolutions';

const MiningMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className='w-full overflow-hidden mt-[76px] lg:mt-[106px] '>
        <MiningHero/>
        <MiningLogoSplide/>
        <MiningTechnology/>
        <Testimonials/>
        <MiningWorkforceManagement/>
        <MiningSoftwareSolutions/>
    </div>
  )
}

export default MiningMain
