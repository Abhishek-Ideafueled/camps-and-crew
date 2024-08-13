import React from 'react'

const ManageBussing = () => {

    const bussingArr = [

        {
            id:1,
            title:"Shuttles Between Camps",
            url:"enroute-shuttles-between-camps-icon.png",
            alt:"enroute-shuttles-between-camps-icon",
            desc:"Establish bus schedules to facilitate transport for workers who may need to switch camps mid-stay, access amenities at different camps, or reach another camp for their shift pick-up."
        },
        {
            id:2,
            title:"Shuttles from Camp to the Project Site",
            url:"enroute-shuttles-project-site-icon.png",
            alt:"enroute-shuttles-project-site-icon",
            desc:"Create bus schedules to provide a seamless commute for workers who require timely transportation to their designated project sites. For larger project sites, these routes can be set up with multiple stops for pickup and drop-off."
        },
        {
            id:3,
            title:"Shuttle Between Offices at the Site",
            url:"enroute-shuttles-offices-icon.png",
            alt:"enroute-shuttles-offices-icon",
            desc:"Regular bussing service to transport workers from different office locations across a remote project or asset can also be managed in EnRoute, facilitating movement often required of workers staffed at larger sites."
        },
        {
            id:4,
            title:"Ad-Hoc Buses and Shuttles",
            url:"enroute-ad-hoc-shuttles-icon.png",
            alt:"enroute-ad-hoc-shuttles-icon",
            desc:"Manage ad hoc bus service with EnRoute, allowing your team to book and manage seats outside of your regularly schedule routes to accommodate weather changes, emergencies, or visitors requiring transportation while at site."
        }
    ]


  return (
    <div className='w-full'>
        <div className='main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]'>
        <div className="flex flex-col w-full gap-4 items-center max-w-[1005px]">
          <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
            CHARTERED TRANSPORTATION
          </span>
          <h2 className="heading-h2 text-center">
          Manage Bussing Between Worksites, Camps and More
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8'>
            {
                bussingArr.map((item)=>(
                    <div className='flex flex-col gap-[30px] md:gap-[40px] lg:gap-[60px] p-4 md:p-6 md:min-h-[438px]' key={item.id}>
                      <span className='h-10'>
                        <img src={item.url} alt={item.alt} />
                      </span>
                      <div className='flex flex-col gap-6'>
                        <h3 className='text-xl leading-[25px] lg:text-2xl lg:leading-[28.8px] font-gilroyBold text-custom-heading'>
                        {item.title}
                        </h3>
                        <p className='text-base font-ttCommonProNormal text-custom-body'>
 {item.desc}
                        </p>
                      </div>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default ManageBussing
