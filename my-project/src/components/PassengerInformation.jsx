import React from 'react'
import PassengerForm from './PassengerForm'
import PassengerPayment from './PassengerPayment'

const PassengerInformation = () => {
  return (
    <div className='my-8 mx-12  md:mx-24 md:flex justify-between'>
        <PassengerForm/>
        <PassengerPayment/>
        
    </div>
  )
}

export default PassengerInformation