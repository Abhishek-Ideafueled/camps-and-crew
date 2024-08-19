import React, { useEffect, useState } from 'react'

const useRwNavVis = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        // console.log(currentScrollPosition);
        setScrollingDown(currentScrollPosition > lastKnownScrollPosition);
        setLastKnownScrollPosition(currentScrollPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastKnownScrollPosition]);
  
    useEffect(() => {
      const handleVisibility = (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'not-year') {
            if (entry.isIntersecting) {
              setIsVisible(false);
            } 
          }
          else if (entry.target.id === 'year-main') {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } 
            // else if (!scrollingDown && !entry.isIntersecting) {
            //   setIsVisible(false);
            // }
          }
         if (entry.target.id === '2024') {
              if (entry.isIntersecting) {
                setIsVisible(true);
              } 
            }
           if (entry.target.id === '2022') {
              if (entry.isIntersecting) {
                setIsVisible(true);
              } 
            }
           if (entry.target.id === '2020') {
              if (entry.isIntersecting) {
                setIsVisible(true);
              } 
            } if (entry.target.id === '2019') {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          }
           if (entry.target.id === '2018') {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            }
            if (entry.target.id === '2017') {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              }
              if (entry.target.id === '2016') {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              }
              if (entry.target.id === '2015') {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              }
              if (entry.target.id === '2014') {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              }
              if (entry.target.id === '2013') {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              }
          else  if (entry.target.id === 'afteryear') {
              if (entry.isIntersecting) {
                setIsVisible(false);
              }
            }
        });
      };
  
      const observer = new IntersectionObserver(handleVisibility, {
        threshold: 0.1,
      });
  
      const beforeFirstSection = document.getElementById('not-year');
      const firstSection = document.getElementById('year-main');
      const secondSection = document.getElementById('2024');
      const thirdSection = document.getElementById('2022');
      const fourthSection = document.getElementById('2020');
      const fifthSection = document.getElementById('2019');
      const sixthSection = document.getElementById('2018');
      const seventhSection = document.getElementById('2017');
      const eigthSection = document.getElementById('2016');
      const ninthSection = document.getElementById('2015');
      const tenthSection = document.getElementById('2014');
      const lastSection = document.getElementById('2013');
      const afterLastSection = document.getElementById('afteryear');
  
      if (beforeFirstSection) observer.observe(beforeFirstSection);
      if (firstSection) observer.observe(firstSection);
      if (secondSection) observer.observe(secondSection);
      if (thirdSection) observer.observe(thirdSection);
      if (fourthSection) observer.observe(fourthSection);
      if (fifthSection) observer.observe(fifthSection);
      if (sixthSection) observer.observe(sixthSection);
      if (seventhSection) observer.observe(seventhSection);
      if (eigthSection) observer.observe(eigthSection);
      if (ninthSection) observer.observe(ninthSection);
      if (tenthSection) observer.observe(tenthSection);
      if (lastSection) observer.observe(lastSection);
      if (afterLastSection) observer.observe(afterLastSection);
  
      return () => {
        if (beforeFirstSection) observer.unobserve(beforeFirstSection);
        if (firstSection) observer.unobserve(firstSection);
        if (secondSection) observer.unobserve(secondSection);
        if (thirdSection) observer.unobserve(thirdSection);
        if (fourthSection) observer.unobserve(fourthSection);
        if (fifthSection) observer.unobserve(fifthSection);
        if (sixthSection) observer.unobserve(sixthSection);
        if (seventhSection) observer.unobserve(seventhSection);
        if (eigthSection) observer.unobserve(eigthSection);
        if (ninthSection) observer.unobserve(ninthSection);
        if (tenthSection) observer.unobserve(tenthSection);
        if (lastSection) observer.unobserve(lastSection);
        if (afterLastSection) observer.unobserve(afterLastSection);
      };
    }, [scrollingDown]);
  
    return isVisible;
}

export default useRwNavVis
