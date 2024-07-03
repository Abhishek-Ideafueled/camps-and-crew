import React from 'react';
import problemsolve from '/problem-solve.png';
import homedomain from '/home-domain.png';
import homeflexible from '/home-flexible.png';
import homeone from '/home-one.png';
import cuttingedge from '/cutting-edge.png';

const SetsUsApart = () => {
  return (
    <div className='flex flex-col bg-[#053347] px-28 py-20 text-white '>
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-[40px]'>What Sets Us Apart</h1>
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
        <div className='flex flex-col'>
            <img src={cuttingedge} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SetsUsApart
