import React from 'react'
import PaymentOption from './PaymentOption'

const PaymentMethod = () => {
  return (
    <div className='flex w-2/3 '>
        <div>
            <h1 className='text-xl mb-2 text-primary'>Paymnet Method</h1>
            <p className='text-xs md:text-sm md:max-w-lg'>Select a payment method below. Tripma processes your payment securely with end-to-end encryption.</p>
            <PaymentOption />
        </div>
        
    </div>
  )
}

export default PaymentMethod