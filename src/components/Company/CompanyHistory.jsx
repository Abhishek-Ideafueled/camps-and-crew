import Slider from 'react-slick';
import './CompanyHistory.css';
import { useEffect, useRef, useState } from 'react';

const CompanyHistory = () => {


  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    console.log("useeffect running");
  }, []);

  const settings = {
    dots: false,
    fade: false,
    arrows:false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    swipe:false,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover:false,
    swipeToSlide:false,
    vertical:false,
    // responsive: [
    //     {
    //       breakpoint: 1600,
    //       settings: {
    //         slidesToShow:3.5,
    //       },
    //     },
    //     {
    //       breakpoint: 1400,
    //       settings: {
    //         slidesToShow:3.2,
    //       },
    //     },
    //     {
    //       breakpoint: 1280,
    //       settings: {
    //         slidesToShow: 2.5,
    //       },
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 2,
    //       },
    //     },
    //   ],
  };

  const settings2={
    dots: false,
    fade: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 9,
    slidesToScroll: 1,
    pauseOnHover:false,
    focusOnSelect:true,
    vertical:true,
    swipe:true,
    swipeToSlide:true,
  }

  return (
    <div className="w-full bg-[#053347] overflow-x-auto">
      <div className=" mx-auto flex flex-col gap-[60px] py-10 lg:py-20 w-full z-10">
        <div className="main-container flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="font-gilroyBold text-h2 leading-[3rem] text-white">
              Company History
            </h1>
            <div className="">
              <svg
                width="174"
                height="16"
                viewBox="0 0 174 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.584 0.722656L1.58396 15.7227" stroke="white" />
                <path d="M46.584 0.722656L36.584 15.7227" stroke="white" />
                <path d="M81.584 0.722656L71.584 15.7227" stroke="white" />
                <path d="M116.584 0.722656L106.584 15.7227" stroke="white" />
                <path d="M151.584 0.722656L141.584 15.7227" stroke="white" />
                <path d="M18.584 0.722656L8.58396 15.7227" stroke="white" />
                <path d="M53.584 0.722656L43.584 15.7227" stroke="white" />
                <path d="M88.584 0.722656L78.584 15.7227" stroke="white" />
                <path d="M123.584 0.722656L113.584 15.7227" stroke="white" />
                <path d="M158.584 0.722656L148.584 15.7227" stroke="white" />
                <path d="M25.584 0.722656L15.584 15.7227" stroke="white" />
                <path d="M60.584 0.722656L50.584 15.7227" stroke="white" />
                <path d="M95.584 0.722656L85.584 15.7227" stroke="white" />
                <path d="M130.584 0.722656L120.584 15.7227" stroke="white" />
                <path d="M165.584 0.722656L155.584 15.7227" stroke="white" />
                <path d="M32.584 0.722656L22.584 15.7227" stroke="white" />
                <path d="M67.584 0.722656L57.584 15.7227" stroke="white" />
                <path d="M102.584 0.722656L92.584 15.7227" stroke="white" />
                <path d="M137.584 0.722656L127.584 15.7227" stroke="white" />
                <path d="M172.584 0.722656L162.584 15.7227" stroke="white" />
                <path d="M39.584 0.722656L29.584 15.7227" stroke="white" />
                <path d="M74.584 0.722656L64.584 15.7227" stroke="white" />
                <path d="M109.584 0.722656L99.584 15.7227" stroke="white" />
                <path d="M144.584 0.722656L134.584 15.7227" stroke="white" />
              </svg>
            </div>
          </div>
          <span className="font-ttCommonProNormal font-medium text-lg leading-7 text-white">
            Discover the milestones that have shaped our journey in developing
            robust solutions for remote FIFO operations. Below you can read more
            about the product launches and major feature releases we unveiled
            along the way.
          </span>
        </div>
        <div className='relative w-full '>
        <div  className='absolute top-32 history-nav z-10 font-ttCommonProRegular text-xl text-custom-gray leading-8'>
            <Slider {...settings2}  asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)} >
            <div>2023</div>
            <div>2022</div>
            <div>2021</div>
            <div>2018</div>
            <div>2017</div>
            <div>2016</div>
            <div>2015</div>
            <div>2013</div>
            <div>2007</div>
            <div>1997</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </Slider>

          
          
        </div>
        <div className="history-cards ml-[150px] w-full overflow-x-auto">
          <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2023
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-1 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        August 2023
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                        The company launches the ability for charter plane
                        pilots and bus drivers to check workers in as they board
                        planes or buses with EnRoute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2022
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-2 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        September 2022
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      Roster booking capabilities launch, enabling clients to book rooms or travel reservations weeks or months out for workers on rotating rosters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2021
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-3 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        April 2021
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      EnRoute goes live managing FIFO travel for workers at a remote mine in Western Africa--our first EnRoute deployment in the region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2018
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-4 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        July 2018
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      One of Indonesia’s premier mining companies installs SmartLodge at 15+ worksite lodging facilities at a large-scale mine in Indonesia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2017
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-5 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        July 2017
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      EnRoute rolls out the ability to book commercial travel content, inclusive of commercial flights, hotels and rental cars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2016
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-6 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        July 2016
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      EnRoute launches and enables FIFO transportation coordinators to book and manage charter air, ground transportation and marine vessels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2015
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-7 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        February 2015
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      Mobile Housekeeping launches, enabling cleaners to update room status from a mobile device as they complete walkdowns or cleanings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2013
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-8 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        June 2013
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      Construction firm implements SmartLodge at their remote camps at a hydroelectric dam construction project in Manitoba, Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  2007
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-9 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                       March 2007
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      The company installs the first version of SmartLodge at a remote camp serving the Canadian oil sands in Fort McMurray, Alberta, Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-outer w-[340px] h-[469px]">
              <div className="flex flex-col">
                <h2 className="text-h2 text-custom-button font-gilroyBold">
                  1997
                </h2>
                <div className="relative">
                  <div className="absolute inset-0 bg-history-10 w-[340px] h-[405px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                  <div className="w-[340px] h-[405px]">
                    <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                      <span className="font-gilroyBold font-normal text-white text-2xl ">
                        June 1997
                      </span>
                      <p className="font-ttCommonProRegular text-white text-xl">
                      Camps & Crew’s parent company, Innfinity Software Systems, releases a now-retired version of SmartLodge for hotels properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </Slider>
          </div>
        </div>
       
          
      </div>
    </div>
  );
}

export default CompanyHistory
