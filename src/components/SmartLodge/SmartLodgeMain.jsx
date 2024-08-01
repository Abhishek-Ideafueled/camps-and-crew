
import SmartLodgeHeader from "./SmartLodgeHeader";
import SlidingComp from "../HomePage/SlidingComp";
import ElevatingEfficiency from "./ElevatingEfficiency";
import LodgingSlider from "./LodgingSlider";
import LodgingSliderSlick from "./LodgingSliderSlick";
import RoomsManagement from "./RoomsManagement";
import RoomsManagementSecond from "./RoomsManagementSecond";

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
    </div>
  );
}

export default SmartLodgeMain
