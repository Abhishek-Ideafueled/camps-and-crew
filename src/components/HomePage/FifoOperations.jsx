import React from 'react';
import video from '/video.jpg';

const FifoOperations = () => {
  return (
    <div className='bg-[#EAE8E3] pt-20 pr-0 pb-10 pl-0'>

        <div className=' flex flex-col gap-20 px-28'>
        <div className='text-center text-custom-heading font-gilroy font-bold'>
            <h2 className='text-h2'>Streamlining FIFO Operations for 16 Years</h2>
        </div>
        <div className='flex justify-center items-center gap-24 px-28 '>
            <div>
                <div className='text-[50px] border-b-2 border-[#EFBC43] w-28 text-custom-heading font-gilroyBold font-normal'>150K</div>
                <span className='font-ttCommonProNormal font-normal '>Rooms managed for clients operating remote camps and villages</span>
            </div>
            <div>
                <div className='text-[50px] border-b-2 border-[#EFBC43] w-28 text-custom-heading font-gilroyBold font-normal'>350K</div>
                <span className='font-ttCommonProNormal font-normal '>FIFO transportation reservations booked and managed annually</span>
            </div>
            <div>
                <div className='text-[50px] border-b-2 border-[#EFBC43] w-16 text-custom-heading font-gilroyBold font-normal'>74</div>
                <span className='font-ttCommonProNormal font-normal '>Years combined experience across mining, energy, travel and hospitality</span>
            </div>
        </div>
      </div>
      <div className='flex px-28 pt-16 pb-10 gap-16'>
    <div>
    <img src={video} alt="insert video player here" />
    </div>
    <div className='flex flex-col w-[556px] gap-6'>
        <h3 className='text-2xl font-gilroyBold text-custom-heading font-normal'>About the company</h3>
        <p className='font-ttCommonProNormal font-medium text-[#344054]'>At Camps and Crew, we have set out to build best-of-breed technology that facilitates fly-in fly-out operations for travel coordinators, on-site camp staff, camp and project management, and everyone in-between.
            </p> <p className='font-ttCommonProNormal font-medium text-[#344054]'>Over the years, we have developed a suite of software solutions to streamline all aspects of FIFO travel and remote camp management. Our solutions support all parties working to ensure remote crews are transported and housed safely and efficiently.
                </p>
                <p  className='font-ttCommonProNormal font-medium text-[#344054]'>We work with companies in the mining, energy and construction sectors to automate and streamline their operations in order to reduce manual processes and the costs associated.</p>
    </div>
      </div>
    </div>
  )
}

export default FifoOperations
