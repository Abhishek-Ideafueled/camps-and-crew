import React from 'react';
import video from '/video.png';

const FifoOperations = () => {
  return (
    <div className='bg-[#EAE8E3] pt-20 pr-0 pb-10 pl-0'>

        <div className=' flex flex-col gap-20 px-28'>
        <div className='text-center text-custom-heading font-gilroy font-bold'>
            <h2 className='text-h2 leading-[3rem]'>Streamlining FIFO Operations for 16 Years</h2>
        </div>
        <div className='flex justify-center items-center gap-24 px-28 '>
            <div>
                <div className='text-[50px] border-b-2 leading-[3.75rem] border-custom-button w-28 text-custom-heading font-gilroyBold font-normal'>150K</div>
                <span className='font-ttCommonProNormal font-normal leading-[1.55rem]'>Rooms managed for clients operating remote camps and villages</span>
            </div>
            <div>
                <div className='text-[50px] border-b-2 leading-[3.75rem] border-custom-button w-28 text-custom-heading font-gilroyBold font-normal'>350K</div>
                <span className='font-ttCommonProNormal font-normal leading-[1.55rem]'>FIFO transportation reservations booked and managed annually</span>
            </div>
            <div>
                <div className='text-[50px] border-b-2 leading-[3.75rem] border-custom-button w-16 text-custom-heading font-gilroyBold font-normal'>74</div>
                <span className='font-ttCommonProNormal font-normal leading-[1.55rem]'>Years combined experience across mining, energy, travel and hospitality</span>
            </div>
        </div>
      </div>
      <div className='flex px-28 pt-16 pb-10 gap-16'>
    <div className=''>
    <img src={video} alt="insert video player here" className='' />
    {/* <div className='relative'>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40Z" fill="#EFBC43"/>
<svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.7724 29.5263C2.3118 29.5254 1.8594 29.3983 1.4597 29.1576C0.559602 28.6207 0 27.5786 0 26.4473V3.55266C0 2.41816 0.559602 1.37926 1.4597 0.842457C1.869 0.594857 2.3339 0.467556 2.8059 0.473856C3.2779 0.480056 3.7396 0.619656 4.1428 0.877956L22.7342 12.5906C23.1216 12.8463 23.441 13.2013 23.6624 13.6225C23.8839 14.0437 24 14.5171 24 14.9984C24 15.4798 23.8839 15.9532 23.6624 16.3744C23.441 16.7955 23.1216 17.1506 22.7342 17.4063L4.1398 29.1221C3.7272 29.3846 3.2546 29.5243 2.7724 29.5263Z" fill="white"/>
</svg>

</div> */}
    </div>
    <div className='flex flex-col w-[556px] gap-6'>
        <h3 className='text-2xl font-gilroyBold text-custom-heading font-normal leading-[1.8rem]'>About the company</h3>
        <p className='font-ttCommonProNormal font-medium text-custom-body'>At Camps and Crew, we have set out to build best-of-breed technology that facilitates fly-in fly-out operations for travel coordinators, on-site camp staff, camp and project management, and everyone in-between.
            </p> <p className='font-ttCommonProNormal font-medium text-custom-body'>Over the years, we have developed a suite of software solutions to streamline all aspects of FIFO travel and remote camp management. Our solutions support all parties working to ensure remote crews are transported and housed safely and efficiently.
                </p>
                <p  className='font-ttCommonProNormal font-medium text-custom-body'>We work with companies in the mining, energy and construction sectors to automate and streamline their operations in order to reduce manual processes and the costs associated.</p>
    </div>
      </div>
    </div>
  )
}

export default FifoOperations
