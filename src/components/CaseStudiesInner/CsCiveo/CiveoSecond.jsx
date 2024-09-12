import React from 'react'
import { Link } from 'react-router-dom'


const CiveoSecond = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('demoForm');
    
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      };
    
      return (
        <div className="w-full h-full">
          <div className="main-container mx-auto py-10 lg:pt-20 lg:pb-10 grid  grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="col-span-1 lg:sticky lg:top-[120px] lg:z-10 h-auto self-start">
              <div className="w-full lg:max-w-[384px] max-h-max bg-white border-[1px] border-custom-blue shadow-cs-inner-shadow p-6 rounded-2xl flex flex-col">
                <h3 className="text-xl leading-[120%] lg:text-[32px] 2xl:text-[36px] font-gilroyBold text-custom-heading ">
                  Request a Demo
                </h3>
                <span className="font-ttCommonProNormal text-sm leading-[120%] lg:text-base text-custom-body pt-2 xl:pt-6">
                  Get in touch to see how our technology can be tailored to meet
                  the unique requirements of your remote operations.
                </span>
                <div
                  className="w-full mx-auto mt-4 xl:mt-10"
                  onClick={handleClickScroll}
                >
                  <Link
                    to="#demoForm"
                    className="btn-orange w-full h-[54px] flex gap-2 items-center justify-center py-[14px] px-4"
                  >
                   CONTACT SALES
                    <span>
                      <svg
                        width="29"
                        height="16"
                        viewBox="0 0 29 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.0986328 7.76806C0.325148 7.07132 0.803674 6.82978 1.50122 6.83133C9.21321 6.84371 16.9259 6.83907 24.6379 6.83907C24.7489 6.83907 24.8599 6.83907 25.0392 6.83907C24.9267 6.7183 24.8554 6.63856 24.7812 6.56115C23.5661 5.31165 22.3518 4.06216 21.1352 2.81499C20.8052 2.47668 20.6972 2.07257 20.8269 1.61969C20.9477 1.19932 21.2349 0.930682 21.652 0.83159C22.0833 0.729401 22.4403 0.879588 22.7478 1.19622C24.1084 2.5959 25.472 3.99248 26.8341 5.39062C27.3388 5.9093 27.8384 6.43341 28.3499 6.94435C28.5892 7.18357 28.7947 7.43827 28.9012 7.76806C28.9012 7.92289 28.9012 8.07772 28.9012 8.23256C28.7939 8.56157 28.5862 8.81395 28.3499 9.05549C26.486 10.9615 24.6282 12.8737 22.7665 14.782C22.27 15.2914 21.625 15.3386 21.1569 14.9081C20.6574 14.4491 20.6424 13.6974 21.1374 13.1856C22.3488 11.933 23.5661 10.6859 24.7834 9.43947C24.8554 9.36592 24.9469 9.31328 25.0294 9.25057C25.0152 9.22038 25.0002 9.19019 24.9859 9.16077C24.8794 9.16077 24.7729 9.16077 24.6664 9.16077C16.9454 9.16077 9.22371 9.15613 1.50272 9.16851C0.804424 9.17006 0.325898 8.92852 0.0986328 8.23256C0.0986328 8.07772 0.0986328 7.92289 0.0986328 7.76806Z"
                          fill="#060F1F"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 flex flex-col">
              <div className="flex items-center gap-4 h-[160px] border-b-[#E6E6E6] border-b-[1px]">
                <span className="w-20 h-20">
                  <img
                    className="w-auto h-auto rounded-e-2xl"
                    src="/alya-snyder.png"
                    alt="user-pic"
                  />
                </span>
                <div className="flex flex-col gap-[2px]">
                  <h4 className="font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]">
                    Alya Snyder
                  </h4>
                  <p className="font-ttCommonProNormal text-custom-body text-sm leading-[22.4px]">
                    Customer & Content Marketer
                  </p>
                </div>
              </div>

              <span className="custom-caption mt-16">AT A GLANCE</span>
              <h4 className="cs-heading mt-6">
                Premier workforce accommodations provider leverages SmartLodge
                across remote lodges to speed up check-in for camp residents,
                maximize occupancy and facilitate day-to-day camp operations
                across Canada and the United States.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
                Introducing Civeo: A global leader in remote workforce
                accommodations to the energy and mining sectors
              </h4>
              <p className="cs-body mt-4">
                Civeo is a global leader in providing accommodation for remote
                workforces, specializing in serving the mining, energy, and
                construction industries with exceptional lodging solutions.
                Their commitment to excellence ensures workers have comfortable
                and secure living environments, essential for thriving in
                demanding roles. Offering services such as workforce housing,
                modular facility leasing, catering and food services,
                housekeeping, and facility operations, Civeo stands out through
                its dedication to innovation and sustainability. By integrating
                advanced technologies and design practices, and fostering
                collaborative partnerships with a client-centric approach, Civeo
                consistently delivers world-class accommodation solutions that
                not only enhance productivity and foster a sense of community,
                but also support the success of remote workforces around the
                world.
              </p>

              <div className="mt-12">
                <img
                  src="/civeo-wapasu-front-desk-agent-provides-room-card.jpg"
                  alt="civeo-wapasu-front-desk-agent-provides-room-card"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE PROJECTS SUPPORTED
              </span>

              <h4 className="cs-heading mt-6">
                Civeo camps provide accommodations to key energy projects across
                North America
              </h4>

              <p className="cs-body mt-4">
                Civeo operates <Link to='https://civeo.com/accommodations/' className='underline hover:text-custom-blue'>20 lodges</Link> in Canada and the United States,
                encompassing over 17,000 rooms across in North America. These
                accommodations are strategically placed in areas with
                substantial natural resource activities, such as the Alberta Oil
                Sands in Canada and the Bakken Formation in the United States,
                both of which are renowned for their substantial oil and natural
                gas reserves. Civeo's lodges support some of the most
                significant and demanding remote projects in North America,
                where the extraction and processing of natural resources are
                central to the energy landscape and economies of Canada and the
                United States.
              </p>
              <div className='mt-6'>
            <img src="/oil-sands-alberta-tractor-project-site.jpg" alt="oil-sands-alberta-tractor-project-site" />
              </div>

              <span className="custom-caption mt-12">
              ABOUT THE REMOTE ACCOMMODATIONS
              </span>

              <h4 className="cs-heading mt-6">
              Civeo manages large-scale lodges serving a diverse set of project operators
              </h4>
              <p className="cs-body mt-4">
              Civeo undertakes a comprehensive range of responsibilities to ensure the smooth functioning of their extensive network of lodges.
               By focusing on comfort, convenience, and community,
              Civeo caters to the unique needs of diverse fly-in fly-out workforces across Canada and the United States.
              </p>
              <p className="cs-body mt-4">
              At their remote camps, Civeo is responsible for:
                            </p>
              <ul className="cs-body pt-2 pl-8" style={{ listStyleType: "disc" }}>
                <li>
                Managing room reservations and allocation for various work crews across project operators and contractors, ensuring an efficient use of room inventory
                </li>
                <li>
                Overseeing daily operations on-site, which includes check in and check out procedures, housekeeping, and routine maintenance to maintain a high standard of cleanliness and functionality
                </li>
                <li>
                Providing high-quality dining services, offering a variety of meal options to suit different dietary needs and preferences
                </li>
                <li>
                Delivering recreational facilities, giving guests access to fitness centers, games rooms, and other recreational amenities to support their wellbeing while at camp
                </li>
                <li>
                Providing detailed and accurate billing to its clients, offering transparency for charges related to lodging, catering, etc.
                </li>
              </ul>

              <div className="mt-12">
                <img
                  src="/civeo-wapasu-east-lodge-entrance.jpg"
                  alt="civeo-wapasu-east-lodge-entrance"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              Check-in delays, coordination between the front desk and housekeeping, and other camp operations proved challenging prior to the implementation of a camp management system
              </h4>
              <p className="cs-body mt-4">
              As a longtime partner of Camps & Crew, Civeo has always stood out as an early adopter of technology among remote
               workforce accommodations providers. The below bullets highlight some key operational challenges 
              Civeo faced prior to implementing software to streamline the management of their remote accommodations:
              </p>
              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>      
                <li>
                Lengthy check-in wait times were a frequent occurrence due to charter flight schedules that would result in the simultaneous arrival of 100+ workers at camp, overwhelming front desk staff and causing frustration for workers after long travel days.
                </li>
                <li>
                Suboptimal room utilization was a recurring issue due to limited real-time visibility into room availability.
                </li>
                <li>
                The booking process was decentralized, leading to potential errors and inefficiencies as different lodges used varied methods for room reservation creation. Some lodges would coordinate individual room reservations via lengthy email chains, while others would rely on oft-outdated passenger manifests to create room reservations.
                </li>
                <li>
                Poor coordination of room assignments was evident as the front desk and housekeeping teams struggled to communicate effectively regarding which rooms were ready for incoming guests.
                </li>
                <li>
                Broken communication between the front desk and housekeeping led to challenges coordinating room cleanings and assigning rooms, sometimes causing rooms not to be ready for workers checking in.
                </li>
                <li>
                Managing alcohol consumption in lounge areas presented a unique challenge, requiring manual monitoring and restrictions based on guest type and shift.
                </li>
                <li>
                The invoicing process was complicated by the lack of complete audit trails for reservation bookings and modifications, leading to questions regarding billing accuracy. This issue was further intensified considering the varied range of paying clients.
                </li>
              </ul>

              <div className="mt-12">
                <img
                  src="/fifo-workers-check-in-kiosks-civeo-remote-camp-oil-sands.jpg"
                  alt="fifo-workers-check-in-kiosks-civeo-remote-camp-oil-sands"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              Smartlodge expedites group check-ins, achieves optimal room utilization, streamlines day-to-day camp operations, and improves guest satisfaction for workers housed at Civeo camps
              </h4>

              <p className="mt-4 cs-body">
              Implementing <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="underline hover:text-custom-blue"
                >
                  SmartLodge
                </Link> across Civeo’s lodges has led to multiple positive operational outcomes.By leveraging robust deployments of the system across their sites, Civeo has been able to achieve the following:
                
              </p>
              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Reduced check-in wait times, as quick as 30 seconds,
                  </span> made possible with the implementation of Mobile Check In and Kiosk Check In, which together enable incoming guests to start the check-in process via a mobile device and complete their check-in at kiosks placed throughout Civeo lobbies.
                   Keys for returning workers are activated at the kiosks.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Enhanced guest experience: 
                  </span> the implementation of a Mobile Check In and Kiosk Check In has enabled guests to quickly check in and head to their rooms, reducing friction upon arrival and contributing to increased worker wellbeing.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Optimal room utilization–up to 98% during busy periods:
                  </span> attributable to SmartLodge’s live database of room inventory that tracks the creation, modification and cancellation of room reservations in real-time.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Improved coordination of room assignments
                  </span> thanks to improved communication between the front desk and housekeeping teams. Real-time updates on room status and availability allowed housekeeping to prioritize cleaning, ensuring rooms were ready for incoming guests.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                A streamlined room booking process
                  </span> that enables various authorized parties to book rooms via an online booking portal–replacing previously disjointed and decentralized booking practices prone to inefficiency and error.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Streamlined invoicing process: 
                  </span> SmartLodge simplified the previously complex invoicing process by providing complete audit trails of reservation bookings and modifications, greatly improving billing accuracy and transparency for Civeo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default CiveoSecond
