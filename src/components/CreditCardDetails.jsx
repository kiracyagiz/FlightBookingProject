import React from 'react'
import { useReducer } from 'react'

const initalState = {
  name: '',
  cardNumber: '',
  expirationDate: '',
  ccv: '',
  emailorphone: '',
  password: ''
}

const reducer = (state,action) => {
  switch(action.type) {
    case 'setName':
      return {...state,name: action.payload};
    case 'setCardNumber':
      return {...state,cardNumber: action.payload};
    case 'setExpirationDate':
      return {...state,expirationDate: action.payload};
    case 'setCcv':
      return{...state,ccv: action.payload};
    case 'setEmailOrPhone':
      return {...state,emailorphone: action.payload};
    case 'setPassword':
      return{...state,password: action.payload};
    
      default:
        return state
  }
}

const CreditCardDetails = ({setIsFilled}) => {
  const [state,dispatch] = useReducer(reducer,initalState)


  const trueOrFalse = state.name && state.cardNumber && state.expirationDate && state.ccv && state.emailorphone && state.password
  if (trueOrFalse) {
    setIsFilled(true)
  }
  else{
    setIsFilled(false)
  }
  
  return (
    <div className='mt-8'>
        <p className='text-gray-600'>Credit Card Details</p>
        <div className='flex gap-x-2 mt-2'>
        <input type="checkbox" />
        <label className=' text-xs md:text-sm text-gray-400'>Billing address is same is as Passenger 1</label>
        </div>

        <div className='mt-4 '>
            <input onChange={(e) => dispatch({type: 'setName',payload: e.target.value})} type="text" placeholder='Name on Card'  className=' outline-none border border-gray-400  md:w-[400px] p-2 rounded-md' />
        </div>
        
        <div className='mt-4 '>
            <input type="text" onChange={(e) => dispatch({type: 'setCardNumber',payload: e.target.value})} placeholder='Card Number'  className=' outline-none border border-gray-400  md:w-[400px] p-2 rounded-md' />
        </div>
        
        <div className='mt-4  gap-y-4 gap-x-4 md:flex'>
            <input onChange={(e) => dispatch({type: 'setExpirationDate',payload: e.target.value})} type="text" placeholder='Expiration date'  className=' outline-none border border-gray-400  md:w-[192px] p-2 rounded-md mt-4' />
            <input onChange={(e) => dispatch({type: 'setCcv',payload: e.target.value})} type="text" placeholder='CCV'  className=' outline-none border border-gray-400  md:w-[192px] p-2 rounded-md mt-4' />
        </div>
        <div className="mt-8 mb-8">
      <p className="text-gray-600">Create Account </p>
      <p className="text-xs text-gray-400 md:text-sm md:max-w-lg mt-4 mb-4">
        Tripma is free to use as a guest, but if you create an account today,
        you can save and view flights, manage your trips, earn rewards, and
        more.
      </p>
      <div className="flex gap-x-2 mt-4">
        <input type="checkbox" />
        <label className=" text-xs md:text-sm text-gray-400">
          Save card and create account for later
        </label>
      </div>

      <div className="mt-4 ">
        <input
        onChange={(e) => dispatch({type: 'setEmailOrPhone',payload: e.target.value})}
          type="text"
          placeholder="Email"
          className=" outline-none border border-gray-400  md:w-[400px] p-2 rounded-md"
        />
      </div>
      <div className="mt-4 mb-4">
        <input
          type="text"
          onChange={(e) => dispatch({type: 'setPassword',payload: e.target.value})}
          placeholder="Password"
          className=" outline-none border border-gray-400  md:w-[400px] p-2 rounded-md"
        />
      </div>
      <div className="flex items-center mt-4">
        <div className="w-[76px] md:w-[176px] h-0.5 bg-gray-200 mr-4"></div>
        <p className="text-center text-gray-400 flex items-center justify-center ">or</p>
        <div className="w-[76px] md:w-[176px] h-0.5 bg-gray-200 ml-4"></div>
      </div>
    </div>
        
    </div>
  )
}

export default CreditCardDetails