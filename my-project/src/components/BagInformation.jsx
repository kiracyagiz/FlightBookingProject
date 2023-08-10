import React, { useState } from 'react'

const BagInformation = ({setCount,count}) => {

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <div className='max-w-lg mt-8 mb-8'>
            <h1 className='text-lg mb-2 text-gray-600'>Bag Information</h1>
            <p className='text-sm mt-2 text-gray-500'>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the <span className='text-primary'>full bag policy</span>.</p>
        </div>

        <div className='flex gap-x-24 mt-4'>
            <p>Passenger 1</p>
            <p>Checked Bags</p>
        </div>
        <div className='flex gap-x-28 mt-2'>
            <p className='text-md'>First Last</p>
            <div className='flex gap-x-6'>
                <button className=' px-2 bg-gray-200 rounded-lg  text-primary' onClick={decrement} >-</button>
                <p className='text-center flex justify-center ' >{count}</p>
                <button className=' bg-gray-200 rounded-md px-2 text-primary' onClick={increment}>+</button>
            </div>
        </div>
        <div className='flex gap-x-4 mt-12'>
          <button className='border-2 border-primary text-primary px-5 py-2 rounded hover:bg-purple-100' type='submit'>Save and Close</button>
          <button className='border-2 border-gray-400 text-gray-400 bg-gray-200 px-5 py-2 rounded '>Select Seats</button>
        </div>
    </div>
  )
}

export default BagInformation