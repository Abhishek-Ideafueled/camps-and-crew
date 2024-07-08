import React from 'react'
import Carousel from './Carousel/Carousel';
import SecondPage from './SecondPage';
import FifoOperations from './FifoOperations';
import SlidingCompanies from './SlidingCompanies';
import Industries from './Industries';
import CaseStudies from './CaseStudies';
import SetsUsApart from './SetsUsApart';
import DemoForm from './DemoForm';

const Homepage = () => {
  return (
    <>
      <Carousel/>
      <SecondPage/>
      <FifoOperations/>
      <SlidingCompanies/>
      <Industries/>
      <CaseStudies/>
      <SetsUsApart/>
      <DemoForm/>
    </>
  )
}

export default Homepage
