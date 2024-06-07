import React from 'react'
import {hero, arrow, people, world1, world2, cameraLady, nature1, nature2 } from '../../assets/index.js'
import Button from '../../components/button/Button.jsx'

export default function LandingPage() {
  return (
    <>
    {/* Start of Hero Section */}
    <div className='flex items-center flex-col-reverse px-5 lg:px-24 w-full min-h-[100vh] lg:flex-row'>
      <div className='w-full text-center items-center lg:items-start lg:w-1/2 lg:text-start h-full flex flex-col gap-4'>
        <div>
          <p className='text-green'>Best Safaris and Adventures</p>
          <h1 className=' text-[2em] lg:text-[3em] font-bold capitalize'>It's fun out there, <span className='text-green'>let's go explore</span>. Discover New Places<span className='text-green'> With us</span>.</h1>
          <p className=' text-md lg:text-xl'>Grab an opportunity to immerse yourself in new cultures. Embark on an unforgettable journey.</p>
        </div>
        <img src={people} alt="image of tourists" className='w-[25%]'/>
        <p className='font-semibold capitalize'>Join Over 1.6K+ Tourists every Month</p>
        <Button title="Start Exploring" icon={arrow}/>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center'>
          <img src={hero} alt="image of a lady with a bag"/>
      </div>
    </div>
    {/* End of Hero Section */}

    {/* Start of about Us Section */}
    <div className='flex flex-col items-center justify-center px-10 mt-[5%] lg:mt-0 lg:w-[90%] mx-auto'>
      <h1 className='text-xl text-center flex items-center gap-2'><div className='bg-green h-1 w-[6em]'/> <span> About Us </span> <div className='bg-green h-1 w-[6em]'/></h1>
      <div className='flex flex-col justify-between mt-10 md:flex-row items-center lg:items-start gap-3 lg:gap-0'>
        <div className='w-full lg:w-[40%]'>
          <h1 className='text-green capitalize text-md'>Read Our Amazing Story</h1>
          <p className='leading-1 text-xl mt-6'>We are more than just a travel company; We are your gateway to extarordinary experiences and adventures. With a passion for exploration, our dedicated team curates journeys that redefine adventure and capture the essence of each destination. Our mission is to create memories that lingeer long after you've returned home. We offer meticulously planned itineraries, personalized services, and a commitment to responsible travel.</p>
        </div>
        <div className='w-full lg:w-[50%] min-h-[60vh] grid grid-cols-3 gap-2 place-content-center'>
          {/* <div className='bg-black lg:col-span-2 rounded-xl h-[10em] overflow-hidden object-cover'>
            <img src={cameraLady} alt="" width="100%" height="100%" className='w-full h-full'/>
          </div> */}
          <div className='bg-red-400 row-span-1 rounded-xl h-[10em] overflow-hidden col-span-2 lg:col-span-1'>
          <img src={world1} alt="" width="100%" height="100%" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 rounded-xl h-[8em] overflow-hidden'>
          <img src={world2} alt="" width="100%" height="100%" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 col-span-3 lg:col-span-2 lg:row-span-2 h-[10em] overflow-hidden rounded-xl object-cover'>
          <img src={nature2} alt="" width="100%" height="100%" className='w-full h-full'/>
          </div>
        </div>
      </div>
    </div>
    {/* End of about Us Section */}
    
    </>
  )
}