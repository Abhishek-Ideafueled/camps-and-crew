import React from 'react'
import { Link } from 'react-router-dom'

const SodexoLeveragesSecond = () => {

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
              Get in touch to see how our technology can be tailored to meet the
              unique requirements of your remote operations.
            </span>
            <div
              className="w-full mx-auto mt-4 xl:mt-10"
              onClick={handleClickScroll}
            >
              <Link
                to="#demoForm"
                className="btn-orange w-full h-[54px] flex gap-2 items-center justify-center py-[14px] px-4"
              >
                Contact sales
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
            Sodexo streamlines operations at Cedar Valley Lodge by leveraging
            SmartLodge to maximize room occupancy, streamline check-ins and
            meals management, and to facilitate various other daily camp
            operations.
          </h4>
          <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
          <h4 className="cs-heading mt-6">
            Meet Sodexo: An integrated services provider offering best-in-class
            remote accommodations
          </h4>
          <p className="cs-body mt-4">
            Sodexo is a food services and facilities management company
            dedicated to providing a superior experience for their clients
            across a wide variety of industries including energy, mining,
            education, and health. With its wide range of services, Sodexo
            provides comprehensive catering and facilities management services
            that meet the unique needs of each industry. They go above and
            beyond by seamlessly managing camp room reservations, crew
            check-ins, housekeeping, maintenance, and on-site dining, allowing
            their clients to focus on their core business while enjoying
            top-notch support services.
          </p>

          <div className="mt-12">
            <img
              src="/sodexo-chef-cuts-food-industrial-kitchen.jpg"
              alt="sodexo-chef-cuts-food-industrial-kitchen"
            />
          </div>

          <span className="custom-caption mt-12">ABOUT THE PROJECT</span>

          <h4 className="cs-heading mt-6">
            Historic large-scale energy project takes shape in Kitimat, British
            Columbia
          </h4>

          <p className="cs-body mt-4">
            The LNG Canada Project in Kitimat, British Columbia, is a joint
            venture between JGC Corporation and Fluor Corporation, representing
            the largest energy investment in Canadian history. Tasked with
            constructing a state-of-the-art liquefied natural gas (LNG) export
            terminal, this project marks a significant step towards supplying
            cleaner energy to Asian markets. At its core, the project features a
            comprehensive LNG processing facility, storage, and marine terminals
            on 400 hectares. The project operator partnered with Sodexo Canada
            to oversee and manage operations at Cedar Valley Lodge, the
            accommodation facility built to house the large workforce at the
            site.
          </p>

          <span className="custom-caption mt-12">
            ABOUT THE CAMP OPERATIONS
          </span>

          <h4 className="cs-heading mt-6">
            Sodexo tasked to manage a 4,500-room camp serving remote LNG project
          </h4>
          <p className="cs-body mt-4">
            Since Cedar Valley Lodge (CVL) began welcoming its first guests in
            July 2020, Sodexo has been at the forefront, delivering unparalleled
            hospitality, food, and maintenance services. Despite the unforeseen
            delays caused by the COVID-19 pandemic, CVL reached full operational
            status by July 2021, showcasing Sodexo's adaptability and commitment
            to the project’s success.
          </p>
          <p className="cs-body mt-4">
          At the Cedar Valley Lodge, Sodexo is responsible for:




          </p>
          <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
            <li>
            Efficiently managing accommodations for 4,500 workers, ensuring comfort and privacy for each worker.
            </li>
            <li>
            Providing a seamless and comfortable experience for camp residents, from the moment they arrive on site to the moment they leave.
            </li>
            <li>
             
Overseeing the upkeep of the lodge’s extensive facilities, including routine housekeeping and maintenance.
            </li>
            <li>
            Delivering comprehensive hospitality and food services, including high-speed internet and expansive dining options.
            </li>
            <li>
            Maintaining onsite healthcare, recreational and entertainment facilities to support the physical and mental wellbeing of guests.
            </li>
          </ul>

          <div className="mt-12">
            <img
              src="/cvl-vedar-valley-lodge-dormitories-kitimat.jpg"
              alt="cvl-vedar-valley-lodge-dormitories-kitimat"
            />
          </div>

          <span className="custom-caption mt-12">THE CHALLENGE</span>

          <h4 className="cs-heading mt-6">
          Sodexo works with Camps & Crew to get ahead of operational challenges endemic to large camps
          </h4>
          <p className="cs-body mt-4">
          Understanding the project's scale, 
          Sodexo proactively partnered with Camps & Crew to address the common challenges of 
          large-scale camps. Ahead of implementation, the companies engaged in discussions related 
          to the anticipated challenges such as large crew arrivals, the high volume of camp rooms
           needing regular service, among various other considerations. More specifically,
            the discussed challenges included:
          </p>
         



          <ul className="cs-body pl-8 mt-4" style={{ listStyleType: "disc" }}>
            <li>
            Extended wait times during check-in due to the bottleneck created by large crews arriving at once and limited staffing of the front desk
            </li>
            <li>
            The lack of visibility into real-time room availability, potentially leading to suboptimal utilization of accommodations across the camp’s 18 dorms
            </li>
            <li>
            Difficulties monitoring meal consumption, potentially leading to inaccurate food projections and contributing to avoidable food wastage
            </li>
            <li>
            Communication breakdowns between teams–common at camps of this size– that hamper how quickly rooms can be logged as clean and assigned to the next incoming worker
            </li>
          </ul>

          <div className="mt-12">
            <img
              src="/sodexo-canada-aerial-cedar-valley-lodge-lng-project.jpg"
              alt="sodexo-canada-aerial-cedar-valley-lodge-lng-project"
            />
          </div>

          <span className="mt-12 custom-caption">THE SOLUTION</span>

          <h4 className="mt-6 cs-heading">
          Sodexo implements SmartLodge to streamline operations at Cedar Valley Lodge
          </h4>

          <p className="mt-4 cs-body">
          Sodexo addressed the anticipated challenges of managing Cedar Valley Lodge (CVL) by implementing <Link
              to="/software-for-workforce-camp"
              reloadDocument
              className="underline hover:text-custom-blue"
            >
              SmartLodge
            </Link> upon its launch. This system has unlocked various operational efficiencies across CVL as outlined below.
            <br />
            <br />
            Key operational metrics achieved with SmartLodge include:
          </p>
          <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
            <li>
              
              <span className="font-ttCommonProNormal font-semibold">
              Room utilization up to 98%
              </span> during peak demand by simplifying reservation management for over 4500 rooms. The system makes it 
              simple for multiple parties internal and external to Sodexo to create, change or cancel room reservations.
            </li>
            <li>
              <span className="font-ttCommonProNormal font-semibold">
              Average check-in wait times under 60 seconds,</span> facilitated by the Sodexo MyWap app and on-site kiosks. The MyWap app enables workers to begin their
               check-in process while en route to camp, which they can complete at kiosk upon arrival at camp. SmartLodge’s 
               seamless integration with CVL's electronic key system (Visionline by Assa Abloy) gives returning residents the
               ability to reactivate their keycards at the kiosks, ensuring a swift check-in process even for large crews.
            </li>
            <li>
              <span className="font-ttCommonProNormal font-semibold">
              1100+ room cleanings conducted daily,
              </span> facilitated by SmartLodge’s Mobile Housekeeping feature. This innovative solution equips more than
               240 housekeepers at CVL with the ability to easily update room statuses on their tablets after each room cleaning.
                With immediate visibility of room statuses,
               front desk staff can swiftly assign newly cleaned rooms, enhancing the rate of room turnover.
            </li>
            <li>
              <span className="font-ttCommonProNormal font-semibold">
              Accurate meal tracking and reduction of food waste
              </span> is achieved through SmartLodge Meal Scanning. Workers' meal swipes at buffet line tablets
               provide valuable data for meal reconciliation, billing back of appropriate parties,
               and forecasting of food needs for future periods, significantly minimizing food waste.
            </li>
            <li>
              <span className="font-ttCommonProNormal font-semibold">
              A fully integrated tech-stack across systems.
              </span> With SmartLodge as the central platform, Sodexo is able to ensure data from other specialized technologies that support on-site operations seamlessly flows into SmartLodge. These systems include an electronic key system powered by Assa Abloy’s Visionline 
              and a point-of-sale system used at CVL’s bar to track alcohol consumption (Volante).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SodexoLeveragesSecond
