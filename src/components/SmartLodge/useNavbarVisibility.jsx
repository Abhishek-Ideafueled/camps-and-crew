// useNavbarVisibility.js
import { useEffect, useState } from 'react';

const useNavbarVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      console.log(currentScrollPosition);
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
        if (entry.target.id === 'beforerooms') {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } 
        }
        else if (entry.target.id === 'roomsManagement') {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } 
          // else if (!scrollingDown && !entry.isIntersecting) {
          //   setIsVisible(false);
          // }
        }
       if (entry.target.id === 'reception') {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } 
          }
         if (entry.target.id === 'housekeeping') {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } 
          }
         if (entry.target.id === 'reports') {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } 
          } if (entry.target.id === 'systemIntegrations') {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
         if (entry.target.id === 'features') {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
            //  else if (scrollingDown && !entry.isIntersecting) {
            //   setIsVisible(false);
            // }
          }
        else  if (entry.target.id === 'afterlast') {
            if (entry.isIntersecting) {
              setIsVisible(false);
            }
          }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.1,
    });

    const beforeFirstSection = document.getElementById('beforerooms');
    const firstSection = document.getElementById('roomsManagement');
    const secondSection = document.getElementById('reception');
    const thirdSection = document.getElementById('housekeeping');
    const fourthSection = document.getElementById('reports');
    const fifthSection = document.getElementById('systemIntegrations');
    const lastSection = document.getElementById('features');
    const afterLastSection = document.getElementById('afterlast');

    if (beforeFirstSection) observer.observe(beforeFirstSection);
    if (firstSection) observer.observe(firstSection);
    if (secondSection) observer.observe(secondSection);
    if (thirdSection) observer.observe(thirdSection);
    if (fourthSection) observer.observe(fourthSection);
    if (fifthSection) observer.observe(fifthSection);
    if (lastSection) observer.observe(lastSection);
    if (afterLastSection) observer.observe(afterLastSection);

    return () => {
      if (beforeFirstSection) observer.unobserve(beforeFirstSection);
      if (firstSection) observer.unobserve(firstSection);
      if (secondSection) observer.unobserve(secondSection);
      if (thirdSection) observer.unobserve(thirdSection);
      if (fourthSection) observer.unobserve(fourthSection);
      if (fifthSection) observer.unobserve(fifthSection);
      if (lastSection) observer.unobserve(lastSection);
      if (afterLastSection) observer.unobserve(afterLastSection);
    };
  }, [scrollingDown]);

  return isVisible;
};

export default useNavbarVisibility;
