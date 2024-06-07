import React from 'react'
import { testimonials } from '../../constants/Testimonials'

export default function Testimonialcard() {
  return (
    <>
    {testimonials.map((testimonial)=>{
      return(
        <div className='w-[20em] min-h-[10em] bg-green rounded-xl overflow-hidden shadow-xl'>
        <div className='w-full max-h-[30vh] overflow-hidden flex flex-col justify-end'>
          <img src={testimonial.touristSiteImg} alt={testimonial.touristAlt} />
          <p className='absolute -mt-10 text-xl bg-slate-100 rounded-tr-2xl px-2'>{testimonial.touristSite}</p>
        </div>
        <div className='flex flex-col py-2 px-5'>
          <div className='flex items-end gap-4'>
            <div className='w-[3em] h-[3em] overflow-hidden rounded-full object-cover'>
            <img src={testimonial.testimonialImg} alt={testimonial.testimonialAlt} width="100%" height="100%"/>
            </div>
            <h1 className='text-xl font-semibold'>{testimonial.testimonialName}</h1>
          </div>
          <p className='text-white mt-4'>{testimonial.TestimonialText}</p>
        </div>
        </div>
      )
    })}
    </>
  )
}