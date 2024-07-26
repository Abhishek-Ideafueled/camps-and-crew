import React from 'react';


const OurTeam = () => {
  return (
    <div className="w-full bg-[#FCFBF8]">
      <div className="main-container mx-auto flex flex-col">
        <div className="flex flex-col gap-4 items-center pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[60px]">
          <h1
            className="text-[25px] md:text-[32px] lg:text-h2 lg:leading-[3rem] text-custom-heading font-gilroyBold font-bold"
            data-aos="fade-up"
          >
            Our Management Team
          </h1>
          <div data-aos="fade-up" data-aos-delay="100">
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
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 pb-10 lg:py-20'>

            <div data-aos="fade-up" data-aos-delay="100" 
            className='col-span-1 md:col-span-2 flex flex-col md:flex-row gap-[25px] md:gap-10 lg:gap-[60px] items-center pb-10 md:pb-20 border-b-custom-button border-b-[1px]'>
                <div className='w-[150px] h-[180px] md:w-[320px] md:h-[380px]'>
                <img src="/beverly-mccabe-headshot.png" className=' object-cover' alt="beverly-mccabe-headshot" />
                </div>
                <div className='flex flex-col gap-4 md:max-w-[352px] lg:max-w-[632px] xl:max-w-[836px] text-center md:text-start'>
                    <span className='flex flex-col gap-1'>
                        <h3 className='text-xl lg:text-2xl lg:leading-7 text-custom-heading font-gilroyBold font-normal '>Beverly McCabe</h3>
                        <p className='font-ttCommonProRegular text-custom-body text-sm md:text-base'>Chief Executive Officer and Founder</p>
                    </span>
                     <span className='font-ttCommonProRegular text-custom-body text-sm md:text-base'>
                     Bev founded the company in 1992, serving as the lead developer of the company’s first property management system. An engineer by trade, Bev remains heavily involved in product development. Among other responsibilities, she dedicates much of her time to ensuring our technology continues to meet the ever-evolving needs of our clients. Prior to founding the company, Bev served as the Chief Information Officer of a Southern California hotel chain.
                        </span>   
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="150"
             className='col-span-1 flex flex-col lg:flex-row gap-[25px] items-center justify-center mt-10 lg:mt-20 mr-5'>
                <div className='w-[130px] h-[160px] md:w-[220px] md:h-[260px]'>
                <img src="/jon-miller-headshot-chief-operating-officer.png" className='object-cover' alt="jon-miller-headshot-chief-operating-officer" />
                </div>
                <div className='flex flex-col gap-4 text-center md:max-w-[332px] lg:max-w-[208px] xl:max-w-[341px] lg:text-start'>
                    <span className='flex flex-col gap-1 text-center lg:text-start'>
                        <h3 className='text-xl leading-6 text-custom-heading font-gilroyBold font-normal '>Jonathan Miller</h3>
                        <p className='font-ttCommonProRegular text-sm text-custom-body'>Chief Operating Officer</p>
                    </span>
                     <span className='font-ttCommonProRegular text-custom-body text-sm md:text-base'>
                     In his role, Jon works with various teams to ensure we are on track to meet our commitment to robust product development and superior service for our clients. Prior to Camps & Crew, Jon worked in hotel management.
                        </span>   
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200"
             className='col-span-1 flex flex-col lg:flex-row gap-[25px] items-center justify-center mt-10 lg:mt-20 ml-5'>
                <div className='w-[130px] h-[160px] md:w-[220px] md:h-[260px]'>
                <img src="/mark-lunetta-headshot-chief-technology-officer.png" className=' object-cover' alt="mark-lunetta-headshot-chief-technology-officer" />
                </div>
                <div className='flex flex-col gap-4 text-center md:max-w-[332px] lg:max-w-[208px] xl:max-w-[341px] lg:text-start'>
                    <span className='flex flex-col gap-1 text-center lg:text-start'>
                        <h3 className='text-xl leading-6 text-custom-heading font-gilroyBold font-normal '>Mark Lunetta</h3>
                        <p className='font-ttCommonProRegular text-sm text-custom-body'>Chief Technology Officer</p>
                    </span>
                     <span className='font-ttCommonProRegular text-custom-body text-sm md:text-base'>
                     Mark drives the vision for our product roadmap, collaborating with internal and external stakeholders to ensure that our product suite remains reliable yet innovative. Mark previously worked consulting companies on enterprise software development.
                        </span>   
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="250" 
            className='col-span-1 flex flex-col lg:flex-row gap-[25px] items-center justify-center mt-10 mr-5'>
                <div className='w-[130px] h-[160px] md:w-[220px] md:h-[260px]'>
                <img src="/jon-carmody-headshot-chief-software-architect.png" className=' object-cover' alt="jon-carmody-headshot-chief-software-architect" />
                </div>
                <div className='flex flex-col gap-4 text-center md:max-w-[332px] lg:max-w-[208px] xl:max-w-[341px] lg:text-start'>
                    <span className='flex flex-col gap-1 text-center lg:text-start'>
                        <h3 className='text-xl leading-6 text-custom-heading font-gilroyBold font-normal '>Jonathan Carmody</h3>
                        <p className='font-ttCommonProRegular text-sm text-custom-body'>Chief Software Architect</p>
                    </span>
                     <span className='font-ttCommonProRegular text-custom-body text-sm md:text-base'>
                     Jon oversees the development of our core products, SmartLodge and EnRoute, having spent many months during his tenure working directly with clients at remote camps in Canada. Jon held various engineering roles before Camps & Crew.
                        </span>   
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" 
            className='col-span-1 flex flex-col lg:flex-row gap-[25px] items-center justify-center mt-10 ml-5'>
                <div className='w-[130px] h-[160px] md:w-[220px] md:h-[260px]'>
                <img src="/cei-sullivan-headshot-director-training-implementation.png" className=' object-cover' alt="cei-sullivan-headshot-director-training-implementation" />
                </div>
                <div className='flex flex-col gap-4 text-center md:max-w-[332px] lg:max-w-[208px] xl:max-w-[341px] lg:text-start'>
                    <span className='flex flex-col gap-1 text-center lg:text-start'>
                        <h3 className='text-xl leading-6 text-custom-heading font-gilroyBold font-normal '>Cei Sullivan</h3>
                        <p className='font-ttCommonProRegular text-sm text-custom-body'>Head of Training and Implementation</p>
                    </span>
                     <span className='font-ttCommonProRegular text-custom-body text-sm md:text-base'>
                     Prior to joining the team, Cei oversaw travel and accommodations at a remote gold mine in British Columbia, Canada. Cei was a power user of SmartLodge during her nine years at the mine. She now leads new client training and implementations.
                        </span>   
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam
