import React, { useEffect } from 'react'
import Carousel from './Carousel/Carousel';
import SecondPage from './SecondPage';
import FifoOperations from './FifoOperations';
import SlidingCompanies from './SlidingCompanies';
import Industries from './Industries';
import CaseStudies from './CaseStudies';
import SetsUsApart from './SetsUsApart';
import DemoForm from './DemoForm';
import AOS from "aos";
import "aos/dist/aos.css";
import SlidingComp from './SlidingComp';

const Homepage = () => {

  useEffect(() => {
  
      AOS.init();
      AOS.refresh();
    
  }, []);

  return (
    <div className='w-full'>
      <Carousel/>
      <SecondPage/>
      <FifoOperations/>
      {/* <SlidingCompanies/> */}
      
       <SlidingComp/>
      <Industries/> 
      <CaseStudies/>
      <SetsUsApart/>
     <DemoForm/> 
    </div>
  )
}

export default Homepage
