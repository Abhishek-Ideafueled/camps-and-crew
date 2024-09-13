import React from 'react'
import { Link } from 'react-router-dom';

const CleanHarborSecond = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('demoForm');
    
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      };
    
      return (
        <div className="w-full h-full">
          <div className="main-container mx-auto py-10 lg:pt-20 lg:pb-10 grid  grid-cols-1 lg:grid-cols-3 lg:gap-8">
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
              Leading provider of environmental, industrial, and lodging services rolls out SmartLodge to elevate lodging experiences across its Canadian camps by optimizing room management, streamlining check-ins, and enhancing routine operations.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
              Introducing Clean Harbors: Pioneers in comprehensive workforce lodging solutions
              </h4>
              <p className="cs-body mt-4">
              <Link to="https://www.cleanharbors.com/about-us" target='_blank' className='underline'>Clean Harbors</Link> is North America's premier provider of environmental, industrial, 
              and lodging services, catering to a diverse clientele that includes many Fortune 500 companies and government
               agencies. Their Lodging Services division offers unparalleled comfort, quality, and flexibility, 
               setting industry standards for both short-term and long-term accommodations. With offerings that include permanent 
               and temporary camps, mobile drill camps, and turnkey camp services operational within 48 hours, they emphasize convenience
                and efficiency. Their accommodations guarantee the highest standards of catering, housekeeping, and maintenance, 
              all tailored to enhance worker morale and productivity.
              </p>

              <div className="mt-12">
                <img
                  src="/kitchen-staff-clean-harbors-canada.jpg"
                  alt="kitchen-staff-clean-harbors-canada"
                />
              </div>

              <span className="custom-caption mt-12">
              ABOUT THE PROJECTS SUPPORTED
              </span>

              <h4 className="cs-heading mt-6">
              Clean Harbors Lodging Services supports Canada's energy sector by providing essential services for oil and gas and construction projects
              </h4>

              <p className="cs-body mt-4">
              Clean Harbors oversees eight lodges strategically positioned across Canada, pivotal in bolstering the region's 
              dynamic energy sector. Located in resource-rich areas like Fort St. John, Grande Prairie, and the Alberta Oil Sands,
               these lodges are instrumental in major projects such as the Coastal GasLink pipeline, which facilitates natural gas transport
                from Dawson Creek to Kitimat​​. Clean Harbors' lodging facilities provide critical services to
               various remote workforces and ensure the smooth operation of Canada's energy infrastructure.
              </p>
              <div className='mt-6'>
            <img src="/mountains-pipe-cat-grabber.jpg" alt="mountains-pipe-cat-grabber" />
              </div>

              <span className="custom-caption mt-12">
              ABOUT THE REMOTE ACCOMMODATIONS
              </span>

              <h4 className="cs-heading mt-6">
              Clean Harbors is a leading provider of premier workforce accommodations in the form of open lodges and turnkey camps
              </h4>
              <p className="cs-body mt-4">
              Clean Harbors stands at the forefront of providing top-tier lodging services to support the unique demands 
              of fly-in fly-out workforces in North America. Within their expansive network of remote housing solutions,
               they commit to ensuring that every aspect of their workforce accommodation contributes to a seamless,
               comfortable, and enriching stay for their guests.
              </p>
              <p className="cs-body mt-4">
              In managing their remote camps, Clean Harbors takes on several key responsibilities:
                            </p>
              <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
                <li>
                Efficiently managing room reservations and room assignments for various project operators, work crews, contractors and subcontractors.
                </li>
                <li>
                Overseeing daily operations on-site, including check-in and check-out procedures, housekeeping, and routine maintenance.
                 </li>
                <li>
                Providing high-quality dining services with a variety of meal options to meet different dietary needs and preferences.
                </li>
                <li>
                Offering detailed and accurate billing for lodging, catering, and other services provisioned to clients.
                </li>
                <li>
                Delivering recreational facilities at various lodges, including fitness centers and games rooms.
                </li>
              </ul>

              <div className="mt-12">
                <img
                  src="/clean-harbors-oil-sands-lodge-lobby.jpg"
                  alt="clean-harbors-oil-sands-lodge-lobby"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              Challenges such as prolonged check-ins, difficulties in readying rooms for occupancy, and 
              billing inaccuracies highlight the need for a more robust camp management system
              </h4>
              <p className="cs-body mt-4">
              Before upgrading to their current system, the company faced numerous operational challenges due to use of a legacy system. Their challenges painted a clear picture of the need for a more robust solution:
              </p>
              
              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>      
                <li>
                Without an advance reservation system and due to heavy reliance on manual tracking of guest reservations, check-in wait times were often lengthy, at times causing a frustrating start to workers' stays.
                </li>
                <li>
                Without a system able to house guest profiles, each visitor was treated as a first-time guest. This prevented the storage of guest preferences and details of past stays, missing chances to improve service and streamline the guest experience.
                </li>
                <li>
                Inaccurate housekeeping status of rooms (e.g., occupied/dirty, vacant/clean) often led to misassigned cleaning tasks, causing housekeepers to service rooms that were already clean while overlooking rooms in need of servicing.
                </li>
                <li>
                Inaccurate occupancy data hindered meal planning, leading to food waste from over or underbuying, straining resources and affecting environmental sustainability.
                </li>
                <li>
                The manual transfer of charge sheet data into invoices and the accounting system was cumbersome, error-prone, and demanded excessive administrative effort.
                </li>
                <li>
                Limited audit capabilities made it hard for Clean Harbors to accurately track occupancy for contracted room blocks, potentially contributing to reduced revenue.
                </li>
              </ul>

              <div className="mt-12">
                <img
                  src="/ruth-lake-lodge-clean-harbors-facade.jpg"
                  alt="ruth-lake-lodge-clean-harbors-facade"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              The implementation of SmartLodge notably reduced check-in times, optimized the room reservation process, and streamlined billing across Clean Harbors' lodge network
              </h4>

              <p className="mt-4 cs-body">
              The implementation of <Link to='/software-for-workforce-camp' className='underline hover:text-custom-blue' reloadDocument>SmartLodge</Link> has yielded various improvements to operational efficiency and guest satisfaction at Clean Harbors' lodging facilities. By embracing the robust functionality of the system across their camps, the company has realized several significant improvements, including:
              </p>
            
              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Facilitating efficient management of check-ins across multiple camp locations, </span> guaranteeing a uniformly positive experience for all guests. Smartlodge's tailored user interface allows reception to quickly access the fields and documents they need to process arriving guests, 
                  reducing check-in wait times to as little as 30 seconds.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Expediting the booking process
                  </span> for repeat guests, recognizing their preferences and streamlining their experience from the moment their reservation is made. Each guest has a unique guest profile housed within Smartlodge that tracks an unlimited array of profile attributes and to which all room reservations are tied.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Streamlining room assignments,
                  </span> boosting occupancy rates and revenue. Smartlodge's drag-and-drop room blocking functionality ensures maximum utilization of rooms across contracted room allotments and general room inventory.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Promoting high standards of cleanliness and room readiness
                  </span> by managing housekeeping services through the standard housekeeping package within SmartLodge. This has enabled Clean Harbors to ensure housekeeping workload assignments align with room occupant status (e.g., soon-to-arrive, mid-swing, guest on time-out), length of stay, and/or specific client requirements.
                </li>
                
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Significantly reducing food waste
                  </span> due to the ability to accurately forecast meal needs based on future occupancy, which is tracked in the system. SmartLodge's comprehensive reporting suite offers detailed insights into guest movements and dietary preferences, facilitating better meal planning.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Automating billing operations,
                  </span> from reservation to reconciliation. Smartlodge generates detailed charge sheets that are converted into draft invoices, which can be configured to include additional charges like equipment rentals. Once charge sheets are approved, they are finalized and exported directly to Clean Harbor's accounting system, matching SmartLodge charge codes with the external system's correct general ledger accounts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default CleanHarborSecond
