
const Reception = () => {

    const receptionArr = [
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
        <div className="main-container mx-auto flex flex-col gap-[30px] md:gap-[60px] ">
        <h2 className='self-center heading-h2 border-b-4 border-b-custom-button'>
        Reception & Front Desk
                </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:gap-8 z-10">
    <div className="flex flex-col gap-6 px-6 py-8">
        <div className="font-gilroyBold font-normal text-custom-heading text-[26px] leading-[32px] md:text-[32px] md:leading-[38px]">
            Seamless Arrivals & Departures for Guests
            </div>
            <div className="font-ttCommonProNormal font-medium text-base text-custom-body">
            Simplify and expedite the arrival process for guests after long travel days to camp. After guest departure, ensure rooms are marked for cleaning and swiftly turned over for the next set of arrivals.
            </div>

    </div>

  {  receptionArr.map((item)=>(<div key={item.id} className="flex flex-col gap-[30px] md:gap-[60px] py-6 px-4 md:px-6 md:py-8">
        <span>
            <img src={item.iconUrl} alt={item.iconUrl} />
        </span>
        <div className="flex flex-col gap-6">
    <div className="font-gilroyBold font-normal text-custom-heading text-xl leading-[25px] lg:text-2xl lg:leading-[28px]">
           {item.heading}
            </div>
            <div className="font-ttCommonProNormal font-medium text-base text-custom-body">
           {item.desc}
            </div>
            </div>
    </div>))}
    </div>

        </div>
        <div className="absolute left-0 bottom-0 z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_82_47)">
<path d="M200 100H100V200H200V100Z" fill="#ECE7E0"/>
<path d="M100 100H0V200H100V100Z" fill="#ECE7E0"/>
<path d="M100 0H0V100H100V0Z" fill="#ECE7E0"/>
</g>
<defs>
<clipPath id="clip0_82_47">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
    </div>
  )
}

export default Reception
