import React from 'react'

const EmergencyContact = () => {
  return (
    <div className=' my-4'>
        <p className='text-md text-gray-400'>Emergency Contact Information</p>
        <div className='flex gap-x-2 mt-4'>
        <input type="checkbox" />
        <label htmlFor="" className='text-gray-400'>Same as Passenger 1</label>
    </div>
    <form action="">
    <div className='flex flex-wrap gap-x-4 gap-y-4 mt-6'>
          <input type="text" placeholder='First Name*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          <input type="text" placeholder='Last Name*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          </div>
          <div className='flex flex-wrap gap-x-4 gap-y-4 mt-6'>
          <input type="text" placeholder='Email Address*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          <input type="text" placeholder='Phone Number*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          </div>
    </form>
    </div>
  )
}

export default EmergencyContact