import React from 'react'
import Slider from 'react-slick';

const CompanyHistory = () => {

  const settings = {
    dots: false,
    fade: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover:false,
    // responsive: [
    //     {
    //       breakpoint: 1600,
    //       settings: {
    //         slidesToShow:3.5,
    //       },
    //     },
    //     {
    //       breakpoint: 1199,
    //       settings: {
    //         slidesToShow: 2.2,
    //       },
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //       },
    //     }
    //   ],
  };

  return (
    <div className="w-full bg-[#053347]">
      <div className="main-container mx-auto flex flex-col gap-[60px] py-10 lg:py-20 w-full">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="font-gilroy font-bold text-h2 text-white">
              Company History
            </h1>
            <div className="">
              <svg
                width="174"
                height="16"
                viewBox="0 0 174 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.584 0.722656L1.58396 15.7227" stroke="white" />
                <path d="M46.584 0.722656L36.584 15.7227" stroke="white" />
                <path d="M81.584 0.722656L71.584 15.7227" stroke="white" />
                <path d="M116.584 0.722656L106.584 15.7227" stroke="white" />
                <path d="M151.584 0.722656L141.584 15.7227" stroke="white" />
                <path d="M18.584 0.722656L8.58396 15.7227" stroke="white" />
                <path d="M53.584 0.722656L43.584 15.7227" stroke="white" />
                <path d="M88.584 0.722656L78.584 15.7227" stroke="white" />
                <path d="M123.584 0.722656L113.584 15.7227" stroke="white" />
                <path d="M158.584 0.722656L148.584 15.7227" stroke="white" />
                <path d="M25.584 0.722656L15.584 15.7227" stroke="white" />
                <path d="M60.584 0.722656L50.584 15.7227" stroke="white" />
                <path d="M95.584 0.722656L85.584 15.7227" stroke="white" />
                <path d="M130.584 0.722656L120.584 15.7227" stroke="white" />
                <path d="M165.584 0.722656L155.584 15.7227" stroke="white" />
                <path d="M32.584 0.722656L22.584 15.7227" stroke="white" />
                <path d="M67.584 0.722656L57.584 15.7227" stroke="white" />
                <path d="M102.584 0.722656L92.584 15.7227" stroke="white" />
                <path d="M137.584 0.722656L127.584 15.7227" stroke="white" />
                <path d="M172.584 0.722656L162.584 15.7227" stroke="white" />
                <path d="M39.584 0.722656L29.584 15.7227" stroke="white" />
                <path d="M74.584 0.722656L64.584 15.7227" stroke="white" />
                <path d="M109.584 0.722656L99.584 15.7227" stroke="white" />
                <path d="M144.584 0.722656L134.584 15.7227" stroke="white" />
              </svg>
            </div>
          </div>
          <span className='font-ttCommonProNormal font-medium text-lg leading-7 text-white'>
Discover the milestones that have shaped our journey in developing robust solutions for remote FIFO operations. Below you can read more about the product launches and major feature releases we unveiled along the way.
</span>

        </div>
        <div className='history-cards'>
        <Slider{...settings} >
        <div className='slider-outer'>
          <div className='relative'>
        <div className='absolute inset-0 bg-history-1 w-full h-auto bottom-0'></div>
        {/* <img src="/fifo-travelers-wait-to-board-charter-plane.jpg" alt="" /> */}
          </div>

        </div>
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default CompanyHistory
