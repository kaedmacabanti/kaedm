import React from 'react'
import Image from 'next/image'
import profile from '../public/img/profile.png'
import wd from '../public/img/wd.png'
import uiux from '../public/img/uiux.png'
import seo from '../public/img/seo.png'



const Skill = (props) => {
  return (
    <div className='icondesc'>                 
      <span>  <h3>{props.skillname} </h3> {props.skilldesc} </span>
      <span>  <h3>{props.tools} </h3> {props.toolname} </span>
      <span className='hexagon'>
        <div className='diva'></div>
        <div className='divb'></div>
        <div className='divc'></div>
        <Image src={props.img} alt='/' className='skillicon' /> 
      </span>   
  </div>
  )
}



const Services = () => {
  const skill1 = {
    img: wd, name: "Front-end Development", desc:"I like to code things from scratch, and enjoy bringing ideas to life in the browser.", tools:"I Can Work With", toolname: "HTML, CSS, Javascript, React, Next, Node, Bootstrap, Tailwind"
  }
  const skill2 = {
    img: uiux, name: "UI and UX Design", desc:"I value simple content structure, clean design patterns, and thoughtful interactions.", tools:"Design Tools I Use", toolname: "Balsamiq, Figma, Photoshop"
  }
  return (
    <div className='aboutmecontainer'>
            <div class="skillInfo  ">
                    <Skill img={skill1.img} skillname={skill1.name} skilldesc={skill1.desc} tools={skill1.tools} toolname={skill1.toolname}/> 
                    <Skill img={skill2.img} skillname={skill2.name} skilldesc={skill2.desc} tools={skill2.tools} toolname={skill2.toolname}/>  
            </div>
    </div>
  )
}


const AboutMe = () => {
    return(
    <section className='introcontainer'>
        <Image src={profile} alt='/' className='backgroundPhoto' />  
        <section className='mycontentintroduction'>
            <h1 className='textintro'>About me</h1>
            <br/>
            <h2 className=''>Hello, my name is Kyle Ash Ezequiel D. Macabanti. A front-end web developer.</h2>
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
