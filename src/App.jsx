
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Homepage'
import Layout from './components/Layout/Layout'
import Company from './components/Company/Company'
import CaseStudies from './components/CaseStudies'

function App() {


  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/company" element={<Company/>} />
      <Route path="/case-studies" element={<CaseStudies/>} />
    </Routes>
   
   </Layout>
  )
}

export default App
