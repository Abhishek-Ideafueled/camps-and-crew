import React from 'react'
import ReactDOM from 'react-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsBullseye, BsFolder } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

const Modal = ({isOpen,onClose,children}) => {
        if(!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 w-[1200px] bg-white h-[550px] z-10 mx-auto flex mt-[106px] px-12 py-4 rounded-2xl">
      <div className="flex flex-col w-1/2 gap-4 ">
        <h2 className="text-xl font-gilroy font-bold leading-6 text-[#053347]">Solutions</h2>
        <div className="grid gap-5">
          <div className="flex items-center justify-between w-[509px] h-[219px] p-5 rounded-2xl border-[1px] border-custom-blue">
           <div className='w-[200px] h-[130px] '> <img
              src="https://camps-crew-sigma.vercel.app/images/man-walking-down-row-between-camp-buildings.png"
              alt="man walking down row"
              className="h-full w-full object-cover rounded-lg"
            />
            </div>
            <div className='flex flex-col w-[251px] h-[156px] gap-2 '>
            <h3 className='font-gilroy font-bold text-xl text-custom-heading'>Online Booking Tool for FIFO Logistics</h3>
            <p className='font-ttCommonProNormal font-normal text-sm'>
             
            A booking tool built to enable companies to book and manage all transportation required to get workers to and from remote projects. 
                                                
            </p>
            <p className="font-gilroy text-custom-blue hover:font-ttCommonProNormal hover:text-custom-body cursor-pointer">READ MORE</p>
            </div>
            
          </div>
          <div className="flex items-center justify-between w-[509px] h-[219px] p-5 rounded-2xl border-[1px] border-custom-blue">
           <div className='w-[200px] h-[130px] '> <img
              src="https://camps-crew-sigma.vercel.app/images/enroute.png"
              alt="enroute "
              className="h-full w-full object-cover rounded-lg"
            />
            </div>
            <div className='flex flex-col w-[251px] h-[156px] gap-2 '>
            <h3 className='font-gilroy font-bold text-xl text-custom-heading'>Software to Manage Remote Workforce Camps</h3>
            <p className='font-ttCommonProNormal font-normal text-sm'>
              A flexible camp management system able to adapt to the
              requirements of remote camps and villages large and small.
            </p>
            <p className="font-gilroy text-custom-blue hover:font-ttCommonProNormal hover:text-custom-body cursor-pointer">READ MORE</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-2">
        <div className="flex gap-4">
          <h2 className="text-xl font-gilroy font-bold leading-6 text-[#053347]">Features</h2>
          <span className="font-gilroy font-bold text-base bg-custom-blue rounded-3xl p-1">
            Smart Lodge
          </span>
        </div>
        {/* <div className='grid grid-cols-2 gap-4 rounded-2xl border-[1px] border-custom-blue p-5 h-[455px]'>
            <div className='flex flex-col w-[221px] gap-2 '>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><CgFileDocument /> <span>Rooms Management</span></p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Multiple ways to book rooms</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Visual Room blocking tools</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Booking for workers on roster schedules</p>
            </div>
            <div className='flex flex-col w-[221px] gap-2 '>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><AiOutlineFileSearch size={25}/> <span>Housekeeping & Mantainence</span></p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Cleaning Assignments</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Walkdown Capabilities</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Maintainence tickets</p>
            </div>
            <div className='flex flex-col w-[221px] gap-2 '>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><BsBullseye size={20}/> <span>Front Desk</span></p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Arrival and Departures</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Mobile check-in</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>kiosk check-in and check-out</p>
            </div>
            <div className='flex flex-col w-[221px] gap-3 '>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><BsFolder size={20}/> <span>300+ Interactive Reports</span></p>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><AiOutlineFileSearch size={20}/> <span>System Integrations</span></p>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><BsFolder size={20}/> <span>Additional Features</span></p>
            </div>
            
        </div>   */}
        <div className='grid grid-cols-2 gap-4 rounded-2xl border-[1px] border-custom-blue p-5 h-[455px]' >
        <div className='flex flex-col col-span-2 gap-2 '>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><CgFileDocument /> <span>Book and Manage Chartered Transportation</span></p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Manage seats on chartered air,ground or marine transportation</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>View and edit live passenger manifests for all trips to and from camp</p>
                <p className='text-sm font-ttCommonProMedium text-custom-body'>Quickly book seats for workers on rosters month or week out</p>
            </div>
            <div className='flex flex-col w-[221px] gap-3 '>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><AiOutlineFileSearch size={20}/> <span>Flexible ways to book</span></p>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><AiOutlineFileSearch size={20}/> <span>System Integrations</span></p>
                <p className='flex items-center gap-2 font-gilroy font-bold text-custom-heading'><BsFolder size={20}/> <span>Additional Features</span></p>
            </div>
        </div>
      </div>
      
      {/* <button onClick={onClose}>close</button> */}
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal
