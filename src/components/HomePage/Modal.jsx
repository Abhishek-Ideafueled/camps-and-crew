import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsBullseye, BsFolder } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Modal = ({isOpen,onClose,children}) => {
        

        const [activeTab,setActiveTab] = useState("lodge");
        const modalRef = useRef();

        useEffect(()=>{
          document.addEventListener('mousedown',handleClickOutside);

          return ()=>{
            document.removeEventListener('mousedown',handleClickOutside)
          }
        },[isOpen])


        const handleClickOutside=(event)=>{
          if (modalRef.current && !modalRef.current.contains(event.target)) {

           onClose();
      
          }
        }

        useEffect(() => {
          const handleKeyDown = (event) => {
            if (event.key === "Escape") {
              onClose();
            }
          };

          document.addEventListener("keydown", handleKeyDown);

          return () => {
            document.removeEventListener("keydown", handleKeyDown);
          };
        }, []);

        if(!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed main-container inset-0 bg-white max-h-max z-30 mx-auto hidden lg:flex gap-6 mt-[106px] px-6 py-4 rounded-2xl"
      ref={modalRef}
    >
      <div className="flex flex-col w-1/2 gap-4">
        <h2 className="text-xl font-gilroyBold font-bold leading-6 text-[#053347]">
          Solutions
        </h2>
        <div className="grid gap-4">
          <Link reloadDocument
          to='/software-for-workforce-camp' className="flex items-center gap-4 max-w-full min-h-[219px] max-h-max p-5 rounded-2xl border-[1px] border-custom-blue cursor-pointer">
            <div className="max-w-max min-h-[130px]">
              <img
                src="/man-walking-down-row-between-camp-buildings.png"
                alt="man walking down row"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col max-w-max min-h-[156px] max-h-max gap-2 ">
              <h3 className="font-gilroyBold font-bold text-xl leading-6 text-custom-heading">
                Software to Manage Remote Workforce Camps
              </h3>
              <p className="font-ttCommonProNormal font-normal text-sm text-custom-body">
                A flexible camp management system able to adapt to the
                requirements of remote camps and villages large and small.
              </p>
              <p className="font-ttCommonProRegular text-sm leading-[21px] text-custom-blue mt-2 hover:font-ttCommonProNormal hover:text-custom-body cursor-pointer">
                READ MORE
              </p>
            </div>
          </Link>
          <Link reloadDocument  to='/fifo-travel-online-booking-tool'
            className="flex items-center gap-4 max-w-full min-h-[219px] p-5 rounded-2xl border-[1px] border-custom-blue cursor-pointer"
            onMouseEnter={() => setActiveTab("enroute")}
            onMouseLeave={() => setActiveTab("lodge")}
          >
            <div className="max-w-max min-h-[130px] ">
              <img
                src="/enroute.png"
                alt="enroute "
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col max-w-max min-h-[156px] gap-2 ">
              <h3 className="font-gilroyBold font-bold text-xl leading-6 text-custom-heading">
                Online Booking Tool for FIFO Logistics
              </h3>
              <p className="font-ttCommonProNormal font-normal text-sm text-custom-body">
                A booking tool built to enable companies to book and manage all
                transportation required to get workers to and from remote
                projects.
              </p>
              <p className="font-ttCommonProRegular text-sm leading-[21px] mt-2 text-custom-blue hover:font-ttCommonProNormal hover:text-custom-body cursor-pointer">
                READ MORE
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex gap-4 mb-[10px]">
          <h2 className="text-xl font-gilroyBold font-bold leading-6 text-[#053347]">
            Features
          </h2>
          <span
            className={`${
              activeTab === "lodge" ? "bg-custom-blue" : "bg-custom-button"
            } font-gilroyBold font-bold text-base  rounded-3xl py-1 px-2 h-[31px]`}
          >
            {activeTab === "lodge" ? "Smart Lodge" : "EnRoute"}
          </span>
        </div>
        {activeTab === "lodge" && (
          <div className="grid grid-cols-2 gap-4 rounded-2xl border-[1px] border-custom-blue p-5 h-full">
            <div className="flex flex-col max-w-max gap-2 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <CgFileDocument /> <span>Rooms Management</span>
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Multiple ways to book rooms
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Visual Room blocking tools
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Booking for workers on roster schedules
              </p>
            </div>
            <div className="flex flex-col max-w-max gap-2 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <AiOutlineFileSearch size={25} />{" "}
                <span>Housekeeping & Mantainence</span>
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Cleaning Assignments
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Walkdown Capabilities
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Maintainence tickets
              </p>
            </div>
            <div className="flex flex-col max-w-max gap-2 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <BsBullseye size={20} /> <span>Front Desk</span>
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Arrival and Departures
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Mobile check-in
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                kiosk check-in and check-out
              </p>
            </div>
            <div className="flex flex-col max-w-max gap-3 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <BsFolder size={20} /> <span>300+ Interactive Reports</span>
              </p>
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <AiOutlineFileSearch size={20} />{" "}
                <span>System Integrations</span>
              </p>
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <BsFolder size={20} /> <span>Additional Features</span>
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {activeTab === "enroute" && (
          <div className="grid grid-cols-2 gap-4 rounded-2xl border-[1px] border-custom-blue p-5 h-full">
            <div className="flex flex-col col-span-2 gap-2 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <CgFileDocument />{" "}
                <span>Book and Manage Chartered Transportation</span>
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Manage seats on chartered air,ground or marine transportation
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                View and edit live passenger manifests for all trips to and from
                camp
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Quickly book seats for workers on rosters month or week out
              </p>
            </div>
            <div className="flex flex-col max-w-max gap-3 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <AiOutlineFileSearch size={20} />{" "}
                <span>Flexible ways to book</span>
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Travel coordinators or end-users can be set up to book
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Require approvals when needed
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Customise and imhplement a robust rules engine
              </p>
            </div>
            <div className="flex flex-col max-w-max gap-2 ">
              <p className="flex items-center gap-2 font-gilroyBold font-bold text-custom-heading">
                <BsBullseye size={20} /> <span>Book Commercial Travel</span>
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Access to rich GDS content
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Book Flights, hotels or rental cars
              </p>
              <p className="text-sm font-ttCommonProMedium text-custom-body">
                Provide travellers with single itinerary for all bookings
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>

      {/* <button onClick={onClose}>close</button> */}
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal
