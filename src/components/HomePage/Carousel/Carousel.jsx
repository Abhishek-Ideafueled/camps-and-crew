import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaRegCircle } from 'react-icons/fa';
import SmartLodge from './SmartLodge';
import Enroute from './Enroute';


const Carousel = () => {
  const [activeCarousel,setActiveCarousel] = useState("lodge");


  return (
    <div className="w-full">
     { activeCarousel === "lodge" ? <SmartLodge/> : <Enroute/>}
      <div className="flex justify-between px-28 py-5 text-custom-blue ">
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>setActiveCarousel("lodge")}>
          <BsArrowLeft />
          <p className="font-ttCommonProNormal font-semibold leading-[1.6rem]">
            SMARTLODGE
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          <FaRegCircle className="" />
          <FaRegCircle />
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
