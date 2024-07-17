import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import rulesEngine from '/rulesEngine.jpg';

const RulesEngine = () => {
  return (
    <div
    data-aos="fade-zoom-in" data-aos-duration="2000"
    className="flex flex-col md:flex-row justify-between shadow-custom-shadow min-h-[300px] mx-auto lg:h-[465px] rounded-2xl items-center">
    <div className="flex flex-col lg:px-10 p-6 lg:py-16 min-h-[300px] max-w-[492px] lg:max-w-[645px]">
      {/* <div className="flex flex-col"> */}
        <div className="text-lg md:text-xl lg:text-2xl text-custom-heading mb-4 font-gilroyBold font-normal lg:leading-[1.8rem]">
        Implement a travel policy aligned with your organization’s needs
        </div>
        <hr className="w-24 text-[#D0D5DD]" />
        <div className="flex flex-col py-4 text-sm gap-3 font-ttCommonProNormal font-normal leading-[1.4rem]">
          <div className="flex gap-10 items-start">
             <span className="w-[14px] h-[14px] mt-[5px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_7)">
                  <path
                    d="M13 7C13 3.68605 10.3139 1 7 1C3.68605 1 1 3.68605 1 7C1 10.3133 3.68605 13 7 13C10.3139 13 13 10.3133 13 7Z"
                    stroke="#63C1EC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.69043 7.0002L6.23032 8.5394L9.3088 5.46094"
                    stroke="#63C1EC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_7">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-custom-body">
            Set up single or multi-layer approvals, when required
            </span>
          </div>
          <div className="flex gap-10 items-center">
             <span className="w-[14px] h-[14px] mt-[5px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_7)">
                  <path
                    d="M13 7C13 3.68605 10.3139 1 7 1C3.68605 1 1 3.68605 1 7C1 10.3133 3.68605 13 7 13C10.3139 13 13 10.3133 13 7Z"
                    stroke="#63C1EC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.69043 7.0002L6.23032 8.5394L9.3088 5.46094"
                    stroke="#63C1EC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_7">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-custom-body">
            Define fields or reportable conditions required to book
            </span>
          </div>
          <div className="flex gap-10 items-center">
             <span className="w-[14px] h-[14px] mt-[5px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_7)">
                  <path
                    d="M13 7C13 3.68605 10.3139 1 7 1C3.68605 1 1 3.68605 1 7C1 10.3133 3.68605 13 7 13C10.3139 13 13 10.3133 13 7Z"
                    stroke="#63C1EC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.69043 7.0002L6.23032 8.5394L9.3088 5.46094"
                    stroke="#63C1EC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_7">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-custom-body">
            Define commercial content that is in- and out-of-policy
            </span>
          </div>
        </div>
     <button className='bg-custom-button hover:bg-btn-hover mt-4 max-w-[179px] h-[54px] rounded-[4px] font-ttCommonProNormal font-semibold text-btn-text text-sm md:text-base  md:leading-[1.6rem]'>
      LEARN MORE</button>
      </div>
    {/* </div> */}
    <div className="max-w-[348px] lg:max-w-[468px] xl:max-w-[571px] lg:h-full justify-self-center  rounded-2xl flex items-center">
      <img src={rulesEngine} alt="rules engine image" className='lg:rounded-2xl object-contain'/>
    </div>
  </div>
  )
}

export default RulesEngine
