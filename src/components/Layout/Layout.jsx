import React, { useEffect, useLayoutEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

const Layout = (props) => {

  // const pathName = useLocation();

  // This effect runs whenever the path name changes
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, [pathName]);

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0)
// });

  return (
    <>
      <Header/>
      {props.children}
      <Footer/>
    </>
  )
}

export default Layout
