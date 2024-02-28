import React from 'react'
import business from '../images/business.png'
import {BsCheckLg} from 'react-icons/bs'
import { MainContext,useContext } from '../context'


const BusinesSeats = () => {

  const {seatEconomy} = useContext(MainContext)

  return (
    <div className='w-1/2 ' >
        <div className="myImage p-5 items-center justify-center " >
        <img src={business} alt="" className="w-[180] h-[100px]" />
        </div>
        <div className="info ml-12">
     <div className='flex gap-x-4'>
     <h1 className="text-lg mb-2">Business Class</h1>
        <p className={`bg-green-400 flex justify-center items-center text-center rounded px-4 mb-2 text-sm text-white ${seatEconomy == false ? 'hidden' : 'block'}`}>Business</p>
     </div>

        <p className="text-gray-400 text-sm">Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service</p>
        <div className="border-t-4 border-green-400 opacity-80 w-16 my-2 mt-5"></div>
         <div className="mt-5">
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><BsCheckLg color="green"/>Extended leg room</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><BsCheckLg color="green"/>First two checked bags free</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><BsCheckLg color="green"/>Priority boarding</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><BsCheckLg color="green"/>Personalized service</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><BsCheckLg color="green"/>Enhanced food and drink service</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><BsCheckLg color="green"/>Seats that recline 40% more than economy</div>
         </div>
      </div>
    </div>
  )
}

export default BusinesSeats