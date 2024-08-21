import React, { useEffect } from 'react';
import RemoteWorkforceHero from './RemoteWorkforceHero';
import RWLogos from './RWLogos';
import RwAccommodations from './RwAccommodations';
import Testimonials from '../SmartLodge/Testimonials';
import RwTechnology from './RwTechnology';
import RwSmartLodgePurpose from './RwSmartLodgePurpose';
import RwYearMain from './RwYearMain';
import RwDigitalPartner from './RwDigitalPartner';
import RwRemoteProjects from './RwRemoteProjects';
import RwProjectBids from './RwProjectBids';
import RwLms from './RwLms';
import DemoForm from '../HomePage/DemoForm';
import Aos from 'aos';
import RwCaseStudy from './RwCaseStudy';
import RwFaqs from './RwFaqs';

const RemoteWorkforceMain = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className='mt-[76px] lg:mt-[106px] w-full overflow-hidden'>
      <RemoteWorkforceHero/>
      <RWLogos/>
      <RwAccommodations/>
      <Testimonials/>
      <RwTechnology/>
      <RwSmartLodgePurpose/>
      <RwYearMain/>  
        <RwDigitalPartner/>
        <RwRemoteProjects/>        
        <RwProjectBids/>
        <RwLms/>
        <RwCaseStudy/> 
        <RwFaqs/>   
      <DemoForm/>
    </div>
  )
}

export default RemoteWorkforceMain
