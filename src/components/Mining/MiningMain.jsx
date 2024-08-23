import React from 'react'
import MiningHero from './MiningHero';
import MiningLogoSplide from './MiningLogoSplide';
import MiningTechnology from './MiningTechnology';

const MiningMain = () => {
  return (
    <div className='w-full overflow-hidden mt-[76px] lg:mt-[106px] '>
        <MiningHero/>
        <MiningLogoSplide/>
        <MiningTechnology/>
    </div>
  )
}

export default MiningMain
