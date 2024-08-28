import React from 'react'

const SodexoDrivesHero = () => {
  return (
    <div className='w-full bg-case-studies-innner py-10 lg:py-20 lg:max-h-[595px] relative'>
      {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 h-full main-container mx-auto lg:max-w-full lg:px-0'> */}
        <div className='absolute -left-10 max-w-[567px] h-full order-last lg:order-first'>       
        <img className='w-full h-full rounded-r-2xl object-cover'
        src="/sodexo-sella-ness-camp-entrance2.png" 
        alt="sodexo-sella-ness-camp-entrance" />
        </div>


        <div className='flex flex-col lg:pt-5 main-container w-full pl-28 '>
        <div className='flex flex-col gap-[60px] lg:h-[344px]'>
        <span>
          <img src="/sodexo-logo2.png" alt="sodexo-logo" />
        </span>
        <h3 className='cs-heading'>
        Sodexo Drives Up Room Occupancy and Streamlines Billing at Sella Ness Lodge
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-between'>
          <div className='flex flex-col'>
             <span className='cs-heading text-custom-button'>95%</span>
             <span className='font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]'>
             Average room occupancy <br /> during peak demand
             </span>
          </div>
          <div className='flex flex-col'>
             <span className='cs-heading text-custom-button'>2X</span>
             <span className='font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]'>
             Increase in the rate of <br /> room turnover
             </span>
          </div>
          <div className='flex flex-col'>
             <span className='cs-heading text-custom-button'>95%</span>
             <span className='font-ttCommonProNormal font-semibold text-white font-base leading-[22.4px]'>
             Accuracy of charge sheets <br /> provided to paying client
             </span>
          </div>
        </div>
        </div>
        <div className='lg:grid grid-cols-1 md:grid-cols-3 justify-between hidden pt-10'>
          <div className='flex flex-col'>
             <span className='font-gilroyBold text-custom-heading text-xl'>PROJECT TYPES</span>
             <span className='font-ttCommonProRegular font-medium text-custom-heading text-base leading-[25.6px]'>
             Average room occupancy <br /> during peak demand
             </span>
          </div>
          <div className='flex flex-col'>
             <span className='font-gilroyBold text-custom-heading text-xl'>REGION</span>
             <span className='font-ttCommonProRegular font-medium text-custom-heading text-base leading-[25.6px]'>
             Increase in the rate of <br /> room turnover
             </span>
          </div>
          <div className='flex flex-col'>
             <span className='font-gilroyBold text-custom-heading text-xl'>CLIENT INDUSTRY</span>
             <span className='font-ttCommonProRegular font-medium text-custom-heading text-base leading-[25.6px]'>
             Accuracy of charge sheets <br /> provided to paying client
             </span>
          </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default SodexoDrivesHero
