import { Link } from "react-router-dom";
import YoutubeModal from "../YoutubeModal";
import { useEffect, useState } from "react";

const OurSolutions = () => {

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
  

  return (
    <>
    <div className="relative w-full max-h-[1650px] md:h-[1036px] lg:h-[1116px]">
      <div className=" w-full px-5 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1290px] xl:px-0 mx-auto py-10 lg:py-20">
        <div className="flex flex-col gap-[40px] lg:gap-[60px]">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-gilroyBold text-[25px] md:text-[32px] lg:leading-[3rem] text-custom-heading lg:text-h2">
              Our Solutions
            </h2>
            <span>
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
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-8">
            <div className=" flex flex-col items-center md:max-w-[336px] lg:max-w-[456px] xl:max-w-[633px] max-h-[830px]">
              <div className=" flex flex-col gap-10 bg-[#EAE8E3] px-6 lg:px-14 pt-6 lg:pt-14 pb-28 rounded-2xl md:min-h-[570px] lg:min-h-[615px]">
                <button className="bg-custom-blue font-gilroyBold w-[120px] h-[35px] rounded-full">
                  SmartLodge
                </button>
                <div className="text-xl leading-6 md:text-2xl md:leading-[1.8rem] lg:text-[32px] font-gilroyBold lg:leading-[2.4rem] text-custom-heading">
                  Flexible Software to Manage Remote Workforce Accommodations
                </div>
                <span className="font-ttCommonProNormal text-custom-body text-base lg:text-xl lg:leading-8">
                  Watch the teaser below to learn how SmartLodge automates and
                  streamlines camp management for remote project operators.
                </span>
                <button className="btn-orange w-[219px] h-[58px] py-4 rounded">
                 <Link to="/software-for-workforce-camp">SEE ALL FEATURES</Link> 
                </button>
              </div>
              <div className="relative mt-[-70px] px-14 w-full h-[250px] lg:h-[300px] flex items-center justify-center">
                <img
                  className="absolute inset-0 rounded-2xl w-[90%] max-w-[470px] h-full sm:w-full md:max-w-[309px] lg:max-w-[419px] xl:max-w-[521px] justify-self-center"
                  src="/smartlodge-product-video-workforce-camp-software.gif"
                  alt=""
                />
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center hover:opacity-80">
                  <span className="cursor-pointer" onClick={openModal}>
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
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:max-w-[336px] lg:max-w-[456px] xl:max-w-[633px] z-10 max-h-[830px]">
              <div className="flex flex-col gap-10 bg-[#EAE8E3] px-6 lg:px-14 pt-6 lg:pt-14 pb-28 rounded-2xl  md:min-h-[570px] lg:min-h-[615px]">
                <button className="bg-custom-button font-gilroyBold w-[85px] h-[35px] rounded-full">
                  EnRoute
                </button>
                <div className="text-xl leading-6 md:text-2xl md:leading-[1.8rem] lg:text-[32px] font-gilroyBold lg:leading-[2.4rem] text-custom-heading">
                  An Online Booking Tool to Manage ERM Travel and FIFO Logistics
                  <span className="hidden xl:block"><br/>
                  </span>
                </div>
                <span className="font-ttCommonProNormal md:pt-[28px] lg:pt-0 text-custom-body text-base lg:text-xl lg:leading-8">
                  Learn how EnRoute simplifies and streamlines the ways that
                  companies book and manage transportation for their fly-in
                  fly-out workers.
                  
                </span>
                <button className="btn-orange w-[219px] h-[58px] py-4 rounded">
                <Link to="/fifo-travel-online-booking-tool">  SEE ALL FEATURES</Link>
                
                </button>
              </div>
              <div className="relative mt-[-70px] px-14 w-full h-[250px] lg:h-[300px] flex items-center justify-center">
                <img
                  className="absolute inset-0 rounded-2xl w-[90%] max-w-[470px] h-full sm:w-full md:max-w-[309px] lg:max-w-[419px] xl:max-w-[521px] justify-self-center"
                  src="/fifo-mining-worker-rides-bus-western-africa-small.jpg"
                  alt=""
                />
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center opacity-80">
                  <Link to="#">
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
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-100 z-0">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_32_22)">
            <path d="M200 100H100V200H200V100Z" fill="#E4F4FC" />
            <path d="M100 100H0V200H100V100Z" fill="#E4F4FC" />
            <path d="M200 0H100V100H200V0Z" fill="#E4F4FC" />
          </g>
          <defs>
            <clipPath id="clip0_32_22">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    {
isOpen && <YoutubeModal closeModal={closeModal}>
 
  <iframe  
  className='w-full h-full'
  src="https://www.youtube.com/embed/5rt33ZISw9c" frameBorder="0"
  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
  ></iframe>
</YoutubeModal>
    }
    </>
  );
};

export default OurSolutions;
