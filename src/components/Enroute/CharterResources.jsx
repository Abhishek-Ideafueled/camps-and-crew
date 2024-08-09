import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const CharterResources = () => {

    const resourcesArr = [
        {
            id:1,
            iconUrl:"/bus.png",
            heading:"Daily Arrivals & Departures Views",
            desc:"SmartLodge provides front desk agents with a comprehensive panorama of all daily arrivals and departures. The platform enables easy tracking of various guest statuses, such as: 'Cancelled’, ‘No Show’, ‘Checking In’, ‘Checking Out’, ‘In House’, ‘Future’, etc."
        },
        {
            id:2,
            iconUrl:"/digital-cards.png",
            heading:"Digital Registration Cards",
            desc:"Eliminate paper waste and unnecessary printing with digital registration cards. This feature electronically captures signatures for mandatory documents at time of arrival. Example documents include Camp Rules & Regulations or Drug & Alcohol policy documents."
        },
        {
            id:3,
            iconUrl:"/person-avatar.png",
            heading:"Live View of Camp Guests On-Sites",
            desc:"Front desk staff have immediate visibility into room availability and occupancy with SmartLodge, providing a live record of all guests on-site at any given time."
        },
        {
            id:4,
            iconUrl:"/door.png",
            heading:"Easily Re-Assign Guest Rooms",
            desc:"Reception staff can monitor the real-time status of each room within SmartLodge. If rooms for arriving guests are not ready, front desk staff can proactively re-assign guests to rooms that are marked as clean and vacant in the system to ensure a smoother check in process."
        },
        {
            id:5,
            iconUrl:"/menu.png",
            heading:"Batch Check Ins and Check Outs",
            desc:"Perform group check ins and check outs by filtering and selecting all guests arriving or departing en masse. For work crews that need to move their shift dates or that face travel delays en-route to camp, desk agents can easily roll over the arrival and departures dates en masse for affected guests."
        },
       

    ]

  return (
    <div className="w-full relative bg-[#FCFBF8] py-10 lg:py-20">
   <div className='main-container mx-auto py-10 lg:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
            <div className='max-w-[588px] flex flex-col gap-6'>
                <h2 className='font-gilroyBold text-[25px] leading-[32px] md:text-[32px] md:leading-[38.4px] text-custom-heading'>
                Streamlined Setup of Charter Resources
                </h2>
                <p className='font-ttCommonProMedium font-medium text-base leading-[25.6px] text-custom-body'>
                EnRoute transforms the way you manage charter resources by offering a simple setup process. The tool equips travel teams with the capability to efficiently load in transportation routes, input schedules for each route, define seat capacities for all modes of transport, and meticulously compute the comprehensive costs.
                </p>
            </div>
            <div className='max-w-[588px] grid grid-cols-1 md:grid-cols-2 gap-8'>
             <div className='flex flex-col gap-[30px] md:gap-[60px]'>
                <span>
                    <img src="enroute-transportation-routes-icon.png" alt="enroute-transportation-routes-icon" />
                </span>
                <div className='flex flex-col gap-4  md:gap-6'>
                    <h3 className='font-gilroyBold text-xl leading-[20px] lg:text-2xl lg:leading-[28.8px] text-custom-heading'>
                    Set Up Transportation Routes
                    </h3>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Define point of origin and destination for each route</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Assign one or multiple modes of transportation to each route</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Set up multiple legs for a given route, if required</span>
                    </div>
                </div>
             </div>
             <div className='flex flex-col gap-[30px] md:gap-[60px]'>
                <span>
                    <img src="enroute-schedules-for-routes-icon.png" alt="enroute-schedules-for-routes-icon" />
                </span>
                <div className='flex flex-col gap-4  md:gap-6'>
                    <h3 className='font-gilroyBold text-xl leading-[20px] lg:text-2xl lg:leading-[28.8px] text-custom-heading'>
                    Set Up Schedules for Each Route
                    </h3>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Set departure and arrival times for each leg</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Define start and end dates for a given route</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>For faster setup, build out schedules by easily copying transportation routings that recur on a daily, weekly or monthly basis</span>
                    </div>
                </div>
             </div>
             <div className='flex flex-col gap-[30px] md:gap-[60px]'>
                <span>
                    <img src="enroute-seat-capacity-icon.png" alt="enroute-seat-capacity-icon" />
                </span>
                <div className='flex flex-col gap-4  md:gap-6'>
                    <h3 className='font-gilroyBold text-xl leading-[20px] lg:text-2xl lg:leading-[28.8px] text-custom-heading'>
                    Set Seat Capacity for Each Mode of Transport
                    </h3>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Define the seating capacity for each chartered aircraft in your fleet</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Input the seat availability for each chartered bus within your fleet</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Modify seat capacity ad-hoc for modes of transport that change capacity due to the addition of cargo, weather, or other factors</span>
                    </div>
                </div>
             </div>
             <div className='flex flex-col gap-[30px] md:gap-[60px]'>
                <span>
                    <img src="enroute-seat-capacity-icon.png" alt="enroute-seat-capacity-icon" />
                </span>
                <div className='flex flex-col gap-4 :md:gap-6'>
                    <h3 className='font-gilroyBold text-xl leading-[20px] lg:text-2xl lg:leading-[28.8px] text-custom-heading'>
                    Comprehensive Costing of Charter Resources
                    </h3>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Track and manage the cost of chartered travel for every route</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Designate cost for every leg in a route or journey</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-6 h-6'><FaCircleCheck className="text-[#189AD2]"  size={24}/></span>
                        <span className='text-custom-body text-base leading-[25.6px]'>Bill flight share partners, if required</span>
                    </div>
                </div>
             </div>
            </div>
        </div>
   </div>
    
</div>
  )
}

export default CharterResources
