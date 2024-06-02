import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const aboutSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#scroll' && aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div ref={aboutSectionRef}>
      <h1 className='text-red-600 text-center text-lg mt-10'>-ABOUT US</h1>
      <p className='text-[48px] font-[500] px-[250px] '>
        <span className='text-red-600 underline  '>Pioneering Female</span>-Centric Solutions
        for the Modern Woman
      </p>
      <div className='grid grid-cols-4 p-14 gap-12 [&>img:not(:First:Child)]:mt-2'>
        <img src="Image.png" alt="" />
        <img src="Image (1).png" alt="" />
        <img src="Image (2).png" alt="" />
        <img src="Image (3).png" alt="" />
        <img src="Image (5).png" alt="" />
        <img src="Image (6).png" alt="" className='col-span-2' />
        <img src="Image (4).png" alt="" />
        <img src="Image (7).png" alt="" />
      </div>
    </div>
  );
};

export default AboutPage;
