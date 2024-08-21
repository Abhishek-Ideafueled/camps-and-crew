import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller';
import { Navigation, Pagination, Controller,Scrollbar } from 'swiper/modules';
import './Testing.css';

const Testing = () => {

  const years =["2024","2024","2024","2022","2020","2020","2019","2019","2018","2017","2016","2015","2014","2013"];
  const verticalSwiperRef = useRef(null);
  const horizontalSwiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currIndex,setCurrIndex] = useState(0);

  useEffect(() => {
    if (verticalSwiperRef.current && horizontalSwiperRef.current) {
      verticalSwiperRef.current.controller.control = horizontalSwiperRef.current;
      horizontalSwiperRef.current.controller.control = verticalSwiperRef.current;
    }
  }, [verticalSwiperRef, horizontalSwiperRef]);

  const handleVerticalSlideClick = (index) => {
    if (horizontalSwiperRef.current) {
      horizontalSwiperRef.current.slideTo(index);
    }
  };

  return (
    <div className='mt-[200px]'>
     <div className='w-full items-center relative'>
      <div
                ref={nextRef}
                className="absolute top-[50%] cursor-pointer right-0 -rotate-90 button-next w-12 h-5 z-10 bg-white flex items-center justify-center"
              >
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L7.5 7L13.5 1"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                ref={prevRef}
                className="absolute top-[50%] left-0 cursor-pointer rotate-90 button-next w-12 h-5 z-10 bg-white flex items-center justify-center"
              >
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L7.5 7L13.5 1"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
     <div className="main-container mx-auto relative history-card overflow-hidden no-scrollbar ">
            <div className="absolute top-0 font-gilroyBold text-custom-heading text-h2 leading-[3rem] z-10 h-[60px] w-28 flex justify-center items-center">
              {years.filter((v, i) => (v ? i === currIndex : ""))}
            </div>
            <Swiper
              onSwiper={(swiper) => {
                horizontalSwiperRef.current = swiper;
              }}
              spaceBetween={10}
              // scrollbar={{ draggable: true }}
              slidesPerView={2.5}
              // slidesPerGroup={3}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Navigation, Controller, Pagination,Scrollbar]}
              // navigation={true}
              className="h-full mt-20"
              onSlideChange={(swiper) => {
                setCurrIndex(swiper.activeIndex);
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              // controller={{ control: verticalSwiperRef.current }}
              breakpoints={{
                767: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                // 1400: {
                //   slidesPerView: 3,
                //   spaceBetween: 10,
                // },
              }}
            >
          
              <SwiperSlide key={0}>
                <div className="slider-outer h-[559px]">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max border-[1px] border-[#D0D5DD] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                SMS Guest Messaging Rolls Out in the Permian Basin
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-sm sm:text-base '>
                SMS messaging enables tailored communications and real-time updates, enhancing guest experiences and bolstering safety at camp.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover h-full w-full'
                src="/mining-fifo-worker-checks-cell-phone.png"
                 alt="Fifo workers holds coffee and reads phone outside of camp bedroom constructed of prefabricated materials." />
                 <div className='absolute inset-0 bg-card-gradient rounded-lg w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
              <div className="slider-outer h-[559px]">
              <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max border-[1px] border-[#D0D5DD] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                Digital Role Call Streamlines Response During Muster Events
                </div>
                <div className='font-ttCommonProRegular text-custom-body sm:text-base text-sm'>
                Camp staff can take roll call digitally via mobile devices during musters, ensuring quick accounting of all personnel and swift evacuation, if required.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full'
                src="/camp-staff-member-takes-roll-call-muster-event.png"
                 alt="Camp management company staff reviews ipad in remote camp setting." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2}>
              <div className="slider-outer h-[559px]">
                   
              <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max border-[1px] border-[#D0D5DD] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-heading rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-white font-base leading-[18px] font-normal'>
               Major Update
                </div> 
                <div className='card-heading'>
                Custom Reservation Screens Expedite Training of New Users
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                A customizable reservation screen interface was first introduced at an Indonesian mining project, making booking rooms and training faster than ever.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full'
                src="/indonesia-office-worker-views-computer.png"
                 alt="Front desk receptionist at mining housing facilities studies computer screen." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                 </div>
              </SwiperSlide>
              <SwiperSlide key={3}>
                <div className="slider-outer h-[559px]">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max border-[1px] border-[#D0D5DD] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                Mobile Check-In Further Speeds Up Arrival Process
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                Mobile check-in rolls out in Alberta, allowing guests to pre-register via email, reducing wait times and easing front desk workloads during group arrivals.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full max-h-[260px]'
                src="/fifo-worker-checks-phone-riding-bus.jpg"
                 alt="Front desk receptionist at mining housing facilities studies computer screen." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                 
                </div>
              </SwiperSlide>
              <SwiperSlide key={4}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max border-[1px] border-[#D0D5DD] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                Automated Bookings for FIFO Workers on Roster Rotations
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                This feature automates bookings for rotational workers, reducing administrative tasks and ensuring essential personnel are on-site when required.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/fifo-workers-walk-path-remote-mining-camp.png"
                 alt="FIFO workers in personal protective equipment walk alongside camp buildings in desert setting." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={5}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max border-[1px] border-[#D0D5DD] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
                <div className='flex flex-col gap-4'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                Approval Workflows Facilitate Bookings for a Canadian Mine
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                Customizable approval workflows ensure compliance and streamline the reservation process for large organizations booking FIFO travel or rooms.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/mining-crews-watches-bulldozer-open-pit-mine.png"
                 alt="Mining workers look on to bulldozer in open pit mine." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={6}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                Cleaning Teams Use Mobile Devices to Manage Daily Tasks
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                Cleaning and camp maintenance is streamlined with mobile devices, enabling swift occupancy checks, task delegation, and maintenance ticket creation.
                </div>
            </div>
            <div className='relative w-full h-[260px]'>
                <img 
                className='rounded-lg object-cover w-full h-[260px]'
                src="/housekeeper-studies-tablet-worker-room.jpg"
                 alt="Camp attendant reads ipad inside bedroom at a remote mining camp." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={7}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
               <div className='bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Integration
                </div> 
                <div className='card-heading'>
                Dining App Showcases Catering Options and Tracks Orders
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                The system integrates into a propriety app that allows guests to view menus and pre-order meals, streamlining daily food service and billing for meals.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/guest-orders-food-mobile-phone.png"
                 alt="Person orders food on mobile application displaying multiple menu items." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={8}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
            <div className='bg-custom-heading rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-white font-base leading-[18px] font-normal'>
               Major Update
                </div> 
                <div className='card-heading'>
                Permanent Room Assignments Hold Rooms for FIFO Workers
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base '>
                This update enables users to create permanent room assignments for rotational workers--first leveraged by users at a Canadian oil sands camps.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/fifo-camp-bedroom-briefcase-bed.png"
                 alt="Vacant bedroom with a bag placed on bed in a remote FIFO camp." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={9}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
            <div className='bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
              Integration
                </div> 
                <div className='card-heading'>
                Integration with Energy Mgmt. System Lowers Operating Costs
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                The first integration with an energy management system rolls out in 2017, reducing energy costs for a camp services provider located in the Nordics.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/mechanical-aparatus-room.png"
                 alt="Mechanical room at a remote workforce lodging site." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={10}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
            <div className='bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
              Integration
                </div> 
                <div className='card-heading'>
                SmartLodge Integrates into First HRIS System via API
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base '>
                The Engineering team rolls out an API integration with an enterprise HR system, ensuring accurate profile data management and seamless flow of data.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/fifo-workers-ppe-talking.png"
                 alt="FIFO workers in uniform chat among each other during sunny day." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={11}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
            <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div>
                <div className='card-heading'>
                Kiosk Check In Drastically Reduces Check In Wait Times
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                Self-service kiosks streamline check-in at a lodge in Western Canada, offering immediate key activation and a seamless arrival experience for camp guests.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/kiosk-check-in-process-fifo-workers.png"
                 alt="Camp residents complete kiosk check-in at lobby of a remote fly-in fly-out camp." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={12}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
            <div className='bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Integration
                </div>
                <div className='card-heading'>
                Direct Key System Integration Enhances Check In and Billing
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base '>
                This integration powers automatic key activation during check-in and tracks all key swipes across camp to produce a precise tally of billable meals.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/woman-taps-card-room-access.png"
                 alt="Female workers taps keycard to enter bedroom at remote camp." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={13}>
                <div className="slider-outer w-auto h-auto">
                <div className='flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white border-[1px] border-[#D0D5DD] shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4'>
            <div className='bg-custom-heading rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-white font-base leading-[18px] font-normal'>
               Major Update
                </div> 
                <div className='card-heading'>
                Multi-Site Management for Hotels and Camps
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                Originally developed for hotels in 2007 and adapted for camps, this update allows efficient management of multiple camps from a single system.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover w-full h-auto'
                src="/large-remote-camp-winter-fort-mcmurray.png"
                 alt="Aerial view of a remote workforce housing site in a winter setting." />
                 <div className='absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={14}>
                <div className="p-4 text-center"></div>
              </SwiperSlide>
              <SwiperSlide key={15} >
                <div className="p-4 text-center"></div>
              </SwiperSlide>
             
              {/* <SwiperSlide key={16} className='hidden superxl:block'>
                <div className="p-4 text-center"></div>
              </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="w-auto my-[17px] rw-year-nav h-auto font-ttCommonProRegular text-xl text-custom-gray leading-8">
            
            <Swiper
              direction="horizontal"
              onSwiper={(swiper) => {
                verticalSwiperRef.current = swiper;
              }}
              spaceBetween={10}
              
              slidesPerView={10}
              mousewheel={true}
              modules={[Navigation, Controller, Pagination]}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              className="h-full"
              controller={{ control: horizontalSwiperRef.current }}
              // onInit={(swiper) => {
              //   swiper.params.navigation.prevEl = prevRef.current;
              //   swiper.params.navigation.nextEl = nextRef.current;
              //   swiper.navigation.init();
              //   swiper.navigation.update();
              // }}
              // navigation={{
              //   enabled:true
              // }}
            >
             
              {years.map((year, index) => (
              <SwiperSlide
                  key={index}
                  onClick={() => handleVerticalSlideClick(index)}
                  className={`${ year - years[index-1]!==0? "":"hidden"} `}
                >
                  <div className={`py-4 swiper-no-swiping text-center cursor-pointer font-ttCommonProRegular ${year === years[currIndex] ? "font-semibold text-[#10688E]" :""} text-[#3D7F9E]`}>{ year} </div>
                </SwiperSlide>
              ))}

              {/* <SwiperSlide
                key={10}
                onClick={() => handleVerticalSlideClick(10)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide>
              <SwiperSlide
                key={11}
                onClick={() => handleVerticalSlideClick(11)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide>
              <SwiperSlide
                key={12}
                onClick={() => handleVerticalSlideClick(12)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide>
              <SwiperSlide
                key={13}
                onClick={() => handleVerticalSlideClick(13)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide>
              <SwiperSlide
                key={14}
                onClick={() => handleVerticalSlideClick(14)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide>
              <SwiperSlide
                key={15}
                onClick={() => handleVerticalSlideClick(15)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide>
              <SwiperSlide
                key={16}
                onClick={() => handleVerticalSlideClick(16)}
              >
                <div className="cursor-pointer">{""}</div>
              </SwiperSlide> */}
              {/* <div
                ref={nextRef}
                className="absolute top-5 right-0 -rotate-90 button-next w-12 h-5 z-10 bg-transparent flex items-center justify-center"
              >
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L7.5 7L13.5 1"
                    stroke="#CAD5DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div> */}
            </Swiper>
            
          </div>   
     </div>
    </div>
  );
};

export default Testing;
