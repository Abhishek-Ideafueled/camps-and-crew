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
      <div className='w-full bg-custom-back h-[650px] smalls:h-[700px] md:h-[600px] lg:h-[450px] pt-10'>
         <div className='flex flex-col-reverse justify-between lg:flex-row main-container w-full mx-auto items-center relative'>
            <div className='relative lg:-left-36 w-full max-w-[475px] xl:max-w-[505px] 2xl:-left-72 2xl:max-w-[683px] scLg:left-0 mr-10 h-full '>
         
        <img
          className="w-auto h-auto smalls:h-[400px] mt-5 lg:mt-0 lg:h-[500px] rounded-2xl object-cover"
          src="/sodexo-sella-ness-camp-entrance2.png"
          alt="sodexo-sella-ness-camp-entrance"
        />

            </div>
            {/* <div className='hidden lg:block lg:w-[50%]'>

            </div> */}
      <div className="flex flex-col max-w-[700px] 2xl:max-w-[800px] 2xl:min-w-[700px] items-center self-start">
        <div className="flex flex-col lg:h-[344px] w-full">
          <span className='h-[29px] lg:h-full'>
            <img className='object-cover h-[29px]' src="/sodexo-logo2.png" alt="sodexo-logo" />
          </span>
          <h3 className="cs-heading py-8 lg:py-0 lg:min-h-[230px] flex items-center">
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
    <div className='w-full bg-[#5BC0ED] py-10 h-[200px] md:h-[100px] lg:h-[180px]'>
      <div className='main-container hidden lg:flex mx-auto justify-between'>
      <div className='w-1/2'>

      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between  main-container mx-auto max-w-[700px]">
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
          <span className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
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
