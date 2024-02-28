import React from 'react'
import About from './Footer/About'
import Partner from './Footer/Partner'
import Support from './Footer/Support'
import GetTheApp from './Footer/GetTheApp'
import Logo from './Footer/Logo'
import FooterInfo from './Footer/FooterInfo'

const Footer = () => {
  return (
    <div >
        <div className='mt-40  flex flex-col justify-center  md:flex md:flex-row md:justify-between md:items-start m-8 p-8'> 
        <Logo/>
        <About/>
        <Partner/>
        <Support/>
        <GetTheApp/>
        </div>
        <div >
        <FooterInfo/>
        </div>

    </div>
  )
}

export default Footer