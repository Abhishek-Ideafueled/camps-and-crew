import React from 'react'
import { Link } from 'react-router-dom';

const PetroplexSecond = () => {

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
              PetroPlex Properties leverages SmartLodge for its Permian Basin camps and commercial space rentals 
              to increase room and rental utilization, 
              streamline billing, and facilitate collaboration across departments.
              </h4>
              <span className="custom-caption mt-12">ABOUT THE CLIENT</span>
              <h4 className="cs-heading mt-6">
              PetroPlex delivers specialized workforce housing and commercial space rentals to the Permian Basin's oil and gas industry
              </h4>
              <p className="cs-body mt-4">
                <Link
                  to="https://www.petroplexproperties.com/about/"
                  target="_blank"
                  className="underline hover:text-custom-blue"
                >
                   PetroPlex Properties LLC
                </Link> specializes in providing workforce housing and commercial property solutions tailored
                 to the energy sector in the Permian Basin. Their comprehensive service model includes remote lodging facilities, 
                 office spaces, versatile storage solutions, and RV rental space. With a focus on innovation, sustainability, and 
                 collaborative partnerships, PetroPlex excels in community building and
                 supporting the success of businesses and their workforces in this vital energy-producing region.
              </p>

              <div className="mt-6">
                <img
                  src="/1788-34-of-37.jpg"
                  alt="1788-34-of-37"
                />
              </div>

              <span className="custom-caption mt-12">
                ABOUT THE PROJECTS
              </span>

              <h4 className="cs-heading mt-6">
              The Permian Basin is a key player in the energy sector, with significant developments boosting its capacity for high-volume production to meet future energy demands
              </h4>

              <p className="cs-body mt-4">
              The Permian Basin, spanning west Texas and southeastern New Mexico, stands as a  <Link to='https://www.thecentersquare.com/texas/article_ba9ada06-85ae-11ee-9e2a-3f6d7766469e/' target='_blank' className='underline hover:text-custom-blue'>cornerstone in the energy sector</Link> due to the region's extensive oil and gas reserves. Its geological uniqueness lies in its "stacked plays," 
               which allow for extracting resources from multiple layers using a single well. This efficiency underpins the basin's 
               capacity for high-volume production, making it an attractive hub for energy and construction projects.
                Among the key projects bolstering this region's development are <Link to="https://pboilandgasmagazine.com/enterprise-products-partners-announce-four-projects-in-delaware-midland-basins/" target='_blank' className='underline hover:text-custom-blue'>two natural gas processing plants and the Bahia NGL pipeline</Link>-ambitious capital ventures funded by Enterprise Products Partners L.P., among others. These 
                initiatives position the Permian as 
              a region vital to meeting future energy demands, with output expected to see a notable increase by 2025. 
             Alberta oil sands-one of
                the world's largest reserves of oil. In addition, their Pink
                Mountain Lodge, positioned on the Alaska Highway, is ideally
                situated to support British Columbia's energy projects.
              </p>
              <div className="mt-6">
                <img
                  src="/Image-18-of-19-scaled.jpg"
                  alt="Image-18-of-19-scaled"
                />
              </div>

              <span className="custom-caption mt-12">
              ABOUT PETROPLEX'S CAMPS AND COMMERCIAL RENTALS
              </span>

              <h4 className="cs-heading mt-6">
              Beyond workforce housing, PetroPlex differentiates itself by offering specialized services like office space rentals and RV park management, providing comprehensive solutions for the oil and gas workforce
              </h4>
              <p className="cs-body mt-4">
              PetroPlex's offerings are designed to cater to the transient lifestyle of workers in the region,
              offering accommodations and office space available for daily, weekly, and monthly stays. The company's 
              remote accommodations foster an environment where workers can relax, recharge, and feel part of a community,
               even while away from their permanent residences. Additionally, their commercial rental space is designed to 
               meet the operational and logistical needs of businesses within the Permian Basin, 
              offering flexible and practical solutions for workspace and equipment storage.   </p>
              <p className="cs-body mt-4">
              At their remote camps and commercial rentals, PetroPlex is responsible for:
              </p>
              <ul className="cs-body pl-8" style={{ listStyleType: "disc" }}>
                <li>
                Ensuring guests are allocated rooms that best fit their needs, considering factors such as room type, location within the camp, and any special requests. 
                This process involves strategic planning to maximize occupancy while ensuring guest satisfaction.  </li>
                <li>
                Efficient management of the check-in process. The process enables guests to 
                complete their registration digitally and ensures they have a welcoming onboarding experience upon arrival.</li>
                <li>
                Coordinating meal preparation, which involves planning menus, managing kitchen staff, and ensuring the timely provision of meals.</li>
                <li>
                Managing an RV park, which provides accommodation options beyond traditional workforce housing.
                 This service includes overseeing the allocation and maintenance of RV parking spaces, 
                ensuring that each guest has access to necessary utilities and services.
                </li>
                <li>
                Providing commercial space for rent, which may be used for equipment storage or office work. 
                The service is structured to accommodate the fluctuating demands of project-based work in the region, 
                ensuring that companies can scale their operations up or down as required.
                </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/FM-1450-RV-corp.jpg"
                  alt="FM-1450-RV-corp"
                />
              </div>

              <span className="custom-caption mt-12">THE CHALLENGE</span>

              <h4 className="cs-heading mt-6">
              Petroplex faced challenges managing their workforce lodging and commercial space rentals
              </h4>
              <p className="cs-body mt-4">
              PetroPlex Properties has long been recognized as a trailblazer in adopting technology to enhance their diversified business operations.
               However, before the adoption of an advanced camp management system, several operational challenges significantly 
               impacted the efficiency and overall guest experience at their facilities. Their challenges included the following:
              </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                Disjointed communication between departments (e.g., front desk, housekeeping, maintenance) led to delays in room preparation and unresolved maintenance issues. Housekeeping was often uninformed about check-outs or special cleaning needs.
                </li>
                <li>
                Camp staff had to conduct manual checks by knocking on doors to check whether guests had checked in or out. For guests who had checked out, staff would sometimes charge guest credit cards before the night audit, resulting in room and tax charges not being included in the bill.</li>
                <li>
                The lack of complete audit records for reservation bookings and modifications compounded the complexities of the invoicing process, especially for guest stays billed to a corporate account.   </li>
                <li>
                Managing office and warehousing space inventory without an integrated system also posed significant challenges for PetroPlex. Tracking available spaces and booking durations manually was inefficient and error-prone, leading to potential overbooking or underutilization of resources.  </li>
                <li>
                Managing daily, weekly, and monthly rates for commercial spaces introduced additional complexity, given PetroPlex did not utilize a system designed for dynamic rate management at the time. Their formerly manual approach made it
                 difficult to adjust rates based on the length of occupancy for space rentals. </li>
                 <li>
                 PetroPlex needed an efficient way to manage automatic credit card charges for their commercial spaces. Each time a contract for commercial space renewed, whether weekly or monthly, the credit card on file had to be manually charged.
                  This process led to delays and inaccuracies in payment processing.
                 </li>
              </ul>

              <div className="mt-6">
                <img
                  src="/rsz_petro_4_of_4.jpg"
                  alt="rsz_petro_4_of_4"
                />
              </div>

              <span className="mt-12 custom-caption">THE SOLUTION</span>

              <h4 className="mt-6 cs-heading">
              Petroplex boosts revenue and elevates guest services with a PMS capable of automated billing, digital tracking of room bookings and commercial space rentals, and dynamic rate management</h4>

              <p className="mt-4 cs-body">
              The deployment of SmartLodge has significantly boosted PetroPlex's operational efficiency and guest satisfaction. 
              The company has realized various positive outcomes through its use of the system, including:  </p>

              <ul
                className="cs-body pl-8 mt-4"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Improved utilization of rooms and commercial rentals, </span> made possible thanks to SmartLodge's robust rooms and space management
                   functionalities. The system enables the creation, modification, and cancellation of reservations, with full oversight into all past,
                   current and future reservations for authorized users.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Faster room turnover </span>by enhancing communication between the front desk, housekeeping, and maintenance departments, ensuring rooms were prepared in time for guests.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Provided complete audit trails for all reservation activities, </span> inclusive of both room and commercial space bookings, fostering greater transparency and trust between PetroPlex and its diverse range of paying clients.
                </li>
                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Reduced administrative burden </span> by automating billing processes, creating custom charge codes for various billing items, including room charges and taxes.
                </li>

                <li>
                  <span className="font-ttCommonProNormal font-semibold">
                  Increased revenue </span> thanks to sophisticated rate management tooling, which enables Petroplex to dynamically adjust room rates based on market demand, requested length of stay, and other factors.
                   The same rate management functionality has also been utilized by staff renting out their commercial spaces as well.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default PetroplexSecond
