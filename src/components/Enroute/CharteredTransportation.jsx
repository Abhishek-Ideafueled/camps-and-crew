import React from 'react'

const CharteredTransportation = () => {
  return (
    <div className='w-full bg-custom-back min-h-[726px] text-white'>
        <div className='main-container mx-auto'>
    <div className='flex flex-col md:flex-row gap-5 lg:gap-10'>
        <div className='py-10 lg:py-20 max-w-[568px]'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2 heading-h2 text-white'>
                    <span className='border-b-4 border-b-custom-button max-w-fit'>
                    Book and Manage
                    </span>
                    <span className='border-b-4 border-b-custom-button max-w-fit'>
                    Chartered Transportation
                    </span>
                    </div>
                   <p className='sub-heading text-white'>
                   EnRoute can be configured to manage seat bookings on any mode of transport required for your remote project operations.
                   </p>
                </div>
                <div className='flex flex-col gap-8 pt-10'>
                    <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="/enroute-charter-air-icon.png" alt="enroute charter air icon" />
                        <span className='font-ttCommonProMedium font-medium text-xl text-white leading-[32px]'>
                        Charter Air
                        </span>
                        
                        
                        </div>
                    <span className=' font-ttCommonProRegular font-normal text-base leading-[25.5px]'>
                        Charter flights, helicopters, sea planes, helijets, etc.
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="/enroute-ground-transport-icon.png" alt="enroute ground transport icon" />
                        <span className='font-ttCommonProMedium font-medium text-xl text-white leading-[32px]'>
                        Ground Transportation
                        </span>
                        
                        
                        </div>
                    <span className=' font-ttCommonProRegular font-normal text-base leading-[25.5px]'>
                    Buses, shuttles, vans, cars, etc.
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="/enroute-marine-vessels-icons.png" alt="enroute marine vessels icons" />
                        <span className='font-ttCommonProMedium font-medium text-xl text-white leading-[32px]'>
                        Marine Vessels
                        </span>
                        
                        
                        </div>
                    <span className=' font-ttCommonProRegular font-normal text-base leading-[25.5px]'>
                    Fast support vessels, supply vessels, crew boats, ferries, etc.
                        </span>
                    </div>
                </div>
        </div>
        <div className='enroute-sliders'>
                <div className='enroute-upwards'>
                    
                </div>
        </div>
    </div>
        </div>
      
    </div>
  )
}

export default CharteredTransportation
