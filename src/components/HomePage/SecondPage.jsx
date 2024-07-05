import React, { useState } from 'react';
import RoomsManagement from './SecondPage/RoomsManagement';
import Frontdesk from './SecondPage/Frontdesk';
import Housekeeping from './SecondPage/Housekeeping';
import Reporting from './SecondPage/Reporting';
import AllFeatures from './SecondPage/AllFeatures';


const SecondPage = () => {

    const [active,setActive] = useState(1);
    const [activeHeading,setActiveHeading] = useState("rooms");


  return (
    <div className="flex flex-col justify-center items-center gap-8 py-14 px-28">
      <div className="flex items-center gap-[2px] px-2 py-2 bg-[#F7F5F2] w-[386px] h-[85px] cursor-pointer">
        <button
          className={`rounded-lg w-[200px] h-[73px] ${
            active === 1 ? "bg-white border-[1px] border-custom-blue" : "border-none"
          }`}
          onClick={() => setActive(1)}
        >
          <p className="text-custom-heading font-gilroyBold font-normal leading-[1.2rem]">SmartLodge</p>
          <span className="text-sm text-custom-blue font-ttCommonProNormal font-medium w-[138px] leading-[1.4rem] text-start">CAMP MANAGEMENT</span>
        </button>
        <button
          className={` rounded-lg w-[170px] h-[73px] text-center ${
            active === 2 ? "bg-white border-[1px] border-custom-blue" : ""
          }`}
          onClick={() => setActive(2)}
        >
          <p className="text-custom-heading font-gilroyBold font-normal leading-[1.2rem]">Enroute</p>
          <span className="text-sm text-custom-blue font-ttCommonProNormal font-medium w-[138px] h-[22px] leading-[1.4rem] text-center">FIFO TRAVEL</span>
        </button>
      </div>
      <div className="flex w-[741px] text-[#97A7B5] font-gilroyBold font-normal leading-[1.2rem]">
        <div className={`${ activeHeading ==="rooms"?"text-custom-heading border-b-2 border-custom-blue":""} py-2 cursor-pointer w-[202px] text-center`}
        onClick={()=>{setActiveHeading("rooms")}}
        >Rooms Management</div>
        <div className={`${ activeHeading ==="frontDesk"?"text-custom-heading border-b-2 border-custom-blue":""} py-2 cursor-pointer w-[127px]  text-center`}
         onClick={()=>{setActiveHeading("frontDesk")}}
        >Front Desk
        </div>
        <div className={`${ activeHeading ==="housekeeping"?"text-custom-heading border-b-2 border-custom-blue":""} py-2 cursor-pointer w-[154px]  text-center`}
         onClick={()=>{setActiveHeading("housekeeping")}}
        >
          Housekeeping
          </div>
        <div className={`${ activeHeading ==="reporting"?"text-custom-heading border-b-2 border-custom-blue":""} py-2 cursor-pointer w-[122px]  text-center`}
         onClick={()=>{setActiveHeading("reporting")}}
        >
          Reporting
          </div>
        <div className={`${ activeHeading ==="features"?"text-custom-heading border-b-2 border-custom-blue":""} py-2 cursor-pointer w-[136px]  text-center`}
         onClick={()=>{setActiveHeading("features")}}
        >All Features
        </div>
      </div>
     {activeHeading ==="rooms" && <RoomsManagement/>}
     {activeHeading ==="frontDesk" && <Frontdesk/>}
     {activeHeading ==="housekeeping" && <Housekeeping/>}
      {activeHeading ==="reporting" && <Reporting/>}
     {activeHeading ==="features" && <AllFeatures/>} 
    </div>
  );
}

export default SecondPage
