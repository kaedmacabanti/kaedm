import React from 'react'
import Image from 'next/image'

const ProjectItem = () => {
  return (
    <div className='projectitemcontainer'>
      <Image/>
      {/* <div className='Caption'></div> */}
    </div>
  )
}

const ProjectItem1 = () => {
  return (
    <div className='projectitemcontainer parent'> 
        <a href="https://netflix-clone-beta-hazel.vercel.app/"  target="_blank">
          <div className='netflixImg'></div>
        </a>  
           
        <div className="caption">
          <div className='captiontext'>
            <p>NetflixClone</p>
            <p> React | Next | Tailwind | TMDB</p>
          </div>
        </div>  
    </div>
  )
}


const Projects = () => {
  return (
    <section className='sectioncontpaddingY'>
        <h1 className=''>Projects</h1>
        <hr className='projectshr'/>
        <div className='projectscontainers'>
        <ProjectItem1/> 
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
