import React, { useRef, useState } from 'react'
import { useReducer } from 'react';
import { useNavigate } from 'react-router';



const initalState = {
  name: '',
  lastName : '',
  birthday: '',
  email: '',
  phoneNumber: '',
  travelerNumber: '',
  emergencyName: '',
  emergencyLastName: '',
  emergencyMail: '',
  emergencyPhoneNumber: '',

}

const reducer = (state,action) => {
  switch(action.type) {
    case 'setName':
      return {...state,name: action.payload};
    case 'setLastName':
      return {...state,lastName: action.payload};
    case 'setBirthday':
      return {...state,birthday: action.payload};
    case 'setEmail':
      return{...state,email: action.payload};
    case 'setPhoneNumber':
      return {...state,phoneNumber: action.payload};
    case 'setTravelerNumber':
      return{...state,travelerNumber: action.payload};
    case 'setEmergencyName':
      return{...state,emergencyName: action.payload};
    case 'setEmergencyLastName':
      return{...state,emergencyLastName: action.payload};
    case 'setEmergencyMail':
      return{...state,emergencyMail: action.payload};
    case 'setEmergencyPhoneNumber':
      return {...state,emergencyPhoneNumber: action.payload};
    
      default:
        return state
  }
}


const PassengerForm = () => {
  const [count,setCount] = useState(0);
  const [state,dispatch] = useReducer(reducer,initalState)

  console.log(state.name)
  const navigate = useNavigate();

  const isFilled = state.name && state.lastName && state.birthday && state.email && state.phoneNumber && state.travelerNumber && state.emergencyName && state.emergencyLastName && state.emergencyMail && state.emergencyPhoneNumber;


  const decrement = () => {
    setCount(count - 1)
}

const increment = () => {
    setCount(count + 1)
}

  return (
    <div>

       <div className="text-left max-w-sm md:max-w-lg">
        <h1 className="text-primary text-xl mb-2">Passenger information</h1>
        <p className="text-xs md:text-sm text-gray-400">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
      </div>

      <div className="mt-3 text-gray-400">Passenger 1 Adult</div>

      <form action="" className="mt-5">
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          <input
            type="text"
            placeholder="FirstName*"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
            onChange={(e) => dispatch({type: 'setName',payload: e.target.value})}
          />
          <input
            type="text"
            placeholder="Middle"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
          />
          <input
            type="text"
            placeholder="LastName*"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
            onChange={(e) => dispatch({type: 'setLastName',payload: e.target.value})}
          />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-4 ">
          <input
            type="text"
            placeholder="Suffix"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded "
          />
          <input
            type="text"
            placeholder="Date of birth*"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
            onChange={(e) => dispatch({type: 'setBirthday',payload: e.target.value})}
          />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          <input
            type="text"
            placeholder="Email Address*"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
            onChange={(e) => dispatch({type: 'setEmail',payload: e.target.value})}
          />
          <input
            type="text"
            placeholder="Phone number*"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
            onChange={(e) => dispatch({type: 'setPhoneNumber',payload: e.target.value})}
          />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          <input
            type="text"
            placeholder="Redress Number"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
          />
          <input
            type="text"
            placeholder="Known Traveller Number*"
            className=" p-2 border-2 border-gray-300 focus: outline-none rounded"
            onChange={(e) => dispatch({type: 'setTravelerNumber',payload: e.target.value})}
          />
        </div>
      </form>
      <p className='text-md text-gray-400'>Emergency Contact Information</p>
        <div className='flex gap-x-2 mt-4'>
        <input type="checkbox" />
        <label htmlFor="" className='text-gray-400'>Same as Passenger 1</label>
         </div>
    <form action="">
    <div className='flex flex-wrap gap-x-4 gap-y-4 mt-6'>
          <input type="text" placeholder='First Name*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded'
            onChange={(e) => dispatch({type: 'setEmergencyName',payload: e.target.value})}
            />
          <input type="text" placeholder='Last Name*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded'
            onChange={(e) => dispatch({type: 'setEmergencyLastName',payload: e.target.value})}
            />
          </div>
          <div className='flex flex-wrap gap-x-4 gap-y-4 mt-6'>
          <input type="text" placeholder='Email Address*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded'
            onChange={(e) => dispatch({type: 'setEmergencyMail',payload: e.target.value})}
            />
          <input type="text" placeholder='Phone Number*' className=' p-2 border-2 border-gray-300 focus: outline-none rounded' 
          
          onChange={(e) => dispatch({type: 'setEmergencyPhoneNumber',payload: e.target.value})}
          />
          </div>
    </form>
    <div className='max-w-lg mt-8 mb-8'>
            <h1 className='text-lg mb-2 text-gray-600'>Bag Information</h1>
            <p className='text-sm mt-2 text-gray-500'>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the <span className='text-primary'>full bag policy</span>.</p>
        </div>

        <div className='flex gap-x-24 mt-4'>
            <p>Passenger 1</p>
            <p>Checked Bags</p>
        </div>
        <div className='flex gap-x-28 mt-2'>
            <p className='text-md'>First Last</p>
            <div className='flex gap-x-6'>
                <button className=' px-2 bg-gray-200 rounded-lg  text-primary' onClick={decrement}  ></button>
                <p className='text-center flex justify-center ' >{count}</p>
                <button className=' bg-gray-200 rounded-md px-2 text-primary' onClick={increment}>+</button>
            </div>
        </div>
        <div className='flex gap-x-4 mt-12'>
          <button className={`border-2 ${isFilled ? "border-primary bg-white text-primary": "border-gray-400 text-gray-400"} bg-gray-200 px-5 py-2 rounded  ` } type='submit' disabled={!isFilled} >Save and Close</button>
          <button className={`border-2 ${isFilled ? "text-white bg-primary" : "border-2 border-gray-400 text-gray-400 bg-gray-200"} px-5 py-2 rounded`} type='submit' disabled={!isFilled} onClick={() =>navigate('/buy')}>Select Seats</button>
        </div>
 
        
    </div>
  )
}

export default PassengerForm