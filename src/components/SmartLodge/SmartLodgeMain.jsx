
import SmartLodgeHeader from "./SmartLodgeHeader";
import SlidingComp from "../HomePage/SlidingComp";

const SmartLodgeMain = () => {
  return (
    <div className="w-full overflow-hidden mt-[75px] lg:mt-[106px]">
      <SmartLodgeHeader/>
      <SlidingComp showHeading={false}/>
    </div>
  );
}

export default SmartLodgeMain
