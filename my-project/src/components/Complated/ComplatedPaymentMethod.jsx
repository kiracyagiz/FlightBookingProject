import React from 'react'
import logo from '../../images/logo.png'

const ComplatedPaymentMethod = () => {
  return (
    <div className='mt-4'>
        <p>Payment Method</p>
        <div className=' w-[240px]  md:w-[300px] h-[188px] mt-2 bg-gradient-to-b rounded-xl from-pink-500 to-pink-600'>
            <div>
                <img className='p-4' src={logo} alt="" />
            </div>


            <div className='flex justify-between mt-12 text-white  p-4 '>

            <div>
                <p>Sophia Knowles</p>
                <p>••••••••••••3456</p>
            </div>

            <div>
                <p>10/23</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default ComplatedPaymentMethod