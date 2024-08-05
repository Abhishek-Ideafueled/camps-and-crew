import { useEffect, useRef, useState } from 'react';
import Odometer from 'react-odometerjs';

const SmartLodgeFastFacts = () => {

    const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);
  const [fourthValue, setFourthValue] = useState(0);

  const gridRef = useRef(null);
    
  const setOdo=(entries)=>{
    const [entry] = entries ;
    if(entry.isIntersecting)
      {
        setFirstValue(90);
        setSecondValue(100);
        setThirdValue(3);
        setFourthValue(30)
      
      }
      else{
        setFirstValue(0);
        setSecondValue(0);
        setThirdValue(0);
        setFourthValue(0)
      }
  }
const options ={
root:null,
rootMargin:'0px',
threshhold:1.0
}

useEffect(()=>{
  const observer  = new IntersectionObserver(setOdo, options);

  if(gridRef.current) observer.observe(gridRef.current);

  return ()=>{
    observer.disconnect();
  }
},[])

  return (
    <div className="w-full bg-[#EAE8E3]">
      <div className="main-container mx-auto py-10 lg:py-20 flex flex-col gap-[60px]">
            <h2 className="heading-h2">SmartLodge Fast Facts</h2>
            <div  ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:mx-auto md:items-start gap-4 md:gap-0 md:pb-10 w-full">
            <div className='flex flex-col gap-2 max-w-[247px]'>
              <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[75px] lg:w-[120px] text-custom-heading font-gilroyBold font-normal">
              
             <span className='flex items-start justify-center'>
               <Odometer value={firstValue} format="ddd" />
             % </span>
               
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
              Room occupancy averaged during periods of peak demand at camp
              </span>
            </div>
            <div className='flex flex-col gap-2 max-w-[247px]'>
              <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[75px] lg:w-[120px] text-custom-heading font-gilroyBold font-normal">
              
                <span className='flex items-start justify-center'>
               <Odometer value={secondValue} format="ddd" />
                %</span>
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
              Visibility into real-time room status and room inventory
              </span>
            </div>
            <div className='flex flex-col gap-2 max-w-[247px]'>
              <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[38px] lg:w-[60px] text-custom-heading font-gilroyBold font-normal">
              
              <span className='flex items-start justify-center'>
               <Odometer value={thirdValue} format="ddd" />X</span>
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
              Faster turnover of rooms by housekeeping staff
              </span>
            </div>
            <div className='flex flex-col gap-2 max-w-[247px]'>
            <div className=" text-[32px] leading-8 lg:text-[50px] border-b-2 lg:leading-[3.75rem] border-custom-button w-[95px] lg:w-[150px] text-custom-heading font-gilroyBold font-normal">
              
              <span className='flex items-start justify-center'>
               <Odometer value={fourthValue} format="ddd" />Sec.</span>
              </div>
              <span className="font-ttCommonProNormal text-custom-body font-normal leading-[1.55rem]">
              Average check in time for camps enabled with Kiosk Check In
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SmartLodgeFastFacts
