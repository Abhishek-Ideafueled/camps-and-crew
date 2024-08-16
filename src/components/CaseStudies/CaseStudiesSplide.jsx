// import React from "react";
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const CaseStudiesSplide = () => {
  // const options = {
  //   type: "loop",
  //   gap: "1rem",
  //   autoplay: true,
  //   pauseOnHover: false,
  //   resetProgress: false,
  //   perPage:3,
  // };

  return (
    <div className="w-full bg-custom-back py-20">
      <div className="case-studies-splide">
        <Splide
          //  options={options}
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
            <div className="flex justify-center items-center">
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
            <div className="single-slide">
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
  );
};

export default CaseStudiesSplide;
