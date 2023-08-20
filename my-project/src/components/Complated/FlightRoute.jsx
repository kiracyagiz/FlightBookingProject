import React from 'react'
import Map from '../../images/Map.png'

const FlightRoute = () => {
  return (
    <div className='flex flex-col gap-y-6 mt-8'>
        <h1 className='text-xl'>Flight Route</h1>
        <div>
            <img src={Map} alt="" />
        </div>
    </div>
  )
}

export default FlightRoute