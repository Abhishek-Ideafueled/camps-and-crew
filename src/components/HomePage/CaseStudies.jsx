import React from 'react'
import blogcard from '/blogcard.jpg';

const CaseStudies = () => {
  return (
    <div className='flex flex-col py-20 px-28 gap-14 bg-[#F7F5F2]'>
      <div className='flex'>
        <div className='flex flex-col gap-4 w-[70%]'>
        <h2 className='text-h2 text-custom-heading font-gilroy font-bold'>Case Studies</h2>
      <p className='text-custom-body font-ttCommonProNormal font-medium leading-7'>Read about the ways our software empowers our clients to increase room utilization at camp, streamline housekeeping, manage rooms and travel in sync, and much more.</p>
        </div>
        <div className='flex items-center w-[30%] justify-end'>
        <span className='font-ttCommonProMedium text-custom-blue'>VIEW ALL</span>
        </div>
        </div>
         <img src={blogcard} alt="blog card image" />
    </div>
  )
}

export default CaseStudies
