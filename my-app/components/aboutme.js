import React from 'react'
import Image from 'next/image'
import profile from '../public/img/profile.png'
 

const Introduction = () => {
    return(
    <section className='introcontainer introcontainertab'>
        <Image src={profile} alt='/' className='backgroundPhoto' />  
        <section className='introtextcont'>
            <h1 className=''>About me</h1>
            <hr className='aboutmehr  '/>
            <br/>
            <h2 className='introtexttab'>Hello, my name is Kyle Ash Ezequiel D. Macabanti. I'm a front-end web developer based in Pampanga.</h2>
            <br/>
        </section>  
    </section>

    )
}

const Aboutme = () => {
  return (
    <section className='sectioncontainer'>
        <Introduction/>  
    </section>
  )
}

export default Aboutme
