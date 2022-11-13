import React from 'react'
import Image from 'next/image'

const ProjectItem = () => {
  return (
    <div className='projectitemcontainer'>
      <Image/>
      <div className='Caption'></div>
    </div>
  )
}

const Projects = () => {
  return (
    <section className='sectioncontainer'>
        <h1 className='projectstxt'>Projects</h1>
        <hr className='projectshr'/>
        <div className='projectscontainers'>
        <ProjectItem/> 
        <ProjectItem/> 
        <ProjectItem/> 
        <ProjectItem/> 
        <ProjectItem/> 
        <ProjectItem/> 
        </div>
    </section>
    
  )
}



 
export default Projects
