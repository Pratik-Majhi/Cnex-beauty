import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const contactSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#scroll' && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div ref={contactSectionRef}>
    <div className='bg-[#082D4A] p-16'>
    <div className='flex justify-between'>
    <img src="logo (1).png" alt="" className='w-[165.81px] h-[60px]' />
    <div>
    </div>
    <div className='text-[#FFFFFF] space-y-2'>
      <div>
    <h1 className='text-2xl font-normal'>Contact us</h1>
    </div>
    <div>
    <p>Head office:</p>
    <p>Sankhamul, Baneshwor</p>
    <p>+977 98********</p>
    </div>
    <div>
    <p>cnex@gmail.com</p>
    </div>
    <div className='flex gap-[16px]'>
    <img src="fb icon.png" alt="" />
    <img src="instagram icon.png" alt="" />
    <img src="twiter icon.png" alt="" />
    </div>
    </div>
    <div className='text-[#FFFFFF] space-y-2'>
      <div>
      <h1 className='text-2xl font-normal'>Services</h1>
      </div>
      <div>
      <p>Order and Pre-order</p>
      <p>Beauty service Appointment Booking</p>
      <p>Order and Pre-order</p>
      <p>Order and Pre-order</p>
      </div>
    </div>
    <div className='text-[#FFFFFF] space-y-2'>
      <div>
      <h1 className='text-2xl font-normal'>Download our App</h1>
      </div>
      <div>
      <img src="Apple.png" alt="" />
      </div>
      <div>
      <img src="Google.png" alt="" />
      </div>
      </div>
    </div>
    <div className='space-y-3'>
    <div className='border-solid   text-[#D1D3DC] pt-[20px]'>
    <hr />
    </div>
    <div className='flex justify-center'>
      <div className=''>
    <p className='text-[#D1D3DC]'>Copyright <span>&#169;</span> 2024 Cnex.All rights reserved. Powered by:</p>
    </div>
    <div>
    <img src="Mask group.png" alt="" />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ContactPage
