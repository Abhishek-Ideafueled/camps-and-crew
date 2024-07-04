import React from 'react';
import b2gold from '/b2gold.png';
import agincourtlogo from '/agincourt-logo.png';
import canadianenergy from '/canadian-energy.png';
import permianlodging from '/permian-lodging.png';
import top5canada from '/top-5-canada.png';

const SlidingCompanies = () => {
  return (
    <div className='flex flex-col gap-14 py-20 w-full'>
      <h3 className='text-center text-2xl font-gilroyBold font-normal text-custom-heading'>Trusted by Companies All Over the World</h3>
      <div className='flex justify-between overflow-x-auto w-full'>
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
