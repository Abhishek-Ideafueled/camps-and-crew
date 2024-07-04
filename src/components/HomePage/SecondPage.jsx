import React, { useState } from 'react';
import sitting from '/sitting.jpg';
import { CiCircleCheck } from 'react-icons/ci';


const SecondPage = () => {

    const [active,setActive] = useState(1);
    const [activeHeading,setActiveHeading] = useState("rooms");


  return (
    <div className="flex flex-col justify-center items-center gap-8 py-14 px-28">
      <div className="flex items-center gap-[2px] p-2 bg-[#F7F5F2] w-[386px] h-[83px] cursor-pointer">
        <div
          className={` flex flex-col gap-[2px] py-3 px-4 rounded-lg w-[200px] ${
            active === 1 ? "bg-white border-[1px] border-[#63C1EC]" : "border-none"
          }`}
          onClick={() => setActive(1)}
        >
          <p className="text-custom-heading font-gilroyBold font-normal">SmartLodge</p>
          <p className="text-sm text-[#63C1EC] font-ttCommonProRegular font-medium">CAMP MANAGEMENT</p>
        </div>
        <div
          className={` flex flex-col gap-[2px] py-3 px-4 rounded-lg w-[170px] ${
            active === 2 ? "bg-white border-[1px] border-[#63C1EC]" : ""
          }`}
          onClick={() => setActive(2)}
        >
          <p className="text-custom-heading font-gilroyBold font-normal">Enroute</p>
          <p className="text-sm text-[#63C1EC] font-ttCommonProRegular font-medium">FIFO Travel</p>
        </div>
      </div>
      <div className="flex w-[741px] text-[#97A7B5] font-gilroyBold font-normal ">
        <div className={`${ activeHeading ==="rooms"?"text-custom-heading border-b-2 border-[#97A7B5]":""} py-2 cursor-pointer w-[202px] text-center`}
        onClick={()=>{setActiveHeading("rooms")}}
        >Rooms Management</div>
        <div className={`${ activeHeading ==="frontDesk"?"text-custom-heading border-b-2 border-[#97A7B5]":""} py-2 cursor-pointer w-[127px]  text-center`}
         onClick={()=>{setActiveHeading("frontDesk")}}
        >Front Desk
        </div>
        <div className={`${ activeHeading ==="housekeeping"?"text-custom-heading border-b-2 border-[#97A7B5]":""} py-2 cursor-pointer w-[154px]  text-center`}
         onClick={()=>{setActiveHeading("housekeeping")}}
        >
          Housekeeping
          </div>
        <div className={`${ activeHeading ==="reporting"?"text-custom-heading border-b-2 border-[#97A7B5]":""} py-2 cursor-pointer w-[122px]  text-center`}
         onClick={()=>{setActiveHeading("reporting")}}
        >
          Reporting
          </div>
        <div className={`${ activeHeading ==="features"?"text-custom-heading border-b-2 border-[#97A7B5]":""} py-2 cursor-pointer w-[136px]  text-center`}
         onClick={()=>{setActiveHeading("features")}}
        >All Features
        </div>
      </div>
      <div className="flex items-center shadow-lg h-[405px] rounded-2xl">
        <div className="flex px-10 py-16  height-[420px]">
          <div className="flex flex-col">
            <div className="text-2xl text-custom-heading py-4 font-gilroyBold font-normal">
              Maximize the utilization of rooms at your remote camp
            </div>
            <hr className="w-24 text-[#D0D5DD]" />
            <div className="flex flex-col py-2 text-sm gap-3 font-ttCommonProNormal font-normal">
              <div className="flex gap-10 items-center">
                <CiCircleCheck className="text-[#63C1EC]" />
                <span className="text-[#344054]">
                  Room reservations to accommodate any workflow
                </span>
              </div>
              <div className="flex gap-10 items-center">
                <CiCircleCheck className="text-[#63C1EC]" />
                <span className="text-[#344054]">
                  Set up rooms or beds exactly as they are laid out at your camp
                </span>
              </div>
              <div className="flex gap-10 items-center">
                <CiCircleCheck className="text-[#63C1EC]" />
                <span className="text-[#344054]">
                  Easily assign rooms with visual room blocking tools
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[571px]">
          <img src={sitting} alt="sitting image" className='object-fit'/>
        </div>
      </div>
    </div>
  );
}

export default SecondPage
