import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const MobileHousekeeping = () => {

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
            title:"Real-Time Room Status Updates After Each Cleaning",
            desc:"With a phone or tablet, housekeeping staff can mark rooms as vacant and clean immediately after finishing a cleaning. Updated room statuses are immediately viewable to front desk staff, enabling them to assign rooms as soon as they are ready.",

        },
        {
            id:2,
            title:"Conduct Walkdowns Using a Mobile Device",
            desc:"With a phone or tablet, housekeepers conducting daily room inspections can log if rooms are vacant or occupied and if they require cleaning.",
            
        },
        {
            id:3,
            title:"Log Rooms Requiring Maintenance from a Mobile Device",
            desc:"Using a mobile device, housekeepers can quickly log maintenance tickets for rooms with damage or in need of repairs. Additionally, administrators can enable cleaning staff to capture and attach photos of the damage directly to these tickets from the device’s camera.",
            
        },
        {
            id:4,
            title:"Monitor Housekeeper Productivity and Safety",
            desc:"Supervisors gain immediate insight into their team's progress during a shift, ensuring cleanings are completed efficiently. If updates from cleaning staff pause unexpectedly, supervisors have the option to check in with their staff at that time.",
            
        }
    ]

  return (
    <div className="w-full">
        <div className="main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
            <div className="flex flex-col max-w-[959px] items-center text-center ">
                <span className="font-ttCommonProNormal font-semibold text-custom-blue text-sm leading-[22.4px] ">
                HOUSEKEEPING AND MAINTENANCE
                </span>
                <h2 className="heading-h2 pb-6 pt-4">
                Mobile Housekeeping for Faster Room Turnover
                </h2>
                <p className="sub-heading">
                Equip your cleaning staff with mobile devices to fast-track room cleaning and maintenance ticket resolution.Minimize latency between the time a room is cleaned and later assigned to the next guest.
                </p>
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
                  alt="Remote camp attendant studies a tablet in a bedroom recently cleaned by her."
                  src="/housekeeper-studies-tablet-worker-room.jpg"/>
             
             
<img className={`${activeImageId===2 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500 rounded-2xl`}
                  alt="Housekeeper in a bedroom constructed of modular construction studies a tablet she holds."
                  src="/housekeeper-bedroom-fly-in-fly-out-camp.jpg"/>
             
             
                 <img className={`${activeImageId===3 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500 rounded-2xl`}
                  alt="Maintenance staff fixes a drawer."
                  src="/maintenance-worker-fixes-drawers.jpg"/>
               
               
                <img className={`${activeImageId===4 ? 'opacity-100 ':'opacity-0'} absolute w-full max-h-[370px] md:max-h-full md:h-auto transition-all duration-500 rounded-2xl`}
                  alt="Cleaning person rummages through cleaning supplies in the hallway of a remote camp with multiple bedroom doors open and illuminated."
                  src="/housekeeping.jpg"/>
               
                 
                
                 
                 
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default MobileHousekeeping
