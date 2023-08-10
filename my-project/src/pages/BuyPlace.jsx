import React from 'react'
import Cards from '../components/Cards'
import SeatSelector from '../components/SeatSelector'

const BuyPlace = () => {
  return (
    <div className='flex'>
      <Cards/>
      <SeatSelector/>
    </div>
  )
}

export default BuyPlace