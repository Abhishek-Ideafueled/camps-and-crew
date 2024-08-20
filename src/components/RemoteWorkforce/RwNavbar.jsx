import { useEffect, useRef, useState } from "react";
import "./RemoteWorkforceMain.css";
import { Link, animateScroll as scroll } from "react-scroll";
import useRwNavVis from "./useRwNavVis";

const RwNavbar = () => {
  const navRef = useRef();
  const isVisible = useRwNavVis();
  const [currIndex,setCurrIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const activeLink = document.querySelector('.active');
      setCurrIndex(activeLink.textContent);
      if (activeLink && navRef.current) {
        navRef.current.scrollTo({
          left: activeLink.offsetLeft - navRef.current.offsetWidth / 2 + activeLink.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const years =["2024","2022","2020","2019","2018","2017","2016","2015","2014","2013"];

  return (
    <>
  {
        isVisible && ( <div className="main-container mx-auto fixed top-16 py-3 px-5 h-[64px] z-30  bg-custom-back text-custom-button md:hidden flex items-center">
<p className="font-gilroyBold text-[40px] leading-[40px]">{years.filter((v, i) => (v ? v === currIndex : ""))}</p>
            </div>)
    }

      {isVisible && (
        <div className=" w-full fixed bottom-0 z-30  text-btn-text bg-white h-[55px] md:hidden flex items-center">
          <nav
            className="flex text-nowrap xl:justify-between overflow-x-auto no-scrollbar main-container mx-auto h-full items-center"
            ref={navRef}
          >
            <Link
              activeClass="active"
              to="2024"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
              className=" xl:w-[166px] relative cursor-pointer text-base border-b-[2px] font-ttCommonProNormal px-3 text-center border-b-transparent"
            >
              <div className="h-full">2024</div>
            </Link>

            <Link
              to="2022"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              2022
            </Link>
            <Link
              to="2020"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              2020
            </Link>
            <Link
              to="2019"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              2019
            </Link>
            <Link
              to="2018"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
               2018
            </Link>
            <Link
              to="2017"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
             2017
            </Link>
            <Link
              to="2016"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
             2016
            </Link>
            <Link
              to="2015"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
             2015
            </Link>
            <Link
              to="2014"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
             2014
            </Link>
            <Link
              to="2013"
              activeClass="active"
              className=" xl:w-[166px] relative cursor-pointer border-b-[2px] text-base font-ttCommonProNormal px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
             2013
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default RwNavbar;
