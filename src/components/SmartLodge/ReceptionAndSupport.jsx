import { useState } from "react";
import { receptionAccordianData,receptionImages } from "./receptionAccordianData";
import { IoIosArrowDown } from "react-icons/io";


const ReceptionAndSupport = () => {

    const [activeId, setActiveId] = useState(1);
  const [activeImageId, setActiveImageId] = useState(1);

  const handleAccordionClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveImageId(id);
    }
  };

  return (
    <div className="w-full bg-custom-back">
        <div className="main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[60px]">

        <div className="flex flex-col items-center gap-4 text-center max-w-[618px]">
        <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
            RECEPTION & FRONT DESK
            </span>
        <h2 className="heading-h2 text-white">
        Increase Collaboration Between Reception and Supporting Teams
        </h2>
        <p className="font-ttCommonProNormal font-medium text-base leading-6 md:text-lg md:leading-6 text-white ">
           SmartLodge offers optional automation features to further expedite check ins and check outs for camps managing large group arrivals and departures. Ideal for camps housing large workforces.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">

            <div className="flex flex-col px-6 bg-custom-heading">
            {receptionAccordianData.map((item)=>(
               <div 
            //    className={   `${activeId === item.id ? 'bg-[#0F658D]' : ''} flex flex-col cursor-pointer`} 
               className="flex flex-col cursor-pointer"
               key={item.id} 
               
               >
               <div
                onClick={() => handleAccordionClick(item.id)}
               className="font-gilroyBold text-white text-lg z-10 lg:text-xl leading-[24px] flex items-center justify-between h-[72px] p-6">
                 {item.title}
                <span className={`${activeId === item.id ? 'rotate-180 transition-all duration-500' : 'transition-all duration-300'}`}><IoIosArrowDown /></span> 
               </div>
              <div className={`${activeId !== item.id ? 'z-0 h-0 bg-transparent text-transparent ': 'font-ttCommonProNormal text-white text-base transition-all duration-300 delay-100 px-6 pb-6'} border-b-[0.5px] border-black/80`}>
                                         {item.desc}
               </div>
             </div>

            ))}
            </div>
            <div className="relative w-full max-w-[500px] lg:max-w-[500px] xl:max-w-[662px] h-[300px] md:h-[350px] lg:h-[414px]">
               {receptionImages.map((item)=>(
                 <div className={`${activeImageId===item.id ? 'opacity-100 ':'opacity-0'} absolute inset-0 w-full h-full transition-all duration-500 grid grid-cols-3 gap-4`} key={item.id}>
                        <div className="col-span-2 row-span-2">
                        <img src={item.url1} 
                         className="rounded-2xl h-full bg-center"
                        alt={item.url1} />
                        </div>
                        <div className="col-span-1">
                        <img src={item.url2} 
                            className="rounded-2xl h-full  bg-center "
                            alt={item.alt2} />
                        </div>
                        <div className="col-span-1">
                        <img src={item.url3} 
                            className="rounded-2xl h-full  bg-center"
                            alt={item.alt3} />
                        </div> 
                        </div>
               )) }
           </div>
          
        </div>
        <button className="btn-orange h-[58px] w-[213px] rounded-lg">
              REQUEST A DEMO
           </button>
        </div>
      
    </div>
  )
}

export default ReceptionAndSupport
