import React from 'react'
import Image from 'next/image'

import white from '../public/img/white.png'

const Navigation = () => {
 
  const [show , setShow] = React.useState(false)
  
  const showDesc = () => setShow(!show);
  return (
    < >
      <nav className='navbar'> 
        <i onClick={showDesc} class="fa-solid fa-bars menubar"></i>
        <ul className="navul ">
            <Image src={white} alt='/' className='navlogo' />  
            <li><a className="navtext"> About me </a></li>
            <li><a className="navtext"> Featured </a></li> 
            <li><a className="navtext"> Portfolio </a></li>
            <li><a className="navtext"> Contact </a></li>
        </ul>
      </nav>
      {
        show?<ResNavigation closeNav={setShow} />:null
      }
 

    </>
  )
}


const ResNavigation = () =>{
  return(
    <section className='resnavigation'>
      <ul>
        <li>About me</li>
        <li>Featured</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </section>
  )
}


export default Navigation
