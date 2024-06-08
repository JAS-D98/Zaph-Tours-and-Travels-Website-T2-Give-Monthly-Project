import React from 'react'
import { direction } from '../../assets'

export default function ContactUsPage() {
  return (
    <div className='w-full min-h-[100vh]'>
    {/* Start of contacts header section */}
    <div className='w-full min-h-[100vh] flex flex-col items-center justify-center px-5 lg:px-32'> 
      <p className='bg-gradient-to-r from-green to-blue-600 bg-clip-text text-transparent text-3xl lg:text-6xl font-bold text-center capitalize'>How you can Reach out to us.</p> 
      <p className='text-center mt-4 text-xl fond-bold text-gray-500'>Feel free to call us or message us incase of any clarifications you may need.</p>
    </div>
    <img src={direction} alt="" />
    {/* End of contacts header section */}
    </div>
  )
}
