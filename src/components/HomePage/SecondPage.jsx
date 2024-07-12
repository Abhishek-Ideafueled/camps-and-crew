import React, { useEffect, useState } from 'react';
import RoomsManagement from './SecondPage/RoomsManagement';
import Frontdesk from './SecondPage/Frontdesk';
import Housekeeping from './SecondPage/Housekeeping';
import Reporting from './SecondPage/Reporting';
import AllFeatures from './SecondPage/AllFeatures';
import Transportation from './SecondPage/Transportation';
import Passenger from './SecondPage/Passenger';
import Reservations from './SecondPage/Reservations';
import RulesEngine from './SecondPage/RulesEngine';
import Travel from './SecondPage/Travel';
import './SecondPage.css';


const SecondPage = () => {

    const [active,setActive] = useState(1);
    const [activeHeading,setActiveHeading] = useState("");

    useEffect(()=>{
      if(active ===1)
      {
        setActiveHeading("rooms");
      }
      else setActiveHeading("transportation")
    },[active])


  return (
  <div className='w-full mx-auto px-3 sm:px-0'>
    <div className="flex flex-col justify-center items-center gap-8 pt-10 lg:pt-[60px] pb-[80px]  md:max-w-[720px] lg:max-w-full mx-auto lg:px-28 xl:px-0">
      <div className="flex items-center gap-[2px] px-2 py-2 bg-[#F7F5F2] max-w-[386px] h-[85px] cursor-pointer">
        <button
          className={`rounded-lg w-[180px] sm:w-[200px] h-[73px] transition-all duration-50 delay-50 ${
            active === 1 ? "bg-white border-[1px] border-custom-blue" : "border-none"
          }`}
          onClick={() => setActive(1)}
        >
          <p className="text-custom-heading font-gilroyBold font-normal leading-[1.2rem]">SmartLodge</p>
          <span className="text-sm text-custom-blue font-ttCommonProMedium font-medium w-[138px] leading-[1.4rem] text-start">CAMP MANAGEMENT</span>
        </button>
        <button
          className={` rounded-lg w-[130px] sm:w-[170px] h-[73px] text-center transition-all duration-50 delay-50 ${
            active === 2 ? "bg-white border-[1px] border-custom-blue" : ""
          }`}
          onClick={() => setActive(2)}
        >
          <p className="text-custom-heading font-gilroyBold font-normal leading-[1.2rem]">Enroute</p>
          <span className="text-sm font-ttCommonProMedium font-medium w-[138px] h-[22px] leading-[1.4rem] text-center text-custom-button">FIFO TRAVEL</span>
        </button>
      </div>
    { active ===1 
        ?     
        <div className="flex mx-auto text-nowrap max-w-inherit w-full md:max-w-[696px] lg:max-w-[741px] text-[#97A7B5] font-gilroyBold font-normal leading-[1.2rem] overflow-x-auto justify-start scrollbar-none ">
        <div className={`${ activeHeading ==="rooms"?"text-custom-heading border-b-2 border-custom-blue":"border-b-2 border-white"} py-4 px-6  transition-all delay-150 duration-150 cursor-pointer w-auto text-center`}
        onClick={()=>{setActiveHeading("rooms")}}
        >Rooms Management</div>
        <div className={`${ activeHeading ==="frontDesk"?"text-custom-heading border-b-2 border-custom-blue":"border-b-2 border-white"} py-4 px-6  transition-all delay-150 duration-150 cursor-pointer w-auto text-center`}
         onClick={()=>{setActiveHeading("frontDesk")}}
        >Front Desk
        </div>
        <div className={`${ activeHeading ==="housekeeping"?"text-custom-heading border-b-2 border-custom-blue":"border-b-2 border-white"} py-4 px-6  transition-all delay-150 duration-150 cursor-pointer w-auto text-center`}
         onClick={()=>{setActiveHeading("housekeeping")}}
        >
          Housekeeping
          </div>
        <div className={`${ activeHeading ==="reporting"?"text-custom-heading border-b-2 border-custom-blue":"border-b-2 border-white"} py-4 px-6  transition-all delay-150 duration-150 cursor-pointer w-auto text-center`}
         onClick={()=>{setActiveHeading("reporting")}}
        >
          Reporting
          </div>
        <div className={`${ activeHeading ==="features"?"text-custom-heading border-b-2 border-custom-blue":"border-b-2 border-white"} py-4 px-6  transition-all delay-150 duration-150 cursor-pointer w-auto text-center`}
         onClick={()=>{setActiveHeading("features")}}
        >All Features
        </div>
      </div> 
      :

      <div className="flex mx-auto text-nowrap max-w-inherit w-full md:max-w-[696px] lg:max-w-[741px] xl:max-w-[1116px] justify-start text-[#97A7B5] font-gilroyBold font-normal leading-[1.2rem] overflow-x-auto scrollbar-none">
      <div className={`${ activeHeading ==="transportation"?"text-custom-heading border-b-2 border-custom-blue":""} py-4 px-6 cursor-pointer w-auto text-center`}
      onClick={()=>{setActiveHeading("transportation")}}
      >Chartered Transportation</div>
      <div className={`${ activeHeading ==="passenger"?"text-custom-heading border-b-2 border-custom-blue":""} py-4 px-6 cursor-pointer w-auto  text-center`}
       onClick={()=>{setActiveHeading("passenger")}}
      >Passenger Manifests
      </div>
      <div className={`${ activeHeading ==="reservations"?"text-custom-heading border-b-2 border-custom-blue":""} py-4 px-6 cursor-pointer  w-auto text-center`}
       onClick={()=>{setActiveHeading("reservations")}}
      >
        Rostered Reservations
        </div>
      <div className={`${ activeHeading ==="travel"?"text-custom-heading border-b-2 border-custom-blue":""} py-4 px-6 cursor-pointer  w-auto  text-center`}
       onClick={()=>{setActiveHeading("travel")}}
      >
        Commerical Travel
        </div>
      <div className={`${ activeHeading ==="rulesEngine"?"text-custom-heading border-b-2 border-custom-blue":""} py-4 px-6 cursor-pointer w-auto   text-center`}
       onClick={()=>{setActiveHeading("rulesEngine")}}
      >Robust Rules Engine
      </div>
    </div> 
      }

      {/* For setting the navigation according to the selected tab at the top */}
    { active ===1
     ?
    <div className='max-w-[540px] md:max-w-[696px] xl:max-w-[1216px] mx-auto'>
       {activeHeading ==="rooms" && <RoomsManagement/>}
     {activeHeading ==="frontDesk" && <Frontdesk/>}
     {activeHeading ==="housekeeping" && <Housekeeping/>}
      {activeHeading ==="reporting" && <Reporting/>}
     {activeHeading ==="features" && <AllFeatures/>}
     </div> 
     :
     <div className='max-w-[540px] md:max-w-[696px] xl:max-w-[1216px] mx-auto'> 
     {activeHeading ==="transportation" && <Transportation/>}
     {activeHeading ==="passenger" && <Passenger/>}
     {activeHeading ==="reservations" && <Reservations/>}
      {activeHeading ==="rulesEngine" && <RulesEngine/>}
     {activeHeading ==="travel" && <Travel/>}
     </div>
     }
    </div>
    </div>
  );
}

export default SecondPage
