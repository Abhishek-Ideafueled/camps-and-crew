import { useEffect } from "react";
import CaseStudiesHero from "./CaseStudiesHero"
import Aos from "aos";
import CaseStudiesSlider from "./CaseStudiesSlider";
import OtherCaseStudies from "./OtherCaseStudies";
import DemoForm from '../HomePage/DemoForm';
import CaseStudiesSplide from "./CaseStudiesSplide";
import DemoSiderSwiper from "./DemoSiderSwiper";



const CaseStudies = () => {

  useEffect(()=>{
    Aos.init(
      {duration:1000,
        easing: "ease-in-out",
      }
    );
},[])

  return (
      <div className="w-full overflow-hidden mt-[75px] lg:mt-[106px]">
            <CaseStudiesHero/>
            <CaseStudiesSlider/>
            {/* <DemoSiderSwiper/> */}
            <OtherCaseStudies/>
            <DemoForm/>
      </div>
  )
}

export default CaseStudies
