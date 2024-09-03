import React from 'react'

const SodexoDrivesHero = () => {
  return (
    <div className="w-full max-h-max">
      {/* <div className="absolute -left-10 max-w-[567px] h-full top-20">
        <img
          className="w-full h-[482px] rounded-r-2xl object-cover"
          src="/sodexo-sella-ness-camp-entrance2.png"
          alt="sodexo-sella-ness-camp-entrance"
        />
      </div> */}
      <div className="w-full bg-custom-back h-[700px] smalls:h-[700px] md:h-[600px] lg:h-[450px] pt-10">
        <div className="flex flex-col-reverse lg:gap-8 lg:flex-row main-container w-full mx-auto">
          <div className="relative cs-back-image">
            <div className="lg:absolute scLg:static scLg:w-[526px] bg-cs-hero-img bg-center bg-cover min-w-[300px] lg:w-[1000px] h-[300px] md:min-h-[350px] lg:h-[500px] top-[0px] bottom-0 right-0 rounded-2xl bg-no-repeat"></div>
          </div>

          <div className="flex flex-col max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] items-center self-start py-5">
            <div className="flex flex-col lg:h-[344px] w-full">
              <span className="h-[29px] lg:h-full">
                <img
                  className="object-cover h-[29px]"
                  src="/sodexo-logo2.png"
                  alt="sodexo-logo"
                />
              </span>
              <h3 className="cs-main-heading py-8 lg:py-0 lg:min-h-[230px] flex items-center">
                Sodexo Drives Up Room Occupancy and Streamlines Billing at Sella
                Ness Lodge
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">95%</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                    Average room occupancy <br /> during peak demand
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">2X</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                    Increase in the rate of <br /> room turnover
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="cs-nums text-custom-button">95%</span>
                  <span className="font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]">
                    Accuracy of charge sheets <br /> provided to paying client
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#5BC0ED] py-10 h-[200px] sm:h-[150px] lg:h-[140px]">
        <div className="main-container hidden lg:flex mx-auto gap-8">
          <div className='cs-back-image'></div>

          <div className="grid grid-cols-1 md:grid-cols-3  main-container max-w-[600px] xl:max-w-[800px] xl:min-w-[700px] scLg:max-w-[700px] scLg:pl-10">
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
                United Kingdom
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
  );
}

export default SodexoDrivesHero
