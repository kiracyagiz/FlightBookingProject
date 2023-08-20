import React from 'react'
import ComplatedCard from './ComplatedCard'
import japanKimono from '../../images/japanKimono.png'
import japanClub from '../../images/japanClub.png'

const UniqueExperiences = () => {
  return (
    <div className='mt-8'>

        <div className='flex flex-col gap-y-4 '>
        <h1 className='text-lg text-bold text-gray-600'>Find unique <span className='text-primary'>experiences</span></h1>
        <p className='text-gray-400'>Find events and authentic cultrual experiences available exclusively to Tripma users.</p>
        </div>
        <ComplatedCard japan={japanKimono}/>
        <ComplatedCard japan={japanClub}/>
        <div className='flex text-center justify-center items-center'>
        <button className='border border-primary text-primary px-3 py-2 rounded'>View all experiences</button>
        </div>
    </div>
  )
}

export default UniqueExperiences