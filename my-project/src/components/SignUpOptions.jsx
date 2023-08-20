import React from 'react'
import{FcGoogle} from 'react-icons/fc'
import {AiFillApple,AiFillFacebook} from 'react-icons/ai'

const SignUpOptions = () => {
  return (
    <div className='w-[200px] md:w-[400px]'>
        {[
            {option: 'Sign Up with Google' ,icon: <FcGoogle/>},
            {option: 'Sign Up with Apple' , icon: <AiFillApple/>},
            {option: 'Sign Up with Facebook', icon: <AiFillFacebook/>}
        ].map(({option,icon}) =>(
            <div className='flex gap-x-8 items-center border-2 rounded text-sm md:text-md text-primary border-primary mt-4 md:p-2'>
                <div className='ml-4'>{icon}</div>
                <div className='ml-8'>{option}</div>
            </div>
        ))
        }
    </div>
  )
}

export default SignUpOptions