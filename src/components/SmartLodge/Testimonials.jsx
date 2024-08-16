
import './Testimonials.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';

const Testimonials = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);


  return (
    <div className="w-full">
      <div className="main-containter mx-auto py-10 lg:py-20">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="heading-h2">Words from our Clients</h2>
          <span>
            <svg
              width="174"
              height="17"
              viewBox="0 0 174 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7320_6442)">
                <path d="M11.584 0.847656L1.58396 15.8477" stroke="#647787" />
                <path d="M46.584 0.847656L36.584 15.8477" stroke="#647787" />
                <path d="M81.584 0.847656L71.584 15.8477" stroke="#647787" />
                <path d="M116.584 0.847656L106.584 15.8477" stroke="#647787" />
                <path d="M151.584 0.847656L141.584 15.8477" stroke="#647787" />
                <path d="M18.584 0.847656L8.58396 15.8477" stroke="#647787" />
                <path d="M53.584 0.847656L43.584 15.8477" stroke="#647787" />
                <path d="M88.584 0.847656L78.584 15.8477" stroke="#647787" />
                <path d="M123.584 0.847656L113.584 15.8477" stroke="#647787" />
                <path d="M158.584 0.847656L148.584 15.8477" stroke="#647787" />
                <path d="M25.584 0.847656L15.584 15.8477" stroke="#647787" />
                <path d="M60.584 0.847656L50.584 15.8477" stroke="#647787" />
                <path d="M95.584 0.847656L85.584 15.8477" stroke="#647787" />
                <path d="M130.584 0.847656L120.584 15.8477" stroke="#647787" />
                <path d="M165.584 0.847656L155.584 15.8477" stroke="#647787" />
                <path d="M32.584 0.847656L22.584 15.8477" stroke="#647787" />
                <path d="M67.584 0.847656L57.584 15.8477" stroke="#647787" />
                <path d="M102.584 0.847656L92.584 15.8477" stroke="#647787" />
                <path d="M137.584 0.847656L127.584 15.8477" stroke="#647787" />
                <path d="M172.584 0.847656L162.584 15.8477" stroke="#647787" />
                <path d="M39.584 0.847656L29.584 15.8477" stroke="#647787" />
                <path d="M74.584 0.847656L64.584 15.8477" stroke="#647787" />
                <path d="M109.584 0.847656L99.584 15.8477" stroke="#647787" />
                <path d="M144.584 0.847656L134.584 15.8477" stroke="#647787" />
              </g>
              <defs>
                <clipPath id="clip0_7320_6442">
                  <rect
                    width="173"
                    height="16"
                    fill="white"
                    transform="translate(0.5 0.125)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <div className="testimonials-slider w-full">
<Swiper
        slidesPerView="auto"
        spaceBetween={20}
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
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 sm:gap-8 justify-between sm:justify-start">
                <p className="font-ttCommonProRegular text-start text-lg md:text-xl md:leading-6 lg:text-2xl lg:leading-[38px] text-custom-body">
                  Besides dealing with rooms and travel, Camps & Crew has become
                  an important information hub for many departments –
                  Accounting, Construction, Food Services, Housekeeping and
                  Laundry, Safety and Security are all using SmartLodge data for
                  planning and day-to-day operations.
                </p>
                <div className="flex flex-col gap-[7px] max-h-[100px] text-start">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Group Lead, Mine Site Operations
                  </h3>
                  <span className="font-ttCommonProNormal text-base leading-[25px]">
                    Brucejack Mine, British Columbia, Canada
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 sm:gap-8 justify-between sm:justify-start">
                <p className="font-ttCommonProRegular text-start text-lg md:text-xl md:leading-6 lg:text-2xl lg:leading-[38px] text-custom-body">
                  The check in process and our housekeeping operations are
                  probably the areas where we’ve seen the greatest benefit with
                  the system. The ability to create custom charge sheets has
                  also been a game-changer for our billing department. Our time
                  to reconcile bills with paying clients has gone from a matter
                  of weeks to hours.
                </p>
                <div className="flex flex-col gap-[7px] max-h-[100px] text-start">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Workforce Accommodations Lead - Canada
                  </h3>
                  <span className="font-ttCommonProNormal text-base leading-[25px]">
                    Integrated Facilities Management Company
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 sm:gap-8 justify-between sm:justify-start">
                <p className="font-ttCommonProRegular text-start text-lg md:text-xl md:leading-6 lg:text-2xl lg:leading-[38px] text-custom-body">
                  The system’s Batch Check Ins and Check Outs feature makes
                  managing large work crews efficient, even with changing
                  schedules and travel delays. The system has also greatly
                  helped us to simplify the admin work required to make sure
                  rooms get cleaned on time for our workers and contractors
                  staying on-site.
                </p>
                <div className="flex flex-col gap-[7px] max-h-[100px] text-start">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Camp & Hospitality Services Manager
                  </h3>
                  <span className="font-ttCommonProNormal text-base leading-[25px]">
                    Remote Mine Located in Western Africa
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 sm:gap-8 justify-between sm:justify-start">
                <p className="font-ttCommonProRegular text-start text-lg md:text-xl md:leading-6 lg:text-2xl lg:leading-[38px] text-custom-body">
                  Besides dealing with rooms and travel, Camps & Crew has become
                  an important information hub for many departments –
                  Accounting, Construction, Food Services, Housekeeping and
                  Laundry, Safety and Security are all using SmartLodge data for
                  planning and day-to-day operations.
                </p>
                <div className="flex flex-col gap-[7px] max-h-[100px] text-start">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Group Lead, Mine Site Operations
                  </h3>
                  <span className="font-ttCommonProNormal text-base leading-[25px]">
                    Brucejack Mine, British Columbia, Canada
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 sm:gap-8 justify-between sm:justify-start">
                <p className="font-ttCommonProRegular text-start text-lg md:text-xl md:leading-6 lg:text-2xl lg:leading-[38px] text-custom-body">
                  The check in process and our housekeeping operations are
                  probably the areas where we’ve seen the greatest benefit with
                  the system. The ability to create custom charge sheets has
                  also been a game-changer for our billing department. Our time
                  to reconcile bills with paying clients has gone from a matter
                  of weeks to hours.
                </p>
                <div className="flex flex-col gap-[7px] max-h-[100px] text-start">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Workforce Accommodations Lead - Canada
                  </h3>
                  <span className="font-ttCommonProNormal text-base leading-[25px]">
                    Integrated Facilities Management Company
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4">
              <div className="flex flex-col w-full rounded-2xl bg-[#ECE7E0] p-10 sm:gap-8 justify-between sm:justify-start">
                <p className="font-ttCommonProRegular text-start text-lg md:text-xl md:leading-6 lg:text-2xl lg:leading-[38px] text-custom-body">
                  The system’s Batch Check Ins and Check Outs feature makes
                  managing large work crews efficient, even with changing
                  schedules and travel delays. The system has also greatly
                  helped us to simplify the admin work required to make sure
                  rooms get cleaned on time for our workers and contractors
                  staying on-site.
                </p>
                <div className="flex flex-col gap-[7px] max-h-[100px] text-start">
                  <h3 className="font-gilroyBold text-xl leading-6 text-custom-heading">
                    Camp & Hospitality Services Manager
                  </h3>
                  <span className="font-ttCommonProNormal text-base leading-[25px]">
                    Remote Mine Located in Western Africa
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="w-full flex justify-center gap-4 mt-12">
        <div className="btn-prev rounded-lg" ref={prevRef}>         
        </div>
        <div className="btn-next rounded-lg" ref={nextRef}></div>
        </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials
