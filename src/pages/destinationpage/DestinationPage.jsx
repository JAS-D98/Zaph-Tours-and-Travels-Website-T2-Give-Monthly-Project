import React from 'react'
import DestinationCard from '../../components/destinationcard/DestinationCard'
import Button from '../../components/button/Button'

export default function DestinationPage() {
  return (
    <div className='w-full min-h-[100vh]'>
      {/* Start of destination header section */}
      <div className='w-full h-[100vh] flex flex-col items-center justify-center px-5 lg:px-32'> 
        <p className='bg-gradient-to-r from-green to-blue-600 bg-clip-text text-transparent text-3xl lg:text-6xl font-bold text-center capitalize'>View Our Diverse Destinations and Grab a chance to visit any place at a discounted price just for you.</p> 
        <p className='text-center mt-4 text-xl fond-bold text-gray-500'>See a list of our top best tourist places to see in the world for a perfect holiday or a trip.Enjoy the best places with your friends family or relatives &amp; immerse yourself in best memories.</p>
        <Button title="Book Next Trip with us"/>
      </div>
      {/* End of destination header section */}
      
      {/*Start of Destination Card Gallery*/}
      <div className='flex flex-col items-center px-5 lh:px-0 justify-center lg:w-[90%] mx-auto'>
        <h1 className='text-xl text-center flex items-center gap-2'><div className='bg-green h-1 w-[6em] rounded'/> <span> Most Visited Areas </span> <div className='bg-green h-1 w-[6em] rounded'/></h1>

        <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-4 mt-8'>
          <DestinationCard/>
        </div>
      </div>
      {/*End of Destination Card Gallery*/}
    </div>
  )
}
