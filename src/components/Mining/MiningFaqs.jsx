import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MiningFaqs = () => {
  const [activeId, setActiveId] = useState(0);
  const contentRefs = useRef([]);

  setTimeout(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = activeId === index ? `${ref.scrollHeight}px` : '0px';
      }
    });
  }, 0);

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
                {/* SVG paths here */}
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
          {[
            {
              id: 0,
              question: 'Can your solutions be customized to meet complex operational requirements?',
              answer: (
                <>
                 Absolutely. Our software is designed to be flexible and
                  customizable to meet the complex operational requirements of any mining organization.
                   We can tailor <Link className='underline' to="/software-for-workforce-camp" reloadDocument>SmartLodge</Link> to align with your camp's unique needs, including (but not limited to):
                    configurable room reservation and approval workflows, custom housekeeping logic, tailored cost tracking,
                     and comprehensive custom reporting. <Link className='underline' to="/fifo-travel-online-booking-tool" reloadDocument>EnRoute</Link> likewise offers configurable logic to auto-book rotational workers, 
                     customize travel approval processes, and adapt route planning to accommodate complex journeys to and from camp.
                </>
              ),
            },
            {
              id: 1,
              question: 'Can your solutions support operations across multiple mining projects and camps?',
              answer: (
                <>
                  Yes, our software is designed to support mining companies operating both single and multiple projects. 
                  Whether you're managing a single camp or coordinating mining camp accommodation across multiple sites, 
                  <Link className='underline' to="/software-for-workforce-camp" reloadDocument>SmartLodge</Link> can be configured to provide robust site-level management as well as comprehensive global oversight.
                  <Link className='underline' to="/fifo-travel-online-booking-tool" reloadDocument>EnRoute</Link> is also highly configurable, ensuring that workers are efficiently transported to the right location,
                    whether within one camp or across multiple projects.
                </>
              ),
            },
            {
              id: 2,
              question: 'Does Camps & Crew have a presence in Australia?',                        
              answer: (
                <>
                 Yes, our software manages a remote village for an accommodation solutions provider in Western Australia.
                  The camp plays a crucial role in supporting FIFO operations for nearby mining projects. 
                  With some senior engineering staff based in Asia and a 24/7/365 Support Desk that supports our Australian and Indonesian mining clients,
                  we are well-positioned to expand our presence and provide exceptional service across Southeast Asia and Oceania.
                </>
              ),
            },
            {
              id: 3,
              question: 'Does Camps & Crew offer a cloud-based solution?',
              answer: (
                <>
                  Yes. We offer flexible deployment options, including cloud-based, on-premises, 
                  and hybrid solutions. This allows us to align our software with the specific needs and infrastructure of your camp, 
                  ensuring reliable and efficient operation regardless of location or connectivity.
                </>
              ),
            },
            {
              id: 4,
              question: 'Can you support mining accommodation sites with limited or unreliable connectivity?',
              answer: (
                <>
                  Yes, our software is engineered to handle the challenges of limited or unreliable connectivity at 
                  mining accommodation sites. For camps that struggle with connectivity,
                   we typically implement a hybrid architecture that includes both an on-premises server and cloud integration. 
                   This approach ensures that your system remains fully operational during connectivity disruptions, 
                   with local data processing and storage. Once connectivity is restored, the system automatically synchronizes, 
                  ensuring seamless data continuity between the cloud and on-site server.
                </>
              ),
            },
           
          ].map(({ id, question, answer }) => (
            <div key={id} className="bg-[#ECE7E0] flex flex-col rounded-2xl">
              <div
                className="flex justify-between p-4 items-start z-10 relative"
                onClick={() => handleAccordionClick(id)}
              >
                <h4 className="text-custom-heading font-gilroyBold text-lg lg:text-xl lg:leading-6 w-[90%] md:pr-6 sm:w-full">
                  {question}
                </h4>
                <div
                  className={`accordion-btns ${
                    activeId === id ? 'btn-clicked' : ''
                  } p-2 w-[24px] h-[24px] flex items-center`}
                ></div>
              </div>
              <div
                ref={(el) => (contentRefs.current[id] = el)}
                className={`${
                  activeId === id
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <div className="text-custom-body font-ttCommonProNormal text-base w-[95%] pb-4 px-4">
                  {answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiningFaqs;
