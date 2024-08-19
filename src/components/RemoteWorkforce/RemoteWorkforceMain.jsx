import React from 'react';
import RemoteWorkforceHero from './RemoteWorkforceHero';
import RWLogos from './RWLogos';
import RwAccommodations from './RwAccommodations';
import Testimonials from '../SmartLodge/Testimonials';
import RwTechnology from './RwTechnology';
import RwSmartLodgePurpose from './RwSmartLodgePurpose';
import RwYearMain from './RwYearMain';
import RwNavbar from './RwNavbar';

const RemoteWorkforceMain = () => {

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
      
    </div>
  )
}

export default RemoteWorkforceMain
