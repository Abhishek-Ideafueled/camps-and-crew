import React from 'react';
import { Link } from 'react-router-dom';
import './MiningMain.css';

const MiningHero = () => {

    
  
 


  const handleClickScroll = () => {
    const element = document.getElementById('demoForm');

    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className='w-full bg-custom-heading'>
        <div className='main-container mx-auto py-10 lg:pt-[120px] flex flex-col items-center'>
        <div className='flex flex-col gap-6 items-center'>
        <span className='font-ttCommonProRegular font-medium text-[#189AD2] text-sm'>
            | MINING |
        </span>
        <h2 className='heading-h2 text-white text-center max-w-[1116px]'>            
        Software to Manage FIFO Transport and Accommodations for Remote Mining Projects
        </h2>
        <div className='text-center font-ttCommonProNormal font-medium text-base md:text-lg lg:text-xl text-white lg:leading-8'>
        Designed to meet the unique demands of remote mining projects, we leverage <br className='hidden xl:block' /> years of experience to build software solutions that streamline the way mining <br className='hidden xl:block' /> companies manage transportation and housing for their workforces.
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default MiningHero
