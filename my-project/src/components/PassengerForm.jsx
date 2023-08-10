import React, { useState } from 'react'
import EmergencyContact from './EmergencyContact'
import PassengerContactForm from './PassengerContactForm'
import BagInformation from './BagInformation'


const PassengerForm = () => {
  const [count,setCount] = useState(0);

  return (
    <div>
        <PassengerContactForm/>
        <EmergencyContact/>
        <BagInformation setCount = {setCount} count={count}/>
        <div className='flex gap-x-4 mt-12'>
          <button className='border-2 border-primary text-primary px-5 py-2 rounded hover:bg-purple-100'>Save and Close</button>
          <button className='border-2 border-gray-400 text-gray-400 bg-gray-200 px-5 py-2 rounded '>Select Seats</button>
        </div>
        
    </div>
  )
}

export default PassengerForm