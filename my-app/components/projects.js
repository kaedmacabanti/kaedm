import React from 'react'
import Image from 'next/image'
import NetflixImage from '../assets/NetflixClone.png'
import FunkoImage from '../assets/FunkoClone.png'
import NullImage from '../assets/NullImage.png'

 

const ProjectItem = (props) => {
  return (
    <div className='projectitemcontainer parent'> 
      
          <div className='projectimg'>
            <Image src={props.projectImg} layout="fill"></Image>
          </div>
   
        <a href={props.projectLink}  target="_blank">
        <div className="caption">
          <div className='captiontext'>
            <h2>{props.projectName}</h2>
            <p>{props.projectTech}</p>
          </div>
        </div>  
        </a>  
    </div>
  )
}


const Projects = () => {
  const project1 = {
    name:"Netflix Clone", image: NetflixImage, tech: "React | Next | Tailwind | Vercel | TMDB", link: "https://stream-clone-kappa.vercel.app/"
  }
  const project2 = {
    name:"Funko Clone", image: FunkoImage, tech: "MERN | Next | Tailwind | Vercel ", link: "https://funko-clone.vercel.app/"
  }
  const projectNull = {
    name:"Coming soon", image: NullImage, tech: "", link: ""
  }

  return (
    <section className='sectioncontpaddingY'>
        <h1 className=''>Projects</h1>
        <hr className='projectshr'/>
        <div className='projectscontainers'>
        <ProjectItem projectName={project1.name} projectImg={project1.image} projectTech={project1.tech} projectLink={project1.link} /> 
        <ProjectItem projectName={project2.name} projectImg={project2.image} projectTech={project2.tech} projectLink={project2.link} /> 

        <ProjectItem projectName={projectNull.name} projectImg={projectNull.image} projectTech={projectNull.tech} projectLink={projectNull.link}/> 
        <ProjectItem projectName={projectNull.name} projectImg={projectNull.image} projectTech={projectNull.tech} projectLink={projectNull.link}/> 
        <ProjectItem projectName={projectNull.name} projectImg={projectNull.image} projectTech={projectNull.tech} projectLink={projectNull.link}/> 
        <ProjectItem projectName={projectNull.name} projectImg={projectNull.image} projectTech={projectNull.tech} projectLink={projectNull.link}/> 
        
     
        </div>
    </section>
    
  )
}



 
export default Projects
