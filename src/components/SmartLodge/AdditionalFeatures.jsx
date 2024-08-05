import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { featuresArr } from './AdditionalFeaturesData';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './AdditionalFeatures.css';
import { IoIosArrowDown } from 'react-icons/io';

const AdditionalFeatures = () => {

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
    // let textBody= "Guest profile configuration is fully customizable. Track fields such as: First Name, Last Name, Company, Department, Point of Hire, Rotation, Permanent Room Assignment, Contact Info, etc. Guest profile data may be imported into SmartLodge during implementation or bi-directionally synced on an ongoing basis."

  return (
    <div className="w-full">
      <div className="main-container mx-auto flex flex-col items-center gap-[60px] py-10 lg:py-20">
        <h2 className="heading-h2 border-b-[8px] border-b-custom-button">
          Additional Features
        </h2>
        <div className="features-slider main-container">
          <Swiper 
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="3"
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
         {360:{
          slidesPerView:1,
          spaceBetween:20
         }, 

          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1240:{
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
        }
          >
           
              {featuresArr.map((item) => (
                <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-8 w-full max-w-[250px] lg:max-w-[384px]" >
                  <div>
                    <img
                      className="rounded-2xl max-w-[384px] max-h-[300px] object-cover"
                      src={item.url}
                      alt={item.alt}
                    />
                  </div>
                  <div className="flex flex-col gap-4 bg-[#F9FAFB] p-6 rounded-2xl">
                    <span className="font-ttCommonProNormal font-semibold text-custom-blue text-sm leading-[22.4px] ">
                      {item.subTitle}
                    </span>
                    <h3 className="text-2xl leading-[28px] font-gilroyBold text-custom-heading">
                      {item.title}
                    </h3>
                    <p className='font-ttCommonProRegular text-custom-body text-base leading-[25px]'>
                      {readMore === item.id
                        ? item.body
                        : `${item.body.substring(0, 150)}...`}
                    </p>

                    <div
                      onClick={()=>handleAccordionClick(item.id)}
                      className="flex justify-center cursor-pointer text-custom-body"
                    >
                     <IoIosArrowDown />
                    </div>
                  </div>
              </div>  </SwiperSlide> 
              ))}
            <div className="w-full flex justify-center gap-4 mt-12">
        <div className="btn-prev" ref={prevRef}>         
        </div>
        <div className="btn-next" ref={nextRef}></div>
        </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AdditionalFeatures
