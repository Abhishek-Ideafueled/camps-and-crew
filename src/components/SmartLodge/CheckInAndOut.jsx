import { useState } from "react"


const CheckInAndOut = () => {

  const [activeTab,setActiveTab] =useState("mobile");

  return (
    <div className="w-full py-20">
      <div className="main-container mx-auto flex flex-col gap-[60px] items-center">
        <div className="flex flex-col gap-4 text-center">
           <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">RECEPTION & FRONT DESK</span>
           <h2 className="heading-h2">
           Automate Check In and Check Out
           </h2>
           <p className="font-ttCommonProNormal font-medium text-base leading-6 md:text-lg md:leading-6 text-custom-body ">
           SmartLodge offers optional automation features to further expedite check ins and check outs for camps managing large group arrivals and departures. Ideal for camps housing large workforces.
           </p>
        </div>
 
        {activeTab ==="mobile" && <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <img 
            className="h-[400px] object-cover md:h-[505px] lg:h-[565px] w-[642px] rounded-2xl"
            src="/fifo-worker-checks-phone-riding-bus.jpg" 
            alt="Fly-in fly-out worker texts on cellphone while riding a bus with a snowy climate visible from bus window." />
            <div className="flex flex-col gap-4 lg:gap-6 p-6 lg:py-10 lg:px-12 shadow-custom-shadow2 rounded-2xl bg-white ml-0 md:ml-[-50px] lg:ml-[-50px] max-w-[642px] max-h-[470px]">
                <div className="flex flex-col gap-1 lg:gap-4 items-center md:items-start">
                <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">CHECK IN BEFORE ARRIVAL</span>
                <div className="font-gilroyBold font-normal text-custom-heading text-[26px] leading-[32px] md:text-[32px] md:leading-[38px]">
                Mobile Check In
            </div>
                </div>
                <div className="font-ttCommonProMedium font-medium text-custom-body text-base lg:text-lg lg:leading-[28px] ">
            Workers receive a text or email on their travel day to confirm their stay at camp.
             After confirmation, workers are placed as a partial check-in within SmartLodge.
              To complete check-in, workers need to visit the reception desk or a kiosk upon arrival to confirm their physical presence.
              <br className="hidden xl:block" />
              <br className="hidden xl:block" />
              To expedite check-in processing time once a worker has arrived at camp, SmartLodge system administrators can require workers to complete all registration forms ahead of time as part of the Mobile Check-In workflow.
            </div>
            </div>
           
        </div>}
            {
              activeTab ==="kiosk" &&  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <img 
              className="h-[400px] object-cover md:h-[505px] lg:h-[565px] w-[642px] rounded-2xl"
              src="/fifo-workers-check-in-kiosks-remote-camp.jpg" 
              alt="Workers use kiosks to check in at a lobby located an oil sands camp in Fort McMurray, Canada." />
              <div className="flex flex-col gap-4 lg:gap-6 p-6 lg:py-10 lg:px-12 shadow-custom-shadow2 rounded-2xl bg-white ml-0 md:ml-[-50px] lg:ml-[-50px] max-w-[642px] max-h-[470px]">
                  <div className="flex flex-col gap-1 lg:gap-4 items-center md:items-start">
                  <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">BYPASS RECEPTION</span>
                  <div className="font-gilroyBold font-normal text-custom-heading text-[26px] leading-[32px] md:text-[32px] md:leading-[38px]">
                  Kiosk Check In and Check Out
              </div>
                  </div>
                  <div className="font-ttCommonProMedium font-medium text-custom-body text-base lg:text-lg lg:leading-[28px] ">
                  Workers independently complete check in and check out procedures at dedicated kiosks, reducing front desk congestion during group arrivals and departures.
                <br className="hidden xl:block" />
                <br className="hidden xl:block" />
                Kiosk check in offers residents faster passage to their assigned rooms after a long travel day. Reception staff also benefit, with more time to dedicate to other daily responsibilities.
              </div>
              </div>
             
          </div>
            }
             {
              activeTab ==="automatic" &&  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <img 
              className="h-[400px] object-cover md:h-[505px] lg:h-[565px] w-[642px] rounded-2xl"
              src="/guests-check-in-kiosks-lobby.jpg" 
              alt="Person taps a electronic keycard at a kiosk awaiting activation of the card." />
              <div className="flex flex-col gap-4 lg:gap-6 p-6 lg:py-10 lg:px-12 shadow-custom-shadow2 rounded-2xl bg-white ml-0 md:ml-[-50px] lg:ml-[-50px] max-w-[642px] max-h-[470px]">
                  <div className="flex flex-col gap-1 lg:gap-4 items-center md:items-start">
                  <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">TAP YOUR CARD AND GO</span>
                  <div className="font-gilroyBold font-normal text-custom-heading text-[26px] leading-[32px] md:text-[32px] md:leading-[38px]">
                  Automatic Key Activation
              </div>
                  </div>
                  <div className="font-ttCommonProMedium font-medium text-custom-body text-base lg:text-lg lg:leading-[28px] ">
                  With this feature, key cards are automatically activated during the kiosk check in process for both new and returning guests. SmartLodge must be integrated with the electronic key system in use at the camp for this automation feature to be enabled.
              </div>
              </div>
             
          </div>
            }
        <div className="flex main-container mx-auto text-nowrap overflow-x-auto gap-6 lg:gap-8 font-gilroyBold text-base md:text-lg md:leading-6 lg:text-xl lg:leading-6 no-scrollbar">
        <div 
        onClick={()=>setActiveTab("mobile")}
        className={`${activeTab === 'mobile' ? 'text-custom-heading border-custom-blue':'text-[#97A7B5] border-[#97A7B5]'} border-b-[2px] text-center cursor-pointer  w-[140px] md:w-[181px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
          Mobile Check In
        </div>
        <div
           onClick={()=>setActiveTab("kiosk")}
        className={`${activeTab === 'kiosk' ? 'text-custom-heading border-custom-blue':'text-[#97A7B5] border-[#97A7B5]'} border-b-[2px] text-center cursor-pointer  w-[263px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
        Kiosk Check In and Check Out
        </div>
        <div 
           onClick={()=>setActiveTab("automatic")}
        className={`${activeTab === 'automatic' ? 'text-custom-heading border-custom-blue':'text-[#97A7B5] border-[#97A7B5]'} border-b-[2px] text-center cursor-pointer  w-[263px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
        Automatic Key Activation
        </div>
        </div>
      </div>
    </div>
  )
}

export default CheckInAndOut
