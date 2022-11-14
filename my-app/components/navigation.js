import React from 'react'
import Image from 'next/image'

import white from '../public/img/white.png'

const Navigation = () => {
  return (
    <nav className='navbar'> 
        <ul className="navul ">
            <Image src={white} alt='/' className='navlogo' />  
            <li><a className="navtext"> About me </a></li>
            <li><a className="navtext"> Featured </a></li> 
            <li><a className="navtext"> Portfolio </a></li>
            <li><a className="navtext"> Contact </a></li>
        </ul>
    </nav>
  )
}

export default Navigation
