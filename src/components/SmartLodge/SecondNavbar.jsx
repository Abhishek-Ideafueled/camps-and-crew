import { useEffect, useRef } from "react";
import "./SecondNavbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const SecondNavbar = ({ isVisible }) => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const activeLink = document.querySelector('.active');
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

  return (
    <>
      {isVisible && (
        <div className=" w-full fixed top-0 z-30 bg-custom-back text-white h-[76px] lg:h-[106px] flex items-center">
          <nav
            className="flex gap-2 text-nowrap overflow-x-auto no-scrollbar main-container mx-auto"
            ref={navRef}
          >
            <Link
              activeClass="active"
              to="roomsManagement"
              spy={true}
              smooth={true}
              duration={200}
              className=" transition-all duration-350 text-base border-b-[4px] font-gilroyBold px-3 text-center border-b-transparent"
            >
              <div className="h-full">Rooms Management</div>
            </Link>

            <Link
              to="reception"
              activeClass="active"
              className=" transition-all duration-350 border-b-[4px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
            >
              Reception & Front Desk
            </Link>
            <Link
              to="housekeeping"
              activeClass="active"
              className=" transition-all duration-350 border-b-[4px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
            >
              Housekeeping & Maintenance
            </Link>
            <Link
              to="reports"
              activeClass="active"
              className=" transition-all duration-350 border-b-[4px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
            >
              Reporting & Analytics
            </Link>
            <Link
              to="systemIntegrations"
              activeClass="active"
              className=" transition-all duration-350 border-b-[4px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
            >
              System Integrations
            </Link>
            <Link
              to="features"
              activeClass="active"
              className=" transition-all duration-350 border-b-[4px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
            >
              Additional Features
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default SecondNavbar;
