import { FaPlus } from "react-icons/fa6"
// import { Link } from "react-router-dom"

import { Link, animateScroll as scroll } from "react-scroll";

const AccomodationAndTransportation = () => {
  return (
    <div className="w-full">
        <div className="main-container mx-auto flex flex-col gap-[30px] lg:gap-[60px] py-10 lg:py-20 items-center">
            <div className="flex flex-col gap-4 max-w-[994px] text-center">
            <div className="flex flex-col gap-2 items-center pb-2">
          <span  className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]"> COMBINED PLATFORM</span> 
            <div className="flex items-center gap-2">
            <button className="bg-custom-blue font-gilroyBold w-[120px] h-[35px] rounded-full text-custom-back">
                  SmartLodge
                </button> <FaPlus size={24} />
            <button className="bg-custom-button font-gilroyBold w-[85px] h-[35px] rounded-full text-custom-back">
                  Enroute
                </button>
            </div>
                </div>
                <h2 className="heading-h2">
                Accommodation and Transportation Bookings in Sync
                </h2>
                <p className="sub-heading">
                By leveraging SmartLodge and EnRoute as a single platform, companies can tie accommodation and transportation bookings to a single reservation, optimize resource allocation and increase communication.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:items-center">
                <div className="flex flex-col max-w-[588px]">
                        <div className="flex flex-col gap-1 p-3 lg:p-5">
                            <h3 className="font-gilroyBold text-xl leading-[24px] text-custom-heading">Maximize Resource Utilization</h3> 
                            <p className="font-ttCommonProNormal text-base text-custom-body">SmartLodge and EnRoute work in tandem to minimize un-utilized rooms and transport seats, increasing operational efficiency and cost-effectiveness.</p>
                        </div>
                        <div className="flex flex-col gap-1 p-3 lg:p-5 text-custom-heading">
                            <h3 className="font-gilroyBold text-xl leading-[24px]">Seamless Interdepartmental Communication</h3> 
                            <p className="font-ttCommonProNormal text-base text-custom-body">Our integrated solution fosters increased communication between departments tasked to manage accommodation and travel, enhancing coordination by ensuring all rooming and transport bookings for a given worker are booked within a single reservation.</p>
                        </div>
                        <div className="flex flex-col gap-1 p-3 lg:p-5 text-custom-heading">
                            <h3 className="font-gilroyBold text-xl leading-[24px]">Robust Rostering Capabilities</h3> 
                            <p className="font-ttCommonProNormal text-base text-custom-body">For workers on rotating rosters, your staff can auto-generate multiple reservations weeks to months in advance. These reservations can include both accommodation and transportation bookings.</p>
                        </div>
                </div>
                <div className="flex flex-col items-center md:max-w-[336px] lg:max-w-[456px] xl:max-w-[633px] z-10 max-h-[830px]">
              <div className="flex flex-col gap-5 md:gap-10 lg:gap-5 xl:gap-10 bg-[#EAE8E3] px-6 lg:px-14 pt-6 lg:pt-14 lg:pb-14 rounded-2xl h-[300px] md:h-[407px]">
                <button className="bg-custom-button font-gilroyBold w-[85px] h-[35px] rounded-full">
                  Enroute
                </button>
                <div className="text-xl leading-6 md:text-2xl md:leading-[1.8rem] lg:text-[32px] font-gilroyBold lg:leading-[2.4rem] text-custom-heading">
                Online Booking Tool for FIFO Travel Logistics
                </div>
                <span className="font-ttCommonProNormal text-custom-body text-base md:text-xl lg:leading-8">
                A booking tool built to enable companies to book and manage all of their FIFO transportation needs.
                  
                </span>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-orange py-4 px-10 hover:bg-custom-back hover:text-white uppercase rounded">
              <Link to="demoForm"> Speak to sales</Link> 
                </button>
              <button className="uppercase font-ttCommonProNormal font-semibold text-custom-blue hover:border-custom-button border-custom-blue border-[1px] py-4 px-10 rounded">checkout enroute</button>
            </div>
        </div>
      
    </div>
  )
}

export default AccomodationAndTransportation
