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
    <div className='w-full bg-custom-heading pb-10 lg:pb-20'>
        <div className='main-container mx-auto pt-[70px] lg:pt-[120px] flex flex-col items-center pb-12'>
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
    <Link className='max-w-max mt-10' href="#demoForm" onClick={handleClickScroll}>
        <div className='btn-orange flex items-center justify-center py-[14px] px-4'>
      CONTACT SALES
        </div></Link>
       
        </div>
        <div className="mining-hero-splide">
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
                perPage: 5.5,
              },
              1400: {
                perPage: 5,
              },
              1280: {
                perPage: 4,
              },
              1024: {
                perPage: 3.5,
              },
              900: {
                perPage: 3,
              },
              767: {
                perPage: 2.5,
              },
              640: {
                perPage: 2,
              },
              500: {
                perPage: 1.5,
              },
            },
            autoScroll: {
              speed: 0.6,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="Mining hero images"
          // hasTrack={false}
        >
          <SplideSlide>
            <div className="single-slide">
              <img className="rounded-2xl object-cover" src="worker-accommodation-bedroom-camp.jpg" alt="Mining camp bedroom with bed, desk and armoire" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img className="rounded-2xl object-cover" src="haul-trucks-mine.jpg" alt="Haul trucks at open pit mine" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className="rounded-2xl object-cover"
                src="/mining-worker-directs-haul-truck.jpg"
                alt="Worker radios colleague at mine site with dump truck in background"
              />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="single-slide">
              <img
                className="rounded-2xl object-cover"
                src="/fifo-workers-dining.jpg"
                alt="Workers wearing PPE eat dinner at mine camp"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className="rounded-2xl object-cover"
                src="/remote-mining-camp-aerial-grassy-field.jpg"
                alt="aerial perspective of grasslands and remote mining lodge"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className="rounded-2xl object-cover"
                src="/female-fifo-workers-seated-plane-window3.jpg"
                alt="FIFO workers seated on airplane"
              />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="single-slide">
              <img
                className="rounded-2xl object-cover"
                src="/workers-board-chartered-bus.jpg"
                alt="Fly in fly out workers board white bus"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className="rounded-2xl object-cover"
                src="/worker-checks-in-fifo-camp.jpg"
                alt="Project personnel walks to room at mining camp"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default MiningHero
