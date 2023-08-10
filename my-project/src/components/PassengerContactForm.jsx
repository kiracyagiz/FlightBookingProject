import React from 'react'

const PassengerContactForm = () => {
  return (
    <div>
                <div className='text-left max-w-sm md:max-w-lg'>
            <h1 className='text-primary text-xl mb-2'>Passenger information</h1>
            <p className='text-xs md:text-sm text-gray-400'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
        </div>

        <div className='mt-3 text-gray-400'>
          Passenger 1 Adult
        </div>

        <form action="" className='mt-5'>

          <div className='flex flex-wrap gap-x-4 gap-y-4'>
          <input type="text" placeholder='FirstName*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          <input type="text" placeholder='Middle' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          <input type="text" placeholder='LastName*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          </div>

          <div className='flex flex-wrap gap-x-4 gap-y-4 mt-4 '>
          <input type="text" placeholder='Suffix*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded ' />
          <input type="text" placeholder='Date of birth*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          </div>

          <div className='flex flex-wrap gap-x-4 gap-y-4 mt-6'>
          <input type="text" placeholder='Email Address*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          <input type="text" placeholder='Phone number*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          </div>
          <div className='flex flex-wrap gap-x-4 gap-y-4 mt-6'>
          <input type="text" placeholder='Redress Number*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          <input type="text" placeholder='Known Traveller Number*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' />
          </div>
        </form>
    </div>
  )
}

export default PassengerContactForm