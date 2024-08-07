// useNavbarVisibility.js
import { useEffect, useState } from 'react';

const useNavbarVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
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
        if (entry.target.id === 'roomsManagement') {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (!scrollingDown && !entry.isIntersecting) {
            setIsVisible(false);
          }
        } else if (entry.target.id === 'features') {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (scrollingDown && !entry.isIntersecting) {
            setIsVisible(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.1,
    });

    const firstSection = document.getElementById('roomsManagement');
    const lastSection = document.getElementById('features');

    if (firstSection) observer.observe(firstSection);
    if (lastSection) observer.observe(lastSection);

    return () => {
      if (firstSection) observer.unobserve(firstSection);
      if (lastSection) observer.unobserve(lastSection);
    };
  }, [scrollingDown]);

  return isVisible;
};

export default useNavbarVisibility;
