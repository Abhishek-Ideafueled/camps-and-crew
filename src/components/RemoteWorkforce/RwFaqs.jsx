import { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";


const RwFaqs = () => {

    const faqArr=[
        {
            id:1,
            title:"Is your software cloud-based? Do you host the system?",
            desc:"Our software is designed for flexibility and can be deployed in the cloud, on-premises, or through a hybrid setup. We provide remote site solutions that accommodate the IT needs of your camps, ensuring seamless system continuity regardless of your location or connectivity. We offer hosting services, but also provide the option for clients to host the system themselves if it better meets their IT security requirements or optimizes system performance.",

        },
        {
            id:2,
            title:"Do you provide solutions for companies dedicated exclusively to provisioning dining and catering services?",
            desc:"While our software is designed to manage all aspects of camp operations for remote workforce housing providers, we believe the system is beneficial for camp services providers with a more specialized focus. For companies primarily offering a culinary team and food service to camps, we still strive to act as a strong partner. Recognizing that great food is essential to worker wellbeing at camp, we have implemented several features to support dining and catering providers. Our technology integrates with various food ordering systems used in dining halls, provides occupancy forecasting to help companies manage food needs and reduce waste, and communicates dietary preferences or requirements to kitchen staff, ensuring optimal service delivery.",

        },
        {
            id:3,
            title:"Do you offer consultative services for companies considering the implementation of a new camp management system?",
            desc:"For prospective clients aiming to maximize the value of a software transition, we provide a full service Functional Analysis. Our implementation team visits a company's remote camps and/or headquarters to gain a complete understanding of their operations. During this process, we conduct a thorough survey of the camp services provided by the company to offer tailored recommendations that would enhance the benefits of implementing our software. Leveraging years of experience in deploying our application at remote sites across diverse industries, we deliver insightful recommendations designed to achieve the highest ROI for your investment in our technology.",

        },
        {
            id:4,
            title:"What is your experience working directly with mining companies?",
            desc:"A sizable portion of our client base consists of mining companies operating projects in remote locations, including Agincourt and B2Gold, among others. We specialize in supporting project operators in the mining sector by facilitating the management of their worker housing and streamlining transportation logistics to and from remote sites. To see how our technology facilitates coordination of FIFO travel, click here to learn about EnRoute.",

        },
        {
            id:5,
            title:"Are you open to bespoke development? Our day-to-day differs from most remote camps.",
            desc:"While we encourage clients to leverage our robust application in its current form--developed through our many years of experience working in the fly-in fly-out space--we are committed to achieving excellence for our clients. As such, we are open to developing new or unique functionalities for clients with specific requirements. Our leadership team acknowledges that client-driven innovation has significantly shaped our solutions over the years and will continue to do so. While we are receptive to requests for custom development, we generally recommend first maximizing the value of our software’s existing feature set.",

        },
        {
            id:6,
            title:"Do you offer a software solution to manage FIFO transportation?",
            desc:"In addition to managing camp services, our technology also supports the coordination of all transportation modes required to move workers to and from a remote site. Our FIFO travel booking engine, EnRoute, allows camp management and catering companies to offer additional value-added services to their clients by facilitating the management of workers' travel arrangements. To learn more about EnRoute, click here.",

        },
    ]

    
    const [activeId, setActiveId] = useState(1);
    const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  const calculateHeights=()=>{
    const calculatedHeights = 
      contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(calculatedHeights);
  }

  useEffect(() => {
      
    window.addEventListener('resize', calculateHeights);
  // window.addEventListener('load', calculateHeights); 

  return () => {
    window.removeEventListener('resize', calculateHeights);
    // window.removeEventListener('load', calculateHeights);
  };

  }, []);

  useEffect(() => {
    calculateHeights(); 
  }, [activeId]);


    const handleAccordionClick = (id) => {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
    };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <div className="main-container mx-auto py-10 lg:py-20 flex flex-col gap-[30px] lg:gap-[76px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="heading-h2">FAQs</h2>
          <span>
            <svg
              width="174"
              height="17"
              viewBox="0 0 174 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7320_6583)">
                <path d="M11.584 0.847656L1.58396 15.8477" stroke="#647787" />
                <path d="M46.584 0.847656L36.584 15.8477" stroke="#647787" />
                <path d="M81.584 0.847656L71.584 15.8477" stroke="#647787" />
                <path d="M116.584 0.847656L106.584 15.8477" stroke="#647787" />
                <path d="M151.584 0.847656L141.584 15.8477" stroke="#647787" />
                <path d="M18.584 0.847656L8.58396 15.8477" stroke="#647787" />
                <path d="M53.584 0.847656L43.584 15.8477" stroke="#647787" />
                <path d="M88.584 0.847656L78.584 15.8477" stroke="#647787" />
                <path d="M123.584 0.847656L113.584 15.8477" stroke="#647787" />
                <path d="M158.584 0.847656L148.584 15.8477" stroke="#647787" />
                <path d="M25.584 0.847656L15.584 15.8477" stroke="#647787" />
                <path d="M60.584 0.847656L50.584 15.8477" stroke="#647787" />
                <path d="M95.584 0.847656L85.584 15.8477" stroke="#647787" />
                <path d="M130.584 0.847656L120.584 15.8477" stroke="#647787" />
                <path d="M165.584 0.847656L155.584 15.8477" stroke="#647787" />
                <path d="M32.584 0.847656L22.584 15.8477" stroke="#647787" />
                <path d="M67.584 0.847656L57.584 15.8477" stroke="#647787" />
                <path d="M102.584 0.847656L92.584 15.8477" stroke="#647787" />
                <path d="M137.584 0.847656L127.584 15.8477" stroke="#647787" />
                <path d="M172.584 0.847656L162.584 15.8477" stroke="#647787" />
                <path d="M39.584 0.847656L29.584 15.8477" stroke="#647787" />
                <path d="M74.584 0.847656L64.584 15.8477" stroke="#647787" />
                <path d="M109.584 0.847656L99.584 15.8477" stroke="#647787" />
                <path d="M144.584 0.847656L134.584 15.8477" stroke="#647787" />
              </g>
              <defs>
                <clipPath id="clip0_7320_6583">
                  <rect
                    width="173"
                    height="16"
                    fill="white"
                    transform="translate(0.5 0.125)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
          {faqArr.map((item, index) => (
            <div className="bg-[#ECE7E0] flex flex-col rounded-2xl" key={item.id}>
              <div
                className="flex justify-between p-4 items-start z-10 relative"
                onClick={() => handleAccordionClick(item.id)}
              >
                <h4 className="text-custom-heading font-gilroyBold text-lg lg:text-xl lg:leading-6 w-[90%] md:pr-6 sm:w-full ">
                  {item.title}
                </h4>
                <div
                  className={`accordion-btns ${
                    activeId === item.id ? "btn-clicked" : ""
                  }  p-2 w-[24px] h-[24px] flex items-center`}
                ></div>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`${
                  activeId === item.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                } 
                                            overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight: activeId === item.id ? `${heights[index]}px` : "0",
                }}
              >
                <div className="text-custom-body font-ttCommonProNormal text-base w-[95%] pb-4 px-4">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RwFaqs
