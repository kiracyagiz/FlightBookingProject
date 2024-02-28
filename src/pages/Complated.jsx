import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import ComplatedLeft from '../components/Complated/ComplatedLeft'
import ComplatedRight from '../components/Complated/ComplatedRight'
import Footer from '../components/Footer'

const Complated = () => {
  return (
    <div>
        <HomeNavbar/>
        
        <div className='md:flex justify-between m-8 p-8'>
            <div className='w-2/3'>
                <ComplatedLeft/>
                
            </div>
            <div className='w-1/3'>
                <ComplatedRight/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Complated