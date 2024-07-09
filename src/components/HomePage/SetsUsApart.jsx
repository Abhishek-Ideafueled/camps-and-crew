import React from 'react';
import problemsolve from '/problem-solve.png';
import homedomain from '/home-domain.png';
import homeflexible from '/home-flexible.png';
import homeone from '/home-one.png';
import cuttingedge from '/cutting-edge.png';

const SetsUsApart = () => {
  return (
    <div className='bg-[#053347] text-white '>
    <div className='flex flex-col  px-28 xl:px-0 py-20  gap-14 w-full xl:max-w-[1216px] mx-auto'>
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-[40px] font-gilroy font-bold'>What Sets Us Apart</h1>
        <svg
          width="174"
          height="16"
          viewBox="0 0 174 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.582 0.722656L1.58201 15.7227" stroke="#ffffff" />
          <path d="M46.582 0.722656L36.582 15.7227" stroke="#ffffff" />
          <path d="M81.582 0.722656L71.582 15.7227" stroke="#ffffff" />
          <path d="M116.582 0.722656L106.582 15.7227" stroke="#ffffff" />
          <path d="M151.582 0.722656L141.582 15.7227" stroke="#ffffff" />
          <path d="M18.582 0.722656L8.58201 15.7227" stroke="#ffffff" />
          <path d="M53.582 0.722656L43.582 15.7227" stroke="#ffffff" />
          <path d="M88.582 0.722656L78.582 15.7227" stroke="#ffffff" />
          <path d="M123.582 0.722656L113.582 15.7227" stroke="#ffffff" />
          <path d="M158.582 0.722656L148.582 15.7227" stroke="#ffffff" />
          <path d="M25.582 0.722656L15.582 15.7227" stroke="#ffffff" />
          <path d="M60.582 0.722656L50.582 15.7227" stroke="#ffffff" />
          <path d="M95.582 0.722656L85.582 15.7227" stroke="#ffffff" />
          <path d="M130.582 0.722656L120.582 15.7227" stroke="#ffffff" />
          <path d="M165.582 0.722656L155.582 15.7227" stroke="#ffffff" />
          <path d="M32.582 0.722656L22.582 15.7227" stroke="#ffffff" />
          <path d="M67.582 0.722656L57.582 15.7227" stroke="#ffffff" />
          <path d="M102.582 0.722656L92.582 15.7227" stroke="#ffffff" />
          <path d="M137.582 0.722656L127.582 15.7227" stroke="#ffffff" />
          <path d="M172.582 0.722656L162.582 15.7227" stroke="#ffffff" />
          <path d="M39.582 0.722656L29.582 15.7227" stroke="#ffffff" />
          <path d="M74.582 0.722656L64.582 15.7227" stroke="#ffffff" />
          <path d="M109.582 0.722656L99.582 15.7227" stroke="#ffffff" />
          <path d="M144.582 0.722656L134.582 15.7227" stroke="#ffffff" />
        </svg>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='flex flex-col gap-5'>
            <img src={cuttingedge} alt="" className='w-auto max-w-max' />
            <h3 className='text-[24px] font-gilroyBold font-normal'>Cutting-Edge Technology</h3>
            <p className='font-ttCommonProRegular font-normal'>We continually innovate to meet the ever-evolving requirements of our clients and their remote project operations. Our clients play an integral part in defining our product roadmap.</p>
        </div>
        <div className='flex flex-col gap-5'>
            <img src={homeflexible} alt="" className='w-auto max-w-max' />
            <h3 className='text-[24px] font-gilroyBold font-normal'>Flexible System Configurations</h3>
            <p className='font-ttCommonProRegular font-normal'>SmartLodge manages camps with varying requirements, large or small. Similarly, EnRoute is designed to book and manage FIFO travel and transportation logistics no matter how simple or complex.</p>
        </div>
        <div className='flex flex-col gap-5'>
            <img src={homeone} alt="" className='w-auto max-w-max' />
            <h3 className='text-[24px] font-gilroyBold font-normal'>One-Stop Shop for FIFO Operations</h3>
            <p className='font-ttCommonProRegular font-normal'>Our platform provides a single source of truth for companies looking to manage their FIFO transportation bookings and remote camp operations all in one place.</p>
        </div>
        <div className='flex flex-col gap-5'>
            <img src={homedomain} alt="" className='w-auto max-w-max' />
            <h3 className='text-[24px] font-gilroyBold font-normal'>Deep Domain Knowledge</h3>
            <p className='font-ttCommonProRegular font-normal'>Our team is comprised of professionals with 74+ years combined experience across the hospitality, mining, energy, corporate travel and technology industries.</p>
        </div>
        <div className='flex flex-col gap-5'>
            <img src={homedomain} alt="" className='w-auto max-w-max' />
            <h3 className='text-[24px] font-gilroyBold font-normal'>Exceptional Support</h3>
            <p className='font-ttCommonProRegular font-normal'>Our support staff is available 24/7/365 via phone, live chat, or email to support our clients spread across 15 time zones and five continents.</p>
        </div>
        <div className='flex flex-col gap-5'>
            <img src={problemsolve} alt="" className='w-auto max-w-max' />
            <h3 className='text-[24px] font-gilroyBold font-normal'>Problem Solvers</h3>
            <p className='font-ttCommonProRegular font-normal'>We work with clients to ensure their implementations accommodate the unique, and often highly complex, requirements of their remote operations.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SetsUsApart
