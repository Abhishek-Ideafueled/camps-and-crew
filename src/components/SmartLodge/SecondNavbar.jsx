import { useEffect, useRef } from "react";
import "./SecondNavbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import useNavbarVisibility from "./useNavbarVisibility";
import './SecondNavbar.css';

const SecondNavbar = ({}) => {
  const navRef = useRef();
  const isVisible = useNavbarVisibility();
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
              offset={-150}
              className="custom-transition relative cursor-pointer text-base border-b-[2px] font-gilroyBold px-3 text-center border-b-transparent"
            >
              <div className="h-full">Rooms Management</div>
            </Link>

            <Link
              to="reception"
              activeClass="active"
              className="custom-transition relative cursor-pointer border-b-[2px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              Reception & Front Desk
            </Link>
            <Link
              to="housekeeping"
              activeClass="active"
              className="custom-transition relative cursor-pointer border-b-[2px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              Housekeeping & Maintenance
            </Link>
            <Link
              to="reports"
              activeClass="active"
              className="custom-transition relative cursor-pointer border-b-[2px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              Reporting & Analytics
            </Link>
            <Link
              to="systemIntegrations"
              activeClass="active"
              className="custom-transition relative cursor-pointer border-b-[2px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
            >
              System Integrations
            </Link>
            <Link
              to="features"
              activeClass="active"
              className="custom-transition relative cursor-pointer border-b-[2px] text-base font-gilroyBold px-3 text-center border-b-transparent"
              spy={true}
              smooth={true}
              duration={200}
              offset={-150}
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
