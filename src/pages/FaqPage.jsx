import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const FaqPage = () => {
  const faqSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#scroll' && faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div ref={faqSectionRef}>
      <div className='text-center space-y-4 pt-12 '>
     <p className='text-[#FF785A] font-medium'>- FAQ</p>
     <h1 className='text-4xl font-semibold'><span className='text-[#FF785A] '>Frequently</span> Asked Questions</h1>
     <p className='text-[#86888A]  w-[1200px]  px-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sed necessitatibus vitae voluptates officiis neque corporis delectus cupiditate magnam eos?</p>
    </div>
    <div className='flex gap-9 p-12'>
      <div className=' space-y-7'>
        <div className='flex gap-0  bg-[#F3F3F3] p-6 '>
         <div>
      <p className='font-semibold pb-4'>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className='text-[#86888A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
      <div className='h-[24px] w-[24px]'>
      <RxCross2 />
      </div>
      </div>
      <div className='flex items-center justify-between bg-[#F3F3F3] p-6'>
      <p className='font-semibold' >Norem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <FiPlus />
      </div>
      <div className='flex  items-center justify-between bg-[#F3F3F3] p-6'>
      <p className='font-semibold'>Norem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <FiPlus />
      </div>
      <div className='flex  items-center justify-between bg-[#F3F3F3] p-6'> 
      <p className='font-semibold'> Norem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <FiPlus />
      </div>
      </div>
      <img src="INFO.png" alt="" className='w-[456px] h-[457.94px]'/>
    </div>
    </div>
  );
};

export default FaqPage;
