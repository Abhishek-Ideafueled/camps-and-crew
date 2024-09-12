import React from 'react'
import { Link } from 'react-router-dom';

const B2GoldSecond = () => {
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
              B2Gold partners with Camps & Crew to streamline management of room reservations, maximize room utilization, and ensure seamless operations across five mining camps at Fekola Mine in southwestern Mali.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
              Meet B2Gold, a veteran in gold production across multiple geographies
              </h4>
              <p className="cs-body mt-4">
              Since its establishment in 2007, B2Gold has steadily gained prominence in the global gold production sector.
               The Vancouver-based company has an impressive geographic spread, with operations spanning across Africa, the Americas,
                and Asia. The company plays a significant role in Mali's economy in particular, producing a substantial portion of the
                 country's overall gold output. Their prominence is reflected in the markets they serve, as they consistently deliver
                  high-quality gold while setting new standards in operational efficiency and sustainable mining practices. This commitment
                   to excellence has positioned B2Gold as a leader in the industry,
               demonstrating a robust growth trajectory and a reputation for exceeding expectations in every market they operate.
              </p>

              <div className="mt-12">
                <img
                  src="/b2gold-fekola-mine-mill-aerial.jpg"
                  alt="b2gold-fekola-mine-mill-aerial"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE PROJECT
              </span>

              <h4 className="cs-heading mt-6">
              B2Gold's flagship operation, Fekola Mine, outperforms targets and achieves milestone production
              </h4>

              <p className="cs-body mt-4">
              The Fekola Gold Mine in Mali, B2Gold's largest mine, stands as a testament to their operational efficiency and ambition. 
              Acquired in 2014, B2Gold has transformed the Fekola project into their flagship gold mine. Through local employment,
               the construction of the Fekola mill was completed three months ahead of schedule in 2017. The mine consistently outperforms 
               production targets, doing so ahead of schedule and at a reduced cost. In its fourth year of production,
               the mine celebrated a significant milestone–the production of two million ounces of gold in 2021.
              </p>
              <div className='mt-6'>
            <img src="/fekola-mine-worker-housing-dormitory.jpg" alt="fekola-mine-worker-housing-dormitory" />
              </div>

              <span className="custom-caption mt-12">
              ABOUT FEKOLA’S REMOTE WORKFORCE HOUSING
              </span>

              <h4 className="cs-heading mt-6">
              B2Gold operates nearly 1500 rooms across five camps for workforce in southwestern Mali
              </h4>
              <p className="cs-body mt-4">
              Fekola’s camps, spread across the project site, act as a critical homebase for the project’s diverse workforce. The camps primarily house local workers, but do feature a small international presence as well.
              </p>
              <p className="cs-body mt-4">
              Responsibilities for those managing accommodations at Fekola include:





                            </p>
              <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
                <li>
                Maximizing room occupancy across five camps
                </li>
                <li>
                Fielding regular modifications and cancellations to room reservations to accommodate the evolving needs of project staffing at the mine
                 </li>
                <li>
                Monitoring current occupancy and anticipating future room availability for work crews
                </li>
                <li>
                Managing daily on-site operations for both the front- and back-of-house, including daily responsibilities such as: guest check-in and check-out, housekeeping and maintenance
                </li>
                <li>
                Simplifying ongoing training for new and existing camp staff
                </li>
              </ul>

              <div className="mt-12">
                <img
                  src="/travel-coordinator-sits-desk-typing.jpg"
                  alt="travel-coordinator-sits-desk-typing"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              Inefficient reservation management and siloed systems led to under-utilized rooms, extended check-in times, and hindered staff efficiency
              </h4>
              <p className="cs-body mt-4">
              As the Fekola mine ramped up production, the manual methods of tracking room reservations and coordinating daily camp activities failed to meet the needs of those supporting camp operations, both on-and off-site.Before the adoption of Camps and Crew’s SmartLodge, B2Gold staff encountered the following challenges at the Fekola mining camp:
              </p>
              





              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>      
                <li>
                The previous system's inability to accurately track reservation updates and cancellations led to constant under- or over-booking of rooms across the five camps, causing room underutilization or overcrowding.
                </li>
                <li>
                A lack of real-time room reservation data prevented camp staff from effectively predicting future accommodation needs for the project.
                </li>
                <li>
                The system's failure to link room reservations to guest profiles for workers and subcontractors staying at camp made it nearly impossible to identify duplicate room bookings.
                </li>
                <li>
                Check-in and check-out times were often lengthy, especially during busier periods at the project, due to the system's inability to quickly process large groups arriving or departing.
                </li>
                <li>
                The use of siloed systems by housekeeping and the front desk hindered communication between the teams, often causing rooms not to be ready for arriving workers.
                </li>
                <li>
                Inadequate training provided by the previous system provider prevented camp staff from fully leveraging the system's capabilities, which adversely affected their efficiency and overall resident satisfaction at the camp.
                </li>
              </ul>

              <div className="mt-12">
                <img
                  src="/b2gold-fekola-camp-accommodations-aerial.jpg"
                  alt="b2gold-fekola-camp-accommodations-aerial"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              B2Gold Leverages SmartLodge to Boost Room Utilization and Streamline Operations at Fekola Camps
              </h4>

              <p className="mt-4 cs-body">
              In a move to streamline room management and unlock greater operational efficiencies at the Fekola camps, B2Gold turned to Camps and Crew. The implementation of SmartLodge, 
              a camp management system designed for remote mining camps, has proved to be a game-changer for the remote mining project.
              </p>
              <p className='mt-4 cs-body'>
  B2Gold has realized the following outcomes by leveraging the system:
              </p>
            
              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Room utilization has reached up to 95%,
                  </span> typically during busier periods at the project.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  A notable reduction in no-shows and go-shows,
                  </span> thanks to tighter management of room reservations in SmartLodge.
                </li>
                <li>
                Management at the company have gained access to <span className="font-ttCommonProNormal font-semibold">
                  real-time reservation data,
                  </span> providing an additional layer of oversight and facilitating room forecasting exercises.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Profile data from workers flows directly from B2Gold’s HRIS system into SmartLodge,
                  </span> ensuring all room reservations are tied to workers’ guest profiles hosted in SmartLodge.
                </li>
                
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Communication between the front desk, housekeeping and maintenance teams has increased
                  </span> thanks to all teams working within a single platform, which has ensured rooms are serviced and made available to incoming workers in a timely manner.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Training on the system has become much simpler
                  </span> 
                  and effective as a result of SmartLodge's flexible user interface, which can be adapted to the needs of users in different departments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default B2GoldSecond
