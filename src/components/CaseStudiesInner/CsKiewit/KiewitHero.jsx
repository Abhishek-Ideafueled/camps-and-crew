import React from 'react'

const KiewitHero = () => {
    return (
      <div className="w-full max-h-max">
        <div className="w-full bg-custom-back h-[700px] smalls:h-[700px] md:h-[600px] lg:h-[450px] pt-10">
          <div className="flex flex-col-reverse lg:gap-8 lg:flex-row main-container w-full mx-auto">
            <div className="relative kiewit cs-back-image">
              <div className="lg:absolute scLg:static scLg:w-[526px] bg-cs-hero-img11 bg-cover lg:bg-contain min-w-[300px] lg:w-[1000px] h-[300px] md:min-h-[350px] lg:h-[500px] top-[0px] bottom-0 right-0 rounded-2xl bg-no-repeat"></div>
            </div>

            <div className="flex flex-col max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start py-5">
              <div className="flex flex-col lg:h-[344px] w-full">
                <span className="h-[24px] lg:h-full">
                  <img
                    className="object-cover h-[24px]"
                    src="/white-kiewit.png"
                    alt="white-kiewit logo"
                  />
                </span>
                <h3 className="cs-main-heading py-8 lg:py-0 lg:min-h-[230px] flex items-center">
                  Kiewit Transforms FIFO Operations at Upper Mattagami
                  Hydroelectric Project with EnRoute and SmartLodge
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-6 xl:gap-[100px]">
                  <div className="flex flex-col">
                    <span className="cs-nums text-custom-button">65%</span>
                    <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                      Reduction in check-in <br className="hidden lg:block" />
                      processing times
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="cs-nums text-custom-button">25%</span>
                    <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                      Decrease in manual data <br className="hidden lg:block" />{" "}
                      entry errors
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="cs-nums text-custom-button">35%</span>
                    <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                      Increase in speed of <br className="hidden md:block" />
                      room turnover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#5BC0ED] py-10 h-[240px] lg:h-[140px]">
          <div className="main-container hidden mx-auto lg:flex scLg:gap-8 w-full">
            <div className="cs-back-image">
              <div className='w-[626px]'>

              </div>
            </div>
            <div className="flex max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start">
              <div className=" grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-6 xl:gap-[100px]">
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
                    Northern Ontario
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-gilroyBold text-custom-heading text-xl">
                    CLIENT INDUSTRY
                  </span>
                  <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px] xl:text-nowrap">
                    Engineering and Construction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default KiewitHero
