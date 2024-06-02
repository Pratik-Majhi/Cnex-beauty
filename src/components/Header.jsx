import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <div className=' px-16 pr-14 flex justify-between bg-[#FFFFFF] w-1440 h-auto py-9 items-center '>
      <div className='lg'>
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className='text-[#082D4A] text-xl space-x-10 items-center font-normal hidden md:flex'>
        <Link to="/">Home</Link>
        <Link to="/about#scroll">About us</Link>
        <Link to="/contact#scroll">Contact us</Link>
        <Link to="/faq#scroll">FAQ</Link>
      </nav>
      <div className="buttons">
        <button className='px-[24px] py-[13px] bg-[#082D4A] text-[#FFFFFF] rounded-md'>Download Now</button>
      </div>
      </div>
    
      
    </header>
    
  );
};

export default Header;
