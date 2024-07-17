import React from 'react';
import '../HomePage/Homepage.css';


const CompanyHeader = () => {



  return (
    <div className='w-full bg-[#053347] h-[606px]'>
        <div className='main-container mx-auto'>
       <div className='flex flex-col gap-10 w-full py-[120px] items-center' data-aos="fade-up" data-aos-duration="1000">
        <div className='flex flex-col w-full gap-6 items-center'>
            <div className='text-center font-gilroyBold text-white text-[50px] leading-[60px] max-w-[1001px]' data-aos="fade-up" data-aos-duration="1000">
            A Team of Seasoned Technologists with Deep Expertise in Fly-In Fly-Out Operations
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="100"
            className='text-center font-ttCommonProRegular font-medium text-xl text-white leading-8 max-w-[804px]'>
            Our solutions enable companies in the workforce housing, mining and energy sectors to streamline the management of their FIFO travel and remote accommodations.
            </div>
        </div>
        <div className='flex gap-8 w-[411px] font-ttCommonProRegular font-semibold' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
           <button className='py-4 px-10 bg-custom-button text-black'>SPEAK TO SALES</button>
           <button  className='py-4 px-10 bg-transparent text-custom-button border-[1px] border-custom-button'>CONTACT US</button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default CompanyHeader
