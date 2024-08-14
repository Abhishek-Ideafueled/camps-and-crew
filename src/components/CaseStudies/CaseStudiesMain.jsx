import { useEffect } from "react";
import CaseStudiesHero from "./CaseStudiesHero"
import Aos from "aos";



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
      </div>
  )
}

export default CaseStudies
