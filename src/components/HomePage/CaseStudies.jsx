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
      <div className="flex flex-col py-20 px-28 xl:px-0 gap-14 w-full xl:max-w-[1216px] mx-auto ">
        <div className="flex">
          <div className="flex flex-col gap-4 w-[70%]">
            <h2 className="text-h2 text-custom-heading font-gilroyBold font-bold">
              Case Studies
            </h2>
            <p className="text-custom-body text-lg font-ttCommonProNormal font-medium leading-7">
              Read about the ways our software empowers our clients to increase
              room utilization at camp, streamline housekeeping, manage rooms
              and travel in sync, and much more.
            </p>
          </div>
          <div className="flex items-center w-[30%] justify-end">
            <Link to='#' className="font-ttCommonProMedium text-custom-blue hover:text-custom-body transition-colors duration-200 delay-200">
              VIEW ALL
            </Link>
          </div>
        </div>
        {/* <img src={blogcard} alt="blog card image" /> */}
        <div className="case-banner w-[1216px] h-[512px] case-carousel mx-auto xl:w-full">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full">
              <img
                src={case1}
                alt="case study one"
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-smart-lodge w-full h-full rounded-2xl"></div>
              <div className="relative flex flex-col text-left mt-36 gap-4">
                <img
                  src="https://camps-crew-sigma.vercel.app/images/case_study_partner/sodexo-logo.png"
                  alt="sodexo logo"
                  className="w-auto max-w-max rounded-2xl"
                />
                <h2 className="text-h2 leading-[3.0rem] text-white font-gilroyBold font-bold w-[70%]">
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
            <div className="relative pt-20 pl-8 pb-10 pr-8 h-[512px] w-full">
              <img
                src={case2}
                alt="case study two"
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
              />
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
          </Slider>
          {/* <div className="flex w-[152px] gap-8 relative bottom-24 left-[80%]">
            <button
              className="bg-custom-button flex items-center justify-center rounded-lg h-[60px] w-[60px]"
              onClick={previous}
            >
              <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
                <path
                  d="M29.4009 8.23243C29.1744 8.92917 28.6958 9.17071 27.9983 9.16916C20.2863 9.15678 12.5736 9.16142 4.86157 9.16142C4.75057 9.16142 4.63956 9.16142 4.4603 9.16142C4.57281 9.28219 4.64406 9.36193 4.71832 9.43934C5.93339 10.6888 7.14772 11.9383 8.36429 13.1855C8.69432 13.5238 8.80232 13.9279 8.67257 14.3808C8.55181 14.8012 8.26454 15.0698 7.84751 15.1689C7.41623 15.2711 7.05921 15.1209 6.75169 14.8043C5.39111 13.4046 4.02752 12.008 2.66543 10.6099C2.16065 10.0912 1.66112 9.56708 1.14959 9.05613C0.910323 8.81692 0.70481 8.56222 0.598302 8.23243C0.598302 8.0776 0.598302 7.92276 0.598302 7.76793C0.705559 7.43891 0.913323 7.18654 1.14959 6.945C3.01346 5.03902 4.87132 3.12685 6.73294 1.21854C7.22947 0.709147 7.87451 0.661923 8.34254 1.09236C8.84208 1.55143 8.85708 2.30314 8.36205 2.81486C7.15072 4.06745 5.93339 5.31462 4.71607 6.56102C4.64406 6.63456 4.55255 6.68721 4.47005 6.74991C4.4843 6.78011 4.4993 6.8103 4.51355 6.83972C4.62006 6.83972 4.72657 6.83972 4.83307 6.83972C12.5541 6.83972 20.2758 6.84436 27.9968 6.83198C28.6951 6.83043 29.1736 7.07197 29.4009 7.76793C29.4009 7.92277 29.4009 8.0776 29.4009 8.23243Z"
                  fill="#060F1F"
                ></path>
              </svg>
            </button>
            <button
              className="bg-custom-button flex items-center justify-center rounded-lg h-[60px] w-[60px]"
              onClick={next}
            >
              <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
                <path
                  d="M0.599121 7.76757C0.825635 7.07083 1.30417 6.82929 2.00171 6.83084C9.7137 6.84322 17.4264 6.83858 25.1384 6.83858C25.2494 6.83858 25.3604 6.83858 25.5397 6.83858C25.4272 6.71781 25.3559 6.63807 25.2817 6.56066C24.0666 5.31116 22.8523 4.06167 21.6357 2.8145C21.3057 2.47619 21.1977 2.07208 21.3274 1.6192C21.4482 1.19883 21.7355 0.930194 22.1525 0.831102C22.5838 0.728913 22.9408 0.8791 23.2483 1.19573C24.6089 2.59541 25.9725 3.99199 27.3346 5.39013C27.8393 5.90881 28.3389 6.43292 28.8504 6.94386C29.0897 7.18308 29.2952 7.43778 29.4017 7.76757C29.4017 7.9224 29.4017 8.07723 29.4017 8.23207C29.2944 8.56108 29.0867 8.81346 28.8504 9.055C26.9865 10.961 25.1287 12.8732 23.2671 14.7815C22.7705 15.2909 22.1255 15.3381 21.6575 14.9076C21.1579 14.4486 21.1429 13.6969 21.638 13.1851C22.8493 11.9325 24.0666 10.6854 25.2839 9.43898C25.3559 9.36543 25.4474 9.31279 25.53 9.25008C25.5157 9.21989 25.5007 9.1897 25.4864 9.16028C25.3799 9.16028 25.2734 9.16028 25.1669 9.16028C17.4459 9.16028 9.7242 9.15564 2.00321 9.16802C1.30492 9.16957 0.826385 8.92803 0.599121 8.23207C0.599121 8.07723 0.599121 7.9224 0.599121 7.76757Z"
                  fill="#060F1F"
                ></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CaseStudies
