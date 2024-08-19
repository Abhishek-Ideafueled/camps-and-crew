import React from 'react';
import '../Company/CompanyHeader.css';
import './CaseStudiesMain.css';
import Slider from 'react-slick';
import CaseStudiesSplide from './CaseStudiesSplide';

const CaseStudiesHero = () => {

  //   const settings={
  //       speed: 8000,
  //       infinite:true,
  //       autoplay: true,
  //       autoplaySpeed: 0,
  //       cssEase: 'linear',
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       pauseOnHover:true,
  //       pauseOnFocus:true,
  //       responsive: [
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 2,
  //           },
  //         },
  //         {
  //           breakpoint: 767,
  //           settings: {
  //             slidesToShow: 3,
  //           },
  //         },
  //         {
  //           breakpoint: 1300,
  //           settings: {
  //             slidesToShow: 4,
  //           },
  //         },
  //         {
  //           breakpoint: 2200,
  //           settings: {
  //             slidesToShow:5 ,
  //           },
  //         },
          
  //       ],
  // }


  return (
    <div className='w-full bg-[#053347] relative overflow-hidden h-[100vh]'>
      <div className="line-animation">
            <div className="line-animation__line">
              <div className="line-animation__glow"></div>
              <div className="line-animation__glow-2"></div>
            </div>
            <div className="line-animation__line">
              <div className="line-animation__glow"></div>
              <div className="line-animation__glow-2"></div>
            </div>
            <div className="line-animation__line">
              <div className="line-animation__glow"></div>
              <div className="line-animation__glow-2"></div>
            </div>
            <div className="line-animation__line">
              <div className="line-animation__glow"></div>
              <div className="line-animation__glow-2"></div>
            </div>
            <div className="line-animation__line">
              <div className="line-animation__glow"></div>
              <div className="line-animation__glow-2"></div>
            </div>
            <div className="line-animation__line">
              <div className="line-animation__glow"></div>
              <div className="line-animation__glow-2"></div>
            </div>
        </div>
        <div className='flex w-full justify-center items-center py-[120px]'>
                <div className='max-w-[524px] text-center'>
                <h1 className='text-center font-gilroyBold text-white text-[30px] leading-[35px] md:text-[40px] md:leading-[46px] lg:text-[50px] lg:leading-[60px] max-w-[1001px]' data-aos="fade-up" data-aos-duration="1000">
                Discover our Customer Success Stories
            </h1>
                </div>
        </div>
        <CaseStudiesSplide/>
    </div>
  )
}

export default CaseStudiesHero
