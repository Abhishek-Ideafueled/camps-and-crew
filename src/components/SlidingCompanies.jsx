import React from 'react';
import b2gold from '/b2gold.png';
import agincourtlogo from '/agincourt-logo.png';
import canadianenergy from '/canadian-energy.png';
import permianlodging from '/permian-lodging.png';
import top5canada from '/top-5-canada.png';

const SlidingCompanies = () => {
  return (
    <div className='flex flex-col gap-14 py-20'>
      <h3 className='text-center text-2xl'>Trusted by Companies All Over the World</h3>
      <div className='flex justify-between'>
        <img src={b2gold} alt="" />
        <img src={agincourtlogo} alt="" />
        <img src={canadianenergy} alt="" />
        <img src={permianlodging} alt="" />
        <img src={top5canada} alt="" />

      </div>
    </div>
  )
}

export default SlidingCompanies
