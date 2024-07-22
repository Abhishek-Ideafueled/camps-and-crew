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
                  <span className='hover:ml-1 transition-all duration-250'>
                    {/* <BsArrowRight /> */}
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

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
                  <span className='hover:ml-1 transition-all duration-250'>
                    {/* <BsArrowRight /> */}
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

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
                  <span className='hover:ml-1 transition-all duration-250'>
                    {/* <BsArrowRight /> */}
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

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
