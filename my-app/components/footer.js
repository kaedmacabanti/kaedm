import React from 'react'
import li from '../public/img/linkedin.png'
import logo from '../public/img/white.png'
import Image from 'next/image'


const Footer = () => {
  return (
    <section className='footer'>
      <div>
        <Image src={logo} alt='/' className='navlogo' />
        <p>Resume</p>
      </div> 
      <div>
        <Image src={li} alt='/' className='navlogo' />
        <p>LinkedIn</p>
      </div> 
    </section>
  )
}

export default Footer
