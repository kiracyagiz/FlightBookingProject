import React from 'react'
import EconomySeats from './EconomySeats'
import BusinesSeats from './BusinesSeats'
import ConfirmFlightSecond from './ConfirmFlightSecond'

const SecondSeatDifference = () => {
  return (
    <div className=' bg-white bg-opacity-30 border  h-[100vh]'>
       <div className='flex'> 
       <EconomySeats/>
        <BusinesSeats/>
       </div>
       <ConfirmFlightSecond/>
    </div>
  )
}

export default SecondSeatDifference