import { Link } from "react-router-dom"
import HeadingPattern from "../Icons/HeadingPattern"
import { GoCheckCircle } from "react-icons/go"
import { useState } from "react";
import './MiningMain.css';


const MiningLifeCycle = () => {

  const [activeTab,setActiveTab] =useState("explore");

  return (
    <div className="w-full bg-[#fafafa]">
      <div className="main-container mx-auto flex flex-col items-center gap-[30px] lg:gap-[60px] py-10 lg:py-20">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="heading-h2">
            Essential Tools for FIFO Teams <br />
            Over the Lifecycle of Your Mine
          </h2>
          <span>
            <HeadingPattern />
          </span>
          <p className="sub-heading pt-2">
          From exploration to shutdowns, our solutions offer robust features that empower teams <br className="hidden lg:block" /> managing transport and accommodations throughout every phase of your mining project.
          </p>
        </div>
        <div className="relative w-full h-full">
          {activeTab === "explore" && (
            <div
              data-aos="fade-up"
              className={` transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white rounded-2xl shadow-mining-card-shadow`}
            >
              <div className="w-full max-h-[334px] lg:max-h-full lg:h-auto flex items-center justify-center">
                <img
                  className="rounded-2xl object-cover h-full w-full"
                  src="/mining-exploration-camp.jpg"
                  alt="Exploration mining camp during midday"
                />
              </div>
              <div className="flex flex-col p-8 lg:px-10 lg:py-16 gap-6 ">
                <div className="flex flex-col gap-4">
                  <span className="font-ttCommonProRegular font-semibold text-second-blue text-sm leading-[22px]">
                  EXPLORATION STAGE
                  </span>
                  <h2 className="font-gilroyBold text-custom-heading text-[25px] leading-[32px] md:text-[32px] md:leading-[38.4px]">
                  Adaptable Solutions for
Mining Exploration Camps
                  </h2>
                </div>
                <p className="font-ttCommonProNormal text-base text-custom-body leading-[25.4px]">
                SmartLodge, our camp management solution, can be configured to handle the basic needs of exploration camps.
                 This ensures early-stage operations are managed efficiently without unnecessary complexity.
                  SmartLodge can:
                </p>
                <hr className="hidden md:block w-[40%] border-custom-blue border-[1px]" />
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Flexibly manage available beds to easily scale the system up or down as exploration personnel numbers fluctuate and camps are relocated
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Utilize tight occupancy management to improve meal forecasting, streamlining food planning and ordering
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Easily manage cleaning schedules and monitor when linens need to be changed
                    </p>
                  </li>
                </ul>
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 pt-6 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all SmartLodge features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          )}
           {activeTab === "construction" && (
            <div
              data-aos="fade-up"
              className={` transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white rounded-2xl shadow-mining-card-shadow`}
            >
              <div className="w-full max-h-[334px] lg:max-h-full lg:h-auto flex items-center justify-center">
                <img
                  className="rounded-2xl object-cover h-full w-full lg:w-auto"
                  src="/remote-mine-british-columbia.jpg"
                  alt="Mine site under construction in mountainous region"
                />
              </div>
              <div className="flex flex-col p-8 lg:px-10 lg:py-16 gap-6 ">
                <div className="flex flex-col gap-4">
                  <span className="font-ttCommonProRegular font-semibold text-second-blue text-sm leading-[22px]">
                  CONSTRUCTION STAGE
                  </span>
                  <h2 className="font-gilroyBold text-custom-heading text-[25px] leading-[32px] md:text-[32px] md:leading-[38.4px]">
                  Solutions for a Dynamic
and Fluctuating Workforce
                  </h2>
                </div>
                <p className="font-ttCommonProNormal text-base text-custom-body leading-[25.4px]">
                Managing the influx of construction crews during this phase requires adaptable solutions that
                 swiftly respond to a constantly fluctuating workforce. Our technology equips your team to:
                </p>
                <hr className="hidden md:block w-[40%] border-custom-blue border-[1px]" />
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Provide multiple booking workflows for HQ, camp staff, and contractors, and use visual tools for quick room assignments
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Easily modify transport and room bookings, ensuring they remain aligned with shifting project timelines
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Create room allotments and sub-allotments for contractors and subcontractors, ensuring all groups have secured housing
                    </p>
                  </li>
                </ul>
                <div className="flex flex-wrap justify-between pt-6 gap-2 lg:gap-0">
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all EnRoute features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all SmartLodge features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
               
                </div>
              </div>
            </div>
          )}
           {activeTab === "production" && (
            <div
              data-aos="fade-up"
              className={` transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white rounded-2xl shadow-mining-card-shadow`}
            >
              <div className="w-full max-h-[334px] lg:max-h-full lg:h-auto flex items-center justify-center">
                <img
                  className="rounded-2xl object-cover h-full w-full lg:w-auto"
                  src="/large-mining-camp-subtropical-area.jpg"
                  alt="Aerial perspective of mining accommodation in subtropical region"
                />
              </div>
              <div className="flex flex-col p-8 lg:px-10 lg:py-16 gap-6 ">
                <div className="flex flex-col gap-4">
                  <span className="font-ttCommonProRegular font-semibold text-second-blue text-sm leading-[22px]">
                  PRODUCTION STAGE
                  </span>
                  <h2 className="font-gilroyBold text-custom-heading text-[25px] leading-[32px] md:text-[32px] md:leading-[38.4px]">
                  Simplify Routine Management of Transport and Rooms
                  </h2>
                </div>
                <p className="font-ttCommonProNormal text-base text-custom-body leading-[25.4px]">
                As operations settle into a steady rhythm, our technology can help teams managing transport and camps realize greater efficiencies. With our solutions, your travel team and camp staff can:
                </p>
                <hr className="hidden md:block w-[40%] border-custom-blue border-[1px]" />
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Automate the creation of transport and room bookings for rotational workers, minimizing repetitive tasks and administrative burden
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Streamline housekeeping by simplifying workload creation and task delegation, ensuring rooms are always ready for incoming guests
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Maintain seamless communication with guests using real-time messaging tools to share camp announcements, daily menus, and important safety information in case of emergencies
                    </p>
                  </li>
                </ul>
                <div className="flex flex-wrap justify-between pt-6 gap-2 lg:gap-0">
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all EnRoute features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all SmartLodge features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
                
                </div>
              </div>
            </div>
          )}
            {activeTab === "shutdowns" && (
            <div
              data-aos="fade-up"
              className={` transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white rounded-2xl shadow-mining-card-shadow`}
            >
              <div className="w-full max-h-[334px] lg:max-h-full lg:h-auto flex items-center justify-center">
                <img
                  className="rounded-2xl object-cover h-full w-full lg:w-auto"
                  src="/woman-inspects-equipment-mine.jpg"
                  alt="Worker inspects machinery at mine"
                />
              </div>
              <div className="flex flex-col p-8 lg:px-10 lg:py-16 gap-6 ">
                <div className="flex flex-col gap-4">
                  <span className="font-ttCommonProRegular font-semibold text-second-blue text-sm leading-[22px]">
                  PLANNED SHUTDOWNS
                  </span>
                  <h2 className="font-gilroyBold text-custom-heading text-[25px] leading-[32px] md:text-[32px] md:leading-[38.4px]">
                  Streamline Coordination of Transport and Rooms
                  </h2>
                </div>
                <p className="font-ttCommonProNormal text-base text-custom-body leading-[25.4px]">
                Planned shutdowns require meticulous coordination. Our integrated solutions provide the 
                tools you need to handle these demanding periods. 
                With our technology, your teams can:
                </p>
                <hr className="hidden md:block w-[40%] border-custom-blue border-[1px]" />
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Ensure transportation and room bookings are always in sync, essential for managing the large influx of workers and contractors on-site during shutdown periods
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Set up room allotments for fixed periods, ensuring all crews have guaranteed accommodations throughout the shutdown
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-custom-blue w-6 h-6 mt-[5px]">
                      <GoCheckCircle size={24} />
                    </span>
                    <p className="font-ttCommonProNormal text-custom-body text-base">
                    Use real-time communication tools to send updates and alerts about camp instructions, safety protocols, and emergency procedures, keeping all teams informed and prepared, especially those unfamiliar with the site
                    </p>
                  </li>
                </ul>
                <div className="flex flex-wrap justify-between pt-6 gap-2 lg:gap-0">
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all EnRoute features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/software-for-workforce-camp"
                  reloadDocument
                  className="flex items-center gap-1 hover:text-[#5BC0ED] transition-all duration-200 text-custom-blue hover:opacity-70"
                >
                  <p className="font-ttCommonProRegular font-medium text-sm leading-[22px]">
                    See all SmartLodge features
                  </p>
                  <span>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                        fill="#63C1EC"
                      />
                    </svg>
                  </span>
                </Link>
                
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex main-container mx-auto text-nowrap overflow-x-auto gap-6 lg:gap-8 font-gilroyBold text-base md:text-lg md:leading-6 lg:text-xl lg:leading-6 no-scrollbar">
        <div 
        onClick={()=>setActiveTab("explore")}
        className={`${activeTab === 'explore' ? 'text-custom-heading active ':'text-[#97A7B5] border-[#97A7B5]'} relative mining-transition border-b-[1px] text-center cursor-pointer  w-[140px] md:w-[181px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
         Exploration
        </div>
        <div
           onClick={()=>setActiveTab("construction")}
        className={`${activeTab === 'construction' ? 'text-custom-heading active ':'text-[#97A7B5] border-[#97A7B5]'} relative mining-transition border-b-[1px] text-center cursor-pointer  w-[263px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
       Construction
        </div>
        <div 
           onClick={()=>setActiveTab("production")}
        className={`${activeTab === 'production' ? 'text-custom-heading active ':'text-[#97A7B5] border-[#97A7B5]'} relative mining-transition border-b-[1px] text-center cursor-pointer  w-[263px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
       Production
        </div>
        <div 
           onClick={()=>setActiveTab("shutdowns")}
        className={`${activeTab === 'shutdowns' ? 'text-custom-heading active ':'text-[#97A7B5] border-[#97A7B5]'} relative mining-transition border-b-[1px] text-center cursor-pointer  w-[263px] lg:w-[308px] xl:w-[384px] h-[56px]  lg:px-2 xl:px-6 py-3 lg:py-4`}> 
     Planned Shutdowns
        </div>
        </div>
      </div>
    </div>
  );
}

export default MiningLifeCycle
