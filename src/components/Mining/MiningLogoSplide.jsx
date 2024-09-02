import React from 'react'
import './MiningMain.css';
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const MiningLogoSplide = () => {
  return (
    <div className='w-full py-10 lg:py-20'>
       <div className="mining-logo-splide">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            arrows: false,
            pagination: false,
            rewind: false,
            drag: false,
            dragAngleThreshold: 0,
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
              pauseOnHover: false,
              pauseOnFocus: false,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="Mining logo images"
          // hasTrack={false}
        >
          <SplideSlide>
            <div className="single-slide">
              <img className=" object-cover" src="/b2gold.png" alt="B2Gold logo" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img className=" object-cover" src="/newcast-mining.png" alt="newcast-mining logo" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className="object-cover"
                src="/amman.png"
                alt="amman logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex h-full items-center justify-center">
              <img
                className=""
                src="/pretivm-logo.png"
                alt="pretivm-logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide lg:px-6">
              <img
                className="w-auto "
                src="/centerra-gold.png"
                alt="centerra-gold logo"
              />
            </div>
          </SplideSlide>
         
          <SplideSlide>
            <div className="single-slide">
              <img
                className=" object-cover"
                src="/ascot-resources.png"
                alt="ascot-resources logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className=" object-cover"
                src="/tata-steel.png"
                alt="tata-steel logo"
              />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="single-slide">
              <img
                className=" object-cover"
                src="/new-gold.png"
                alt="new-gold logo"
              />
            </div>
          </SplideSlide>
         
          <SplideSlide>
            <div className="single-slide">
              <img
                className=" object-cover"
                src="/sabina-gold-silver.png"
                alt="sabina-gold-silver logo"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="single-slide">
              <img
                className=" object-cover"
                src="/agincourt-logo.png"
                alt="agincourt logo"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default MiningLogoSplide
