
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/HomePage/Homepage';
import Layout from './components/Layout/Layout';
import Company from './components/Company/Company';
import SmartLodgeMain from './components/SmartLodge/SmartLodgeMain';
import EnrouteMain from './components/Enroute/EnrouteMain';
import CaseStudiesMain from './components/CaseStudies/CaseStudiesMain';
import RemoteWorkforceMain from './components/RemoteWorkforce/RemoteWorkforceMain';
import Testing from './components/Testing';
import MiningMain from './components/Mining/MiningMain';
import CsSodexoDrivesMain from './components/CaseStudiesInner/CsSodexoDrives/CsSodexoDrivesMain';
import CsSodexoLeveragesMain from './components/CaseStudiesInner/CsSodexoLeverages/CsSodexoLeveragesMain';
import CsCiveoMain from './components/CaseStudiesInner/CsCiveo/CsCiveoMain';
import CsB2GoldMain from './components/CaseStudiesInner/CsB2Gold/CsB2GoldMain';
import CsCleanHarborMain from './components/CaseStudiesInner/CsCleanHarbor/CsCleanHarborMain';
import CsAnokiigamigMain from './components/CaseStudiesInner/CsAnokiigamig/CsAnokiigamigMain';
import CsPermianLodgingMain from './components/CaseStudiesInner/CsPermianLodging/CsPermianLodgingMain';
import CsRightChoiceMain from './components/CaseStudiesInner/CsRightChoice/CsRightChoiceMain';
import CsPetroplexMain from './components/CaseStudiesInner/CsPetroplex/CsPetroplexMain';
import CsSodexoImplementsMain from './components/CaseStudiesInner/CsSodexImplements/CsSodexoImplementsMain';
import CsKiewitMain from './components/CaseStudiesInner/CsKiewit/CsKiewitMain';

function App() {


  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/company" element={<Company/>} />
      <Route path="/case-studies" element={<CaseStudiesMain/>} />
       <Route path="/software-for-workforce-camp" element={<SmartLodgeMain/>} />
       <Route path="/fifo-travel-online-booking-tool" element={<EnrouteMain/>} />
    <Route path="/camp-management-and-catering-companies" element={<RemoteWorkforceMain/>} />
    {/* <Route path="/testing" element={<Testing/>} /> */}
    <Route path="/mining-camp-accommodation-fifo-travel" element={<MiningMain/>} />
    {/* Case Studies Inner links */}
    <Route path="/sodexo-implements-smartlodge-sella-ness-accommodation-camp" element={<CsSodexoDrivesMain/>}/>
    <Route path="/sodexo-canada-implements-smartlodge-cedar-valley-lodge" element={<CsSodexoLeveragesMain/>}/>
    <Route path='/civeo-implements-smartlodge-camps-north-america' element={<CsCiveoMain/>} />
    <Route path='/b2gold-implements-smartlodge-fekola-mine-camps' element={<CsB2GoldMain/>} />
    <Route path='/clean-harbors-canada-leverages-smartlodge-turnkey-camps' element={<CsCleanHarborMain/>} />
    <Route path='/anokiigamig-installs-smartlodge-remote-camp-management-system' element={<CsAnokiigamigMain/>}/>
    <Route path='/permian-lodging-streamlines-billing-guest-experience-smartlodge' element={<CsPermianLodgingMain/>}/>
    <Route path='/right-choice-catering-edmonton-streamlines-remote-camp-operations-smartlodge' element={<CsRightChoiceMain/>}/>
    <Route path='/petroplex-manages-workforce-housing-commercial-property-rentals-smartlodge' element={<CsPetroplexMain/>}/>
    <Route path='/sodexo-implements-smartlodge-enroute-keeyask-project-manitoba' element={<CsSodexoImplementsMain/>}/>
    <Route path='/kiewit-fifo-workforce-movements-camps-ontario-hydroelectric-project-enroute-smartlodge' element={<CsKiewitMain/>}/>
    </Routes>
   
   </Layout>
  )
}

export default App
