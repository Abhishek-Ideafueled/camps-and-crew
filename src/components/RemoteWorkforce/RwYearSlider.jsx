import React, { useState } from 'react'

import { Controller, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import 'swiper/css';

const RwYearSlider = () => {

    const years =["2023","2022","2021","2018","2017","2016","2015","2013","2007","1997"];

    const [currIndex,setCurrIndex] = useState(0);

  return (
    <div className='w-full'>
        {/* <div className='flex flex-col gap-6 py-6 px-10 max-w-[389px] max-h-[533px] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4 h-[258px]'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                SMS Guest Messaging Rolls Out in the Permian Basin
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                SMS messaging enables tailored communications and real-time updates, enhancing guest experiences and bolstering safety at camp.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover'
                src="/mining-fifo-worker-checks-cell-phone.png"
                 alt="Fifo workers holds coffee and reads phone outside of camp bedroom constructed of prefabricated materials." />
                 <div className='absolute inset-0 bg-card-gradient rounded-lg h-full w-full'></div>
            </div>
        </div> */}

        <div className=''>
        <div className="h-full w-[900px] relative overflow-hidden no-scrollbar ">
            <div className="absolute top-0 bg-[#053347] font-gilroyBold text-custom-button text-h2 leading-[3rem] z-10 h-[60px] w-28 flex justify-center items-center">
              {years.filter((v, i) => (v ? i === currIndex : ""))}
            </div>
            <Swiper
            //   onSwiper={(swiper) => {
            //     horizontalSwiperRef.current = swiper;
            //   }}
              spaceBetween={50}
              scrollbar={{ draggable: true }}
              slidesPerView={3}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Navigation, Controller, Pagination,Scrollbar]}
              navigation={true}
              className="h-full"
              onSlideChange={(swiper) => {
                setCurrIndex(swiper.activeIndex);
              }}
            //   controller={{ control: verticalSwiperRef.current }}
              breakpoints={{
                767: {
                  slidesPerView: 2.1,
                  spaceBetween: 10,
                },
                1064: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                1240: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1600: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
          
              <SwiperSlide key={0}>
                <div className="slider-outer w-auto h-auto flex gap-2 max-w-max">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2023
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-1 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            August 2023
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            The company launches the ability for charter plane
                            pilots and bus drivers to check workers in as they
                            board planes or buses with EnRoute.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-6 py-6 px-10 max-w-[389px] max-h-[533px] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4 h-[258px]'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                SMS Guest Messaging Rolls Out in the Permian Basin
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                SMS messaging enables tailored communications and real-time updates, enhancing guest experiences and bolstering safety at camp.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover'
                src="/mining-fifo-worker-checks-cell-phone.png"
                 alt="Fifo workers holds coffee and reads phone outside of camp bedroom constructed of prefabricated materials." />
                 <div className='absolute inset-0 bg-card-gradient rounded-lg h-full w-full'></div>
            </div>
        </div>
                </div>
               
       
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2022
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-2 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            September 2022
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            Roster booking capabilities launch, enabling clients
                            to book rooms or travel reservations weeks or months
                            out for workers on rotating rosters.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2021
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-3 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            April 2021
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            EnRoute goes live managing FIFO travel for workers
                            at a remote mine in Western Africa--our first
                            EnRoute deployment in the region.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={3}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2018
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-4 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            July 2018
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            One of Indonesia’s premier mining companies installs
                            SmartLodge at 15+ worksite lodging facilities at a
                            large-scale mine in Indonesia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={4}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2017
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-5 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            July 2017
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            EnRoute rolls out the ability to book commercial
                            travel content, inclusive of commercial flights,
                            hotels and rental cars.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={5}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2016
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-6 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            July 2016
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            EnRoute launches and enables FIFO transportation
                            coordinators to book and manage charter air, ground
                            transportation and marine vessels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={6}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2015
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-7 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            February 2015
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            Mobile Housekeeping launches, enabling cleaners to
                            update room status from a mobile device as they
                            complete walkdowns or cleanings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={7}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2013
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-8 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            June 2013
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            Construction firm implements SmartLodge at their
                            remote camps at a hydroelectric dam construction
                            project in Manitoba, Canada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={8}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2007
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-9 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            March 2007
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            The company installs the first version of SmartLodge
                            at a remote camp serving the Canadian oil sands in
                            Fort McMurray, Alberta, Canada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={9}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      1997
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-10 w-full max-w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-full max-w-[340px] h-[405px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-2xl ">
                            June 1997
                          </span>
                          <p className="font-ttCommonProNormal text-white text-xl">
                            Camps & Crew’s parent company, Innfinity Software
                            Systems, releases a now-retired version of
                            SmartLodge for hotels properties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={10}>
                <div className="p-4 text-center"></div>
              </SwiperSlide>
              <SwiperSlide key={11}>
                <div className="p-4 text-center"></div>
              </SwiperSlide>
             
              <SwiperSlide key={12} className='hidden superxl:block'>
                <div className="p-4 text-center"></div>
              </SwiperSlide>
              {/* <SwiperSlide key={13} className='hidden xl:block'>
                <div className="p-4 text-center">gdfgdfggd</div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
    </div>
  )
}

export default RwYearSlider
