import React from 'react'
import HeadingPattern from '../Icons/HeadingPattern'
import { GoCheckCircle } from 'react-icons/go'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const MiningSeamlessIntegration = () => {
  return (
    <div className='w-full'>
      <div className='main-container mx-auto flex flex-col items-center py-10 lg:py-20 gap-[30px] lg:gap-[60px]'> 
      <div className="flex flex-col gap-4 items-center text-center max-w-[840px]">
          <h2 className="heading-h2" data-aos="fade-up">
          Seamless Integration into <br /> Your Processes and Systems</h2>
          <span data-aos="fade-up" data-aos-delay="100">
           <HeadingPattern/>
          </span>
          <p className='sub-heading'>
          We leverage years of experience to ensure successful implementation, working with your teams to seamlessly integrate into your existing operations and technology stack.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <div className=''>
                <img
                className='w-auto h-auto object-cover rounded-2xl'
                src="/front-desk-agent-mining-camp.jpg" alt="Receptionist at remote camp works at computer" />
                </div>
                <div className='flex flex-col gap-4 py-6'>
            <span className='custom-caption'>
            | SYSTEM TRAINING |
            </span>
            <h3 className='font-gilroyBold text-[25.6px] md:text-[32px] md:leading-[38.4px] text-custom-heading '>
            Streamlined Onboarding for <br className='hidden lg:block'/> Teams and Contracted Staff
            </h3>
           <p className='font-ttCommonProNormal text-base text-custom-body leading-[25.6px]'>

           We make it simple for your travel group, workforce housing team,
            and contracted camp management staff to quickly learn and use our application. 
            Our comprehensive training and support resources ensure a smooth onboarding process,
             enabling your staff to maximize the benefits of our technology from day one.
                                
           </p>
           <ul className='flex flex-col gap-2 pt-2'>
           <li className="flex gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                On-site or virtual classroom training during installation
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                Detailed training and product documentation
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                Custom Learning Management System (LMS) available
                </p>
              </li>
              <li className="flex gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                24/7/365 support via email, phone or live chat
                </p>
              </li>
           </ul>
                </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center '>
            <div className='order-first lg:order-last'>
                <img src="/logosCard.png" alt="logo card" />
            </div>
            <div className='flex flex-col gap-4'>
            <span className='custom-caption'>
            | CAMP MANAGEMENT |
            </span>
            <h3 className='font-gilroyBold text-[25.6px] md:text-[32px] md:leading-[38.4px] text-custom-heading '>
            Extensive Experience Working <br className='hidden lg:block'/> with Various Camp Providers
            </h3>
           <p className='font-ttCommonProNormal text-base text-custom-body leading-[25.6px]'>

           If you work with a third-party provider to manage your accommodations, rest assured we can seamlessly support your camp staff.
            We have extensive experience partnering with camp and catering companies, workforce accommodations providers,
             and integrated facilities management firms. We leverage the expertise we have gained over the years to develop technology
              that delivers streamlined workflows, automated processes, 
           and enhanced service delivery for any team managing your mine site accommodations.
                                
           </p>
           </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full flex flex-col gap-[60px] justify-center">
            <div className="digital-partner-splide">
              <Splide
                //  options={options}
                options={{
                  type: "loop",
                  direction: "rtl",
                  perPage: 3.5,
                  perMove: 1,
                  arrows: false,
                  pagination: false,
                  rewind: false,
                  breakpoints: {
                    1280: {
                      perPage: 3,
                    },
                    1024: {
                      perPage: 4,
                    },
                    767: {
                      perPage: 3,
                    },
                    640: {
                      perPage: 3,
                    },
                    500: {
                      perPage: 2,
                    },
                  },
                  autoScroll: {
                    speed: 0.6,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                  },
                }}
                extensions={{ AutoScroll }}
                aria-label="fgjskhgkls"
                // hasTrack={false}
              >
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/modern-thermostat-attached-wall.png"
                      alt="Thermostat attached to wall displays warm temperature."
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/housekeeping-staff-inventories-cleaning-supplies.png"
                      alt="Cleaning team member takes inventory of cleaning solvents in supply closet."
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/maintenance-worker-reviews-air-conditioner.png"
                      alt="Maintenance worker holds tablet and studies air conditioner outside in tropical setting."
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/businessman-smiles-computer-monitor.png"
                      alt="Maintenance worker holds tablet and studies air conditioner outside in tropical setting."
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className="digital-partner-splide2">
              <Splide
                options={{
                  type: "loop",
                  perPage: 3.5,
                  perMove: 1,
                  arrows: false,
                  pagination: false,
                  rewind: false,
                  speed: 10000,
                  breakpoints: {
                    1280: {
                      perPage: 3,
                    },
                    1024: {
                      perPage: 4,
                    },
                    767: {
                      perPage: 3,
                    },
                    640: {
                      perPage: 3,
                    },
                    500: {
                      perPage: 2,
                    },
                  },
                  autoScroll: {
                    speed: 0.6,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                  },
                }}
                extensions={{ AutoScroll }}
                aria-label="My Favorite Images"
                // hasTrack={false}
              >
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/key-card-tap-door-reader.png"
                      alt="Guest taps keycard at bedroom door at a remote mining camp."
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/guest-orders-food-tablet-kiosk.png"
                      alt="Guest reviews catering options at a remote housing facility for fly in fly out workers."
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/store-clerk-accepts-credit-card-payment.png"
                      alt="Store clerk accepts payment at camp commissary."
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="single-slide">
                    <img
                      className="rounded-lg"
                      src="/barista-charges-credit-card-cafe.png"
                      alt="Barista accepts payment via credit card in a cafe setting."
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div
           data-aos="fade-up"
          className="flex flex-col justify-center py-6">
            <span className="font-ttCommonProRegular font-semibold text-second-blue text-sm leading-[22px]">
              | INTEGRATIONS |
            </span>
            <h2 className="font-gilroyBold pt-2 md:pt-3 text-custom-heading text-[25px] leading-[32px] md:text-[32px] md:leading-[38.4px]">
              SmartLodge Plugs Into <br />
              Your Digital Ecosystem
            </h2>
            <p className="pt-4  md:pb-5 font-ttCommonProNormal text-base text-custom-body leading-[25.4px]">
              No matter your stack, SmartLodge can integrate into the systems
              your organization already has in place. Some examples include:
            </p>
            <hr className="bg-[#97A7B5] w-1/2 hidden md:block" />
            <ul className="flex flex-col gap-3 pt-3 md:pt-5">
              <li className="flex items-center gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                  HR, HRIS and ERP systems
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                  Accounting systems
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                  Electronic key systems
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                  Meal ordering and point-of-sale systems
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                  Energy management systems
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-custom-blue w-6 h-6">
                  <GoCheckCircle size={24} />
                </span>
                <p className="font-ttCommonProNormal text-custom-body text-base">
                  Facilities and inventory management systems
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiningSeamlessIntegration
