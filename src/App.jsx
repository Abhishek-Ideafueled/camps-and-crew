
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/HomePage/Homepage';
import Layout from './components/Layout/Layout';
import Company from './components/Company/Company';
import SmartLodgeMain from './components/SmartLodge/SmartLodgeMain';
import EnrouteMain from './components/Enroute/EnrouteMain';
import CaseStudiesMain from './components/CaseStudies/CaseStudiesMain';

function App() {


  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/company" element={<Company/>} />
      <Route path="/case-studies" element={<CaseStudiesMain/>} />
       <Route path="/software-for-workforce-camp" element={<SmartLodgeMain/>} />
       <Route path="/fifo-travel-online-booking-tool" element={<EnrouteMain/>} />
    </Routes>
   
   </Layout>
  )
}

export default App
