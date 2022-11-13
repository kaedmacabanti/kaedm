import React from 'react'
import Image from 'next/image'
import profile from '../public/img/profile.png'
import wd from '../public/img/wd.png'
import uiux from '../public/img/uiux.png'

const Skill = (props) => {
  return (
    <div className='skill'>                 
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

const Skillcontainer = () => {
  const skill1 = {
    img: wd, name: "Front-end Dev", desc:"I like to code things from scratch, and enjoy bringing ideas to life in the browser.", tools:"I Can Work With", toolname: "HTML, CSS, Javascript, React, Next, Node, Bootstrap, Tailwind"
  }
  const skill2 = {
    img: uiux, name: "User Interface Design", desc:"I value simple content structure, clean design patterns, and thoughtful interactions.", tools:"Design Tools I Use", toolname: "Pen and paper, Balsamiq, Figma, Photoshop"
  }
  return (
    <div className=''>
            <div class="skillInfo skillinfotab">
                    <Skill img={skill1.img} skillname={skill1.name} skilldesc={skill1.desc} tools={skill1.tools} toolname={skill1.toolname}/> 
                    <Skill img={skill2.img} skillname={skill2.name} skilldesc={skill2.desc} tools={skill2.tools} toolname={skill2.toolname}/>  
            </div>
    </div>
  )
}

const Introduction = () => {
    return(
    <section className='introcontainer introcontainertab'>
        <Image src={profile} alt='/' className='backgroundPhoto' />  
        <section className='introtextcont'>
            <h1 className='aboutmetxt  '>About me</h1>
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
        <Skillcontainer/>
    </section>
  )
}

export default Aboutme
