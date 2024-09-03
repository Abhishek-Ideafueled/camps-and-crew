import React from 'react'
import { Link } from 'react-router-dom'
import case1 from '/case1.jpg';
import case2 from '/case2.jpg';
import case3 from '/case3.jpg';
import sodexo from '/sodexo-logo2.png';
import civeo from '/civeo.png';
import b2gold from '/b2goldlogo2.png';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';
import './CaseStudiesMain.css';

const CaseStudiesSlider = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <div className="w-full">
      <div className="case-studies-swiper pt-20">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          speed={500}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
            <SwiperSlide>            
            <div className="relative w-full">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-4 case-container rounded-2xl"></div>
              <div className="min-h-[406px] md:max-h-[412px] lg:min-h-[510px] lg:max-h-[600px] flex flex-col  justify-end pb-5">
                <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                  <img
                    src={sodexo}
                    alt="sodexo logo"
                    className="w-auto max-w-max"
                  />
                  <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold">
                  SmartLodge Drives Up Room <br /> Occupancy and Streamlines <br /> Billing at Sella Ness Camp
                  </h2>
                  <Link
                    to="/sodexo-implements-smartlodge-sella-ness-accommodation-camp" reloadDocument
                    className="flex items-center text-sm md:text-base gap-2 hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                  >
                    READ STORY
                    <span className="">
                      <svg
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-1 case-container rounded-2xl"></div>
              <div className="min-h-[406px] md:max-h-[412px] lg:min-h-[510px] lg:max-h-[600px] flex flex-col justify-end pb-5">
                <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                  <img
                    src={sodexo}
                    alt="sodexo logo"
                    className="w-auto max-w-max"
                  />

                  <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold w-full">
                    Sodexo Leverages SmartLodge to <br /> Lift Room Occupancy
                    and Drive <br />
                    Efficiencies at Cedar Valley Lodge
                  </h2>
                  <Link
                    to="/sodexo-canada-implements-smartlodge-cedar-valley-lodge" reloadDocument
                    className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                  >
                    READ STORY
                    <span className="hover:ml-1 transition-all duration-250">
                      <svg
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
   
            <div className="relative w-full">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-2 case-container rounded-2xl"></div>
              <div className="min-h-[406px] md:max-h-[412px] lg:min-h-[510px] lg:max-h-[600px] flex flex-col justify-end pb-5">
                <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                  <img
                    src={civeo}
                    alt="civeo logo"
                    className="w-auto max-w-max"
                  />
                  <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold">
                    Civeo Speeds Up Check-In and <br /> Streamlines Camp
                    Operations <br />
                    Across North America with SmartLodge
                  </h2>
                  <Link
                    to="/civeo-implements-smartlodge-camps-north-america" reloadDocument
                    className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                  >
                    READ STORY
                    <span className="hover:ml-1 transition-all duration-250">
                      {/* <BsArrowRight /> */}
                      <svg
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>            
            <div className="relative w-full">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-3 case-container rounded-2xl"></div>
              <div className="min-h-[406px] md:max-h-[412px] lg:min-h-[510px] lg:max-h-[600px] flex flex-col  justify-end pb-5">
                <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                  <img
                    src={b2gold}
                    alt="b2gold logo"
                    className="w-auto max-w-max"
                  />
                  <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold">
                    B2Gold Boosts Room <br /> Utilization and Streamlines <br />
                    Operations at Fekola Mine Camps
                  </h2>
                  <Link
                    to="#"
                    className="flex items-center text-sm md:text-base gap-2 hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                  >
                    READ STORY
                    <span className="">
                      <svg
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
          <div className="w-full flex justify-center gap-4 mt-12">
            <div className="btn-prev cursor-pointer" ref={prevRef}></div>
            <div className="btn-next cursor-pointer" ref={nextRef}></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default CaseStudiesSlider
