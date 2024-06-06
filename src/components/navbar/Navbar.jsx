import React from 'react'
import navLinks from '../../constants/Navbar.js'
import { logo } from '../../assets/index.js'

export default function Navbar() {
  return (
    <div className='flex w-full px-5 py-1 justify-between items-center border-b-2'>
      <div className='flex items-center'>
        <div className='w-[4em] overflow-hidden object-cover'>
          <img src={logo} alt="image of logo icon" width="100%" height="100%"/>
        </div>
        <p className='text-xl font-bold'>Zaph<br/> <span className='text-green'>Tours</span></p>
      </div>
      <nav className='flex gap-7 items-center'>
         {navLinks.map((link) => (
           <p key={link.label} className='text-xl font-bold-400'>
                <Link to={link.href} className='hover:text-green'>{link.label}</Link>
            </p>
        ))}
      </nav>

      
    </div>
  )
}
