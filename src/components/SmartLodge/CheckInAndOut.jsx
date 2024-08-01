

const CheckInAndOut = () => {
  return (
    <div className="w-full py-20">
      <div className="main-container mx-auto flex flex-col gap-[60px] items-center">
        <div className="flex flex-col gap-4 text-center">
           <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">RECEPTION & FRONT DESK</span>
           <h2 className="heading-h2">
           Automate Check In and Check Out
           </h2>
           <p className="font-ttCommonProNormal font-medium text-lg text-custom-body ">
           SmartLodge offers optional automation features to further expedite check ins and check outs for camps managing large group arrivals and departures. Ideal for camps housing large workforces.
           </p>
        </div>
 
        <div className="grid grid-cols-2 items-center">
            <img 
            className="h-[565px] w-[642px] rounded-2xl"
            src="/fifo-worker-checks-phone-riding-bus.jpg" 
            alt="Fly-in fly-out worker texts on cellphone while riding a bus with a snowy climate visible from bus window." />
            <div className="flex flex-col gap-6 py-10 px-12 shadow-custom-shadow2 rounded-2xl bg-white ml-[-150px] h-[470px]">
                <div className="flex flex-col gap-4">
                <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">CHECK IN BEFORE ARRIVAL</span>
                <div className="font-gilroyBold font-normal text-custom-heading text-[26px] leading-[32px] md:text-[32px] md:leading-[38px]">
                Mobile Check In
            </div>
                </div>
                <div className="font-ttCommonProMedium font-medium text-custom-body text-lg ">
            Workers receive a text or email on their travel day to confirm their stay at camp. After confirmation, workers are placed as a partial check-in within SmartLodge. To complete check-in, workers need to visit the reception desk or a kiosk upon arrival to confirm their physical presence.To expedite check-in processing time once a worker has arrived at camp, SmartLodge system administrators can require workers to complete all registration forms ahead of time as part of the Mobile Check-In workflow.
            </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default CheckInAndOut
