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
    <section className='projectsection'>
        <h1 className='textintro'>Projects</h1>
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
