import React from 'react'

function Content() {
  return (
    <div className='text-center'>
      <h className="text-6xl">Our <span className='text-[#FF785A]'>Story </span></h>
      <div className='flex gap-[40px] p-14'>
      <img src="Contentimg.png" alt="" />
      <p className='text-[18px] text-xl text-justify '>At the beginning, it was just the two of them, working out of a small office space.They were determined to provide personalized service to their clients and build lasting relationships. 
        They worked tirelessly, often working long hours and weekends to ensure that their clients' needs were met. <br /><br />
        Their hard work paid off, and soon their business began to grow. 
        They hired additional staff members and expanded their service offerings to include property management and real estate investments. <br />    
        Over the years, their business has continued to grow, and they have helped countless clients buy, sell, and manage their real estate investments.
        Today, their business is a respected name in the real estate industry, known for its exceptional service and commitment to its clients. <br />
        As they look to the future, John and Jane remain dedicated to their clients and to providing the best possible service in the real estate industry.
        They are excited to continue to grow and evolve their business, and to help even more clients achieve their real estate goals. <br /> 
        <button className='px-[24px] py-[13px] bg-[#082D4A] text-[#FFFFFF] rounded-md'>Get in touch</button></p>
        
    </div>
    
    
    </div>
  )
}

export default Content
