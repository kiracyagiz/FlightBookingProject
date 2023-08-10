import React from 'react'
import round from '../images/round.png'

const HomeNavbar = () => {
  return (
    <div className='m-2 p-2 flex justify-between '>
        <div className='m-2 justify-center items-center'>
            <img src={round} alt="" />
        </div>
        <div className=' hidden md:flex  items-center gap-x-9 m-2 p-2 text-center '>
          <p className='text-primary'>Flights</p>
          <p>Hotels</p>
          <p>Packages</p>
          <p>Sign in</p>
          <p className='bg-primary p-3 rounded text-white'>Sign up</p>
        </div>
        
    </div>
  )
}

export default HomeNavbar