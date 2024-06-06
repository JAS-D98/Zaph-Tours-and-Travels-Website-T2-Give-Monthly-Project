import React from 'react'
import {hero, arrow } from '../../assets/index.js'
import Button from '../../components/button/Button.jsx'

export default function LandingPage() {
  return (
    <>
    {/* Start of Hero Section */}
    <div className='flex items-center px-5 w-full min-h-[100vh]'>
      <div className='w-1/2 h-full flex flex-col gap-4'>
        <div>
          <p className='text-green'>Best Safaris and Adventures</p>
          <h1 className='text-[3em] font-bold capitalize'>It's fun out there, <span className='text-green'>let's go explore</span>. Discover New Places<span className='text-green'> With us</span>.</h1>
          <p className='text-xl'>Grab an opportunity to immerse yourself in new cultures. Embark on an unforgettable journey.</p>
        </div>
        <Button title="Start Exploring" icon={arrow} marginTop="8"/>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center'>
          <img src={hero} alt="image of a lady with a bag"/>
      </div>
    </div>
    {/* End of Hero Section */}

    
    </>
  )
}