import React from 'react'

const JourneyManagement = () => {
  return (
    <div className='w-full relative'>
    <div className='main-container mx-auto py-10 lg:py-20 flex flex-col gap-[30px] lg:gap-[60px] lg:px-28 xl:px-0 '>
        <div className='flex flex-col gap-4 items-center'>
        <button className="bg-custom-button font-gilroyBold w-[85px] h-[35px] rounded-full">
              EnRoute
            </button>
            <h2 className="heading-h2 text-center">
            Streamlining Journey Management for FIFO Travelers
        </h2>
        <span>
        <svg
            width="174"
            height="16"
            viewBox="0 0 174 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.584 0.722656L1.58396 15.7227" stroke="#647787" />
            <path d="M46.584 0.722656L36.584 15.7227" stroke="#647787" />
            <path d="M81.584 0.722656L71.584 15.7227" stroke="#647787" />
            <path d="M116.584 0.722656L106.584 15.7227" stroke="#647787" />
            <path d="M151.584 0.722656L141.584 15.7227" stroke="#647787" />
            <path d="M18.584 0.722656L8.58396 15.7227" stroke="#647787" />
            <path d="M53.584 0.722656L43.584 15.7227" stroke="#647787" />
            <path d="M88.584 0.722656L78.584 15.7227" stroke="#647787" />
            <path d="M123.584 0.722656L113.584 15.7227" stroke="#647787" />
            <path d="M158.584 0.722656L148.584 15.7227" stroke="#647787" />
            <path d="M25.584 0.722656L15.584 15.7227" stroke="#647787" />
            <path d="M60.584 0.722656L50.584 15.7227" stroke="#647787" />
            <path d="M95.584 0.722656L85.584 15.7227" stroke="#647787" />
            <path d="M130.584 0.722656L120.584 15.7227" stroke="#647787" />
            <path d="M165.584 0.722656L155.584 15.7227" stroke="#647787" />
            <path d="M32.584 0.722656L22.584 15.7227" stroke="#647787" />
            <path d="M67.584 0.722656L57.584 15.7227" stroke="#647787" />
            <path d="M102.584 0.722656L92.584 15.7227" stroke="#647787" />
            <path d="M137.584 0.722656L127.584 15.7227" stroke="#647787" />
            <path d="M172.584 0.722656L162.584 15.7227" stroke="#647787" />
            <path d="M39.584 0.722656L29.584 15.7227" stroke="#647787" />
            <path d="M74.584 0.722656L64.584 15.7227" stroke="#647787" />
            <path d="M109.584 0.722656L99.584 15.7227" stroke="#647787" />
            <path d="M144.584 0.722656L134.584 15.7227" stroke="#647787" />
          </svg>
          </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 z-10 gap-4 lg:gap-8'>
        <div className='flex flex-col gap-[30px] md:gap-[60px] p-4 lg:p-6'>
            <span>
           <img src="/enroute-manifest-mgmt-icon.png" alt="enroute manifest management icon" />
            </span>
            <div className="flex flex-col gap-6">
            <h2 className="font-gilroyBold text-custom-heading text-2xl">
            Real-Time Manifest Management
            </h2>
            <p className="font-ttCommonProNormal text-custom-body text-sm">
            Accommodate real-time changes, manage anomalies, and proactively re-route passengers for seamless FIFO travel coordination.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[30px] md:gap-[60px] p-4 lg:p-6'>
            <span>
            <img src="/enroute-travel-roster-icon.png" alt="enroute travel roster icon " />
            </span>
            <div className="flex flex-col gap-6">
            <h2 className="font-gilroyBold text-custom-heading text-2xl">
            Automate Travel Bookings for Workers on Roster Rotations
            </h2>
            <p className="font-ttCommonProNormal text-custom-body text-sm">
            Streamline workflows by automating bookings for rotating crews-ideal for travel teams managing transportation for large workforces.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[30px] md:gap-[60px] p-4 lg:p-6'>
            <span>
           <img src="/enroute-utilization-transportation-icon.png" alt="enroute utilization transportation icon " />
            </span>
            <div className="flex flex-col gap-6">
            <h2 className="font-gilroyBold text-custom-heading text-2xl">
            Greater Utilization of Transportation Resources
            </h2>
            <p className="font-ttCommonProNormal text-custom-body text-sm">
            Fill all seats across all modes of charter transportation required to move your workers to and from remote projects.
            </p>
          </div>
        </div>
        
        </div>
       
    </div>
    <div className='absolute bottom-0 left-0 '>
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_0_3)">
<path d="M200 100H100V200H200V100Z" fill="#ECE7E0"/>
<path d="M100 100H0V200H100V100Z" fill="#ECE7E0"/>
<path d="M100 0H0V100H100V0Z" fill="#ECE7E0"/>
</g>
<defs>
<clipPath id="clip0_0_3">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg>

    </div>
  
</div>
  )
}

export default JourneyManagement
