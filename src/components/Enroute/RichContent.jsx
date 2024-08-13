import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const RichContent = () => {

    const [activeId, setActiveId] = useState(1);
    const [ activeImageId,setActiveImageId] = useState(1);
    const contentRef = useRef();
    
    const handleAccordionClick = (id) => {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
        setActiveImageId(id);
      }
    };

    const HousekeepingArr = [
        {
            id:1,
            title:"Content from Multiple Global Distribution Systems",
            desc:"EnRoute can pull air, hotel or rental car content from global distribution systems such as Sabre, Amadeus, or Travelport, ensuring a wide array of commercial content is accessible based on your geographical needs.",

        },
        {
            id:2,
            title:"Direct Connect Content",
            desc:"Gain access to air, hotel or rental car content not available through the GDS with direct connect content, sourced directly from the providers that matter most to your corporate travel program.",
            
        },
        {
            id:3,
            title:"Preferred Carriers",
            desc:"System administrators can tailor the platform to spotlight carriers that align with your business's unique travel policies and preferences, ensuring a booking process that supports the strategic objectives of your business travel program.",
            
        },
        {
            id:4,
            title:"Negotiated Rates",
            desc:"Load the competitive rates your business has negotiated with its preferred carriers into EnRoute, ensuring your travel coordinators or individual travelers can book the most cost-effective content.",
            
        }
    ]

  return (
    <div className='w-full'>
        <div className='main-container mx-auto flex flex-col items-center gap-[30px] lg:gap-[60px] py-10 lg:py-20'>
        <div className="flex flex-col w-full gap-4 items-center max-w-[1005px]">
          <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
          COMMERCIAL CONTENT
          </span>
          <h2 className="heading-h2 text-center">
          Rich Content Sources
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 w-full items-center md:h-[480px]'>

<div className='py-[35px] max-w-[588px] mx-auto'>

  <div className='flex flex-col'>
   {
    HousekeepingArr.map((item)=>(
      <div className="flex flex-col cursor-pointer border-b-[#CDD5DF] border-b-[1px]" key={item.id}                   
      >
      <div
       onClick={() => handleAccordionClick(item.id)}
      className="font-gilroyBold text-custom-heading text-lg lg:text-xl z-10 leading-[24px] flex items-center justify-between h-[56px]">
        {item.title}
       <span className={`${activeId === item.id ? 'rotate-180 transition-all duration-500' : 'transition-all duration-300'}`}><IoIosArrowDown /></span> 
      </div>
      <div
                          ref={contentRef}
                          className={`${activeId === item.id ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'} 
                              overflow-hidden transition-all duration-300`}
                          style={{
                              maxHeight: activeId === item.id ? `${contentRef.current?.scrollHeight}px` : '0',
                          }}
                      >
     <div className="text-custom-body font-ttCommonProNormal text-base w-[95%] pb-2">
                              {item.desc}
                          </div>
      </div>
    </div>
    ))
   }

  </div>

</div>
<div className="h-[270px] sm:mt-8 md:mt-0 md:h-[480px] max-w-[588px] relative w-full mx-auto flex items-center">

<img className={`${activeImageId===1 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500  rounded-2xl`}
    alt="people-seated-rows-commercial-plane."
    src="/people-seated-rows-commercial-plane.jpg"/>


<img className={`${activeImageId===2 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500 rounded-2xl`}
    alt="air-canada-planes-parked-gates"
    src="/air-canada-planes-parked-gates2.jpg"/>


   <img className={`${activeImageId===3 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500 rounded-2xl`}
    alt="commercial-plane-hallway-rows-seats."
    src="/commercial-plane-hallway-rows-seats2.jpg"/>
 
 
  <img className={`${activeImageId===4 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500 rounded-2xl`}
    alt="women-corporate-office-working-computers"
    src="/women-corporate-office-working-computers2.jpg"/>
 
   
  
   
   
</div>
</div>
        </div>
    </div>
  )
}

export default RichContent
