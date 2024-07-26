
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Homepage'
import Layout from './components/Layout/Layout'
import Company from './components/Company/Company'
import SmartLodgeMain from './components/SmartLodge/SmartLodgeMain'
// import CaseStudies from './components/CaseStudies'

function App() {


  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/company" element={<Company/>} />
      {/* <Route path="/case-studies" element={<CaseStudies/>} /> */}
       <Route path="/software-for-workforce-camp" element={<SmartLodgeMain/>} />
    </Routes>
   
   </Layout>
  )
}

export default App
