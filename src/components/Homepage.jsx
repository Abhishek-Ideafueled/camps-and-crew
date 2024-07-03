import React from 'react'
import Header from './Header'
import Carousel from './Carousel';
import SecondPage from './SecondPage';
import FifoOperations from './FifoOperations';
import SlidingCompanies from './SlidingCompanies';
import Industries from './Industries';
import CaseStudies from './CaseStudies';
import SetsUsApart from './SetsUsApart';

const Homepage = () => {
  return (
    <div>
        <Header/>
      <Carousel/>
      <SecondPage/>
      <FifoOperations/>
      <SlidingCompanies/>
      <Industries/>
      <CaseStudies/>
      <SetsUsApart/>
    </div>
  )
}

export default Homepage
