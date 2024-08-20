import React, { useEffect } from 'react';
import RemoteWorkforceHero from './RemoteWorkforceHero';
import RWLogos from './RWLogos';
import RwAccommodations from './RwAccommodations';
import Testimonials from '../SmartLodge/Testimonials';
import RwTechnology from './RwTechnology';
import RwSmartLodgePurpose from './RwSmartLodgePurpose';
import RwYearMain from './RwYearMain';
import RwNavbar from './RwNavbar';
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
      <RwNavbar/>
      <section id="not-year">
      <RemoteWorkforceHero/>
      <RWLogos/>
      <RwAccommodations/>
      <Testimonials/>
      <RwTechnology/>
      <RwSmartLodgePurpose/>
      </section>
      <section id='year-main'>
      <RwYearMain/>  
      </section> 
      <section id="after-year">
        <RwDigitalPartner/>
        <RwRemoteProjects/>        
        </section> 
        <RwProjectBids/>
        <RwLms/>
        <RwCaseStudy/> 
        <RwFaqs/>   
      <DemoForm/>
    </div>
  )
}

export default RemoteWorkforceMain
