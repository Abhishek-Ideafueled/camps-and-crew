import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import SmartLodge from './SmartLodge';
import Enroute from './Enroute';


const Carousel = () => {
  const [activeCarousel,setActiveCarousel] = useState("lodge");


  return (
    <div className="w-full">
     { activeCarousel === "lodge" ? <SmartLodge/> : <Enroute/>}
      <div className="flex justify-between px-28 xl:px-0 py-5 text-custom-blue w-full xl:max-w-[1216px] mx-auto ">
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>setActiveCarousel("lodge")}>
          <BsArrowLeft />
          <p className="font-ttCommonProNormal font-semibold leading-[1.6rem]">
            SMARTLODGE
          </p>
        </div>
        <div className="flex items-center gap-[6px] cursor-pointer">
          <FaCircle className={`${activeCarousel==="lodge" ? "text-custom-blue" : "text-white border-[1px] rounded-full"}`} 
          onClick={()=>{setActiveCarousel("lodge")}}/>
          <FaCircle className={`${activeCarousel==="enroute" ? "text-custom-blue" : "text-white border-[1px] rounded-full"}`}
          onClick={()=>setActiveCarousel("enroute")}
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>setActiveCarousel("enroute")}>
          <p className="font-ttCommonProNormal font-semibold leading-[1.6rem]">
            ENROUTE
          </p>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Carousel
