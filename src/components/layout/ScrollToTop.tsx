import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // respect instant scroll to avoid jittery transitions
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
