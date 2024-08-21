import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller';
import { Navigation, Pagination, Controller,Scrollbar } from 'swiper/modules';
import './Testing.css';

const Testing = () => {

  const years =["2023","2022","2021","2018","2017","2016","2015","2013","2007","1997"];
  const verticalSwiperRef = useRef(null);
  const horizontalSwiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currIndex,setCurrIndex] = useState(0);

  return (
    <div className='mt-[200px] main-container mx-auto'>
     <div className='w-full flex flex-col items-center'>
     <div className="h-full w-full relative history-card overflow-hidden no-scrollbar ">
            <div className="absolute top-0 font-gilroyBold text-custom-heading text-h2 leading-[3rem] z-10 h-[60px] w-28 flex justify-center items-center">
              {years.filter((v, i) => (v ? i === currIndex : ""))}
            </div>
            <Swiper
              onSwiper={(swiper) => {
                horizontalSwiperRef.current = swiper;
              }}
              spaceBetween={10}
              scrollbar={{ draggable: true }}
              slidesPerView="auto"
              // slidesPerGroup={3}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Navigation, Controller, Pagination,Scrollbar]}
              navigation={false}
              className="h-full mt-20"
              onSlideChange={(swiper) => {
                setCurrIndex(swiper.activeIndex);
              }}
              // controller={{ control: verticalSwiperRef.current }}
              // breakpoints={{
              //   767: {
              //     slidesPerView: 2.1,
              //     spaceBetween: 10,
              //   },
              //   1064: {
              //     slidesPerView: 2.5,
              //     spaceBetween: 10,
              //   },
              //   1240: {
              //     slidesPerView: 3,
              //     spaceBetween: 10,
              //   },
              //   1400: {
              //     slidesPerView: 4,
              //     spaceBetween: 10,
              //   },
              //   1600: {
              //     slidesPerView: 4,
              //     spaceBetween: 10,
              //   },
              // }}
            >
          
              <SwiperSlide key={0}>
                <div className="slider-outer flex gap-4 h-auto">
                  <div className="flex flex-col">
                   
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
                  <div className="flex flex-col">
                   
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
                 <div className="flex flex-col">
                   
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
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div className="slider-outer w-auto flex gap-4 h-auto">
                  <div className="flex flex-col">
                   
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
                  <div className="flex flex-col">
                   
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
            </Swiper>
          </div>
     </div>
    </div>
  );
};

export default Testing;
