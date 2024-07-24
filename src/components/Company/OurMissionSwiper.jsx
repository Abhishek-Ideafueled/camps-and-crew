import { Swiper, SwiperSlide } from "swiper/react";
import flexibility from '/about-flexibility-icon.png'; 
import  innovate from '/about-innovation-icon.png';
import openness from '/about-openness-icon.png';
import service from '/about-service-icon.png';
import 'swiper/css';
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import './OurMission.css';

const OurMissionSwiper = () => {

  const [endofSlide,setEndOfSlide] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log(endofSlide);

  return (
    <div className='w-full min-h-[757px] md:h-[850px]'>
    <div className='main-container mx-auto py-10 md:py-20 lg:py-28 flex flex-col gap-[24px] md:gap-[40px] lg:gap-[60px]'>
        <div className='flex flex-col gap-6 items-center'>
                <div className='flex flex-col gap-4 items-center '>
                <h1 className='font-gilroyBold text-custom-heading text-center text-[25px] md:text-[32px] lg:text-[40px] lg:leading-[3rem]'>
                    Our Mission and Values
                    </h1>
                <div data-aos="fade-up" data-aos-delay="100">
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
            <path d="M116.584 0.722656L106.584 15.7227" stroke="#647787" />
            <path d="M151.584 0.722656L141.584 15.7227" stroke="#647787" />
            <path d="M18.584 0.722656L8.58396 15.7227" stroke="#647787" />
            <path d="M53.584 0.722656L43.584 15.7227" stroke="#647787" />
            <path d="M88.584 0.722656L78.584 15.7227" stroke="#647787" />
            <path d="M123.584 0.722656L113.584 15.7227" stroke="#647787" />
            <path d="M158.584 0.722656L148.584 15.7227" stroke="#647787" />
            <path d="M25.584 0.722656L15.584 15.7227" stroke="#647787" />
            <path d="M60.584 0.722656L50.584 15.7227" stroke="#647787" />
            <path d="M95.584 0.722656L85.584 15.7227" stroke="#647787" />
            <path d="M130.584 0.722656L120.584 15.7227" stroke="#647787" />
            <path d="M165.584 0.722656L155.584 15.7227" stroke="#647787" />
            <path d="M32.584 0.722656L22.584 15.7227" stroke="#647787" />
            <path d="M67.584 0.722656L57.584 15.7227" stroke="#647787" />
            <path d="M102.584 0.722656L92.584 15.7227" stroke="#647787" />
            <path d="M137.584 0.722656L127.584 15.7227" stroke="#647787" />
            <path d="M172.584 0.722656L162.584 15.7227" stroke="#647787" />
            <path d="M39.584 0.722656L29.584 15.7227" stroke="#647787" />
            <path d="M74.584 0.722656L64.584 15.7227" stroke="#647787" />
            <path d="M109.584 0.722656L99.584 15.7227" stroke="#647787" />
            <path d="M144.584 0.722656L134.584 15.7227" stroke="#647787" />
          </svg>
                </div>
                <p className='max-w-[809px] font-ttCommonProMedium font-medium text-center text-custom-body text-base sm:text-[18px] sm:leading-7'>
                Our mission is to streamline the management of FIFO travel and remote accommodations, reducing inefficiencies and operational costs in the process. Our values guide us as we drive towards our mission.
                </p>
                </div>
        </div>
        <div className="mission-slides hidden md:block">
      <Swiper
      modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onReachEnd={() => {
          setEndOfSlide(true);
        }}
        observer={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      breakpoints={
       { 
        767: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        1240:{
          slidesPerView: 3.5,
          spaceBetween: 20
        }
      }
      }
      >
        <SwiperSlide>
          <div className="slide-outer">
            <div className="w-auto flex flex-col h-[410px] md:h-[406px] lg:h-[386px] border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={innovate} alt="about innovation icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-2xl">
                  Innovation
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                  We consistently strive to challenge ourselves, seeking
                  innovative ways to help our clients more efficiently manage
                  their fly-in fly-out operations. We are fortunate to work with
                  clients that bring vast expertise and often serve as the
                  driving force behind new product development.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>          
          <div className="slide-outer">
            <div className="w-auto flex flex-col h-[410px] md:h-[406px] lg:h-[386px] border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={service} alt="about service icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-2xl">
                  Services
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                We work hand-in-hand with every client to ensure our deployments meet their unique operational requirements--no matter how complex. For more immediate ongoing assistance, we provide our clients with access to round-the-clock support, 24 hours a day, 7 days a week, 365 days a year.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-outer">
            <div className="w-auto flex flex-col h-[410px] md:h-[406px] lg:h-[386px] border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={flexibility} alt="about flexibility icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-2xl">
                  Flexibility
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                Remote operations large and small face operationally complex challenges. This is why we have architected SmartLodge and EnRoute to be highly configurable. The architecture of our technology enables us to continuously adapt to the evolving operational requirements of our clients and to quickly take live new features and functionalities.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-outer">
            <div className="w-auto flex flex-col h-[410px] md:h-[406px] lg:h-[386px] border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={openness} alt="about openness icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-2xl">
                 Openness
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                We embrace the power of shared knowledge and collaboration. Our commitment to openness is reflected in our receptivity to learning from our clients, who bring unique expertise and insights to our partnership. Equally, we value the diverse knowledge and skills of our team, encouraging the exchange of new ideas and perspectives.
                </p>
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
      {/* CONTAINER FOR BELOW MEDIUM SCREEN */}
      <div className="flex flex-col md:hidden gap-5">
     
          <div className="">
            <div className="w-auto flex flex-col h-auto border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={innovate} alt="about innovation icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-xl">
                  Innovation
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                  We consistently strive to challenge ourselves, seeking
                  innovative ways to help our clients more efficiently manage
                  their fly-in fly-out operations. We are fortunate to work with
                  clients that bring vast expertise and often serve as the
                  driving force behind new product development.
                </p>
              </div>
            </div>
          </div>
                 
          <div className="">
            <div className="w-auto flex flex-col h-auto border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={service} alt="about service icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-xl">
                  Services
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                We work hand-in-hand with every client to ensure our deployments meet their unique operational requirements--no matter how complex. For more immediate ongoing assistance, we provide our clients with access to round-the-clock support, 24 hours a day, 7 days a week, 365 days a year.
                </p>
              </div>
            </div>
          </div>
       
          <div className="">
            <div className="w-auto flex flex-col h-auto border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={flexibility} alt="about flexibility icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-xl">
                  Flexibility
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                Remote operations large and small face operationally complex challenges. This is why we have architected SmartLodge and EnRoute to be highly configurable. The architecture of our technology enables us to continuously adapt to the evolving operational requirements of our clients and to quickly take live new features and functionalities.
                </p>
              </div>
            </div>
          </div>
       
          <div className="">
            <div className="w-auto flex flex-col h-auto border-[#CDD5DF] border-[1px] gap-[32px] sm:gap-[24px] md:gap-[60px] p-6">
              <div className="">
                <img src={openness} alt="about openness icon" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-gilroyBold text-custom-heading text-xl">
                 Openness
                </h2>
                <p className="font-ttCommonProMedium text-custom-body text-sm font-medium">
                We embrace the power of shared knowledge and collaboration. Our commitment to openness is reflected in our receptivity to learning from our clients, who bring unique expertise and insights to our partnership. Equally, we value the diverse knowledge and skills of our team, encouraging the exchange of new ideas and perspectives.
                </p>
              </div>
            </div>
          </div>

      </div>
      </div>
    </div>
  );
}

export default OurMissionSwiper

