import React from 'react';
import '../HomePage/Homepage.css';
import video from '/smart-video-player.jpg';
import { Link } from 'react-router-dom';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="w-full ">
      <div className="w-full bg-[#EAE8E3] py-10 lg:py-20">
        <div className="main-container mx-auto flex flex-col gap-[30px] md:gap-[60px]">
          <div className="flex flex-col items-center gap-4">
            <h1
              className="font-gilroyMedium font-bold text-[25px] md:text-[32px] lg:text-[40px] lg:leading-[3rem] text-custom-heading"
              data-aos="fade-down"
            >
              Our Story
            </h1>
            <div data-aos="fade-up" data-aos-delay="100">
              <svg
                width="174"
                height="16"
                viewBox="0 0 174 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.584 0.722656L1.58396 15.7227" stroke="#647787" />
                <path d="M46.584 0.722656L36.584 15.7227" stroke="#647787" />
                <path d="M81.584 0.722656L71.584 15.7227" stroke="#647787" />
                <path d="M116.584 0.722656L106.584 15.7227" stroke="#647787" />
                <path d="M151.584 0.722656L141.584 15.7227" stroke="#647787" />
                <path d="M18.584 0.722656L8.58396 15.7227" stroke="#647787" />
                <path d="M53.584 0.722656L43.584 15.7227" stroke="#647787" />
                <path d="M88.584 0.722656L78.584 15.7227" stroke="#647787" />
                <path d="M123.584 0.722656L113.584 15.7227" stroke="#647787" />
                <path d="M158.584 0.722656L148.584 15.7227" stroke="#647787" />
                <path d="M25.584 0.722656L15.584 15.7227" stroke="#647787" />
                <path d="M60.584 0.722656L50.584 15.7227" stroke="#647787" />
                <path d="M95.584 0.722656L85.584 15.7227" stroke="#647787" />
                <path d="M130.584 0.722656L120.584 15.7227" stroke="#647787" />
                <path d="M165.584 0.722656L155.584 15.7227" stroke="#647787" />
                <path d="M32.584 0.722656L22.584 15.7227" stroke="#647787" />
                <path d="M67.584 0.722656L57.584 15.7227" stroke="#647787" />
                <path d="M102.584 0.722656L92.584 15.7227" stroke="#647787" />
                <path d="M137.584 0.722656L127.584 15.7227" stroke="#647787" />
                <path d="M172.584 0.722656L162.584 15.7227" stroke="#647787" />
                <path d="M39.584 0.722656L29.584 15.7227" stroke="#647787" />
                <path d="M74.584 0.722656L64.584 15.7227" stroke="#647787" />
                <path d="M109.584 0.722656L99.584 15.7227" stroke="#647787" />
                <path d="M144.584 0.722656L134.584 15.7227" stroke="#647787" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 font-ttCommonProMedium font-medium text-custom-body">
            <p data-aos="fade-right" data-aos-delay="100">
              Our story begins in 1992 when our founder and CEO started
              developing the first version of our software, a property
              management system for hotels. Originally called Lodgical, the
              system launched in 1997 and served hotels across the United States
              and Canada.
              <br />
              <br />
              In 2007, we embarked on a journey to transform our solution into a
              camp management system tailored to the needs of remote camps. The
              initial version of our system, known today as SmartLodge, was
              first implemented at a remote camp in the Canadian oil sands.
              SmartLodge has since been implemented at remote worker housing
              across five continents.
            </p>
            <p data-aos="fade-left" data-aos-delay="100">
              Along the way, we introduced EnRoute, an online booking tool that
              simplifies travel management of fly-in fly-out (FIFO) workforces.
              EnRoute enables companies to book and manage all modes of
              transportation required to transport crews to and from remote
              projects safely and on-time. <br />
              <br />
              Today, we are proud to offer a suite of software solutions that
              facilitates the way companies manage their FIFO travel and remote
              camps worldwide. We innovate on our solutions every day, regularly
              introducing product updates and new features. We thrive on new
              challenges and look forward to learning more about the
              requirements of your remote operations.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full'>
      <div className="relative w-full" data-aos="fade-up">
            <img
              src={video}
              alt="insert video player here"
              className="w-full"
            />
            {/* <div className='bg-video-image video-image absolute inset-0 w-full h-full'></div> */}
            <div className="absolute flex top-[40%] sm:top-[40%] md:top-[50%] left-[45%] sm:right-[40%] justify-center h-full hover:opacity-90">
              <Link to="#" className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]'>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_87)">
                  <path
                    d="M80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40Z"
                    fill="#EFBC43"
                  />
                  <path
                    d="M33.7724 54.5263C33.3118 54.5254 32.8594 54.3983 32.4597 54.1576C31.5596 53.6207 31 52.5786 31 51.4473V28.5527C31 27.4182 31.5596 26.3793 32.4597 25.8425C32.869 25.5949 33.3339 25.4676 33.8059 25.4739C34.2779 25.4801 34.7396 25.6197 35.1428 25.878L53.7342 37.5906C54.1216 37.8463 54.441 38.2013 54.6624 38.6225C54.8839 39.0437 55 39.5171 55 39.9984C55 40.4798 54.8839 40.9532 54.6624 41.3744C54.441 41.7955 54.1216 42.1506 53.7342 42.4063L35.1398 54.1221C34.7272 54.3846 34.2546 54.5243 33.7724 54.5263Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_87">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </Link>
            </div>
          </div>
          </div>
    </div>
  );
}

export default OurStory
