import React, { useEffect } from 'react'
import MiningHero from './MiningHero';
import MiningLogoSplide from './MiningLogoSplide';
import MiningTechnology from './MiningTechnology';
import Testimonials from '../SmartLodge/Testimonials';
import Aos from 'aos';
import MiningWorkforceManagement from './MiningWorkforceManagement';
import MiningSoftwareSolutions from './MiningSoftwareSolutions';
import MiningSoftwareSolutions2 from './MiningSoftwareSolutions2';
import MiningSeamlessIntegration from './MiningSeamlessIntegration';
import MiningLifeCycle from './MiningLifeCycle';
import MiningDeepExpertise from './MiningDeepExpertise';
import MiningCaseStudies from './MiningCaseStudies';
import MiningFaqs from './MiningFaqs';
import DemoForm from '../HomePage/DemoForm';

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
        {/* <MiningSoftwareSolutions2/> */}
        <MiningSeamlessIntegration/>
        <MiningLifeCycle/>
        <MiningDeepExpertise/>
        <MiningCaseStudies/>
        <MiningFaqs/>
        <DemoForm/>
    </div>
  )
}

export default MiningMain
