import React, { useEffect, useRef, useState } from 'react';
import HeadingPattern from "../Icons/HeadingPattern"
import YoutubeModal from '../YoutubeModal';

const MiningDeepExpertise = () => {
  const [isOpen,setIsOpen] = useState(false);

  const openModal=()=>{
    setIsOpen(true);
  }
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  
     return () => { document.body.style.overflow = 'unset' }
  }, [isOpen]);
  
  
  const closeModal=()=>{
    setIsOpen(false);
  }

  const [isVisible, setIsVisible] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      { threshold: 1.0 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <>
    <div className='w-full bg-[#f7f5f2]' ref={imgRef}>
        <div className="main-container mx-auto flex flex-col items-center gap-[30px] lg:gap-[60px] py-10 lg:py-20">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="heading-h2">
          A Team with Deep Expertise in <br className='hidden sm:block' /> Remote Mining Projects
          </h2>
          <span>
            <HeadingPattern/>
          </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4 lg:gap-8 lg:max-h-[400px]' >
            <div className='flex flex-col md:w-[95%] lg:w-[90%]'>
              <h2 className='font-gilroyBold text-custom-heading text-[28px] leading-[35px] xl:text-[32px] xl:leading-[40px]'>
Meet Cei Sullivan,
              </h2>
              <span className='font-gilroyBold text-custom-heading text-[21px] xl:text-2xl'>
Director of Implementation and Training
              </span>
              <span className='sub-heading mt-6'>
            We've assembled  a team with extensive field experience, giving them a strong understanding of the daily challenges
               in coordinating transportation and accommodations. Cei Sullivan brings to the team nearly ten years of experience 
               managing fly-in fly-out travel
               and accommodations at a remote gold mine in the mountains of British Columbia.
                Check out the video at right to hear how Cei leverages her expertise to serve our clients.
              </span>
            </div>
            <div className='relative w-full max-w-[600px] h-[300px] md:h-[400px]' >
              <img src="/Meet-Cei-Sullivan.png" alt="Meet-Cei-Sullivan" className={`${isVisible ? "opacity-0" : "opacity-100"} rounded-2xl object-cover h-full absolute inset-0`} />
              <img  
              className={`${ isVisible ? "opacity-100" : "opacity-0"} rounded-2xl object-cover h-full absolute inset-0`}
              src="/C&C GIF_256_360p_20-Aug-2024_Updated.gif" alt="Custom Poster" />
              <div className="relative flex justify-center items-center h-full hover:opacity-90">
              <span onClick={openModal} className='cursor-pointer'>
              <svg
                width="80"
                height="80"
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
              </span>
            </div>
            </div>
        </div>
        </div>
      
    </div>
    {
isOpen && <YoutubeModal closeModal={closeModal}>
 
  <iframe  
  className='w-full h-full'
  src="https://www.youtube.com/embed/Dwm6gELoaaM?si=a2JIAiV_BIMweEmB" frameBorder="0"
  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
  ></iframe>
</YoutubeModal>
    }
    </>
  )
}

export default MiningDeepExpertise
