import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/HomePage/Homepage'
import Layout from './components/Layout/Layout'

function App() {


  return (
   <Layout>
   <Homepage/>
   </Layout>
  )
}

export default App
