import React from 'react'
import { Link } from 'react-router-dom'

const SodexoDrivesSecond = () => {

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
            <div className="w-full mx-auto mt-4 xl:mt-10" onClick={handleClickScroll}>
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
            Sodexo partners with Camps & Crew to simplify room allocation,
            optimize room utilization, and ensure total accuracy in billing at a
            Scotland workforce lodge site.
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
            Sella Ness camp houses hundred of crew workers staffed at
            high-profile energy project in the Shetland Islands
          </h4>

          <p className="cs-body mt-4">
            The Shetland Islands in Scotland have become a hub for energy
            projects in Scotland. The Sella Ness Shetland Gas Project is a
            natural gas processing plant owned jointly by Total E&P UK and Dong
            E&P. The plant operates at a processing capacity of 500 million
            cubic feet of gas per day, making it a vital part of the region's
            energy infrastructure. A key factor of the project’s success is the
            Sella Ness Camp, a Sodexo-run camp that provides a
            home-away-from-home for workers staffed at the project.
          </p>

          <span className="custom-caption mt-12">
            ABOUT THE CAMP OPERATIONS
          </span>

          <h4 className="cs-heading mt-6">
            Sodexo tasked to manage a 426-room camp serving the Shetland Gas
            Plant located on the Shetland Islands
          </h4>
          <p className="cs-body mt-4">
            Sodexo took over the management of the Sella Ness codge, located in
            the Shetland Islands of Scotland, in June 2018. With its remote
            location and unique logistical challenges, accommodations for the
            Shetland Islands project demands a high level of operational
            efficiency and attention to detail that Sodexo is positioned to
            deliver in the region.
          </p>
          <p className="cs-body mt-4">
            {" "}
            At the Sella Ness camp, Sodexo is responsible for:
          </p>
          <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
            <li>
              Managing the room reservations and room allocation of 426 camp
              rooms for various incoming work crews
            </li>
            <li>
              Maximizing room occupancy at the camp, a top priority during
              periods of peak demand
            </li>
            <li>
              Overseeing daily front- and back-of-house operations on-site,
              including check-in and check-out, dining, housekeeping, and
              routine property maintenance
            </li>
            <li>
              Providing detailed and accurate billing to its client, the project
              operators of the Shetland Gas Plant
            </li>
          </ul>

          <div className="mt-12">
            <img
              src="/sella-ness-camp-room-interior.jpg"
              alt="sella-ness-camp-room-interior"
            />
          </div>

          <span className="custom-caption mt-12">THE CHALLENGE</span>

          <h4 className="cs-heading mt-6">
            Legacy systems used for room allocation left rooms underutilized and
            made accurate billing difficult to produce for paying clients
          </h4>
          <p className="cs-body mt-4">
            Sodexo faced numerous challenges related to the camp management at
            Sella Ness due to the outdated disparate systems they had in place.
            These systems failed to provide efficient room allocation tooling,
            robust occupancy reporting, or reliable bills for clients. The
            fragmented systems in place were ill-equipped to handle the demands
            of a camp regularly managing a high volume of room reservations
            created, modified or canceled, as is standard in for remote camps of
            this size.
          </p>
          <p className="cs-body mt-4">
            The specific challenges Sodexo faced included:
          </p>
          <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
            <li>
              The inability to see which room nights had not yet been blocked
            </li>
            <li>
              No simple way to allocate room types based on staff type or
              seniority level
            </li>
            <li>
              A lack of visibility into real-time availability of rooms for a
              given timeframe, resulting in suboptimal room utilization
            </li>
            <li>
              A broken line of communication between the front desk and
              housekeeping staff that slowed room turnover down during times of
              high occupancy
            </li>
            <li>
              Invoices that did not provide a complete audit trail of
              reservation bookings and related modifications, which prompted
              many questions from the client when they received their bill
            </li>
          </ul>

          <div className="mt-12">
            <img
              src="/sella-ness-camp-accommodation-aerial-shot-buildings.jpg"
              alt="sella-ness-camp-accommodation-aerial-shot-buildings"
            />
          </div>

          <span className="mt-12 custom-caption">THE SOLUTION</span>

          <h4 className="mt-6 cs-heading">
            SmartLodge increases room occupancy and ensures maximum billing
            accuracy at Sella Ness Lodge
          </h4>

          <p className="mt-4 cs-body">
            After implementing the Camps & Crew Smartlodge system at the Sella
            Ness camp, Sodexo successfully drove up room occupancy and
            streamlined billing. Both outcomes were of great benefit to both
            Sodexo and its paying client.
            <br />
            <br />
            <Link
              to="/software-for-workforce-camp"
              reloadDocument
              className="underline hover:text-custom-blue"
            >
              SmartLodge
            </Link> has facilitated camp management for staff at Sella Ness in various
            ways and enabled Sodexo to more easily achieve their KPI’s for the
            camp. The system’s impact includes:
          </p>
          <ul className='cs-body pl-8' style={{ listStyleType: 'disc' }}>        
        <li> <span className='font-ttCommonProNormal font-semibold'>A reduction in empty room nights,</span> attributable to visual room assignment tooling offered by SmartLodge. 
          The user interface of the system, which consists of a digital “tape chart”, gives the front desk staff a means to see
           all rooms that have already been blocked and those that have not. Drag-and-drop functionality ensures existing room 
           reservations awaiting assignment to a specific room can be efficiently blocked out. That same user interface also
            ensures front desk staff can easily block crew workers into room types that correspond to their staff type and/or seniority.</li>
        <li> <span className='font-ttCommonProNormal font-semibold'>Room occupancy has increased up to 95%</span> on average, 
          when Sella Ness has experienced peak demand. Camp staff have achieved this high rate of occupancy by
           leveraging SmartLodge to streamline room bookings and 
          by utilizing room inventory reporting to monitor cancellations or modifications made to existing room reservations.</li>
        <li><span className='font-ttCommonProNormal font-semibold'>The rate of room turnover by housekeeping doubled</span> thanks
           to the system’s housekeeping module, which assigns daily workloads to housekeepers 
           and facilitates faster communication between the housekeeping staff and the front desk.
            SmartLodge enables housekeeping staff to mark when rooms are cleaned from a mobile device and
           ensures that room status data is immediately reflected in the room assignment user interface.</li>
        <li><span className='font-ttCommonProNormal font-semibold'>Improved billing accuracy,</span> powered by invoices that detail every service day logged for every camp
           resident that stays on-site. By tightening the management of room reservations using SmartLodge, Sodexo 
           has gained access to a comprehensive audit trail of all reservation activity in the system. Reservation activity 
           includes all room cancellations, modifications,
           no-shows, and other billable activities that occurred while a camp resident is on-site.</li>
       </ul>
        </div>
      </div>
    </div>
  );
}

export default SodexoDrivesSecond
