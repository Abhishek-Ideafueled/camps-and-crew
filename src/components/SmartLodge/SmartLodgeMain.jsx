
import SmartLodgeHeader from "./SmartLodgeHeader";
import SlidingComp from "../HomePage/SlidingComp";
import ElevatingEfficiency from "./ElevatingEfficiency";
import LodgingSlider from "./LodgingSlider";
// import LodgingSliderSlick from "./LodgingSliderSlick";
import RoomsManagement from "./RoomsManagement";
import RoomsManagementSecond from "./RoomsManagementSecond";
import Reception from "./Reception";
import CheckInAndOut from "./CheckInAndOut";
import ReceptionAndSupport from "./ReceptionAndSupport";
import Testimonials from "./Testimonials";
import Housekeeping from "./Housekeeping";
import MobileHousekeeping from "./MobileHousekeeping";
import Reports from "./Reports";
import SystemIntegrations from "./SystemIntegrations";
import AdditionalFeatures from "./AdditionalFeatures";
import SmartLodgeFastFacts from "./SmartLodgeFastFacts";
import AccomodationAndTransportation from "./AccomodationAndTransportation";
import FAQs from "./FAQs";
import DemoForm from "../HomePage/DemoForm";
import { useEffect, useState } from "react";
import Aos from "aos";
import SecondNavbar from "./SecondNavbar";

const SmartLodgeMain = () => {

  useEffect(()=>{
    Aos.init(
      {duration:1000,
        easing: "ease-in-out",
      }
    );
},[])




  return (
    <div className="w-full overflow-hidden mt-[75px] lg:mt-[106px]">
      <SecondNavbar/>
      <SmartLodgeHeader/>
      <section id="beforerooms">

     
      <SlidingComp showHeading={false}/>
      <ElevatingEfficiency/>
      <LodgingSlider/>

 </section>
      {/* <LodgingSliderSlick/> */}

      <section id="roomsManagement">
        <RoomsManagement/>
        <RoomsManagementSecond/>
      </section>
      <section id="reception">
        <Reception/>
      <CheckInAndOut/>
      <ReceptionAndSupport/>
      <Testimonials/>
      </section>
      
      <section id="housekeeping">
  <Housekeeping/>
      <MobileHousekeeping/>
      </section>
      
      <section id="reports">
          <Reports/>
      </section>
    
    <section  id="systemIntegrations">
<SystemIntegrations/>
    </section>
    
      <section id='features'>
<AdditionalFeatures/>
      </section>
      <section id='afterlast'>
        <SmartLodgeFastFacts/>
      <AccomodationAndTransportation/>
      <FAQs/>
      <DemoForm/>
      </section>
      
    </div>
  );
}

export default SmartLodgeMain
