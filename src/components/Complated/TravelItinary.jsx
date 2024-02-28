import React from 'react'

const TravelItinerary = () => {
  return (
    <div className='flex flex-col gap-y-4 mt-6'>
        <h1 className='text-gray-500 text-xl text-bold'>Share your travel itinerary</h1>
        <p className='text-gray-400'>You can email your itinerary to anyone by entering their email address here.</p>

        <div className='flex flex-col gap-y-4'>
            <input type="mail"placeholder='Email Address' className='outline-none md:w-[350px] px-2 rounded py-1 border border-gray-400'  />
            <input type="mail"placeholder='Email Address' className='outline-none md:w-[350px] px-2 rounded py-1 border border-gray-400'  />
            <input type="mail"placeholder='Email Address' className='outline-none md:w-[350px] px-2 rounded py-1 border border-gray-400'  />
        </div>
        <div className='flex gap-x-8'>
            <button className='bg-primary text-white px-4 py-2 rounded'>Email itinerary</button>
            <button className='text-primary'>Add another</button>
        </div>
    </div>
  )
}

export default TravelItinerary