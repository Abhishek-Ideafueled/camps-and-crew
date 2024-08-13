import React from 'react'
import EnrouteHero from './EnrouteHero';
import LogoSection from './LogoSection';
import JourneyManagement from './JourneyManagement';
import CharteredTransportation from './CharteredTransportation';
import CharterResources from './CharterResources';
import TravelManifest from './TravelManifest';
import PassengerCheckIn from './PassengerCheckIn';
import RealTimeCheckIn from './RealTimeCheckIn';
import ManageBussing from './ManageBussing';
import CommercialContent from './CommercialContent';
import RichContent from './RichContent';

const EnrouteMain = () => {
  return (
    <div className='w-full mt-[76px] lg:mt-[106px] overflow-hidden'>
          <EnrouteHero/>
          <LogoSection/>
          <JourneyManagement/>
          <CharteredTransportation/>
          <CharterResources/>
          <TravelManifest/>
          <PassengerCheckIn/>
          <RealTimeCheckIn/>
          <ManageBussing/>
          <CommercialContent/>
          <RichContent/>
    </div>
  )
}

export default EnrouteMain
