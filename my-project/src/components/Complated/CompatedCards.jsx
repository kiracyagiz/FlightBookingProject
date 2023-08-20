import React from 'react'
import ComplatedCard from './ComplatedCard'
import japan from '../../images/japan.png'
import japanBath from '../../images/japanBath.png'
import japanHotel from '../../images/japanHotel.png'
import japanSleep from '../../images/japanSleep.png'
import UniqueExperiences from './UniqueExperiences'


const CompatedCards = () => {
  return (
    <div>
        <ComplatedCard japan={japan}/>
        <ComplatedCard japan={japanBath}/>
        <ComplatedCard japan={japanHotel}/>
        <ComplatedCard japan={japanSleep}/>
        <div className='flex text-center justify-center items-center'>
        <button className='border border-primary text-primary px-3 py-2 rounded'>Shop All hotels</button>
        </div>
        <UniqueExperiences/>
    </div>
  )
}

export default CompatedCards