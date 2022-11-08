import React from 'react'
import Image from 'next/image'

import white from '../public/img/white.png'

const Navigation = () => {
  return (
    <nav className='navbar'>
        <i className="menuIcon material-icons">menu</i>
        <ul className="navul format bgcolor">
            
            <Image src={white} alt='/' className='navlogo' />  
            <li><a className="aboutMe navtext"> About me </a></li>
            <li><a className="resume navtext"> Featured </a></li> 
            <li><a className="codingChallenges navtext"> Portfolio </a></li>
            <li><a className="contact navtext"> Contact </a></li>
        </ul>
    </nav>
  )
}

export default Navigation
