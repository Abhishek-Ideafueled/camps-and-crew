import React from 'react'

const CleanHarborHero = () => {
  return (
    <div className="w-full max-h-max">
           <div className="w-full bg-custom-back h-[700px] smalls:h-[700px] md:h-[600px] lg:h-[450px] pt-10">
        <div className="flex flex-col-reverse lg:gap-8 lg:flex-row main-container w-full mx-auto">
          <div className="relative cs-back-image">
            <div className="lg:absolute scLg:static scLg:w-[526px] bg-cs-hero-img5 bg-cover min-w-[300px] lg:w-[1000px] h-[300px] md:min-h-[350px] lg:h-[500px] top-[0px] bottom-0 right-0 rounded-2xl bg-no-repeat"></div>
          </div>

          <div className="flex flex-col max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start py-5">
            <div className="flex flex-col lg:h-[344px] w-full">
              <span className="h-[46px] lg:h-full">
                <img
                  className="object-cover h-[46px]"
                  src="/clean_harbors_new_all_white_transparent.png"
                  alt="clean_harbors_new_all_white_transparent logo"
                />
              </span>
              <h3 className="cs-main-heading py-8 lg:py-0 lg:min-h-[230px] flex items-center">
              Clean Harbors Lodging Services Use <br className='hidden md:block' /> SmartLodge to Streamline Daily <br className='hidden md:block' /> Operations at Network of Remote Camps 
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">95%</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                  Decrease in check-in <br className='hidden md:block'/> processing time
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">23%</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                  Increase in accuracy <br className='hidden md:block'/> of reservation data
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">70%</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                  Reduction in <br className='hidden md:block'/> billing discrepancies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="w-full bg-[#5BC0ED] py-10 h-[240px] lg:h-[140px]">
            <div className="main-container hidden lg:flex mx-auto gap-8">
              <div className='cs-back-image'></div>
    
              <div className="grid grid-cols-1 md:grid-cols-3  main-container max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] scLg:max-w-[700px] scLg:pl-10">
                <div className="flex flex-col">
                  <span className="font-gilroyBold text-custom-heading text-xl">
                    PROJECT TYPES
                  </span>
                  <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                  Oil & Gas, Construction
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-gilroyBold text-custom-heading text-xl">
                    REGION
                  </span>
                  <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                  North America
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-gilroyBold text-custom-heading text-xl">
                    CLIENT INDUSTRY
                  </span>
                  <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px] xl:text-nowrap">
                  Workforce Accommodations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CleanHarborHero
