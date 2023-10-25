import React from 'react'
import logo from '../assets/Netflix_Logo_RGB.png'
const Header = () => {
  return (
    <div className='absolute px-5 py-2 bg-gradient-to-b from-black z-10 w-full'>
      <img src= {logo} className='w-44' alt='logo'></img>
    </div>
  )
}

export default Header