import React from 'react'
import Image from 'next/image'
import profile from '../public/img/profile.png'


const MyImage = () => {
    return(
    <section className='container1'>
        <Image src={profile} alt='/' className='backgroundPhoto' />
    </section>
    )
}

const Services = () => {
  return (
    <div className='mycontent'>
            <h3>What I do</h3>
            <h2>Services</h2>
            <div class="skillInfo templateCollumn">
                    <div>
                        <div></div>
                        <h3>Web Development</h3> Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in </div>
                    <div>
                        <div></div>
                        <h3>UI/UX</h3> Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in</div>
                    <div>
                        <div></div>
                        <h3>Graphic Design</h3>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in</div>
                    <div>
                        <div></div>
                        <h3>Search Engine Optimization</h3>Lorem ipsum dolor
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in</div>
                </div>
      
    </div>
  )
}


const AboutMe = () => {
    return(
    <section className='container2'>

        <Image src={profile} alt='/' className='backgroundPhoto' />  
   
        <section className='mycontentintroduction'>
            {/* <h3>Front-End Web Developer</h3> */}
            <h2>Hi, I'm Kyle Ash Ezequiel D. Macabanti a front-end developer.</h2>
       
        </section>
        <br/>
        <br/>
    </section>

    )
}



const KaedHome = () => {
  return (
    <section className='maincontainer'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>About me</h1>
        <AboutMe/>
        <Services/>
    </section>
  )
}

export default KaedHome
