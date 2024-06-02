import React from 'react'
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";

function Cutomerexpectation() {
  return (
    <>
    <div>
      <div className='p-[53px] space-y-4'>
        <h6 className='text-[#FF785A]'>- TESTIMONIAL</h6>
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>What our <span className='text-[#FF785A] underline'>Customers say </span> </h1>
        <div className='flex gap-4' >
          <div className='rounded-full bg-white shadow-lg size-6 p-1'>
        <MdOutlineArrowBack/>
        </div>
        <div  className='rounded-full bg-white shadow-lg size-6 p-1'>
        <MdOutlineArrowForward />
        </div>
        </div>
        </div>
        <hr />
        
    </div>
    
    <div className='flex justify-between pl-[50px] pr-[110px]'>
      <img src="img1.png" alt="" className='h-[351px] w-[496px]' />
     
      <img src="img.png" alt="" className='h-[351px] w-[495px]' />
    </div>
    <div className='bg-[#FFFFFF] shadow-2xl max-w-[342.58px] max-h-[205.71px] p-[30px] relative -mt-64 left-72'>
      <div className='flex gap-3'>
        <img src="img2.png" alt="" />
        <p className='font-semibold'>"They did an amazing work for our home"</p>
        </div>
        <div className='pl-[65px] space-y-2'>
        <p className='text-[#3F486A]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, exercitationem.</p>
        <p className='text-[#FF785A] font-bold'>-JOHN CARTER, NEW YORK</p>
        </div>

      </div>
      <div className='bg-[#FFFFFF] shadow-2xl max-w-[342.58px] max-h-[205.71px] p-[30px] relative ml-[950px] -mt-[198px]'>
      <div className='flex gap-3'>
        <img src="img2.png" alt="" />
        <p className='font-semibold'>"They did an amazing work for our home"</p>
        </div>
        <div className='pl-[65px] space-y-2'>
        <p className='text-[#3F486A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, exercitationem.</p>
        <p className='text-[#FF785A] font-bold'>-JOHN CARTER, NEW YORK</p>
        </div>
      </div> 
      <br />
      <br />
      <br />
      
    
   </div>
  
    
    </>
  )
}

export default Cutomerexpectation
