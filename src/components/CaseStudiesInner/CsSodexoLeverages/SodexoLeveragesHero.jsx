import React from 'react'

const SodexoLeveragesHero = () => {
  return (
    <div className="w-full max-h-max">
      <div className="w-full bg-custom-back h-[700px] smalls:h-[700px] md:h-[600px] lg:h-[450px] pt-10">
        <div className="flex flex-col-reverse lg:gap-8 lg:flex-row main-container w-full mx-auto">
          <div className="relative sodexo-lev cs-back-image">
            <div className="lg:absolute scLg:static scLg:w-[526px] cs-img-container min-w-[300px] lg:w-[1000px] h-[300px] md:min-h-[350px] lg:h-[500px] top-[0px] bottom-0 right-0 rounded-2xl bg-no-repeat"></div>
          </div>

          <div className="flex flex-col max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start py-5">
            <div className="flex flex-col lg:h-[344px] w-full">
              <span className="h-[46px] lg:h-full">
                <img
                  className="object-cover h-[46px]"
                  src="/sodexo-logo2.png"
                  alt="sodexo-logo"
                />
              </span>
              <h3 className="cs-main-heading py-8 lg:py-0 lg:min-h-[230px] flex items-center">
              Sodexo Leverages SmartLodge to Lift Room Occupancy and Drive Efficiencies at Cedar Valley Lodge
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-6">
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">98%</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                  Room occupancy reached <br /> during peak demand
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">1100+</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                  Room cleanings managed <br /> daily by SmartLodge
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">4500</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                  Rooms managed across <br /> Cedar Valley Lodge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#5BC0ED] py-10 h-[240px] sm:h-[200px] lg:h-[140px]">
        <div className="main-container hidden lg:flex mx-auto scLg:gap-7">
          <div className='cs-back-image'>
            <div className="w-[526px]"></div>
          </div>
          <div className="flex max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-6 xl:gap-[40px]">
            <div className="flex flex-col">
              <span className="font-gilroyBold text-custom-heading text-xl">
                PROJECT TYPES
              </span>
              <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                Oil & Gas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-gilroyBold text-custom-heading text-xl">
                REGION
              </span>
              <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                Canada
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-gilroyBold text-custom-heading text-xl">
                CLIENT INDUSTRY
              </span>
              <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px] xl:text-nowrap">
                Integrated Facilities Management
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SodexoLeveragesHero
