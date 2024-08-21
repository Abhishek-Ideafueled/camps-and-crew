import React, { useState } from "react";

const RwYearScroll = () => {

  const [loadContent,setLoadContent] = useState(0);
  
  return (
    <div className="w-full flex flex-col gap-4">
     
      <section id="2024">
        <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2024</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Feature Release
              </div>
              <div className="card-heading">
                SMS Guest Messaging Rolls Out in the Permian Basin
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                SMS messaging enables tailored communications and real-time
                updates, enhancing guest experiences and bolstering safety at
                camp.
              </div>
            </div>
            <div className="relative w-full h-auto">
              <img
                className="rounded-lg object-cover w-full"
                src="/mining-fifo-worker-checks-cell-phone.png"
                alt="Fifo workers holds coffee and reads phone outside of camp bedroom constructed of prefabricated materials."
              />
              <div className="absolute inset-0 bg-card-gradient rounded-lg h-full w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Feature Release
              </div>
              <div className="card-heading">
                Digital Role Call Streamlines Response During Muster Events
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                Camp staff can take roll call digitally via mobile devices
                during musters, ensuring quick accounting of all personnel and
                swift evacuation, if required.
              </div>
            </div>
            <div className="relative w-full h-auto">
              <img
                className="rounded-lg object-cover w-full"
                src="/camp-staff-member-takes-roll-call-muster-event.png"
                alt="Camp management company staff reviews ipad in remote camp setting."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-heading rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-white font-base leading-[18px] font-normal">
                Major Update
              </div>
              <div className="card-heading">
                Custom Reservation Screens Expedite Training of New Users
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                A customizable reservation screen interface was first introduced
                at an Indonesian mining project, making booking rooms and
                training faster than ever.
              </div>
            </div>
            <div className="relative w-full h-auto">
              <img
                className="rounded-lg object-cover w-full"
                src="/indonesia-office-worker-views-computer.png"
                alt="Front desk receptionist at mining housing facilities studies computer screen."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
     { loadContent ===0 ? 
      <div 
      onClick={()=>setLoadContent(loadContent+1)}
      className='font-gilroyBold text-custom-back w-full text-center underline'>
      Load More
      </div>
     :  loadContent >=1 &&
     <> 
     <section id="2022">
     <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2022</h3>
        <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
          <div className="flex flex-col gap-4">
            <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
              Feature Release
            </div>
            <div className="card-heading">
              Mobile Check-In Further Speeds Up Arrival Process
            </div>
            <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
              Mobile check-in rolls out in Alberta, allowing guests to
              pre-register via email, reducing wait times and easing front desk
              workloads during group arrivals.
            </div>
          </div>
          <div className="relative w-full max-h-[360px]">
            <img
              className="rounded-lg object-cover w-full max-h-[360px]"
              src="/fifo-worker-checks-phone-riding-bus.jpg"
              alt="Front desk receptionist at mining housing facilities studies computer screen."
            />
            <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
          </div>
        </div>
      </section>
      <section id="2020">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2020</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Feature Release
              </div>
              <div className="card-heading">
                Automated Bookings for FIFO Workers on Roster Rotations
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                This feature automates bookings for rotational workers, reducing
                administrative tasks and ensuring essential personnel are
                on-site when required.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/fifo-workers-walk-path-remote-mining-camp.png"
                alt="FIFO workers in personal protective equipment walk alongside camp buildings in desert setting."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Feature Release
              </div>
              <div className="card-heading">
                Approval Workflows Facilitate Bookings for a Canadian Mine
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                Customizable approval workflows ensure compliance and streamline
                the reservation process for large organizations booking FIFO
                travel or rooms.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/mining-crews-watches-bulldozer-open-pit-mine.png"
                alt="Mining workers look on to bulldozer in open pit mine."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      </>}
      { loadContent ===1 ?
         <div 
         onClick={()=>setLoadContent(loadContent+1)}
         className='font-gilroyBold text-custom-back w-full text-center underline'>
         Load More
         </div>: loadContent >=2 &&
      <>      
      <section id="2019">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2019</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Feature Release
              </div>
              <div className="card-heading">
                Cleaning Teams Use Mobile Devices to Manage Daily Tasks
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                Cleaning and camp maintenance is streamlined with mobile
                devices, enabling swift occupancy checks, task delegation, and
                maintenance ticket creation.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/housekeeper-studies-tablet-worker-room.jpg"
                alt="Camp attendant reads ipad inside bedroom at a remote mining camp."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Integration
              </div>
              <div className="card-heading">
                Dining App Showcases Catering Options and Tracks Orders
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                The system integrates into a propriety app that allows guests to
                view menus and pre-order meals, streamlining daily food service
                and billing for meals.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/guest-orders-food-mobile-phone.png"
                alt="Person orders food on mobile application displaying multiple menu items."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="2018">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2018</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-heading rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-white font-base leading-[18px] font-normal">
                Major Update
              </div>
              <div className="card-heading">
                Permanent Room Assignments Hold Rooms for FIFO Workers
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                This update enables users to create permanent room assignments
                for rotational workers--first leveraged by users at a Canadian
                oil sands camps.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/fifo-camp-bedroom-briefcase-bed.png"
                alt="Vacant bedroom with a bag placed on bed in a remote FIFO camp."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      </>}
     { loadContent ===2 ?
         <div 
         onClick={()=>setLoadContent(loadContent+1)}
         className='font-gilroyBold text-custom-back w-full text-center underline'>
         Load More
         </div>:  loadContent >=3 &&
     <>
      <section id="2017">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2017</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Integration
              </div>
              <div className="card-heading">
                Integration with Energy Mgmt. System Lowers Operating Costs
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                The first integration with an energy management system rolls out
                in 2017, reducing energy costs for a camp services provider
                located in the Nordics.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/mechanical-aparatus-room.png"
                alt="Mechanical room at a remote workforce lodging site."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="2016">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2016</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Integration
              </div>
              <div className="card-heading">
                SmartLodge Integrates into First HRIS System via API
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                The Engineering team rolls out an API integration with an
                enterprise HR system, ensuring accurate profile data management
                and seamless flow of data.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/fifo-workers-ppe-talking.png"
                alt="FIFO workers in uniform chat among each other during sunny day."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="2015">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2015</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Feature Release
              </div>
              <div className="card-heading">
                Kiosk Check In Drastically Reduces Check In Wait Times
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                Self-service kiosks streamline check-in at a lodge in Western
                Canada, offering immediate key activation and a seamless arrival
                experience for camp guests.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/kiosk-check-in-process-fifo-workers.png"
                alt="Camp residents complete kiosk check-in at lobby of a remote fly-in fly-out camp."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      </>}
     { loadContent ===3 ?
         <div 
         onClick={()=>setLoadContent(loadContent+1)}
         className='font-gilroyBold text-custom-back w-full text-center underline'>
         Load More
         </div>: loadContent >=4 &&
     <>
      <section id="2014">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2014</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-button rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal">
                Integration
              </div>
              <div className="card-heading">
                Direct Key System Integration Enhances Check In and Billing
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                This integration powers automatic key activation during check-in
                and tracks all key swipes across camp to produce a precise tally
                of billable meals.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/woman-taps-card-room-access.png"
                alt="Female workers taps keycard to enter bedroom at remote camp."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="2013">
      <h3 className="font-gilroyBold text-[#212529] text-[25px] mt-6 mb-2">2013</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 py-6 px-10 max-w-max max-h-max bg-white shadow-rw-slide-shadow rounded-2xl items-center">
            <div className="flex flex-col gap-4">
              <div className="bg-custom-heading rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-white font-base leading-[18px] font-normal">
                Major Update
              </div>
              <div className="card-heading">
                Multi-Site Management for Hotels and Camps
              </div>
              <div className="font-ttCommonProRegular text-custom-body smalls:text-base text-sm">
                Originally developed for hotels in 2007 and adapted for camps,
                this update allows efficient management of multiple camps from a
                single system.
              </div>
            </div>
            <div className="relative w-full max-h-[360px]">
              <img
                className="rounded-lg object-cover w-full max-h-[360px]"
                src="/large-remote-camp-winter-fort-mcmurray.png"
                alt="Aerial view of a remote workforce housing site in a winter setting."
              />
              <div className="absolute inset-0 bg-card-gradient2 rounded-lg h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>
      </>
      }
      {loadContent ===4 ?
         <div 
         onClick={()=>setLoadContent(0)}
         className='font-gilroyBold text-custom-back w-full text-center underline'>
         Show Less
         </div>: " "}
    </div>
  );
};

export default RwYearScroll;
