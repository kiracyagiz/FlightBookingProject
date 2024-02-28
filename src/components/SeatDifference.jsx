import React from 'react'
import EconomySeats from './EconomySeats'
import BusinesSeats from './BusinesSeats'
import ConfirmFlight from './ConfirmFlight'

const SeatDifference = () => {

  return (
    <div className=' bg-white bg-opacity-30 border  h-[100vh]'>
       <div className='flex'> 
       <EconomySeats/>
        <BusinesSeats/>
       </div>
       <ConfirmFlight />
    </div>
  )
}

export default SeatDifference