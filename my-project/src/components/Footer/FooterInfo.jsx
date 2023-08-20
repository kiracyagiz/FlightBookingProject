import React from 'react'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillFacebook} from 'react-icons/ai'

const FooterInfo = () => {
  return (
    <div className='mt-14 flex border-t-2 border-gray-400 p-6 justify-between items-center'>
        <div className='flex gap-x-4 md:ml-12 '>
            <AiOutlineTwitter size={26} color='gray'/>
            <AiOutlineInstagram size={26} color='gray'/>
            <AiFillFacebook size={26} color='gray'/>
        </div>

        <div>
            <p className='text-gray-400'>© 2020 Tripma incorporated</p>
        </div>
    </div>
  )
}

export default FooterInfo