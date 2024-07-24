import Slider from 'react-slick';
// import './CompanyHistory.css';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import './HistoryDemo.css';
import 'swiper/css/scrollbar';
import HistoryCards from './HistoryCards';

const Historydemo = () => {
  // const [endofSlide,setEndOfSlide] = useState(false);
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  const swiper1Ref = useRef();
  const swiper2Ref = useRef();

  const arr=["2023","2022","2021","2018","2017","2016","2015","2013","2007","1997"]

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currIndex,setCurrIndex] = useState(0);

  useEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, []);


  
  // const [pix,setPix] = useState();

  // useEffect(()=>{
    
  //   window.addEventListener('resize',()=>{
  //     let n;
  //     if(window.innerWidth < 900)
  //     {
  //       n= (window.innerWidth - 100) 
  //     }
      
  //     setPix(n);
  //   })

  //   return ()=>{
  //     window.removeEventListener('resize');
  //   }
  // },[])


  const [marginLeft, setMarginLeft] = useState('0px');
  const containerRef = useRef(null);
  const slidersRef = useRef([]);

  useEffect(() => {
    const updateDivsMargins = () => {
      if (containerRef.current) {
        const newMarginLeft = window.getComputedStyle(containerRef.current).marginLeft;
        setMarginLeft(newMarginLeft);
      }
    };

    if (window.innerWidth > 300) {
      updateDivsMargins();
      window.addEventListener('resize', updateDivsMargins);
    }

    return () => {
      window.removeEventListener('resize', updateDivsMargins);
    };
  }, []);

  useEffect(() => {
    slidersRef.current.forEach(slider => {
      if (slider) {
        slider.style.marginLeft = marginLeft;
      }
    });
  }, [marginLeft]);

  return (
    <div className="w-full bg-[#053347]">
      <div className=" flex flex-col gap-[60px] py-10 lg:py-20 w-full">
        <div className="main-container mx-auto flex flex-col gap-6 items-center" ref={containerRef}>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="font-gilroyBold text-[25px] md:text-[32px] lg:text-h2 lg:leading-[3rem] text-white">
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
          <span className="font-ttCommonProNormal font-medium text-lg leading-7 text-center max-w-[892px] text-white">
            Discover the milestones that have shaped our journey in developing
            robust solutions for remote FIFO operations. Below you can read more
            about the product launches and major feature releases we unveiled
            along the way.
          </span>
        </div>
        <div 
        // style={{marginLeft:pix}}
         ref={(el) => slidersRef.current[0] = el} className={`slider__larger hidden md:flex md:justify-center md:items-center w-auto gap-4`}>
          <div className=" history-nav font-ttCommonProRegular text-xl text-custom-gray leading-8">
            <Swiper
              noSwiping={true}
              slidesPerView="8"
              spaceBetween={5}
              mousewheel={false}
              direction="vertical"
              modules={[Navigation, Controller, Pagination]}
              pagination={{
                clickable: true,
              }}
              observer={true}
              navigation={true}
              onSwiper={(swiper) => {
                swiper1Ref.current = swiper;
              }}
              slideToClickedSlide={true}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              onSlideChange={(swiper) => {
                setCurrIndex(swiper.activeIndex);
              }}
            >
              <div
                className="absolute top-0 left-5 button-previous bg-[#053347] z-10 w-12 h-10 flex items-center justify-center"
                ref={prevRef}
              >
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 7L7.5 1L1.5 7"
                    stroke="#CAD5DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <SwiperSlide>
                <div className="cursor-pointer">2023</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2022</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2021</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2018</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2017</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2016</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2015</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2013</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">2007</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer">1997</div>
              </SwiperSlide>
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
              {/* <div className="w-full flex justify-center gap-4 mt-12">
        <div className="btn-prev" ref={prevRef}>        
        </div>
        <div className="btn-next" ref={nextRef}></div>
        </div> */}
              <div
                ref={nextRef}
                className="absolute bottom-0 left-4 button-next w-12 h-10 z-10 bg-[#053347] flex items-center justify-center"
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
              </div>
            </Swiper>
          </div>
          <div className="relative history-card overflow-x-auto no-scrollbar">
            <div className="absolute top-0 bg-[#053347] font-gilroyBold text-custom-button text-h2 leading-[3rem] z-10 h-[60px] w-28 flex justify-center items-center">
              {arr.filter((v, i) => (v ? i === currIndex : ""))}
            </div>
            <Swiper
              modules={[Navigation, Controller, Pagination, Scrollbar]}
              spaceBetween={20}
              slidesPerView="auto"
              pagination={{
                clickable: true,
              }}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
              }}
              observer={true}
              scrollbar={{ draggable: true }}
              // breakpoints={{
              //   767: {
              //     slidesPerView: 2,
              //     spaceBetween: 10,
              //   },
              //   1000: {
              //     slidesPerView: 2,
              //     spaceBetween: 10,
              //   },
              //   1240: {
              //     slidesPerView: 3,
              //     spaceBetween: 20,
              //   },
              // }}
            >
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide>
                <div className="slider-outer w-[340px] h-[469px]">
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
              <SwiperSlide className='hidden '>
   <div className=" slider-outer w-[340px] h-[469px]">
    </div>
   </SwiperSlide>
   {/* <SwiperSlide>
   <div className="slider-outer w-[340px] h-[469px]">
    </div>
   </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        <div className='md:hidden main-container mx-auto'>
              <HistoryCards/>
        </div>
      </div>
    </div>
  );
}

export default Historydemo
