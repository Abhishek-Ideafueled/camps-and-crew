import React from 'react'
import { Link } from 'react-scroll'

const EnrouteHero = () => {
  return (
    <div className='w-full bg-custom-back min-h-[600px] py-10 lg:py-20'>
        <div className="main-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <span className="text-custom-blue font-ttCommonProRegular tracking-[0.8px] font-semibold text-sm leading-[1.4rem]">
              ONLINE BOOKING TOOL FOR ERM TRAVEL
              </span>
              <span className="font-gilroyBold text-white text-[30px] md:text-[32px] lg:text-[50px] lg:leading-[3.8rem]">
              Book and Manage All Modes of Transport for your FIFO Travelers
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 w-full justify-center lg:justify-start">
              <div className="btn-orange w-full max-w-[210px] lg:w-[187px] cursor-pointer flex items-center justify-center h-[58px] rounded-[4px] hover:bg-white transition-all duration-300 text-btn-text">
           <Link to="demoForm">BOOK A DEMO</Link>     
              </div>
              <div className="font-ttCommonProNormal font-semibold cursor-pointer w-full max-w-[210px] lg:w-[187px] flex items-center justify-center h-[58px] rounded-[4px] hover:bg-white hover:text-btn-text hover:border-white transition-all duration-300 text-custom-button border-[1px] border-custom-button">
              <Link to="demoForm"> SPEAK TO SALES</Link>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[588px] h-[340px] lg:h-[420px] mx-auto">
          <div className=" w-full h-full flex items-center justify-center">
                <img
                  className="rounded-2xl w-full h-full sm:w-full object-cover"
                  src="/fifo-workers-deplane-tarmac-western-australia.png"
                  alt="fifo-workers-deplane-tarmac-western-australia"
                />
               
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnrouteHero
