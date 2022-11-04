import React from 'react'
import Image from 'next/image'
import profile from '../public/img/profile.png'
import wd from '../public/img/wd.png'
import uiux from '../public/img/uiux.png'
import seo from '../public/img/seo.png'


const Services = () => {
  return (
    <div className='aboutmecontainer'>
      <hr></hr>
        
 
            <div class="skillInfo templateCollumn">
                    <div className='icondesc'>                 
                      <section className='hexagon'>
                        <div className='diva'></div>
                        <div className='divb'></div>
                        <div className='divc'></div>
                        <Image src={wd} alt='/' className='skillicon' /> 
                      </section>   
                      <br/>
                        <h3>Front-end Development</h3> Can create frontend websites using
                        HTML, CSS, Javascript. I can work with React, Next, Tailwind, 
                        
                    </div>
                    <div className='icondesc'>
                      <section className='hexagon'>
                        <div className='diva'></div>
                        <div className='divb'></div>
                        <div className='divc'></div>
                        <Image src={uiux} alt='/' className='skillicon' /> 
                      </section> 
                      <br/>  
                        <h3>UI and UX Design</h3> Design web applications that will engage 
                        users and deliver great user experience
                    </div>
                    <div className='icondesc'>
                      <section className='hexagon'>
                        <div className='diva'></div>
                        <div className='divb'></div>
                        <div className='divc'></div>
                        <Image src={seo} alt='/' className='skillicon' /> 
                      </section>
                      <br/>   
                        <h3>Sarch Engine Optimization</h3> Optimize website in order to 
                        garner more users and become more visible to search engine bots
                    </div>
                </div>
      
    </div>
  )
}


const AboutMe = () => {
    return(
    <section className='introcontainer'>

        <Image src={profile} alt='/' className='backgroundPhoto' />  
   
        <section className='mycontentintroduction'>
            {/* <h3>Front-End Web Developer</h3> */}
            <h1 className='textintro'>About me</h1>
            <br/>
            <h2 className='textintro'>Hello, my name is Kyle Ash Ezequiel D. Macabanti. A front-end web developer.</h2>
            <br/>
  
        </section> 
        <hr></hr>
       
    </section>

    )
}

const KaedHome = () => {
  return (
    <section className='homecontainer'>
        <AboutMe/> 
        <Services/>
    </section>
  )
}

export default KaedHome
