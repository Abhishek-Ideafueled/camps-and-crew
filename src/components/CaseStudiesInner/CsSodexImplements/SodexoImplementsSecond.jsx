import React from 'react'
import { Link } from 'react-router-dom';

const SodexoImplementsSecond = () => {
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
                Sodexo leverages EnRoute and SmartLodge at Keeyask Camp in
                Northern Manitoba to facilitate seamless transportation and
                accommodation management, significantly elevating operational
                productivity and satisfaction of camp residents
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
                Sodexo: a global leader in integrated facilities management
              </h4>
              <p className="cs-body mt-4">
                <Link
                  to="https://ca.sodexo.com/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                  Sodexo
                </Link>{" "}
                is a food services and facilities management company dedicated
                to providing a superior experience for their clients across a
                wide variety of industries including energy, mining, education,
                and health. With its wide range of services, Sodexo provides
                comprehensive catering and facilities management services that
                meet the unique needs of each industry. They go above and beyond
                by seamlessly managing camp room reservations, crew check-ins,
                housekeeping, maintenance, and on-site dining, allowing their
                clients to focus on core business activities while enjoying
                top-notch support services while staffed at remote projects
              </p>

              <div className="mt-6">
                <img
                  src="/keeyask-project-under-construction.jpg"
                  alt="Workers laboring during day at construction site"
                />
              </div>

              <span className="custom-caption mt-12">ABOUT THE PROJECT</span>

              <h4 className="cs-heading mt-6">
                The Keeyask Generating Station: powering Manitoba's future with
                renewable energy
              </h4>

              <p className="cs-body mt-4">
                The development of the Keeyask Generating Station was a joint
                venture led by the Keeyask Hydropower Limited Partnership
                (KHLP), involving <Link className='underline hover:text-custom-blue' to='https://keeyask.com/2009/05/manitoba-hydro-and-four-cree-nations-sign-historic-joint-keeyask-development-agreement/' target='_blank'>Manitoba Hydro and four First Nations</Link>. This
                695-megawatt project was designed to harness renewable energy
                while minimizing environmental impact. Governed by the <Link className='underline hover:text-custom-blue' target='_blank'  to='https://www.hydro.mb.ca/docs/projects/keeyask/JKDA_090529.pdf'>Joint 
                Keeyask Development Agreement</Link>, the project emphasized local
                employment, training, and business opportunities, promoting
                economic and social growth. The project's environmental
                management was reinforced by Manitoba Hydro's ISO 14001
                certified <Link to='https://www.hydro.mb.ca/environment/env_management/' target='_blank' className='underline hover:text-custom-blue'>Environmental Management System</Link> and a comprehensive
                environmental protection program developed in alignment with the
                Keeyask Cree Nations' principles of caring for Askiy, the living
                earth. Upon completion, Keeyask has significantly contributed to
                Manitoba's sustainable energy future, demonstrating KHLP's
                commitment to ecological integrity and community involvement.
              </p>
              <div className="mt-6">
                <img
                  src="/keeyask-project-construction-site.jpg"
                  alt="People walk towards camp lobby at Sodexo Keeyask project"
                />
              </div>

              <span className="custom-caption mt-12">
              ABOUT THE TRANSPORT AND CAMP OPERATIONS
              </span>

              <h4 className="cs-heading mt-6">
              Sodexo manages complex travel and accommodation operations at the Keeyask camp in northern Manitoba
              </h4>
              <p className="cs-body mt-4">
              In service of project operations, Sodexo was tasked to manage the logistical complexities of worker transport to and
               from camp, as well as operations at camp.
               More on Sodexo's project involvement is detailed below:
              </p>
              <p className="cs-body font-ttCommonProNormal font-semibold mt-4">
              Travel Coordination
              </p>
                <p className="cs-body mt-4">
                Situated approximately 725 kilometers north of Winnipeg, Manitoba, on the lower Nelson River, the project necessitated that Sodexo oversee complex FIFO transportation logistics, which included:
                </p>
              <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>
                <li>
               <span className='font-ttCommonProNormal font-semibold'>Chartered Flights:</span> Most workers were transported via chartered flights from Winnipeg directly to local airfields near the site, 
                such as those in Gillam or Thompson, 
                which were the closest population centers to Keeyask.
                </li>
                <li className='mt-2'>
               <span className='font-ttCommonProNormal font-semibold'>Ground Transportation:</span> From these airfields, designated ground transportation was provided for workers to reach 
                the camp and construction sites,
                 primarily along permanent access roads built specifically for the project.
                </li>
              </ul>

              <p className="cs-body mt-4">
              Careful management of transport logistics was crucial, especially considering the extreme sub-arctic climate of the area. 
              The region experienced long, harsh winters with temperatures often dropping below -25 degrees Celsius,
               making efficient travel coordination vital to ensuring the safety and wellbeing of the workers.
              </p>

              <h6 className="font-ttCommonProNormal font-semibold mt-4 text-custom-body">Workforce Accommodation</h6>

              <p className='cs-body mt-4'>The Keeyask camp, initially hosting 500 workers in a start-up camp with living quarters,
                 offices, garages, and a kitchen, eventually scaled up to accommodate 2,000 workers at the main camp. Each camp resident 
                 enjoyed a private single-room, equipped with an ensuite washroom. Camp services were bolstered by strategic agreements with 
                 the four Keeyask Cree Nations,
                 who worked alongside Sodexo staff to support camp operations.</p>

                 <p className='cs-body mt-4'>
                 Key operational responsibilities Sodexo managed or oversaw at camp included:
                 </p>

                 <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>Providing a diverse range of nutritious meals and snacks around the clock via a 24-hour dining facility, 
                    catering to the diverse dietary needs and preferences of the workforce.</li>
                    <li>
                    Ensuring a high standard of cleanliness for both the living quarters and communal areas throughout the camp.
                    </li>
                    <li>
                    Conducting regular maintenance of facilities, ensuring that all living, working, and recreational areas were safe and fully functional.
                    </li>
                    <li>
                    Offering immediate access to medical care and emergency services to ensure the wellbeing and safety of all camp residents.
                    </li>
                    <li>
                    Implementing robust security measures to protect the workforce and property, maintaining a secure and orderly environment.
                    </li>
                    <li>
                    Providing extensive recreational options including a modern fitness center, sports courts, a gaming center, and movie theaters.
                    </li>
              </ul>

              <div className="mt-6">
                <img src="/sodexo-canada-camp-keeyask-project.jpg" alt="Aerial view of workforce housing for workers at Canadian FIFO project" />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              Sodexo faces challenges managing transportation logistics and camp operations for a scaling workforce
              </h4>
              <p className="cs-body mt-4">
              Sodexo encountered challenges managing the transportation and accommodation for the workforce at Keeyask prior to 
              implementing a digital-first solution. Their challenges included:
              </p>

              <h6 className='font-ttCommonProNormal font-semibold text-custom-body mt-4'>FIFO Transportation Challenges</h6>

              <p className='cs-body mt-4'>
              The manual creation of transportation bookings for workers on roster rotations caused a significant administrative
               burden for travel coordinators, who had to handle a
               high volume of identical bookings for workers on the same rotation schedules on a regular basis.
              </p>

              <ul
                className="cs-body pl-8 mt-2"
                style={{ listStyleType: "disc" }}
              >
                <li>
                Managing schedules and seat capacities in spreadsheets for chartered flights and ground transport often resulted in errors,
                 such as overbooking or empty seats on certain routes.
                </li>
                <li>
                Manually tracking passenger manifests and changes to manifests, such as no-shows, was cumbersome and hindered
                 the creation of accurate passenger records for each leg of the journey.
                </li>
                <li>
                Monitoring and controlling charter travel spend required complex manual tracking of various costs.
                 This practice was prone to errors and did not allow for travel teams to
                 easily generate reporting, complicating budget adherence.
                </li>
                </ul>
                <h6 className="font-ttCommonProMedium font-semibold text-custom-body mt-4">Camp Management Challenges</h6>
                <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                The onboarding and check-in processes at the site were slow, often causing wait times to exceed 
                one to two hours during the arrival of large crews.
                </li>
                <li>
                Contractors consistently requested more control and visibility over the quantity of rooms available to their workers.
                 Using spreadsheets at the time, Sodexo had no way to enable contractors
                 to monitor availability of rooms within their respective designated room blocks.
                </li>
                <li>
                Poor communication between housekeeping and the front desk sometimes resulted in rooms not being ready 
                for arriving workers and led to sub-optimal room utilization.
                </li>
                <li>
                Managing alcohol consumption in designated dining facilities required meticulous manual monitoring and enforcement of
                 restrictions, placing an unnecessary burden on bar staff.
                </li>
                <li>
                Sodexo was required to manually pull multiple daily reports for the project operator, which placed a significant strain on the front desk, 
                leading to occasional delays in report distribution.
                </li>
              </ul>

              <div className="mt-6">
                <img src="/keeyask-camp-staff-smiling.jpg" alt="Front desk staff smiling at Keeyask camp" />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              Sodexo optimizes transportation logistics, expedites check-in processes, and maximizes room utilization at Keeyask by
               implementing a one-stop-shop for FIFO operations
              </h4>

              <p className="mt-4 cs-body">
              The deployment of EnRoute and SmartLodge significantly improved Sodexo's operational workflows and enhanced
               the guest experience at the Keeyask Camp. These two solutions, both part of the same unified platform offered by
                Camps & Crew, handled all aspects of transport and camp operations. Sodexo
               realized various benefits with its use of the platform, which included:
              </p>

              <h6 className="font-ttCommonProMedium font-semibold text-custom-body mt-4">FIFO Transportation Support</h6>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                    IStreamlining the reservation process
                  </span> by auto-generating travel bookings for workers on roster rotations. For non-rostered groups, the 
                  system expedited the booking process by allowing travel reservations to be quickly created en masse. 
                  Both functionalities significantly alleviated the administrative burden on travel coordinators.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Enhancing transport logistics
                  </span> by maintaining accurate schedules and seat inventories in the platform, ensuring proper seat allocation and 
                  preventing issues like overbooking or underutilization of seats.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Ensuring passenger manifests were easily updated after last-minute changes,
                  </span> such as those caused by weather disruptions, no-shows or go-shows. The platform made it fast 
                  for travel coordinators to record these changes, 
                  ensuring compliance with legal requirements for maintaining accurate passenger records.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Providing greater insight into charter travel costs
                  </span> through detailed tracking of costs in the platform, which gave management access to robust reporting and allowed for improved financial planning.
                </li>

        </ul>
        <h6 className="font-ttCommonProMedium font-semibold text-custom-body mt-4">Camp Accommodation Support</h6>

<ul
  className="cs-body pl-8 mt-4"
  style={{ listStyleType: "disc" }}
>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Reducing lengthy check-in wait times
                  </span> by allowing guests to complete most check-in procedures remotely
                   via mobile devices while on their way to camp–or swiftly at self-service kiosks upon arrival
                </li>

                <li>
                <span className="font-ttCommonProNormal font-semibold">
                    Increasing the speed of room turnover
                    </span> by enabling real-time room status updates to flow between the housekeeping department and the front desk. The system kept housekeeping informed of room occupancy changes, allowing them to prioritize and clean rooms more efficiently. Housekeeping staff used mobile devices to update the cleaning status of each room as they progressed through their shifts. 
                    These updates reflected instantly in the system and enabled the front desk to assign rooms to guests more quickly.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Managing alcohol consumption restrictions
                    </span> based on guest profile attributes. Workers registered in the platform as working the day shift were allowed 
                    to enjoy two alcoholic beverages during the evening. The platform tracked nightly drink consumption, 
                    alleviating bar staff of the responsibility of tracking the quantity of drinks consumed for each patron.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                    Providing contractors with an online room booking portal,
                    </span> enabling them to manage room bookings within the block of rooms 
                    allocated to each contractor by the project operator.
                </li>
                <li>
                <span className="font-ttCommonProNormal font-semibold">
                Automating the creation and distribution of multiple daily reports
                    </span> to the project operator, reducing the workload on the front desk and enhancing the accuracy and timeliness of reports.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default SodexoImplementsSecond
