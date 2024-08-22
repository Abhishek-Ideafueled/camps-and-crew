import React from 'react';
import { Link } from 'react-router-dom';
import './MiningMain.css';
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const MiningHero = () => { 
  
 


  const handleClickScroll = () => {
    const element = document.getElementById('demoForm');

    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className='w-full bg-custom-heading'>
        <div className='main-container mx-auto py-10 lg:pt-[120px] flex flex-col items-center'>
        <div className='flex flex-col gap-6 items-center'>
        <span className='font-ttCommonProRegular font-medium text-[#189AD2] text-sm'>
            | MINING |
        </span>
        <h2 className='heading-h2 text-white text-center max-w-[1116px]'>            
        Software to Manage FIFO Transport and Accommodations for Remote Mining Projects
        </h2>
        <div className='text-center font-ttCommonProNormal font-medium text-base md:text-lg lg:text-xl text-white lg:leading-8'>
        Designed to meet the unique demands of remote mining projects, we leverage <br className='hidden xl:block' /> years of experience to build software solutions that streamline the way mining <br className='hidden xl:block' /> companies manage transportation and housing for their workforces.
            </div>
        </div>
    <Link className='max-w-max ' href="#demoForm" onClick={handleClickScroll}>
        <div className='btn-orange flex items-center justify-center py-[14px] px-4'>
      CONTACT SALES
        </div></Link>
        <div className="case-studies-splide">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            arrows: false,
            pagination: false,
            rewind: false,
            speed: 0.5,
            breakpoints: {
              2024: {
                perPage: 6,
              },
              1280: {
                perPage: 4,
              },
              1024: {
                perPage: 4,
              },
              767: {
                perPage: 2,
              },
              640: {
                perPage: 2,
              },
            },
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
          // hasTrack={false}
        >
          <SplideSlide>
            <div className="single-slide">
              <img className="" src="white-civeo.png" alt="Image 1" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center items-center mt-5">
              <img className="" src="white-petroplex.png" alt="Image 2" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className=""
                src="/white-b2gold.png"
                alt="b2gold logo white"
              />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="single-slide">
              <img
                className=" "
                src="/white-anokiigamig.png"
                alt="white-anokiigamig logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className=""
                src="/white-agincourt-resources.png"
                alt="white-agincourt-resources logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className=" "
                src="/white-civeo.png"
                alt="white-civeo logo"
              />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="single-slide">
              <img
                className=""
                src="/white-denali-universal-services.png"
                alt="white denali universal services logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide px-5">
              <img
                className=""
                src="/white-sodexo.png"
                alt="white-sodexo logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide"> 
            <img
                  className=""
                  src="/white-permian-lodging.png"
                  alt="white permian lodging logo"
                />
            </div>
          </SplideSlide>
        </Splide>
      </div>
        </div>
      
    </div>
  )
}

export default MiningHero
