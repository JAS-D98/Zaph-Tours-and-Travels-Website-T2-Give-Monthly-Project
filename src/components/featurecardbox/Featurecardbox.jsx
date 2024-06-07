import React from 'react'

export default function Featurecardbox({image,alt,colspan, rowspan, height, place}) {
  return (
    <div className={`bg-slate-100 overflow-hidden object-cover col-span-${colspan} row-span-${rowspan} max-h-[${height}] flex justify-center`}>
        <p className='absolute font-semibold text-2xl bg-slate-100 px-2 py-1 rounded-br-2xl rounded-bl-2xl'>{place}</p>
        <div className='absolute w-[25%] h-12 text-center mt-[8%]'><p className='text-bold text-1.3xl font-semibold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, facere?</p></div>
        <img src={image} alt={alt} width="100%" height="100%" className='w-full h-full' />
    </div>
  )
}
