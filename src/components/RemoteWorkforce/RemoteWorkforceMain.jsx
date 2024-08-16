import React from 'react';
import RemoteWorkforceHero from './RemoteWorkforceHero';
import RWLogos from './RWLogos';
import RwAccommodations from './RwAccommodations';
import Testimonials from '../SmartLodge/Testimonials';

const RemoteWorkforceMain = () => {

  return (
    <div className='mt-[76px] lg:mt-[106px] w-full overflow-hidden'>
      <RemoteWorkforceHero/>
      <RWLogos/>
      <RwAccommodations/>
      <Testimonials/>
    </div>
  )
}

export default RemoteWorkforceMain
