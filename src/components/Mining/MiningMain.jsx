import React, { useEffect } from 'react'
import MiningHero from './MiningHero';
import MiningLogoSplide from './MiningLogoSplide';
import MiningTechnology from './MiningTechnology';
import Testimonials from '../SmartLodge/Testimonials';
import Aos from 'aos';
import MiningWorkforceManagement from './MiningWorkforceManagement';
import MiningSoftwareSolutions from './MiningSoftwareSolutions';
import MiningSeamlessIntegration from './MiningSeamlessIntegration';
import MiningLifeCycle from './MiningLifeCycle';

const MiningMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);


  return (
    <div className='w-full overflow-x-hidden mt-[76px] lg:mt-[106px] '>
        <MiningHero/>
        <MiningLogoSplide/>
        <MiningTechnology/>
        <Testimonials/>
        <MiningWorkforceManagement/>
        <MiningSoftwareSolutions/>
        <MiningSeamlessIntegration/>
        <MiningLifeCycle/>
    </div>
  )
}

export default MiningMain
