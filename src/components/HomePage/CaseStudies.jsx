import React, { useRef } from 'react'
import case1 from '/case1.jpg';
import case2 from '/case2.jpg';
import case3 from '/case3.jpg';
import sodexo from '/sodexo.png';
import civeo from '/civeo.png';
import b2gold from '/b2goldlogo2.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './CaseStudies.css';
import '../HomePage/Homepage.css';

const CaseStudies = () => {

  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay:false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover:false
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="w-full bg-[#F7F5F2] max-h-[854px]">
      <div className='main-container mx-auto'>
      <div className="flex flex-col py-10 lg:py-20 gap-6 md:gap-[40px] lg:gap-[60px] w-full items-center">
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-2 md:gap-4 w-full items-center md:items-start md:w-[70%]">
            <h2 className="text-[25px] sm:text-[32px] md:text-[32px] lg:text-h2 leading-[3rem] text-custom-heading font-gilroyBold font-bold">
              Case Studies
            </h2>
            <p className="text-custom-body text-sm text-center md:text-start md:text-base lg:text-lg font-ttCommonProMedium font-medium lg:leading-7">
              Read about the ways our software empowers our clients to increase
              room utilization at camp, streamline housekeeping, manage rooms
              and travel in sync, and much more.
            </p>
          </div>
          <div className="hidden md:flex items-center w-[30%] justify-end">
            <Link
              to="#"
              className="font-ttCommonProMedium text-custom-blue text-sm lg:text-base hover:text-custom-body transition-colors duration-200 delay-200"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
        {/* <img src={blogcard} alt="blog card image" /> */}
        <div className="case-banner w-full max-h-[512px] case-carousel mx-auto">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="relative min-h-[406px] md:max-h-[412px] lg:h-[512px] lg:max-h-[512px] ">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-1 case-container rounded-2xl"></div>
              <div className='min-h-[406px] md:max-h-[412px] lg:h-[512px] lg:max-h-[512px] flex flex-col justify-end pb-5'>
              <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                <img
                  src="https://camps-crew-sigma.vercel.app/images/case_study_partner/sodexo-logo.png"
                  alt="sodexo logo"
                  className="w-auto max-w-max"
                />
                
                <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold w-full">
                  Sodexo Leverages SmartLodge to <br /> Lift Room Occupancy and Drive <br />
                  Efficiencies at Cedar Valley Lodge
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-sm md:text-base text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>

              </div>
              </div>
            </div>
            <div className="min-h-[406px] md:max-h-[412px] lg:h-[512px] lg:max-h-[512px]">
            <div  className="absolute inset-0 h-auto bottom-0 bg-case-2 case-container rounded-2xl" ></div>
              <div className='min-h-[406px] md:max-h-[412px] lg:h-[512px] lg:max-h-[512px] flex flex-col justify-end pb-5'>
              <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                <img
                  src={civeo}
                  alt="civeo logo"
                  className="w-auto max-w-max"
                />
                <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold">
                  Civeo Speeds Up Check-In and <br /> Streamlines Camp Operations <br />
                  Across North America with SmartLodge
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-sm md:text-base text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
              </div>
              </div>
            </div>
            <div className="min-h-[406px] md:max-h-[412px] lg:h-[512px] lg:max-h-[512px]">
            <div  className="absolute inset-0 h-auto bottom-0 bg-case-3 case-container rounded-2xl" ></div>
              <div className='min-h-[406px] md:max-h-[412px] lg:h-[512px] lg:max-h-[512px] flex flex-col  justify-end pb-5'>
              <div className="relative flex flex-col text-left justify-between items-start min-h-[243px] gap-6 py-4 px-8">
                <img
                  src={b2gold}
                  alt="b2gold logo"
                  className="w-auto max-w-max"
                />
                <h2 className="text-lg md:text-2xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold">
                  B2Gold Boosts Room <br /> Utilization and Streamlines <br /> Operations at
                  Fekola Mine Camps
                </h2>
                <Link
                  to="#"
                  className="flex items-center text-sm md:text-base gap-2 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
              </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex md:hidden items-center justify-center ">
            <Link
              to="#"
              className="font-ttCommonProMedium text-sm text-custom-blue hover:text-custom-body transition-colors duration-200 delay-200"
            >
              VIEW ALL
            </Link>
          </div>
      </div>
      </div>
    </div>
  );
}

export default CaseStudies
