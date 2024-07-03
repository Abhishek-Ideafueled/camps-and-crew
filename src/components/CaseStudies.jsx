import React from 'react'
import blogcard from '/blogcard.jpg';

const CaseStudies = () => {
  return (
    <div className='flex flex-col py-20 px-28 gap-14 bg-[#F7F5F2]'>
        <div className='flex flex-col gap-4'>
        <h1 className='text-[40px]'>Case Studies</h1>
      <p>Read about the ways our software empowers our clients to increase room utilization at camp, streamline housekeeping, manage rooms and travel in sync, and much more.</p>

        </div>
         <img src={blogcard} alt="blog card image" />
    </div>
  )
}

export default CaseStudies
