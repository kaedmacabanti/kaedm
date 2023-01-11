import React from 'react'
import Image from 'next/image'
import NetflixImage from '../assets/NetflixClone.png'
import FunkoImage from '../assets/FunkoClone.png'
 
const Fproject = (props) => {
  return (
    <div className='fproject'>

      <div className='fprojimg'>
        <Image src={props.projectImage} layout='fill'></Image>
      </div>
    
      <div className='fprojdesc'>
        <h2>{props.projecType}</h2>
        <h3>{props.projectName}</h3>
        <p className=' '>{props.projectDescription}</p>
        <ul>
          <li>{props.tech1}</li>
          <li>{props.tech2}</li>
          <li>{props.tech3}</li>
          <li>{props.tech4}</li>
        </ul>
      </div>
    </div>
  )
}
 
const Featuredproj = () => {
  const featuredproject1 = {
    type:"Clone Project",name:"Netflix Clone",image:NetflixImage, description:"Netflix website clone created using the movie database API. I created this clone to enhance my skill in creating user interfaces from alread existing designs as well as my skill in using libraries and frameworks", tech1: "React", tech2:"Next", tech3:"Tailwind", tech4:"TMDB"
  }
  const featuredproject2 = {
    type:"Clone Project",name:"Funko Clone", image:FunkoImage, description:"Funko E-commerce website clone created using the movie database API. I created this clone to enhance my skill in creating user interfaces from alread existing designs as well as my skill in using libraries and frameworks", tech1: "React", tech2:"Next", tech3:"Tailwind", tech4:"TMDB"
  }

  return (
    <section className='sectioncontpaddingY'>
        <h1 className=' '>Featured</h1>
        <hr className='featuredhr'/>
        <Fproject projecType={featuredproject1.type} projectName={featuredproject1.name} projectImage={featuredproject1.image} projectDescription={featuredproject1.description} tech1={featuredproject1.tech1} tech2={featuredproject1.tech2} tech3={featuredproject1.tech3} tech4={featuredproject1.tech4}/>
        <Fproject projecType={featuredproject2.type} projectName={featuredproject2.name} projectImage={featuredproject2.image} projectDescription={featuredproject2.description} tech1={featuredproject2.tech1} tech2={featuredproject2.tech2} tech3={featuredproject2.tech3} tech4={featuredproject2.tech4}/>
 
      
    </section>
  )
}

export default Featuredproj
