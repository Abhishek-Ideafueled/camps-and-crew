import { useState } from "react";
import { receptionAccordianData,receptionImages } from "./receptionAccordianData";
import { IoIosArrowDown } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import './AccordionStyle.css';

const ReceptionAndSupport = () => {

    const [activeId, setActiveId] = useState(1);
  const [activeImageId, setActiveImageId] = useState(1);
  const [activeColor,setActiveColor] = useState(1);

  const handleAccordionClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveImageId(id);
    }
  };

  const handleActiveColor=(id)=>{
    setActiveColor(id);
  }

  return (
    <div className="w-full bg-custom-back">
        <div className="main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[60px]">

        <div className="flex flex-col items-center gap-4 text-center max-w-[959px]">
        <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
            RECEPTION & FRONT DESK
            </span>
        <h2 className="heading-h2 text-white max-w-[618px]">
        Increase Collaboration Between Reception and Supporting Teams
        </h2>
        <p className="font-ttCommonProNormal font-medium text-base leading-6 md:text-lg md:leading-[28px] text-white max-w-[650px]">
        SmartLodge automates the flow of room status and room reservation databetween the front desk staff and other teams working to support camp operations.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">

            <div className="flex flex-col bg-custom-heading">
            {receptionAccordianData.map((item)=>(
               <div 
               className={   `${activeColor === item.id ? 'bg-[#0F658D]' : ''} flex flex-col cursor-pointer border-b-[0.5px] border-[#00000080] border-opacity-10 transition-all duration-200`} 
            //    className="flex flex-col cursor-pointer"
               key={item.id} 
               
               >
               <div
                onClick={() => {handleAccordionClick(item.id); setActiveColor(item.id)}}
               className="font-gilroyBold text-white text-lg z-10 lg:text-xl leading-[24px] flex items-center justify-between h-[72px] p-6 ">
                 {item.title}
                <span className={`${activeId === item.id ? 'rotate-180 transition-all duration-500' : 'transition-all duration-300'}`}><IoIosArrowDown /></span> 
               </div>
              <div className={`${activeId !== item.id ? 'z-0 h-0 opacity-0 pb-0 transition-all duration-200': 'h-full opacity-100 transition-all duration-300'} px-6 w-full`}>
              <div className="text-white font-ttCommonProNormal text-base w-[95%] pb-6">
                                         {item.desc}
                                         </div>
               </div>
             </div>

            ))}
            </div>
            <div className="relative w-full max-w-[500px] lg:max-w-[500px] xl:max-w-[662px] h-[300px] md:h-[350px] lg:h-[414px] mx-auto">
               {receptionImages.map((item)=>(
                 <div className={`${activeImageId===item.id ? 'opacity-100 ':'opacity-0'} absolute inset-0 w-full h-full transition-all duration-500 grid grid-cols-3  gap-4`} key={item.id}>
                        <div className="col-span-2 row-span-2 flex items-center">
                        <img src={item.url1} 
                         className="rounded-2xl h-full md:h-auto xl:h-full "
                        alt={item.url1} />
                        </div>
                        <div className="col-span-1 flex md:mb-4 xl:mb-0 items-end">
                        <img src={item.url2} 
                            className="rounded-2xl h-full md:h-auto xl:h-full "
                            alt={item.alt2} />
                        </div>
                        <div className="col-span-1 flex items-start">
                        <img src={item.url3} 
                            className="rounded-2xl h-full md:h-auto xl:h-full"
                            alt={item.alt3} />
                        </div> 
                        </div>
               )) }
           </div>
          
        </div>
        <button className="btn-orange h-[58px] w-[213px] rounded-lg">
         <Link to="demoForm">REQUEST A DEMO</Link>     
           </button>
        </div>
      
    </div>
  )
}

export default ReceptionAndSupport
