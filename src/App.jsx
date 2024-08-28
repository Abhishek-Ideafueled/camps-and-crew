
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
    <Route path="/sodexo-implements-smartlodge-sella-ness-accommodation-camp" element={<CsSodexoDrivesMain/>}/>
    </Routes>
   
   </Layout>
  )
}

export default App
