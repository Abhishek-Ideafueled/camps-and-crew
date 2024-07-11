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
    <div className="w-full bg-[#F7F5F2] h-[854px]">
      <div className="flex flex-col py-0 lg:py-20 px-3 lg:px-28 xl:px-0 gap-14 w-full xl:max-w-[1216px] mx-auto items-center">
        <div className="flex max-w-[516px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1216px] justify-center">
          <div className="flex flex-col gap-4 w-full items-center md:items-start md:w-[70%]">
            <h2 className="text-[32px] md:text-h2 text-custom-heading font-gilroyBold font-bold">
              Case Studies
            </h2>
            <p className="text-custom-body text-sm md:text-lg font-ttCommonProNormal font-medium leading-7">
              Read about the ways our software empowers our clients to increase
              room utilization at camp, streamline housekeeping, manage rooms
              and travel in sync, and much more.
            </p>
          </div>
          <div className="hidden md:flex items-center w-[30%] justify-end">
            <Link
              to="#"
              className="font-ttCommonProMedium text-custom-blue hover:text-custom-body transition-colors duration-200 delay-200"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
        {/* <img src={blogcard} alt="blog card image" /> */}
        <div className="case-banner w-full sm:max-w-[516px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1216px] min-h-[512px] case-carousel mx-auto xl:w-full">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="relative pt-20 lg:pl-8 lg:pb-10 lg:pr-8 min-h-[512px] ">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-1 case-container rounded-2xl"></div>
              <div className="relative flex flex-col text-left items-start top-[20px] sm:top-[70px] lg:top-0 p-4 xl: gap-4">
                <img
                  src="https://camps-crew-sigma.vercel.app/images/case_study_partner/sodexo-logo.png"
                  alt="sodexo logo"
                  className="w-auto max-w-max"
                />
                <h2 className="text-lg md:text-xl lg:text-h2 lg:leading-[3.0rem] text-white font-gilroyBold font-bold w-[50%] lg:max-w-[70%]">
                  Sodexo Leverages SmartLodge to Lift Room Occupancy and Drive
                  Efficiencies at Cedar Valley Lodge
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
              </div>
            </div>
            {/* <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full">
            <div  className="absolute inset-0 h-auto bottom-0 bg-case-2 case-container rounded-2xl" ></div>
              <div className="absolute inset-0 bg-smart-lodge w-full h-full rounded-2xl"></div>
              <div className="relative flex flex-col text-left mt-28 gap-4">
                <img
                  src={civeo}
                  alt="civeo logo"
                  className="w-auto max-w-max"
                />
                <h2 className="text-h2 leading-[3.0rem] text-white font-gilroyBold font-bold w-[70%]">
                  Civeo Speeds Up Check-In and Streamlines Camp Operations
                  Across North America with SmartLodge
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full rounded-2xl">
            <div  className="absolute inset-0 h-auto bottom-0 bg-case-3 case-container rounded-2xl" ></div>
              <div className="absolute inset-0 bg-smart-lodge w-full h-full rounded-2xl"></div>
              <div className="relative flex flex-col pr-80 mt-16 gap-4">
                <img
                  src={b2gold}
                  alt="b2gold logo"
                  className="w-auto max-w-max"
                />
                <h2 className="text-h2 leading-[3.0rem] text-white font-gilroyBold font-bold">
                  B2Gold Boosts Room Utilization and Streamlines Operations at
                  Fekola Mine Camps
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies
