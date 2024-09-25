import React from 'react'

const SodexoImplementsHero = () => {
    return (
        <div className="w-full max-h-max">
        <div className="w-full bg-custom-back h-[700px] smalls:h-[700px] md:h-[600px] lg:h-[450px] pt-10">
          <div className="flex flex-col-reverse lg:gap-8 lg:flex-row main-container w-full mx-auto">
            <div className="relative sodexo-implements cs-back-image">
              <div className="lg:absolute scLg:static scLg:w-[526px] bg-cs-hero-img10 bg-cover lg:bg-contain min-w-[300px] lg:w-[1000px] h-[300px] md:min-h-[350px] lg:h-[500px] top-[0px] bottom-0 right-0 rounded-2xl bg-no-repeat"></div>
            </div>
    
            <div className="flex flex-col max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start">
              <div className="flex flex-col lg:h-[344px] w-full">
                <span className="h-[46px] lg:h-full">
                  <img
                    className="object-cover h-[46px]"
                    src="/white-sodexo.png"
                    alt="white-sodexo logo"
                  />
                </span>
                <h3 className="cs-main-heading py-8 lg:py-0 lg:min-h-[210px] flex items-center">
                Sodexo Partners with Camps & Crew to
 <br className='hidden lg:block'/>Streamline FIFO Transport Logistics and<br className='hidden lg:block'/> Camp Management for Remote<br className='hidden lg:block'/> Hydroelectric Project
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-6 xl:gap-[100px]">
                  <div className="flex flex-col">
                    <span className="cs-nums text-custom-button">95%</span>
                    <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                    Average occupancy during <br className='hidden lg:block' />peak periods of demand 
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="cs-nums text-custom-button">70%</span>
                    <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                    Reduction in <br className='hidden lg:block' /> check-in wait times
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="cs-nums text-custom-button">20%</span>
                    <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                    Increase in <br className="hidden md:block" />guest satisfaction 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#5BC0ED] py-10 h-[240px] lg:h-[140px]">
          <div className="main-container hidden lg:flex gap-8 mx-auto">
            <div className="cs-back-image">
            
            </div>
            <div className="flex max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-6 xl:gap-[100px]">
              <div className="flex flex-col">
                <span className="font-gilroyBold text-custom-heading text-xl">
                  PROJECT TYPES
                </span>
                <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                Renewable Energy
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-gilroyBold text-custom-heading text-xl">
                  REGION
                </span>
                <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                Northern Manitoba
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-gilroyBold text-custom-heading text-xl">
                  CLIENT INDUSTRY
                </span>
                <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px] xl:text-nowrap">
                Integrated Facilities Mgmt.
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      )
}

export default SodexoImplementsHero
