import React, { useState } from 'react'
import FlightInfoContent from './FlightInfoContent'
import SeatDifference from './SeatDifference'
import SecondSeatDifference from './SecondSeatDifference';
import { MainContext,useContext } from '../context';

const SeatSelector = () => {

  const{showSecond} = useContext(MainContext)


  return (
    <div className='md:w-2/4 md:fixed md:top-0 md:right-0'>
        
        <FlightInfoContent/>
        {!showSecond ? <SeatDifference/> : <SecondSeatDifference/>}

        </div>
  )
}

export default SeatSelector