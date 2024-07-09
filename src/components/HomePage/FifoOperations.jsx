import React from 'react';
import video from '/video.png';
import { Link } from 'react-router-dom';

const FifoOperations = () => {
  return (
    <div className="bg-[#EAE8E3] pt-20 pr-0 pb-10 pl-0 w-full">
      <div className="w-full xl:max-w-[1216px] mx-auto">
        <div className=" flex flex-col gap-20 px-28 xl:px-0">
          <div className="text-center text-custom-heading font-gilroy font-bold">
            <h2 className="text-h2 leading-[3rem]">
              Streamlining FIFO Operations for 16 Years
            </h2>
          </div>
          <div className="flex justify-center items-center gap-24 px-28 xl:px-0">
            <div>
              <div className="text-[50px] border-b-2 leading-[3.75rem] border-custom-button w-28 text-custom-heading font-gilroyBold font-normal">
                150K
              </div>
              <span className="font-ttCommonProNormal font-normal leading-[1.55rem]">
                Rooms managed for clients operating remote camps and villages
              </span>
            </div>
            <div>
              <div className="text-[50px] border-b-2 leading-[3.75rem] border-custom-button w-28 text-custom-heading font-gilroyBold font-normal">
                350K
              </div>
              <span className="font-ttCommonProNormal font-normal leading-[1.55rem]">
                FIFO transportation reservations booked and managed annually
              </span>
            </div>
            <div>
              <div className="text-[50px] border-b-2 leading-[3.75rem] border-custom-button w-16 text-custom-heading font-gilroyBold font-normal">
                74
              </div>
              <span className="font-ttCommonProNormal font-normal leading-[1.55rem]">
                Years combined experience across mining, energy, travel and
                hospitality
              </span>
            </div>
          </div>
        </div>
        <div className="flex px-28 xl:px-0 pt-16 pb-10 gap-16">
          <div className="w-[600px] h-[415px] relative">
            <img
              src={video}
              alt="insert video player here"
              className="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
            <div className="relative top-[40%] left-[45%]">
              <Link to="#">
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
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-[556px] gap-6">
            <h3 className="text-2xl font-gilroyBold text-custom-heading font-normal leading-[1.8rem]">
              About the company
            </h3>
            <p className="font-ttCommonProNormal font-medium text-custom-body leading-[1.6rem]">
              At Camps and Crew, we have set out to build best-of-breed
              technology that facilitates fly-in fly-out operations for travel
              coordinators, on-site camp staff, camp and project management, and
              everyone in-between.
            </p>
            <p className="font-ttCommonProNormal font-medium text-custom-body leading-[1.6rem]">
              Over the years, we have developed a suite of software solutions to
              streamline all aspects of FIFO travel and remote camp management.
              Our solutions support all parties working to ensure remote crews
              are transported and housed safely and efficiently.
            </p>
            <p className="font-ttCommonProNormal font-medium text-custom-body leading-[1.6rem]">
              We work with companies in the mining, energy and construction
              sectors to automate and streamline their operations in order to
              reduce manual processes and the costs associated.
            </p>
            <Link className='text-custom-blue font-ttCommonProNormal font-semibold leading-[1.6rem]'>
            READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifoOperations
