import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TravelManifestData } from './TravelManifestDataArr';
import { Navigation } from 'swiper/modules';
import { IoIosArrowDown } from 'react-icons/io';
import 'swiper/css';
import './TravelManifest.css';

const TravelManifest = () => {

    const [readMore,setReadMore] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handleAccordionClick = (id) => {
        if (readMore === id) {
          setReadMore(null);
        } else {
          setReadMore(id);
        
        }
            };

            // TravelManifestData.map((item)=>(
            //     console.log(item.title)
            // ))

  return (
    <div className="w-full">
      <div className="main-container mx-auto py-10 lg:py-20">
        <div className="flex flex-col w-full gap-[30px] lg:gap-[60px] items-center">
          <div className="flex flex-col gap-6 items-center max-w-[959px] text-center">
            <div className="flex flex-col gap-4 max-w-[540px] items-center text-center">
              <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
                CHARTERED TRANSPORTAION
              </span>
              <h2 className="heading-h2">
                Full Control Center for Travel Manifest Management
              </h2>
              <span>
                <svg
                  width="174"
                  height="16"
                  viewBox="0 0 174 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.584 0.722656L1.58396 15.7227" stroke="#647787" />
                  <path d="M46.584 0.722656L36.584 15.7227" stroke="#647787" />
                  <path d="M81.584 0.722656L71.584 15.7227" stroke="#647787" />
                  <path
                    d="M116.584 0.722656L106.584 15.7227"
                    stroke="#647787"
                  />
                  <path
                    d="M151.584 0.722656L141.584 15.7227"
                    stroke="#647787"
                  />
                  <path d="M18.584 0.722656L8.58396 15.7227" stroke="#647787" />
                  <path d="M53.584 0.722656L43.584 15.7227" stroke="#647787" />
                  <path d="M88.584 0.722656L78.584 15.7227" stroke="#647787" />
                  <path
                    d="M123.584 0.722656L113.584 15.7227"
                    stroke="#647787"
                  />
                  <path
                    d="M158.584 0.722656L148.584 15.7227"
                    stroke="#647787"
                  />
                  <path d="M25.584 0.722656L15.584 15.7227" stroke="#647787" />
                  <path d="M60.584 0.722656L50.584 15.7227" stroke="#647787" />
                  <path d="M95.584 0.722656L85.584 15.7227" stroke="#647787" />
                  <path
                    d="M130.584 0.722656L120.584 15.7227"
                    stroke="#647787"
                  />
                  <path
                    d="M165.584 0.722656L155.584 15.7227"
                    stroke="#647787"
                  />
                  <path d="M32.584 0.722656L22.584 15.7227" stroke="#647787" />
                  <path d="M67.584 0.722656L57.584 15.7227" stroke="#647787" />
                  <path d="M102.584 0.722656L92.584 15.7227" stroke="#647787" />
                  <path
                    d="M137.584 0.722656L127.584 15.7227"
                    stroke="#647787"
                  />
                  <path
                    d="M172.584 0.722656L162.584 15.7227"
                    stroke="#647787"
                  />
                  <path d="M39.584 0.722656L29.584 15.7227" stroke="#647787" />
                  <path d="M74.584 0.722656L64.584 15.7227" stroke="#647787" />
                  <path d="M109.584 0.722656L99.584 15.7227" stroke="#647787" />
                  <path
                    d="M144.584 0.722656L134.584 15.7227"
                    stroke="#647787"
                  />
                </svg>
              </span>
            </div>
            <p className='sub-heading'>
            Access a robust feature set that provides increased visibility and control over your passenger manifests.
             EnRoute enables your team to log no-shows and go-shows, add or remove passengers from manifests, re-route passengers, and more.
            </p>
          </div>
          <div className='travel-slider main-container'>
          <Swiper 
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          observer={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        breakpoints={
         {340:{
          slidesPerView:1,
          spaceBetween:20
         }, 

          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1240:{
            slidesPerView: 3,
            spaceBetween: 20
          },
          1840:{
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
        }
          >
           
              {TravelManifestData.map((item) => (
                <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-8 w-full" >
                  <div className='w-full max-h-fit'>
                    <img
                      className="rounded-2xl w-full h-full max-h-[300px] md:max-h-[280px]  lg:min-h-[258px] lg:max-h-[287px] xl:min-h-[300px] object-cover"
                      src={item.url}
                      alt={item.alt}
                    />
                  </div>
                  <div className="flex flex-col justify-between bg-[#F9FAFB] p-6 rounded-2xl w-full h-full max-h-max min-h-[282px] lg:min-h-[351px] xl:min-h-[282px]">
                   <div className='flex flex-col gap-4'>
                    <h3 className="text-2xl leading-[28px] font-gilroyBold text-custom-heading">
                      {item.title}
                    </h3>
                    <p className='font-ttCommonProRegular text-custom-body text-base leading-[25px]'>
                      {readMore === item.id
                        ? item.body
                        : `${item.body.substring(0, 150)}...`}
                    </p>
                    </div>
                    <div
                      onClick={()=>handleAccordionClick(item.id)}
                      className="flex justify-center cursor-pointer text-custom-body"
                    >
                      <span 
                      className={`${readMore === item.id ? 'rotate-180 transition-all duration-500' : 'transition-all duration-300'} w-[24px] h-[24px]`}
                      ><IoIosArrowDown className='' /></span>
                     
                    </div>
                  </div>

              </div>  </SwiperSlide> 
              ))}
            <div className="w-full flex justify-center gap-4 lg:mt-4">
        <div className="btn-prev" ref={prevRef}>         
        </div>
        <div className="btn-next" ref={nextRef}></div>
        </div>
          </Swiper>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default TravelManifest
