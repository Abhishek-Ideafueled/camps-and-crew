import React from 'react'
import { Link } from 'react-router-dom';

const KiewitSecond = () => {
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
                Kiewit partners with Camps & Crew to streamline transportation
                logistics, simplify group check-ins and optimize room
                utilization at remote hydroelectric project near Timmins,
                Ontario
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
                Kiewit is a leading engineering and construction firm in North
                America, known for its rigorous safety and quality standards
              </h4>
              <p className="cs-body mt-4">
                <Link
                  to="https://www.kiewit.com/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                  Kiewit,
                </Link>{" "}
                one of North America's leading engineering and construction
                firms, is celebrated for its commitment to safety, quality, and
                environmental stewardship. Established in the early 1940s,
                Kiewit has significantly contributed to the development of
                infrastructure across North America, mastering complex
                undertakings from highways to sustainable energy infrastructure
                projects, such as the{" "}
                <Link
                  className="underline hover:text-custom-blue"
                  target="_blank"
                  to="https://www.projecttundrand.com/post/project-tundra-moves-into-final-development-stage"
                >
                  Project Tundra
                </Link>{" "}
                carbon capture initiative in North Dakota. Known for delivering
                challenging projects on time and within budget, Kiewit prides
                itself on its skilled workforce and extensive training programs.
                The company leverages vast resources and deep market knowledge,
                ensuring excellence across every project while emphasizing
                environmental protection and employee development.
              </p>

              <div className="mt-6">
                <img
                  src="/machinery-construction-site.jpg"
                  alt="Excavator moving dirt at remote construction site"
                />
              </div>

              <span className="custom-caption mt-12">ABOUT THE PROJECT</span>

              <h4 className="cs-heading mt-6">
                Kiewit transforms three hydroelectric generating stations and
                enhances renewable energy capacity in Northeastern Ontario with
                the Upper Mattagami and Hound Chute project
              </h4>

              <p className="cs-body mt-4">
              <Link
                  className="underline hover:text-custom-blue"
                  target="_blank"
                  to="https://www.hydroreview.com/world-regions/canada/canada-utility-begins-redevelopment-of-four-ontario-projects/#gref"
                >
                The Upper Mattagami and Hound Chute Project</Link> by Ontario Power
                Generation (OPG) represented a significant enhancement to
                renewable energy infrastructure in Northeastern Ontario. This
                initiative revitalized three hydroelectric facilities near
                Timmins—Wawaitin, Sandy Falls, and Lower Sturgeon—to optimize
                water use and increase energy output at the facilities from 108
                GWh to 180 GWh. Additionally, the project included an upgrade to
                the Hound Chute facility on the Lower Montreal River, which
                nearly tripled capacity at Hound Chute with a new powerhouse.
                Managed by the Kiewit-Alarie Partnership—a collaboration between
                Peter Kiewit & Sons and Aecon's Timmins subsidiary, Leo Alarie
                and Sons Construction—this project underscored OPG's commitment
                to sustainable energy. It aimed to maximize the potential of
                Ontario's renewable resources and support the province's
                long-term energy strategy.
              </p>
              <div className="mt-6">
                <img
                  src="/hydroelectric-project-construction.jpg"
                  alt="Aerial view of Canadian hydroelectric project"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE TRANSPORT AND CAMP OPERATIONS
              </span>

              <h4 className="cs-heading mt-6">
              Kiewit provides integrated transportation and camp services management for remote worksite in Upper Mattagami
              </h4>
              <p className="cs-body mt-4">
              Managing fly-in fly-out operations for the Upper Mattagami River project proved complex, given the remoteness 
              of the worksite and the range of home cities where the workforce resided during their time-off. 
              In service of project operations, Kiewit was tasked to manage the following:
              </p>
              <p className="cs-body font-ttCommonProNormal font-semibold mt-4">
                Travel Coordination
              </p>
              <p className="cs-body mt-4">
              The Upper Mattagami River area, while accessible via major transportation routes, 
              retained characteristics of a remote location due to its geographical isolation from major urban centers. 
              The travel arrangements made for workers to reach the project site were carefully planned to address these challenges.
               Transportation to and from the site consisted of the following:
              </p>
              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  For Local Workers:
                  </span>{" "}
                  <ul
                className="cs-body pl-8 mt-2"
                style={{ listStyleType: "disc" }}
              ><li>
                  Most workers were transported via chartered flights from
                  Winnipeg directly to local airfields near the site, such as
                  those in Gillam or Thompson, which were the closest population
                  centers to Keeyask.</li></ul>
                </li>
                <li className="mt-2">
                  <span className="font-ttCommonProNormal font-semibold">
                  For Non-Local and International Workers:
                  </span>{" "}
                  <ul
                className="cs-body pl-8 mt-2"
                style={{ listStyleType: "disc" }}
              >
                <li className='mt-2'>
                  The journey for non-local workers began with commercial flights to Toronto Pearson International Airport.</li>
                <li className='mt-2'>This was followed by domestic charter flights to Timmins Victor M. Power Airport.</li>  
                <li className='mt-2'>The final leg of their travel involved organized ground transportation, typically buses or vans, from Timmins to the project site.</li>

                  </ul>
                </li>
              </ul>

              <h6 className="font-ttCommonProNormal font-semibold mt-4 text-custom-body">
                Workforce Accommodation
              </h6>

              <p className="cs-body mt-4">
                The camp located near the worksite was designed to accommodate up to 500 workers during the project’s busiest phases.
                 It featured prefabricated units that served as personal living spaces for the workers. These units were part of a comprehensive
                  setup that included multiple
                 support facilities aimed at providing a comfortable and functional living environment.
              </p>

              <p className="cs-body mt-4">
              Key responsibilities of staff supporting the camp included:
              </p>

              <ul
                className="cs-body pl-8 mt-4 flex flex-col gap-2"
                style={{ listStyleType: "disc" }}
              >
                <li>
                Coordinating room reservations and room assignments for Kiewit staff, contractors and subcontractors.
                </li>
                <li>
                Overseeing daily check-in and check-out procedures, conducting housekeeping, and performing routine maintenance.
                </li>
                <li>
                Meal provision through a centrally located kitchen/dining complex, offering high-quality dining services with a variety of food options.
                </li>
                <li>
                Providing recreation facilities to help workers unwind and decompress after their shifts.
                </li>
                <li>
                Offering support facilities, including first-aid and emergency services, as well as laundry facilities, all contributing to a safe and convenient living environment.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/man-camp-housing-wings.jpg"
                  alt="Side view of workforce housing modular dorms"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              Kiewit faces hurdles with transportation coordination, check-in delays,
               and room readiness at the Upper Mattagami camp
              </h4>
              <p className="cs-body mt-4">
              Before implementing a system to manage fly-in fly-out travel and workforce housing, 
              Kiewit faced several operational challenges at their camp in Upper Mattagami. These difficulties, 
              affecting transportation logistics and day-to-day camp operations, 
              underscored the urgent need for a digital-first solution. Key challenges included:
              </p>

              <h6 className="font-ttCommonProNormal font-semibold text-custom-body mt-4">
              FIFO Transportation Challenges
              </h6>

              <ul
                className="cs-body pl-8 mt-2 flex flex-col gap-2"
                style={{ listStyleType: "disc" }}
              >
                <li>
                The project relied on commercial and charter flights, buses, and personal vehicles to 
                transport local staff to and from the worksite. Tracking these diverse transportation modes without a unified 
                system caused logistical inefficiencies and increased operational costs.
                </li>
                <li>
                Using Excel to manage transport schedules and bookings increased the risk of double bookings because there was no 
                central profile to which reservations were tied. Without a centralized system, each booking was managed in isolation,
                 making it difficult to track and reconcile all reservations effectively.
                </li>
                <li>
                Reliance on passenger manifests managed in spreadsheets made it challenging to accurately track all workers headed to site, 
                especially those driving in personally, 
                leading to potential security clearance oversights.
                </li>
                <li>
                Synchronizing travel logistics with roster rotation schedules proved difficult without a central system in place.
                </li>
              </ul>
              <h6 className="font-ttCommonProMedium font-semibold text-custom-body mt-4">
              Camp Accommodation Challenges
              </h6>
              <ul
                className="cs-body pl-8 mt-4 flex flex-col gap-2"
                style={{ listStyleType: "disc" }}
              >
                <li>
                A decentralized booking process, relying on static spreadsheets frequently updated and emailed among team members, resulted in suboptimal room utilization. Securing a room involved extensive email exchanges to confirm requests and bookings.
                </li>
                <li>
                The timing of worker arrivals, often in large groups due to charter flights that landed at similar times, created bottlenecks at check-in areas.
                </li>
                <li>
                The front desk staff faced challenges in coordinating effectively with housekeeping. A lack of bi-directional data flow between the teams often resulted in rooms not being ready for incoming workers.
                </li>
                <li>
                Reliance on spreadsheets, which lacked proper audit capabilities, led to frequent issues with billing accuracy and data management.
                </li>
              </ul>

              <div className="mt-6 flex gap-6">
                <div className='rounded-2xl overflow-hidden'>
                <img
                  src="/charter-buses-highway.jpg"
                  alt="Charter buses drive down barren road"
                />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                <img
                  src="/single-private-bedroom-fly-in-fly-out-camp.jpg"
                  alt="Lodge room at remote fly-in fly-out camp"
                />
                </div>
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              EnRoute and Smartlodge streamline workflows and reduce inefficiencies for multiple teams at Kiewit, 
              simplifying the management of FIFO transport and housing at the Upper Mattagami project
              </h4>

              <p className="mt-4 cs-body">
              EnRoute and SmartLodge, used by multiple teams at Kiewit, together offered a unified platform that drove various positive outcomes 
              for Kiewit. 
              With use of the platform, Kiewit was able to:
              </p>

              <h6 className="font-ttCommonProMedium font-semibold text-custom-body mt-4">
                FIFO Transportation Support
              </h6>

              <ul
                className="cs-body pl-8 mt-4 flex flex-col gap-2"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Ensure efficient scheduling of all transportation types,
                  </span>{" "}
                  significantly reducing logistical complexities and resource wastage, such as underutilized seats and idle vehicles. 
                  The platform simplified the creation and modification of both flight and bus schedules, 
                  ensuring that all legs of the journey to and from camp were centrally housed and in sync with one another.
                </li>
                <li>
                Allow for bulk booking of workers on roster rotations, which significantly <span className="font-ttCommonProNormal font-semibold">
                  reduced the manual workload related to reserving and adjusting travel arrangements
                  </span>{" "}
                  for large rotational crews. If changes occurred, the system facilitated bulk modifications of travel bookings, helping manage sudden shifts in crew sizes or schedules.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Improve accuracy of passenger manifest records,
                  </span>{" "}
                  in adherence to Canadian guidelines for employer monitoring of worker movements. The platform facilitated 
                  tracking of changes like no-shows and go-shows, ensuring precise oversight 
                  into passenger lists for every leg of the workforce's journeys to and from camp.
                </li>
                
              </ul>
              <h6 className="font-ttCommonProMedium font-semibold text-custom-body mt-4">
                Camp Accommodation Support
              </h6>

              <ul
                className="cs-body pl-8 mt-4 flex flex-col gap-2"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Centralize the room booking process
                  </span>{" "}
                  thanks to SmartLodge’s central database where all room bookings are logged–reducing duplicate bookings and 
                  maximizing utilization of rooms. The system enabled users to make room reservations via multiple workflows, ensuring ease-of-use and 
                  streamlining the previously manual and fragmented booking process.
                </li>

                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Reduce check-in wait times,
                  </span>{" "}
                  especially during peak arrival periods, which alleviated bottlenecks at the front desk and enhanced worker satisfaction. 
                  The system enabled workers to complete most of their check-in procedures
                   electronically before arrival, or via self-service kiosks on-site.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Boost guest satisfaction and streamline day-to-day camp operations
                  </span>{" "}
                  by ensuring rooms were promptly turned by housekeeping and made ready for new guest arrivals. With the use of SmartLodge, 
                  room status changes in the system were immediately reflected across the system. This ensured housekeeping teams always knew which 
                  rooms required priority
                   servicing and that the front desk could promptly assign rooms marked as clean to incoming guests.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default KiewitSecond
