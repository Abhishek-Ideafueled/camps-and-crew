import React from 'react'
import { Link } from 'react-router-dom';

const RightChoiceSecond = () => {
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
                Right Choice Camps & Catering deploys SmartLodge to enhance
                efficiency, centralize management, and elevate guest
                satisfaction across its Canadian Lodges.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
                Right Choice transforms remote sites into hubs of comfort,
                productivity, and wellbeing
              </h4>
              <p className="cs-body mt-4">
                <Link
                  to="https://rightchoicecamps.ca/about/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                  Right Choice Camps & Catering Ltd. (RCCC)
                </Link>{" "}
                is a leader in delivering turnkey camp and catering solutions to
                the oil and gas, mining and construction sectors. With over 100
                years of combined executive experience, RCCC excels in rapidly
                deploying temporary accommodations and food services to remote
                locations. Their services, underscored by a commitment to
                creating an upbeat atmosphere and fostering community, aim to
                enhance the productivity and safety of remote workforces. By
                prioritizing comfort and nutrition, RCCC works actively to
                contribute to their clients' goals of personnel retention. This
                focus on quality, results, and a positive work environment
                demonstrates RCCC's dedication to the wellbeing and success of
                FIFO and DIDO workforces in Canada.
              </p>

              <div className="mt-6">
                <img
                  src="/right-choice-camps-catering-private-room-full-bed.jpg"
                  alt="right-choice-camps-catering-private-room-full-bed"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE PROJECTS SUPPORTED
              </span>

              <h4 className="cs-heading mt-6">
                Right Choice camps support major energy and industrial projects
                across North Western Canada
              </h4>

              <p className="cs-body mt-4">
                Right Choice Camps & Catering operates six premium lodges across
                North Western Canada, totaling nearly 1500 rooms. Each camp is
                strategically located to cater to the substantial natural
                resource activities in the region, from oil and gas exploration
                to other significant industrial projects. Two prime examples are
                their West Kakwa and Lator Lodges, located near Grande Prairie,
                Alberta. These lodges serve the workforce engaged in the
                extensive oil and gas operations of the <Link to='https://www.alberta.ca/oil-sands-facts-and-statistics#:~:text=Alberta' target='_blank' className='underline hover:text-custom-blue'>Alberta oil sands-one of
                the world's largest reserves of oil</Link>. In addition, their Pink
                Mountain Lodge, positioned on the Alaska Highway, is ideally
                situated to support British Columbia's energy projects.
              </p>
              <div className="mt-6">
                <img
                  src="/oil-rig-alberta-canada.jpg"
                  alt="oil-rig-alberta-canada"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE CAMP OPERATIONS
              </span>

              <h4 className="cs-heading mt-6">
              RCCC provides customized lodging solutions for diverse remote projects
              </h4>
              <p className="cs-body mt-4">
              With a keen focus on comfort, convenience, and fostering a sense of community, RCCC delivers an array of services that go beyond just a place to stay, ensuring workers feel at home, even in the most isolated locations.
              </p>
              <p className="cs-body mt-4">
              The variety of services RCCC provides across their lodges include:
              </p>
              <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
                <li>
                Handling room reservations and room assignments meticulously, RCCC makes sure that every crew worker has a comfortable and secured place to rest.
                </li>
                <li>
                Overseeing day-to-day guest services, from seamless check-in and check-out processes, to maintaining clean and well-maintained rooms through regular housekeeping and maintenance.
                </li>
                <li>
                Providing a wide range of meal options to keep the workforce healthy and satisfied, catering to different dietary needs and preferences.
                </li>
                <li>
                Supporting the physical and mental wellbeing of the workforce while fostering a sense of community within the camps through the provision of communal facilities, such as fitness centers and games rooms.
                </li>
                <li>
                Regularly providing their paying clients with timely and accurate invoices, with detailed charge sheets available for all services rendered.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/right-choice-camps-catering-employee-computer.jpg"
                  alt="right-choice-camps-catering-employee-computer"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              RCCC faced check-in delays, inefficient departmental coordination, and inadequate system support across its camp operations
              </h4>
              <p className="cs-body mt-4">
              Right Choice Camps & Catering has been at the forefront of providing high-quality camp management and catering services across North Western Canada. However, like many pioneers in the industry, RCCC once faced several operational challenges that necessitated a more digital-first approach to managing their remote accommodations.
              </p>

            <p className='cs-body mt-4'>
            The following points outline the key challenges that were identified during use of a legacy system:


            </p>
              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                RCCC's previous system lacked a global operational view across lodges. The company did not have access to a unified system that could centralize data capture across their network of camps in order to achieve more consistent management practices.
                </li>
                <li>
                RCCC's complex billing across multiple lodges required software capable of managing diverse contractual arrangements more efficiently and accurately.
                </li>
                <li>
                The manual room booking process previously in place led to potential human error, inefficiencies, and duplicate reservations, particularly for Right Choice's clients housing workers at multiple camps.
                </li>
                <li>
                The company's previous system lacked the capability to quickly generate daily workload assignments for housekeeping staff, hindering the timely turnover of rooms.
                </li>
                <li>
                The steady influx of self-drive guests necessitated a software solution that could enable RCCC front desk staff to more easily manage high volumes of arrivals, which at times occurred unexpectedly.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/right-choice-camp-on-grass-catering-drone-aerial-shot.jpg"
                  alt="right-choice-camp-on-grass-catering-drone-aerial-shot"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              SmartLodge enhances Right Choice camp operations by streamlining invoicing, optimizing room booking, simplifying housekeeping, and improving meal management for greater guest satisfaction
              </h4>

              <p className="mt-4 cs-body">
              The integration of <Link to="/software-for-workforce-camp"
                  reloadDocument
                  className="underline hover:text-custom-blue"
                >
                  Smartlodge
                </Link> into RCCC's everyday operations has ushered in an array of operational improvements for various user groups within Right Choice, as well as for its clients, including:
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Centralizing oversight across all camps in a single system, </span> which has provided the management team at Right Choice with a single source of truth for reviewing daily operations or reporting across sites or regions.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Improving the invoicing process, </span>which now efficiently accommodates RCCC's custom billing requirements. Smartlodge's automated service day tracking and robust charge sheet reporting functionalities have simplified the once intricate process of producing monthly client invoices.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Streamlining the room booking process </span> by implementing an online reservation management system that eliminates manual inefficiencies and errors. This allows contractors and project operators direct control over their room bookings while minimizing duplicate bookings in the process.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Visualization tools for room allocations </span> ensure room assignments made by the front desk maximize room utilization and revenue for Right Choice, while also ensuring clients receive maximum value from their contracted accommodations.
                </li>

                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Simplified housekeeping procedures and increased guest satisfaction </span> thanks to the system's simple-to-use housekeeping capabilities,
                   which allow for room statuses to be quickly logged in the system by housekeeping staff after daily cleanings are completed.
                   Changes to room status are immediately viewable to front desk staff, ensuring that vacant clean rooms can be quickly assigned to 
                   incoming guests and ready upon their arrival.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Improved forecasting of meals and management of meal preferences </span> consequently reducing food waste and ensuring that every guest has access to nutritious and satisfying meals tailored to their preferences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default RightChoiceSecond
