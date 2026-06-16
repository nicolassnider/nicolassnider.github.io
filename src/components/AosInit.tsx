import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic',
      });
    };
    
    initAOS();
    
    // Astro view transitions support
    document.addEventListener('astro:page-load', initAOS);
    
    return () => {
      document.removeEventListener('astro:page-load', initAOS);
    };
  }, []);

  return null;
}
