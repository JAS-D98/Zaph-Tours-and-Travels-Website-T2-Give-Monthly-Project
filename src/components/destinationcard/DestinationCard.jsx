import React from 'react'
import { MdGroups2, MdPerson } from "react-icons/md";
import { destinations } from '../../constants/Destinations';

export default function DestinationCard() {
  return (
    <>
    {destinations.map((destination,i)=>{
        return(
    <div className='w-full lg:w-[30%] h-[60vh] bg-gradient-to-r from-green to-teal pb-2 rounded-xl shadow-xl' key={i}>
        <div className='w-full h-[30vh] overflow-hidden object-cover rounded-t-xl'>
            <p className='absolute bg-slate-100 px-2 py-1 rounded-br-2xl font-semibold'>{destination.siteName}</p>
            <img src={destination.image} alt={destination.alt} width="100%" height="100%" className='w-full h-full'/>
        </div>
        <div className='px-2'>
            <p className='font-semibold'>{destination.description}. <a href="" className='text-white'>Read More...</a></p>
        </div>
        <div className='px-2 mt-2'>
            <p className='font-bold'>Trip Prices</p>
            <hr />
            <div className='flex flex-col items-left text-left justify-start gap-2'>
                <p className="flex items-center gap-2 font-semibold text-left"><MdGroups2 /> Group:- {destination.pricePerGroup}</p>
                <p className="flex items-center gap-2 font-semibold text-left"> <MdPerson /> Individual:- {destination.individualCost}</p>   
            </div>
        </div>
    </div>
        )
    })}
    </>
  )
}
