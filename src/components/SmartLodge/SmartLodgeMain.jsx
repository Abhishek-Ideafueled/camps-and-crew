
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

const SmartLodgeMain = () => {
  return (
    <div className="w-full overflow-hidden mt-[75px] lg:mt-[106px]">
      <SmartLodgeHeader/>
      <SlidingComp showHeading={false}/>
      <ElevatingEfficiency/>
      <LodgingSlider/>
      {/* <LodgingSliderSlick/> */}
      <RoomsManagement/>
      <RoomsManagementSecond/>
      <Reception/>
      <CheckInAndOut/>
      <ReceptionAndSupport/>
      <Testimonials/>
      <Housekeeping/>
      <MobileHousekeeping/>
      <Reports/>
      <SystemIntegrations/>
      <AdditionalFeatures/>
      <SmartLodgeFastFacts/>
      <AccomodationAndTransportation/>
    </div>
  );
}

export default SmartLodgeMain
