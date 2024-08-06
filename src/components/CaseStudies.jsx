
import '../components/SmartLodge/Testimonials.css';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './CaseStudies.css';
import { useRef } from 'react';

const CaseStudies = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-full">
        <div className="test-slider h-full w-full mt-[200px] bg-green-300">
        
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
         <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 gap-8">
                <p className="font-ttCommonProRegular text-2xl leading-[38px] text-custom-body">
                  Besides dealing with rooms and travel, Camps & Crew has become
                  an important information hub for many departments –
                  Accounting, Construction, Food Services, Housekeeping and
                  Laundry, Safety and Security are all using SmartLodge data for
                  planning and day-to-day operations.
                </p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Group Lead, Mine Site Operations
                  </h3>
                  <span className="font-ttCommonProNormal">
                    Brucejack Mine, British Columbia, Canada
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 gap-8">
                <p className="font-ttCommonProRegular text-2xl leading-[38px] text-custom-body">
                  The check in process and our housekeeping operations are
                  probably the areas where we’ve seen the greatest benefit with
                  the system. The ability to create custom charge sheets has
                  also been a game-changer for our billing department. Our time
                  to reconcile bills with paying clients has gone from a matter
                  of weeks to hours.
                </p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Workforce Accommodations Lead - Canada
                  </h3>
                  <span className="font-ttCommonProNormal">
                    Integrated Facilities Management Company
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 gap-8">
                <p className="font-ttCommonProRegular text-2xl leading-[38px] text-custom-body">
                  The system’s Batch Check Ins and Check Outs feature makes
                  managing large work crews efficient, even with changing
                  schedules and travel delays. The system has also greatly
                  helped us to simplify the admin work required to make sure
                  rooms get cleaned on time for our workers and contractors
                  staying on-site.
                </p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Camp & Hospitality Services Manager
                  </h3>
                  <span className="font-ttCommonProNormal">
                    Remote Mine Located in Western Africa
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 gap-8">
                <p className="font-ttCommonProRegular text-2xl leading-[38px] text-custom-body">
                  Besides dealing with rooms and travel, Camps & Crew has become
                  an important information hub for many departments –
                  Accounting, Construction, Food Services, Housekeeping and
                  Laundry, Safety and Security are all using SmartLodge data for
                  planning and day-to-day operations.
                </p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Group Lead, Mine Site Operations
                  </h3>
                  <span className="font-ttCommonProNormal">
                    Brucejack Mine, British Columbia, Canada
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 gap-8">
                <p className="font-ttCommonProRegular text-2xl leading-[38px] text-custom-body">
                  The check in process and our housekeeping operations are
                  probably the areas where we’ve seen the greatest benefit with
                  the system. The ability to create custom charge sheets has
                  also been a game-changer for our billing department. Our time
                  to reconcile bills with paying clients has gone from a matter
                  of weeks to hours.
                </p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Workforce Accommodations Lead - Canada
                  </h3>
                  <span className="font-ttCommonProNormal">
                    Integrated Facilities Management Company
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 gap-8">
                <p className="font-ttCommonProRegular text-2xl leading-[38px] text-custom-body">
                  The system’s Batch Check Ins and Check Outs feature makes
                  managing large work crews efficient, even with changing
                  schedules and travel delays. The system has also greatly
                  helped us to simplify the admin work required to make sure
                  rooms get cleaned on time for our workers and contractors
                  staying on-site.
                </p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Camp & Hospitality Services Manager
                  </h3>
                  <span className="font-ttCommonProNormal">
                    Remote Mine Located in Western Africa
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        <div className="w-full flex justify-center gap-4 mt-12">
        <div className="btn-prev" ref={prevRef}>         
        </div>
        <div className="btn-next" ref={nextRef}></div>
        </div>
      </Swiper>
        </div>
    </div>
  )
}

export default CaseStudies
