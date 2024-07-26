
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Homepage'
import Layout from './components/Layout/Layout'
// import Company from './components/Company/Company'
// import CaseStudies from './components/CaseStudies';
import { lazy, Suspense } from 'react';

const Company = lazy(() => import('./components/Company/Company'));

function App() {


  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/company" element={<Suspense fallback={<>Loading.....</>}>
  <Company />
 </Suspense>} />
      {/* <Route path="/case-studies" element={<CaseStudies/>} /> */}
    </Routes>
   
   </Layout>
  )
}

export default App
