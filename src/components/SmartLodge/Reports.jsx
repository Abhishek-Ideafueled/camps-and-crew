import { FaCircleCheck } from "react-icons/fa6"


const Reports = () => {
  return (
    <div className="w-full bg-[#FAFAFA]" id="reports">
        <div className="main-container mx-auto flex flex-col items-center gap-[60px] py-10 lg:py-20">
            <div className="flex flex-col items-center text-center max-w-[959px]">
<h2  className='heading-h2 border-b-[8px] border-b-custom-button'>
    300+ Reports
</h2>
<p className="sub-headind">
Provide teams supporting your workforce accommodations with robust reporting to facilitate strategic decision-making, boost operational efficiency and heighten guest satisfaction.
</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                <div className="">
                    <img 
                    className="rounded-2xl w-full h-full"
                    src="aerial-remote-workforce-camp.jpg" 
                    alt="Aerial photograph of workforce lodging placed on a grassy field with trees and sky framing the photo." />
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="font-gilroyBold text-[25px] md:text-[32px] md:leading-[38px] text-custom-heading">
                        Critical Data Points for Every Team
                        </h3>
                        <div className="flex flex-col gap-2">
                        <p className="font-ttCommonProNormal font-medium text-custom-body text-base">
                            SmartLodge reporting capabilities ensure that every team focused on your workforce lodging operations is armed with the information they need, when they need it.</p>
                        <ul className="flex flex-col gap-2 font-ttCommonProRegular text-base md:text-lg md:leading-[24px] lg:text-xl lg:leading-[32px]">
                            
                        <li className="flex gap-3 lg:h-[48px] items-center">
                                <span className="w-[30px] h-[30px]"> <FaCircleCheck className="text-[#189AD2]"  size={30}/></span>
                                Arrivals and Departures                               
                                 </li>
                                 <li className="flex gap-3 lg:h-[48px] items-center">
                                <span className="w-[30px] h-[30px]"> <FaCircleCheck className="text-[#189AD2]"  size={30}/></span>
                                View of All Guests In-House                               
                                 </li>
                                 <li className="flex gap-3 lg:h-[48px] items-center">
                                <span className="w-[30px] h-[30px]"> <FaCircleCheck className="text-[#189AD2]"  size={30}/></span>
                                Rooms Requiring Cleaning or Maintenance                         
                                 </li>
                                 <li className="flex gap-3 lg:h-[48px] items-center">
                                <span className="w-[30px] h-[30px]"> <FaCircleCheck className="text-[#189AD2]"  size={30}/></span>
                                Room Occupancy and Room Forecasting                            
                                 </li>
                                 <li className="flex gap-3 lg:h-[48px] items-center">
                                <span className="w-[30px] h-[30px]"> <FaCircleCheck className="text-[#189AD2]"  size={30}/></span>
                                Meals Consumption                         
                                 </li>
                                 <li className="flex gap-3 lg:h-[48px] items-center">
                                <span className="w-[30px] h-[30px]"> <FaCircleCheck className="text-[#189AD2]"  size={30}/></span>
                                Evacuation & Emergency Response                     
                                 </li>
                        </ul>
                        </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Reports
