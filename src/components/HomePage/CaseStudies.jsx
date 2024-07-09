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
// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { HiArrowLongLeft, HiMiniArrowLongLeft } from 'react-icons/hi2';

const CaseStudies = () => {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
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
    <div className='w-full bg-[#F7F5F2] h-[854px]'>
  
    <div className="flex flex-col py-20 px-28 gap-14 w-full xl:max-w-[1216px] mx-auto ">
      <div className="flex">
        <div className="flex flex-col gap-4 w-[70%]">
          <h2 className="text-h2 text-custom-heading font-gilroy font-bold">
            Case Studies
          </h2>
          <p className="text-custom-body font-ttCommonProNormal font-medium leading-7">
            Read about the ways our software empowers our clients to increase
            room utilization at camp, streamline housekeeping, manage rooms and
            travel in sync, and much more.
          </p>
        </div>
        <div className="flex items-center w-[30%] justify-end">
          <span className="font-ttCommonProMedium text-custom-blue">
            VIEW ALL
          </span>
        </div>
      </div>
      {/* <img src={blogcard} alt="blog card image" /> */}
      <div className="w-[1216px] h-[512px] case-carousel mx-auto xl:w-full">
        <Slider ref={slider => {
          sliderRef = slider;
        }}
         {...settings}>
          <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full">
            <img
              src={case1}
              alt="case study one"
              className="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-smart-lodge w-full h-full rounded-2xl"></div>
            <div className="relative flex flex-col text-left mt-40 gap-4">
              <img
                src={sodexo}
                alt="sodexo logo"
                className="w-auto max-w-max rounded-2xl"
              />
              <h2 className="text-h2 leading-[3.0rem] text-white font-gilroyBold font-bold w-[70%]">
                Sodexo Leverages SmartLodge to Lift Room Occupancy and Drive
                Efficiencies at Cedar Valley Lodge
              </h2>
              <Link to='#' className="flex items-center gap-2 text-white font-ttCommonProNormal font-semibold">
                READ STORY
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full">
            <img
              src={case2}
              alt="case study two"
              className="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-smart-lodge w-full h-full rounded-2xl"></div>
            <div className="relative flex flex-col text-left mt-16 gap-4">
              <img src={civeo} alt="civeo logo" className="w-auto max-w-max" />
              <h2 className="text-h2 leading-[3.0rem] text-white font-gilroyBold font-bold w-[70%]">
                Civeo Speeds Up Check-In and Streamlines Camp Operations Across
                North America with SmartLodge
              </h2>
              <Link to="#" className="flex items-center gap-2 text-white font-ttCommonProNormal font-semibold">
                READ STORY
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full rounded-2xl">
            <img
              src={case3}
              alt="case study three"
              className="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
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
              <Link to="#" className="flex items-center gap-2 text-white font-ttCommonProNormal font-semibold">
                READ STORY
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </Slider>
        <div className='flex w-[152px] gap-8 relative bottom-24 left-[80%]'>
        <button className="bg-custom-button flex items-center justify-center rounded-lg h-[60px] w-[60px]" onClick={previous}>
        <BsArrowLeft />
        </button>
        <button className="bg-custom-button flex items-center justify-center rounded-lg h-[60px] w-[60px]" onClick={next}>
        <BsArrowRight />
        </button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default CaseStudies
