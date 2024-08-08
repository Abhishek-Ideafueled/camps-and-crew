import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";


const FAQs = () => {

    const faqArr=[
        {
            id:1,
            title:"Do you partner with any camp management or catering company?",
            desc:"Indeed, we do. We have developed SmartLodge to support any camp management or catering operation, with the ability to configure the system for a diverse range of remote locations and processes. The system can be tailored to meet the unique operational requirements of any camp or company.",

        },
        {
            id:2,
            title:"Is SmartLodge a good option for smaller workforce camps?",
            desc:"The system can be configured to support any camp, lodge or village, no matter the size of your accommodations. Its core functionalities, including room booking and room assignments, cleaning and maintenance, and billing capabilities, provide essential value even to smaller workforce camps.",

        },
        {
            id:3,
            title:"Can the system support the needs of open lodges or camps?",
            desc:"With roots in traditional hospitality, SmartLodge is adept at supporting the operations of any lodging facility. Relative to other software offerings built to support workforce accommodations, SmartLodge delivers superior features for online room booking, rates management, billing, and invoicing. These features can be particularly beneficial for open camps that may accommodate individual drop-ins, crews requiring short-term lodging, companies seeking overflow housing, or some combination therein.",

        },
        {
            id:4,
            title:"What kind of workforce camps has SmartLodge been deployed at?",
            desc:"SmartLodge runs remote mining camps, oilfield lodges, and workforce camps for remote construction projects. The system has been flexibly architected to adapt to the requirements of projects with different lifecycles across multiple industries.",

        },
        {
            id:5,
            title:"How can SmartLodge elevate the wellbeing of workers staying at camp?",
            desc:"SmartLodge elevates the experience of camp residents by complementing the tangible amenities your facility might already offer, such as nutritious meals, fitness facilities, recreation facilities, or lounges to unwind. Our software streamlines the important intangible aspects of the experience-ensuring guests can check in to their rooms swiftly, that their rooms are cleaned in a timely manner, that their maintenance requests are seen too-naming just a few ways. Our technology empowers companies to provide a positive experience at camp, ensuring workers feel comfortable, rested, and ready for work.",

        },
    ]

    
    const [activeId, setActiveId] = useState(0);
    const contentRef = useRef();

    const handleAccordionClick = (id) => {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
    };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <div className="main-container mx-auto py-10 lg:py-20 flex flex-col gap-[30px] lg:gap-[76px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="heading-h2">FAQs</h2>
          <span>
            <svg
              width="174"
              height="17"
              viewBox="0 0 174 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7320_6583)">
                <path d="M11.584 0.847656L1.58396 15.8477" stroke="#647787" />
                <path d="M46.584 0.847656L36.584 15.8477" stroke="#647787" />
                <path d="M81.584 0.847656L71.584 15.8477" stroke="#647787" />
                <path d="M116.584 0.847656L106.584 15.8477" stroke="#647787" />
                <path d="M151.584 0.847656L141.584 15.8477" stroke="#647787" />
                <path d="M18.584 0.847656L8.58396 15.8477" stroke="#647787" />
                <path d="M53.584 0.847656L43.584 15.8477" stroke="#647787" />
                <path d="M88.584 0.847656L78.584 15.8477" stroke="#647787" />
                <path d="M123.584 0.847656L113.584 15.8477" stroke="#647787" />
                <path d="M158.584 0.847656L148.584 15.8477" stroke="#647787" />
                <path d="M25.584 0.847656L15.584 15.8477" stroke="#647787" />
                <path d="M60.584 0.847656L50.584 15.8477" stroke="#647787" />
                <path d="M95.584 0.847656L85.584 15.8477" stroke="#647787" />
                <path d="M130.584 0.847656L120.584 15.8477" stroke="#647787" />
                <path d="M165.584 0.847656L155.584 15.8477" stroke="#647787" />
                <path d="M32.584 0.847656L22.584 15.8477" stroke="#647787" />
                <path d="M67.584 0.847656L57.584 15.8477" stroke="#647787" />
                <path d="M102.584 0.847656L92.584 15.8477" stroke="#647787" />
                <path d="M137.584 0.847656L127.584 15.8477" stroke="#647787" />
                <path d="M172.584 0.847656L162.584 15.8477" stroke="#647787" />
                <path d="M39.584 0.847656L29.584 15.8477" stroke="#647787" />
                <path d="M74.584 0.847656L64.584 15.8477" stroke="#647787" />
                <path d="M109.584 0.847656L99.584 15.8477" stroke="#647787" />
                <path d="M144.584 0.847656L134.584 15.8477" stroke="#647787" />
              </g>
              <defs>
                <clipPath id="clip0_7320_6583">
                  <rect
                    width="173"
                    height="16"
                    fill="white"
                    transform="translate(0.5 0.125)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
            {faqArr.map((item)=>(
                <div className="bg-[#ECE7E0] flex flex-col" key={item.id}>
                    <div className="flex justify-between p-4 items-start z-10 relative" onClick={()=>handleAccordionClick(item.id)}>
                        <h4 className="text-custom-heading font-gilroyBold text-lg lg:text-xl lg:leading-6 w-[90%] sm:w-full ">{item.title}</h4>
                        <div className={`accordion-btns ${activeId === item.id ? 'btn-clicked' : ''}  p-2 w-[24px] h-[24px] flex items-center`}> 
                          {/* <FaPlus className={` ${activeId === item.id ? ' h-full w-full rotate-360 transition-all duration-300':' h-0 w-0 rotate-360 transition-all duration-600'} absolute inset-0`}/> 
                        <FaMinus className={` ${activeId === item.id ? ' h-0 w-0 rotate-360 transition-all duration-300':'h-full w-full rotate-540 transition-all duration-300'} absolute inset-0`} /> */}
                        </div>
                    </div>
                    <div
                                        ref={contentRef}
                                        className={`${activeId === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} 
                                            overflow-hidden transition-all duration-300 px-4`}
                                        style={{
                                            maxHeight: activeId === item.id ? `${contentRef.current?.scrollHeight}px` : '0',
                                        }}
                                    >
                    
                    <div className="text-custom-body font-ttCommonProNormal text-base w-[95%] pb-4">
                      {item.desc}
                    </div>
                    </div>
            </div>
            ))}            

        </div>
      </div>
    </div>
  );
}

export default FAQs
