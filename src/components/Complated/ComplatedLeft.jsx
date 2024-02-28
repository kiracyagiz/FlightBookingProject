import React, { useState } from 'react'
import ConfirmationInformation from './ConfirmationInformation'
import FlightSummary from './FlightSummary'
import PriceBreakdown from './PriceBreakdown'
import ComplatedPaymentMethod from './ComplatedPaymentMethod'
import TravelItinerary from './TravelItinary'
import FlightRoute from './FlightRoute'

const ComplatedLeft = () => {
  const [modal,setModal] = useState(true)
  return (
    <div>
        <p className={`${modal ? 'block' : 'hidden'} bg-green-100 border border-green-500 text-green-500 rounded max-w-[300px] md:max-w-2xl text-center py-3`}>Your flight has been booked successfully! Your confirmation number is #381029404387
          <span className='text-center ml-4 py-4 cursor-pointer' onClick={() => setModal(false)}>x</span> </p>
        <ConfirmationInformation/>
        <FlightSummary/>
        <PriceBreakdown />
        <ComplatedPaymentMethod/>
        <TravelItinerary/>
        <FlightRoute/>

    </div>
  )
}

export default ComplatedLeft