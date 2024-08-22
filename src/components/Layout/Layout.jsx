import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

const Layout = (props) => {

  // const pathName = useLocation();

  // This effect runs whenever the path name changes
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, [pathName]);

  return (
    <>
      <Header/>
      {props.children}
      <Footer/>
    </>
  )
}

export default Layout
