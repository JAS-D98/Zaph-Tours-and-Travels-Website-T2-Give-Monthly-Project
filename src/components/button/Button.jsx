import React from 'react'

export default function Button({title, icon, marginTop, backgroundColor}) {
  return (
    <button className={`flex items-center justify-center px-4 py-3 max-w-[200px] shadow-md mt-${marginTop ? marginTop : `8`} text-white bg-${backgroundColor? backgroundColor : 'gradient-to-r from-green to-black'} gap-2 rounded-md capitalize hover:opacity-70`}>{title} {icon && <img src={icon} width={20} className='rotate-45 mt-1'/>}</button>
  )
}
