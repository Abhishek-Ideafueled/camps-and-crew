import React, { useState } from 'react';
import sitting from '/sitting.jpg';
import { CiCircleCheck } from 'react-icons/ci';


const SecondPage = () => {

    const [active,setActive] = useState(1);


  return (
    <div className="flex flex-col justify-center items-center gap-8 py-14 px-28">
      <div className="flex items-center gap-[2px] p-2 bg-[#F7F5F2] w-[356px] h-[83px] cursor-pointer">
        <div
          className={` flex flex-col gap-[2px] py-3 px-4 rounded-lg w-[180px] ${
            active === 1 ? "bg-white border-[1px] border-[#63C1EC]" : "border-none"
          }`}
          onClick={() => setActive(1)}
        >
          <p className="text-[#08425D]">SmartLodge</p>
          <p className="text-sm text-[#63C1EC]">CAMP MANAGEMENT</p>
        </div>
        <div
          className={` flex flex-col gap-[2px] py-3 px-4 rounded-lg w-[170px] ${
            active === 2 ? "bg-white border-[1px] border-[#63C1EC]" : ""
          }`}
          onClick={() => setActive(2)}
        >
          <p className="text-[#08425D]">Enroute</p>
          <p className="text-sm text-[#63C1EC]">FIFO Travel</p>
        </div>
      </div>
      <div className="flex justify-between w-[741px]">
        <div>Rooms Management</div>
        <div>Front Desk</div>
        <div>Housekeeping</div>
        <div>Reporting</div>
        <div>All Features</div>
      </div>
      <div className="flex items-center shadow-lg h-[405px] rounded-2xl">
        <div className="flex px-10 py-16  height-[420px]">
          <div className="flex flex-col">
            <div className="text-2xl text-[#08425D] py-4 ">
              Maximize the utilization of rooms at your remote camp
            </div>
            <hr className="w-24 text-[#D0D5DD]" />
            <div className="flex flex-col py-2 text-sm gap-3">
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
          <img src={sitting} alt="sitting image" />
        </div>
      </div>
    </div>
  );
}

export default SecondPage
