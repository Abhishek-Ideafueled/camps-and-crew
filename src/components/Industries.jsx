import React from 'react';
import integrated from '/integrated.jpg';
import mining from '/mining.jpg';
import oilgas from '/oil-gas.jpg';
import construction from '/construction.jpg';

const Industries = () => {
  return (
    <div className="flex flex-col py-20 px-28 gap-14">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-[40px] text-[#08425D]">Industries we serve</h2>
        <svg
          width="174"
          height="16"
          viewBox="0 0 174 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.582 0.722656L1.58201 15.7227" stroke="#344054" />
          <path d="M46.582 0.722656L36.582 15.7227" stroke="#344054" />
          <path d="M81.582 0.722656L71.582 15.7227" stroke="#344054" />
          <path d="M116.582 0.722656L106.582 15.7227" stroke="#344054" />
          <path d="M151.582 0.722656L141.582 15.7227" stroke="#344054" />
          <path d="M18.582 0.722656L8.58201 15.7227" stroke="#344054" />
          <path d="M53.582 0.722656L43.582 15.7227" stroke="#344054" />
          <path d="M88.582 0.722656L78.582 15.7227" stroke="#344054" />
          <path d="M123.582 0.722656L113.582 15.7227" stroke="#344054" />
          <path d="M158.582 0.722656L148.582 15.7227" stroke="#344054" />
          <path d="M25.582 0.722656L15.582 15.7227" stroke="#344054" />
          <path d="M60.582 0.722656L50.582 15.7227" stroke="#344054" />
          <path d="M95.582 0.722656L85.582 15.7227" stroke="#344054" />
          <path d="M130.582 0.722656L120.582 15.7227" stroke="#344054" />
          <path d="M165.582 0.722656L155.582 15.7227" stroke="#344054" />
          <path d="M32.582 0.722656L22.582 15.7227" stroke="#344054" />
          <path d="M67.582 0.722656L57.582 15.7227" stroke="#344054" />
          <path d="M102.582 0.722656L92.582 15.7227" stroke="#344054" />
          <path d="M137.582 0.722656L127.582 15.7227" stroke="#344054" />
          <path d="M172.582 0.722656L162.582 15.7227" stroke="#344054" />
          <path d="M39.582 0.722656L29.582 15.7227" stroke="#344054" />
          <path d="M74.582 0.722656L64.582 15.7227" stroke="#344054" />
          <path d="M109.582 0.722656L99.582 15.7227" stroke="#344054" />
          <path d="M144.582 0.722656L134.582 15.7227" stroke="#344054" />
        </svg>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='flex flex-col '>
            <div className='flex flex-col gap-4 p-10 rounded-t-xl border-[#63C1EC] border-t-[1px] border-r-[1px] border-l-[1px]'>
            <h3 className='text-[24px]'>Integrated Facilities Management</h3>
            <p className='text-base'>Streamline the way you manage remote camps for your clients. Achieve higher room occupancy, automate cleaning assignments, track meals, get paid faster and more. </p>
       </div>
       <img src={integrated} alt="integrated facilities managment" className='rounded-b-xl' />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4 p-10 rounded-t-xl border-[#63C1EC] border-t-[1px] border-r-[1px] border-l-[1px]'>
            <h3 className='text-[24px]'>Oil & Gas</h3>
            <p className='text-base'>Increase room or bed utilization. Simplify daily activities for every department across one or multiple camps. Manage camp room and crew travel bookings in sync.</p>
       </div>
       <img src={oilgas} alt="oil and gas image" className='rounded-b-xl' />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4 p-10 rounded-t-xl border-[#63C1EC] border-t-[1px] border-r-[1px] border-l-[1px]'>
            <h3 className='text-[24px]'>Mining</h3>
            <p className='text-base'> Discover how our technology can adapt to meet the changing needs of your project throughout its lifecycle. We offer a one-stop-shop for camp and FIFO travel management. </p>
       </div>
       <img src={mining} alt="mining image" className='rounded-b-xl' />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4 p-10 rounded-t-xl border-[#63C1EC] border-t-[1px] border-r-[1px] border-l-[1px]'>
            <h3 className='text-[24px]'>Engineering and Construction</h3>
            <p className='text-base'>Improve room utilization at your remote camps or within fixed room blocks allotted by your clients. Power your turnkey camps with best-of-breed camp management software. </p>
       </div>
       <img src={construction} alt="engineering and construction" className='rounded-b-xl' />
        </div>
      </div>
    </div>
  );
}

export default Industries
