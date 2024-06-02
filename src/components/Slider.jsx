import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';



// import required modules
import {  EffectFade ,Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        
       effect={'fade'}
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
       
        modules={[ EffectFade,Autoplay]}
        className="mySwiper"
      >
        
     
        <SwiperSlide>

        <div className='relative'><img src="Banner1.jpg" alt="" />
         </div>
        
          <div className='absolute top-[210px] left-[70px] max-w-2xl '>
        <h1 className='text-[52px] font-[500px] text-[#FFFFFF]'><span className='text-[#FF785A] underline'>Experience </span>the Future of Female Commerce<br /> with <span className='text-[#FF785A] underline'>Cnex</span></h1>
        <p className='text-[#B6B8B9]'>Order,Preorder,and Book-Your Ultimate Destination for Female Products and Services </p><br />
        <div className='flex gap-[19.84px]'>
       <img src="Apple.png" alt="" />
       <img src="Google.png" alt="" />
       </div></div>
        </SwiperSlide>
         <SwiperSlide> <div className='relative'><img src="Banner2.jpg" alt="" />
         </div>
        
          <div className='absolute top-[210px] left-[70px] max-w-2xl '>
        <h1 className='text-[52px] font-[500px] text-[#FFFFFF]'>Where <span className='text-[#FF785A] '>Fashion </span>meets Femininity </h1>
        <p className='text-[#B6B8B9]'>Celebrate the essence of womanhood in every styling detail. </p><br />
        <div className='flex gap-[19.84px]'>
       <img src="Apple.png" alt="" />
       <img src="Google.png" alt="" />
       </div></div></SwiperSlide>
       <SwiperSlide> <div className='relative'><img src="Banner3.png" alt="" />
         </div>
         
          <div className='absolute top-[210px] left-[70px] max-w-lg '>
        <h1 className='text-[52px] font-[500px] text-[#FFFFFF]'>Rediate <span className='text-[#FF785A] underline'>Confidence, </span>Rediate Style </h1>
        <p className='text-[#B6B8B9]'>Look and feel best in every moment with chic fashion pieces </p><br />
        <div className='flex gap-[19.84px]'>
       <img src="Apple.png" alt="" />
       <img src="Google.png" alt="" />
       </div></div></SwiperSlide>
       <SwiperSlide> <div className='relative'><img src="Banner4.jpg" alt="" />
         </div>
         
          <div className='absolute top-[210px] left-[70px] max-w-2xl '>
        <h1 className='text-[52px] font-[500px] text-[#FFFFFF]'><span className='text-[#FF785A] underline'>Fashion, </span>redefined. </h1>
        <p className='text-[#B6B8B9]'>Order, Preorder, and Book -Your Ultimate Destination for Female Products and Services </p><br />
        <div className='flex gap-[19.84px]'>
       <img src="Apple.png" alt="" />
       <img src="Google.png" alt="" />
       </div></div></SwiperSlide>
       
       {/* <div class="circle animate-spin absolute left-[-500px] bottom-[-1000px] z-10">
       <img  src="disk-image-rotate.png"/>
       </div>  */}
       
       <div className=' relative  bg-[#082D4A] p-4 w-11/12 h-[130px] mx-auto -mt-16 rounded-lg drop-shadow-2xl  flex justify-between items-center  text-[#FFFFFF]  z-10'>
        <div> 
       <p className='text-2xl font-bold text-center'>200+</p>
       <p>Clients Worldwide</p>
       </div>
     <div> <p className='text-2xl font-bold text-center'>100+</p>
      <p>Client Satisfaction</p></div>
      <div><p className='text-2xl font-bold text-center'>99k+</p>
      <p>Numbers Of sales</p>
</div>
<div>
<p className='text-2xl font-bold text-center'>24H</p>
<p>Team Support</p>
</div>
</div>

      </Swiper>
    </>
  );
}
