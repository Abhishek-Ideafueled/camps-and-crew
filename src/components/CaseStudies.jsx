import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import { Navigation, Pagination, Controller } from 'swiper/modules';

// SwiperCore.use([Navigation, Pagination, Controller]);

const CaseStudies = () => {
  const verticalSwiperRef = useRef(null);
  const horizontalSwiperRef = useRef(null);

  // const years = Array.from({ length: 11 }, (_, i) => 2023 - i);

  const years =["2023","2022","2021","2018","2017","2016","2015","2013","2007","1997"];
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
    <div className="flex h-screen mt-80">
      <div className="w-1/5 history-year h-[400px] font-ttCommonProRegular text-xl text-custom-gray leading-8">
      <Swiper
  direction="vertical"
  onSwiper={(swiper) => {
    verticalSwiperRef.current = swiper;
  }}
  spaceBetween={10}
  slidesPerView={8}
  mousewheel={true}
  modules={[Navigation, Controller, Pagination]}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  className="h-full"
  controller={{ control: horizontalSwiperRef.current }}
>
           {years.map((year, index) => (
            <SwiperSlide key={index} onClick={() => handleVerticalSlideClick(index)}>
              <div className="py-4 text-center cursor-pointer">{year}</div>
            </SwiperSlide>
          ))}
           {/* <SwiperSlide key={0} onClick={() => handleVerticalSlideClick(0)}>
                <div className="cursor-pointer">2023</div>
              </SwiperSlide>
              <SwiperSlide key={1} onClick={() => handleVerticalSlideClick(1)}>
                <div className="cursor-pointer">2022</div>
              </SwiperSlide>
              <SwiperSlide key={2} onClick={() => handleVerticalSlideClick(2)}>
                <div className="cursor-pointer">2021</div>
              </SwiperSlide>
              <SwiperSlide key={3} onClick={() => handleVerticalSlideClick(3)}>
                <div className="cursor-pointer">2018</div>
              </SwiperSlide>
              <SwiperSlide key={4} onClick={() => handleVerticalSlideClick(4)}>
                <div className="cursor-pointer">2017</div>
              </SwiperSlide>
              <SwiperSlide key={5} onClick={() => handleVerticalSlideClick(5)}>
                <div className="cursor-pointer">2016</div>
              </SwiperSlide>
              <SwiperSlide key={6} onClick={() => handleVerticalSlideClick(6)}>
                <div className="cursor-pointer">2015</div>
              </SwiperSlide>
              <SwiperSlide key={7} onClick={() => handleVerticalSlideClick(7)}>
                <div className="cursor-pointer">2013</div>
              </SwiperSlide>
              <SwiperSlide key={8} onClick={() => handleVerticalSlideClick(8)}>
                <div className="cursor-pointer">2007</div>
              </SwiperSlide>
              <SwiperSlide key={9} onClick={() => handleVerticalSlideClick(9)}>
                <div className="cursor-pointer">1997</div>
              </SwiperSlide> */}
          <SwiperSlide key={10} onClick={() => handleVerticalSlideClick(10)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            <SwiperSlide key={11} onClick={() => handleVerticalSlideClick(11)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            <SwiperSlide key={12} onClick={() => handleVerticalSlideClick(12)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            <SwiperSlide key={13} onClick={() => handleVerticalSlideClick(13)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            <SwiperSlide key={14} onClick={() => handleVerticalSlideClick(14)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            <SwiperSlide key={15} onClick={() => handleVerticalSlideClick(15)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            <SwiperSlide key={16} onClick={() => handleVerticalSlideClick(16)}>
              <div className="cursor-pointer">{""}</div>
            </SwiperSlide>
            
        </Swiper>
      </div>

      <div className="w-4/5 h-full relative history-card">
      <div className="absolute top-0 bg-[#053347] font-gilroyBold text-custom-button text-h2 leading-[3rem] z-10 h-[60px] w-28 flex justify-center items-center">
              {years.filter((v, i) => (v ? i === currIndex : ""))}
            </div>
      <Swiper
  onSwiper={(swiper) => {
    horizontalSwiperRef.current = swiper;
  }}
  spaceBetween={50}
  scrollbar={{draggable:true}}
  slidesPerView={3}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation, Controller, Pagination]}
  navigation={true}
  className="h-full"
  onSlideChange={(swiper) => {
    setCurrIndex(swiper.activeIndex);
  }}
  controller={{ control: verticalSwiperRef.current }}
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
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                1600: {
                  slidesPerView: 3.8,
                  spaceBetween: 10,
                },
              }}
             
        >
          {/* {years.map((year, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">{year}</h2>
                <div className="card p-6 bg-gray-100 rounded-lg shadow-md">
                  Card Content for {year}
                </div>
              </div>
            </SwiperSlide>
          ))} */}
          <SwiperSlide key={0}>
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2023
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-1 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                <div className="slider-outer w-auto h-auto">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2022
                    </h2>
                    <div className="relative">
                      <div className="absolute bg-cover bg-history-2 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-3 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-4 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-5 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-6 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-7 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-8 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-9 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
                      <div className="absolute bg-cover bg-history-10 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="w-[340px] h-[405px]">
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
              <div className="p-4 text-center">
                
              </div>
            </SwiperSlide>
            <SwiperSlide key={11}>
              <div className="p-4 text-center">
                
                
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudies;
