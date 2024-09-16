import React from 'react'
import { Link } from 'react-router-dom';

const AnokiiSecond = () => {
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
                Anokiigamig Construction LP transforms the management of
                Atkinson Road Camp by leveraging SmartLodge to streamline
                check-ins, maximize room utilization, and ensure seamless
                day-to-day operations.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
                Anokiigamig Construction LP: A beacon of aboriginal
                entrepreneurship in modern construction and remote camp
                management
              </h4>
              <p className="cs-body mt-4">
                <Link
                  to="https://anokiigamig.ca/about-us/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                  Anokiigamig Construction LP,
                </Link>{" "}
                a 100% Aboriginal-owned company, is a testament to the synergy
                of tradition and modernity in the construction industry. With
                ownership rooted in the community—45% by Rainy River First
                Nation, 45% by Naicatchewenin First Nation, and 10% by Saulteaux
                Consulting & Engineering—Anokiigamig embodies a profound
                commitment to not just the excellence in civil, structural, and
                general contracting, but also to fostering economic growth and
                sustainability within First Nations communities. The company has
                expanded its portfolio to include the specialized construction
                and management of remote camps, reflecting a strategic
                integration of general contracting with facility management and
                highlighting their commitment to comprehensive service delivery.
              </p>

              <div className="mt-6">
                <img
                  src="/anokiigamig-construction-atkinson-road-camp.jpg"
                  alt="anokiigamig-construction-atkinson-road-camp"
                />
              </div>

              <span className="custom-caption mt-12">ABOUT THE PROJECTS</span>

              <h4 className="cs-heading mt-6">
                The Rainy River Mine project—setting new standards in
                environmental and community stewardship
              </h4>

              <p className="cs-body mt-4">
                <Link
                  to="https://rainyriver.newgold.com/about/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                  The Rainy River Mine project,
                </Link>{" "}
                located approximately 65 kilometers northwest of Fort Frances,
                Ontario, represents a pioneering collaboration between New Gold
                Inc. and Anokiigamig Construction LP, and is a key development
                on the traditional lands of Treaty #3 Anishinaabe Communities.
                Initiated with New Gold's acquisition in October 2013 and
                reaching commercial production by October 2017, the project
                encompasses a state-of-the-art processing facility, alongside
                well-designed storage and handling systems that exemplify the
                industry's move towards more sustainable and responsible mining
                practices. This project is not just an economic venture, but
                also a collaborative effort that integrates the best of mining
                innovation with a deep commitment to environmental stewardship,
                community partnership, and respect for the land.
              </p>
              <div className="mt-6">
                <img
                  src="/aerial-rainy-river-mine.jpg"
                  alt="aerial-rainy-river-mine"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE CAMP OPERATIONS
              </span>

              <h4 className="cs-heading mt-6">
                Anokiigamig delivers diverse and tailored solutions for
                workforce accommodation at Atkinson Road Camp
              </h4>
              <p className="cs-body mt-4">
                The Atkinson Road Camp, predominantly staffed by indigenous
                employees (70-75%), accommodates up to 375 workers and includes
                10 dorms with 376 rooms, plus dining, recreation, and
                administrative facilities. This comprehensive setup fosters a
                holistic living and working environment, enriched with quality
                food services, maintenance, and recreational activities to
                enhance the overall quality of life for the residents. The
                responsibilities of the camp include:
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  Providing efficient accommodation management and reception
                  services, ensuring a smooth experience from check-in to
                  departure
                </li>
                <li>
                  Offering a 24-hour retail facility with essentials like
                  beverages, tobacco, snacks, and toiletries, ensuring residents
                  have constant access to necessary items for their comfort and
                  well-being.
                </li>
                <li>
                  Providing three meals per day through a cafeteria, catering,
                  Grab & Go, and retail options, ensuring that all dietary needs
                  and preferences are catered to with fresh and high-quality
                  food selections.
                </li>
                <li>
                  Thorough cleaning and housekeeping efforts ensure that the
                  camp remains tidy and welcoming, fostering an environment
                  where residents can feel comfortable and at home.
                </li>
                <li>
                  The camp's recreation center offers a pool, ping pong,
                  foosball, and workout areas, promoting residents' physical and
                  mental health by providing diverse leisure and activity
                  options.
                </li>
                <li>
                  Handling general maintenance, small repairs, ventilation,
                  plumbing, and grounds maintenance to ensure all operational
                  aspects of the camp function smoothly and efficiently.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/atkinson-camp-rainy-river-dining-hall.jpg"
                  alt="atkinson-camp-rainy-river-dining-hall"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
                Efficiently managing reservations, housekeeping, and
                interdepartmental coordination in a high-occupancy camp
                environment proved difficult at times
              </h4>
              <p className="cs-body mt-4">
                Managing the Atkinson Road Camp involves navigating complex
                logistical challenges due to its consistently high occupancy and
                variable influx of workers. These factors necessitate a flexible
                and efficient approach to management of the camp. Key issues the
                camp faced before implementing a camp management system include:
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  The front desk managed reservations and handled reservation
                  change requests manually, which proved time-consuming and
                  inefficient
                </li>
                <li>
                  The arrival of large groups simultaneously, coupled with a
                  manual reservation system, significantly extended wait times
                  at check-in, creating a bottleneck due to limited front desk
                  staffing.
                </li>
                <li>
                  A lack of real-time visibility into room availability across
                  the camp's 10 dorms made it difficult to utilize
                  accommodations optimally, leading to potential underuse of the
                  available accommodation space.
                </li>
                <li>
                  Manually tracking housekeeping status and coordinating tasks
                  often resulted in delays, with rooms frequently not being
                  ready on time. Without a modern system, the efficiency of
                  cleaning staff was reduced, leading to slower turnover of
                  rooms and delaying the availability of clean rooms for
                  arriving guests.
                </li>
                <li>
                  The size of the camp made it susceptible to communication
                  breakdowns between the front desk, housekeeping and
                  maintenance teams, hindering the speed at which rooms could be
                  checked, cleaned, and ultimately assigned to incoming workers.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/anokiigamig-atkinson-camp-buildings.jpg"
                  alt="anokiigamig-atkinson-camp-buildings"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
                SmartLodge enhances group check-ins, simplifies the management
                of housekeeping, optimizes room utilization, and improves
                coordination across departments at Atkinson Road Camp
              </h4>

              <p className="mt-4 cs-body">
                To navigate the multifaceted operational challenges at Atkinson
                Road Camp, Anokiigamig deployed SmartLodge to address each of
                the identified challenges directly. The company achieved various
                positive outcomes by leveraging the system:
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                    Eliminated administrative burden for the front desk
                  </span>
                  by introducing an online booking portal, which facilitates
                  both roster and ad hoc room bookings.
                  <ul
                    className="cs-body pl-8"
                    style={{ listStyleType: "disc" }}
                  >
                    <li>
                      <span className="font-ttCommonProNormal font-semibold">
                        The system automatically generates room bookings for
                        workers on roster rotations{" "}
                      </span>{" "}
                      on an ongoing basis for three major contractor groups
                      staffed on the project, with any required changes handled
                      by front desk staff.
                    </li>
                    <li>
                      The platform also supports{" "}
                      <span className="font-ttCommonProNormal font-semibold">
                        ad hoc bookings,
                      </span>{" "}
                      allowing for individual reservations that do not follow
                      standard roster patterns to be made in the system. This
                      feature enables users to flexibly manage unscheduled or
                      last-minute reservation needs, essential for adapting to
                      the fluctuating project needs.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Check-in times were reduced to as little as 30 seconds
                  </span> through efficient search and registration features available in the
                  system, enabling front desk staff to promptly process arriving
                  guests. Additionally, the front desk assigns rooms before
                  guests arrive using SmartLodge's user-friendly room blocking
                  tool, further streamlining the check-in process.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Optimized room utilization </span> through the use of reserved room blocks, which have been created in SmartLodge for larger contractors staffed at the Rainy River project. This feature not only provides real-time visibility into general room inventory across the camp's 10 dorms, but also allows for precise oversight into the booking of these room blocks that are designated for key project personnel.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Boosted room turnover </span> by synchronizing housekeeping schedules with room status data, all managed in the system. SmartLodge enables cleaning staff to prioritize rooms needing immediate servicing and to quickly update the housekeeping status of rooms immediately after their shifts are complete. This ensures rooms are swiftly readied for new arrivals, enhancing both operational efficiency and guest satisfaction.
                </li>

                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Enhanced communication and coordination </span> across different camp departments by offering real-time insights into operational metrics, such as room occupancy and housekeeping status of rooms.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default AnokiiSecond
