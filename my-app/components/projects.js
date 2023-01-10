import React from 'react'
import Image from 'next/image'
import NetflixImage from '../assets/NetflixCloneImage.png'
import FunkoImage from '../assets/FunkoClone.png'

 

const ProjectItem1 = (props) => {
  return (
    <div className='projectitemcontainer parent'> 
        <a href={props.projectLink}  target="_blank">
          <div className='projectimg'>
            <Image src={props.projectImg} layout="fill"></Image>
          </div>
        </a>  
           
        <div className="caption">
          <div className='captiontext'>
            <h2>{props.projectName}</h2>
            <p>{props.projectTech}</p>
          </div>
        </div>  
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

  return (
    <section className='sectioncontpaddingY'>
        <h1 className=''>Projects</h1>
        <hr className='projectshr'/>
        <div className='projectscontainers'>
        <ProjectItem1 projectName={project1.name} projectImg={project1.image} projectTech={project1.tech} projectLink={project1.link} /> 
        <ProjectItem1 projectName={project2.name} projectImg={project2.image} projectTech={project2.tech} projectLink={project2.link} /> 
     
        </div>
    </section>
    
  )
}



 
export default Projects
