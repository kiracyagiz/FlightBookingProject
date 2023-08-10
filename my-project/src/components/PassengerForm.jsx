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
 
        
    </div>
  )
}

export default PassengerForm