import React from 'react'
import FlightInfoContent from './FlightInfoContent'
import SeatDifference from './SeatDifference'

const SeatSelector = () => {
  return (
    <div className=' w-2/4 fixed  top-0 right-0'>
        
        <FlightInfoContent/>
        <SeatDifference/>
        </div>
  )
}

export default SeatSelector