import React from 'react'
import appStore from '../../images/appStore.png'
import googlePlay from '../../images/googlePlay.png'
const GetTheApp = () => {
  return (
    <div className=" flex-col gap-y-8  mt-8 md:mt-0">
    <p className="text-gray-600 ">Get The App</p>
    <div className=" flex flex-col gap-y-4 mt-4 text-gray-400">
      <p>Tripma for Android</p>
      <p>Tripma for iOs</p>
      <p>Mobile Site</p>
      <div>
        <img src={appStore} alt=""  className='my-2'/>
        <img src={googlePlay} alt="" className='my-2' />
      </div>
    </div>
  </div>
  )
}

export default GetTheApp