import React from 'react';
import RemoteWorkforceHero from './RemoteWorkforceHero';
import RWLogos from './RWLogos';
import RwAccommodations from './RwAccommodations';

const RemoteWorkforceMain = () => {

  return (
    <div className='mt-[76px] lg:mt-[106px] w-full overflow-hidden'>
      <RemoteWorkforceHero/>
      <RWLogos/>
      <RwAccommodations/>
    </div>
  )
}

export default RemoteWorkforceMain
