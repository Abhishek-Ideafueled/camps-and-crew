import React, { useState } from 'react';
import integrated from '/integrated.jpg';
import mining from '/mining.jpg';
import oilgas from '/oil-gas.jpg';
import construction from '/construction.jpg';
import '../HomePage/Homepage.css';
import Slider from 'react-slick';

const Industries = () => {

const settings=
  {
    dots: false,
    autoplay:true,
    speed:1000,
    autoplaySpeed:2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    swipeToSlide: false,
  };

  return (
    <div className="main-container mx-auto">
      <div className='flex flex-col gap-14 py-10 md:py-14 lg:py-20 '>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 
        data-aos="fade-down" data-aos-duration="1000"
        className="text-[25px] sm:text-[30px] md:text-[32px] lg:text-[40px] text-custom-heading font-gilroyBold font-bold leading-[3rem]">
          Industries We Serve</h2>
        <div data-aos="fade-up" data-aos-duration="1000" 
         data-aos-delay="100"
         >
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
        </svg></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto md:max-w-[696px] lg:max-w-full' >
        <div className='flex flex-col h-full justify-between max-w-[584px] hover:shadow-custom-shadow border-[#D0D5DD] border-[1px] rounded-3xl'  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className='flex flex-col gap-2 lg:gap-4  p-6 lg:p-10 '>
            <h3 className='text-lg md:text-xl md:leading-6 lg:text-[24px] font-gilroyBold text-custom-heading font-normal lg:leading-7'>

      <Slider {...settings}>
        <div>Integrated Facilities Management</div>
        <div>Camp Catering Companies</div>
        <div>Workforce Accomodation Providers</div>
      </Slider>
            </h3>
            <p className='text-sm lg:text-base font-ttCommonProNormal text-custom-body font-normal lg:leading-[1.6rem]'>Streamline the way you manage remote camps for your clients. Achieve higher room occupancy, automate cleaning assignments, track meals, get paid faster and more. </p>
       </div>
       <img src={integrated} alt="integrated facilities managment" className='rounded-b-3xl' />
       {/* <div className='bg-integrated-img rounded-b-xl bg-center min-h-[300px]'></div> */}
        </div>
        <div className='flex flex-col h-full justify-between max-w-[584px] hover:shadow-custom-shadow border-[#D0D5DD] border-[1px] rounded-3xl' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className='flex flex-col gap-2 lg:gap-4  p-6 lg:p-10'>
            <h3 className='text-lg md:text-xl md:leading-6 lg:text-[24px] font-gilroyBold text-custom-heading font-normal lg:leading-7'>Oil & Gas</h3>
            <p className='text-sm lg:text-base font-ttCommonProNormal text-custom-body lg:leading-[1.6rem] font-normal'>Increase room or bed utilization. Simplify daily activities for every department across one or multiple camps. Manage camp room and crew travel bookings in sync.</p>
       </div>
       <img src={oilgas} alt="oil and gas image" className='rounded-b-3xl' />
       {/* <div className='bg-oil-gas rounded-b-xl bg-center min-h-[300px]'></div> */}
        </div>
        <div className='flex flex-col h-full justify-between max-w-[584px] hover:shadow-custom-shadow border-[#D0D5DD] border-[1px] rounded-3xl' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className='flex flex-col gap-2 lg:gap-4 p-6 lg:p-10 '>
            <h3 className='text-lg md:text-xl md:leading-6 lg:text-[24px] font-gilroyBold text-custom-heading font-normal lg:leading-7'>Mining</h3>
            <p className='text-sm lg:text-base font-ttCommonProNormal text-custom-body lg:leading-[1.6rem] font-normal'> Discover how our technology can adapt to meet the changing needs of your project throughout its lifecycle. We offer a one-stop-shop for camp and FIFO travel management. </p>
       </div>
       <img src={mining} alt="mining image" className='rounded-b-3xl' />
       {/* <div className='bg-mining rounded-b-xl bg-center min-h-[300px]'></div> */}
        </div>
        <div className='flex flex-col h-full justify-between max-w-[584px] hover:shadow-custom-shadow border-[#D0D5DD] border-[1px] rounded-3xl' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className='flex flex-col gap-2 lg:gap-4 p-6 lg:p-10'>
            <h3 className='text-lg md:text-xl md:leading-6 lg:text-[24px] font-gilroyBold text-custom-heading font-normal lg:leading-7'>Engineering & Construction</h3>
            <p className='text-sm lg:text-base font-ttCommonProNormal text-custom-body lg:leading-[1.6rem] font-normal'>Improve room utilization at your remote camps or within fixed room blocks allotted by your clients. Power your turnkey camps with best-of-breed camp management software. </p>
       </div>
       <img src={construction} alt="engineering and construction" className='rounded-b-3xl' />
       {/* <div className='bg-construction rounded-b-xl bg-center min-h-[300px]'></div> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Industries
