import React from 'react';
import RemoteWorkforceHero from './RemoteWorkforceHero';
import RWLogos from './RWLogos';
import RwAccommodations from './RwAccommodations';
import Testimonials from '../SmartLodge/Testimonials';
import RwTechnology from './RwTechnology';
import RwSmartLodgePurpose from './RwSmartLodgePurpose';
import RwYearMain from './RwYearMain';

const RemoteWorkforceMain = () => {

  return (
    <div className='mt-[76px] lg:mt-[106px] w-full overflow-hidden'>
      <RemoteWorkforceHero/>
      <RWLogos/>
      <RwAccommodations/>
      <Testimonials/>
      <RwTechnology/>
      <RwSmartLodgePurpose/>
      <RwYearMain/>
    </div>
  )
}

export default RemoteWorkforceMain
