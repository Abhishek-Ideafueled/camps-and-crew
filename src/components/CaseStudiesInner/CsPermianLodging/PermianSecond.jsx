import React from 'react'
import { Link } from 'react-router-dom';

const PermianSecond = () => {
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
                Permian Lodging boosts efficiency and guest satisfaction by
                ensuring rooms are ready on time, increasing communication
                internally and with guests, and streamlining billing.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
                Permian Lodging boosts efficiency and guest satisfaction by
                ensuring rooms are ready on time, increasing communication
                internally and with guests, and streamlining billing.
              </h4>
              <p className="cs-body mt-4">
                <Link
                  to="https://permianlodging.com/about/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                  Permian Lodging LLC,
                </Link>{" "}
                founded in 2012 in the Permian Basin, specializes in providing
                exceptional accommodation solutions for the oilfield service,
                energy, and construction industries. With decades of experience,
                the company excels in creating comfortable, engaging living
                environments that make workers feel at home, fostering rest,
                recharge, and connectivity. Their commitment to enhancing guest
                wellbeing is evident in the ample amenities offered at their
                remote camps, including the Permian Café for healthy meals and
                facilities that support physical and mental health. This
                dedication to excellence makes Permian Lodging a leader in
                remote workforce accommodations in the Permian Basin.
              </p>

              <div className="mt-6">
                <img
                  src="/permian-lodging-guest-bedroom.jpg"
                  alt="permian-lodging-guest-bedroom"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE PROJECTS SUPPORTED
              </span>

              <h4 className="cs-heading mt-6">
                Permian Lodging bolsters oil and gas production in West Texas by
                supporting major energy ventures in the Permian Basin
              </h4>

              <p className="cs-body mt-4">
                The Permian Basin stands as a cornerstone in oil and gas
                production, attracting major projects and infrastructure
                investments from multinational energy corporations such as Exxon
                Mobil and Chevron, among various others. These advancements
                signal a period of significant growth and an increasing need for
                a skilled workforce in Western Texas. Offering comprehensive
                accommodation solutions, Permian's various lodges play a pivotal
                role in supporting the diverse energy projects in the region.
              </p>
              <div className="mt-6">
                <img
                  src="/west-texas-permian-basin-oil-rigs.jpg"
                  alt="west-texas-permian-basin-oil-rigs"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE CAMP OPERATIONS
              </span>

              <h4 className="cs-heading mt-6">
                Permian creates a “home away from home” for the workforce in the
                Permian Basin
              </h4>
              <p className="cs-body mt-4">
                Permian Lodging excels in the meticulous management of its
                accommodation facilities within the Permian Basin, leveraging
                extensive expertise in hospitality and oilfield services. The
                company operates three remote accommodation facilities — Midland
                Lodge, Monahans Lodge, and Carlsbad Lodge — each strategically
                located in close proximity to major project sites.
              </p>
              <p className="cs-body mt-4">
                At its properties, Permian is responsible for:
              </p>
              <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
                <li>
                  Managing room reservations and allocations with precision.
                  Their lodging options include single and double occupancy
                  rooms, designed to enhance comfort and privacy.
                </li>
                <li>
                  Ensuring around-the-clock support with 24/7 front desk and
                  maintenance services to meet all guest needs promptly.
                </li>
                <li>
                Comprehensive weekly cleanings for all occupied rooms. This service encompasses changing bed linens,
                 sweeping and mopping floors, and a thorough cleaning of bathrooms, upholding a high standard of cleanliness and comfort for guests.
                </li>
                <li>
                  Providing a range of amenities for relaxation and recreation,
                  each camp features recreational rooms, fitness centers,
                  basketball courts, and movie theaters to enhance off-the-job
                  life and community engagement.
                </li>
                <li>
                  Offering balanced food options at the Permian Café, each meal
                  is crafted to include a healthy balance of fruits, vegetables,
                  proteins, and carbs, catering to various dietary needs to keep
                  guests energized.
                </li>
                <li>
                  Prioritizing comfort for camp residents, each room is equipped
                  with black-out curtains, high thread count sheets, and private
                  bathrooms to ensure restful sleep after a day's work.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/permian-lodging-midland-basin-recreational-area.jpg"
                  alt="permian-lodging-midland-basin-recreational-area"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
                Operational challenges included manual billing processes,
                fragmented communication, and difficulties in preparing rooms
                for incoming guests during peak occupancy periods
              </h4>
              <p className="cs-body mt-4">
                Permian's commitment to exceptional guest service has always set
                it apart. The operational challenges the company faced before
                adopting a more advanced camp management system were not unique,
                but rather mirrored the broader operational struggles faced by
                many remote camp management providers. More on Permian’s
                challenges below:
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  The camp had to manually process credit card payments for
                  regularly returning guests, requiring them to re-swipe their
                  cards monthly. This process was cumbersome, prone to errors,
                  and led to potential revenue loss if not managed properly.
                </li>
                <li>
                  Permian faced challenges managing group billing scenarios for
                  guest stays linked to a corporate account. The company
                  struggled to handle variable room rates and discounts that
                  were contingent upon stay duration, group size, or specific
                  corporate agreements.
                </li>
                <li>
                  In the rare instances where billing disputes arose with
                  clients, Permian had no electronic record of reservation
                  history and had to manually piece together proof that guests
                  had stayed at their camps.
                </li>
                <li>
                  The absence of a dedicated messaging system hindered Permian's
                  ability to communicate updates to guests, negatively impacting
                  both guest satisfaction and operational efficiency.
                </li>
                <li>
                  During peak occupancy times, the housekeeping team faced
                  challenges in prioritizing rooms that required urgent
                  cleaning. The former system did not efficiently generate daily
                  cleaning schedules based on room occupancy data, resulting in
                  delays in preparing rooms that were due to be occupied
                  soonest.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/permian-lodge-walkway-camp-rooms.jpg"
                  alt="permian-lodge-walkway-camp-rooms"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              SmartLodge transforms Permian Lodging with automated billing, direct guest messaging, and instant updates on room availability, significantly enhancing efficiency and guest satisfaction
              </h4>

              <p className="mt-4 cs-body">
              <Link to='/software-for-workforce-camp' reloadDocument className='underline hover:text-custom-blue'>Smartlodge's</Link> introduction at Permian's remote camps has enhanced operational efficiency and guest services. Permian has achieved widespread improvements across various aspects of their operations:
    
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Improved billing accuracy </span> through the introduction of an automated billing system, which replaced a manual and error-prone credit card payment process.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Streamlined rate application and discount management
                  </span> for corporate clients paying for multiple worker's stays. The system's customizable features facilitate diverse billing scenarios, effectively resolving challenges associated with varied rates and corporate agreements.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                  Strengthened client relations
                  </span> by eliminating most billing disputes through the system's comprehensive audit trails, which detail all reservation booking and modification history. Adherence to PCI DSS and other regulatory standards has also bolstered payment information security, alleviating compliance concerns.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Enhanced guest satisfaction
                  </span> through an advanced SMS messaging system that delivers direct communications about weekly menus, maintenance schedules, and infrastructure updates. This system tailors messages based on various criteria (e.g., arrival/departure dates) and in different formats, improving the delivery of information to guests.
                </li>

                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Bolstered safety measures
                  </span> with the SMS messaging system's rapid dispatch of emergency notifications to all in-house guests, ensuring immediate alerts on critical incidents like severe weather and evacuations.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Rooms are always cleaned on-time,
                  </span> ensuring smoother check-ins and reduced friction at the front desk. The system produces daily cleaning workload assignments for housekeepers, ensuring rooms are serviced quickly and always vacant and clean for arriving guests.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default PermianSecond
