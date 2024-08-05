

const Housekeeping = () => {

    const housekeepingArr = [
        {
            id:1,
            iconUrl:"/workload.png",
            heading:"Assign Daily Cleaning Workloads",
            desc:"Housekeeping supervisors can delegate daily cleaning tasks across multiple rooms, dorms, or wings to their staff. The SmartLodge Workload screen shows housekeepers the status of all rooms and facilitates swift task assignment where service is needed most."
        },
        {
            id:2,
            iconUrl:"/Schedules.png",
            heading:"Set Up Multiple Cleaning Schedules",
            desc:"Create multiple cleaning schedules tailored to specific paying clients, companies, contractors, room types, or guest types. Manage a variety of cleaning intervals, from post-check out and mid-swing cleans to weekly, bi-weekly, and end-of-rotation cleanings."
        },
        {
            id:3,
            iconUrl:"/multiple-level.png",
            heading:"Manage Multiple Levels of Service",
            desc:"SmartLodge allows for distinct service levels, from full clean to light clean, linen changes, bathroom cleaning, or garbage disposal. Service levels can be tailored to a specific client, company, contractor, or room type, depending upon the requirements of the camp."
        },
        {
            id:4,
            iconUrl:"/Bed.png",
            heading:"Cleanings for Permanent Rooms",
            desc:"Equip housekeeping staff with the ability to monitor all rooms “permanently” assigned to specific guests. This allows for the strategic scheduling of cleanings on lighter workload days, giving priority to rooms needing immediate service before servicing vacant ones awaiting the return of the “permanent” occupant."
        },
        {
            id:5,
            iconUrl:"/settings.png",
            heading:"Maintenance Ticketing System",
            desc:"Easily create, modify, and track work orders for rooms requiring maintenance. Expedite the time it takes to resolve tickets for rooms out-of-service. In addition to camp staff using SmartLodge, guests may optionally be set up to create maintenance tickets for their own rooms via email or SMS."
        },
       

    ]

  return (
    <div className="w-full relative bg-[#FCFBF8]">
      <div className="main-container mx-auto py-10 lg:py-20 flex flex-col gap-[60px]">
        <h2 className="self-center heading-h2 border-b-4 border-b-custom-button">
          Housekeeping and Maintenance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:gap-8 z-10">
          <div className="flex flex-col gap-6 px-6 py-8">
            <div className="font-gilroyBold font-normal text-custom-heading text-[26px] leading-[32px] md:text-[32px] md:leading-[38px]">
              Streamline Cleaning and Maintenance at Camp
            </div>
            <div className="font-ttCommonProNormal font-medium text-base text-custom-body">
              Transform your housekeeping and maintenance operations with robust
              system capabilities tailored to meet the unique requirements of
              your camp. SmartLodge offers unparalleled customization to
              seamlessly align with your camp’s configuration, occupants and
              servicing needs.
            </div>
          </div>

          {housekeepingArr.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[30px] md:gap-[60px] py-6 px-4 md:px-6 md:py-8"
            >
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
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 bottom-0 z-0">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_82_47)">
            <path d="M200 100H100V200H200V100Z" fill="#ECE7E0" />
            <path d="M100 100H0V200H100V100Z" fill="#ECE7E0" />
            <path d="M100 0H0V100H100V0Z" fill="#ECE7E0" />
          </g>
          <defs>
            <clipPath id="clip0_82_47">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Housekeeping

