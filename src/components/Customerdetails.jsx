import React from 'react'

export default function Customerdetails() {
  return (
    <>
    <div className='space-y-5 text-center'>
      <p className='text-[#FF785A] font-medium text-lg'>-Reach Out to us</p>
      
      <h1 className='font-medium text-6xl'><span className='text-[#FF785A] underline'>Connect </span>with Us</h1>
      <p className='text-[#B3B3B3]'>Fill out the form, and we'll get back to you as soon as possible."</p>
      </div>
      <form class="row g-3 p-16">
  <div class="col-md-6">
    <label for="name" class="form-label">Name</label>
    <input type="name" placeholder="Jitendra"class="form-control" id="name"/>
  </div>
   

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" placeholder='email@smaple.com' class="form-control" id="inputEmail4"/>
  </div>
  
  <div class="col-md-6">
  <label for="phone">Enter a phone number:</label>
  <input type="tel" class="form-control"  name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
  </div>
  <div class="col-md-6 ">
  <label for="txt" class="form-label">Subject</label>
    <input type="text" placeholder='Service Name' class="form-control" id="txt"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" placeholder="Kindly explain your needed service you are interested in..."id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div class="col-12">
    <button type="submit" className='bg-[#082D4A] text-white py-[13px] px-[24px] rounded-md'>Get in Touch</button>
  </div>
</form>

    </>
  )
}
