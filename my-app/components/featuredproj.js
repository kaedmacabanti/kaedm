import React from 'react'
 
const Fproject = (props) => {
  return (
    <div className='fproject fprojtab'>
      <div className='fprojimg'>
      </div>
      <div className='fprojdesc'>
        <h2>{props.projecType}</h2>
        <h3>{props.prjectName}</h3>
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
    type:"Clone Project",name:"Netflix Clone", description:"Netflix website clone created using the movie database API. I created this clone to enhance my skill in creating user interfaces from alread existing designs as well as my skill in using libraries and frameworks", tech1: "React", tech2:"Next", tech3:"Tailwind", tech4:"TMDB"
  }
  const featuredproject2 = {
    type:"Case Study",name:"SparkLauch", description:"Website where creators and founders can showcase their projects in order to receive funding from patreons and potential investors. This allows creatives to launch their dream projects to reality", tech1: "React", tech2:"Next", tech3:"Tailwind", tech4:"TMDB"
  }

  return (
    <section className='sectioncontainer'>
        <h1 className='featuredtxt'>Featured</h1>
        <hr className='featuredhr'/>
        <Fproject projecType={featuredproject1.type} prjectName={featuredproject1.name} projectDescription={featuredproject1.description} tech1={featuredproject1.tech1} tech2={featuredproject1.tech2} tech3={featuredproject1.tech3} tech4={featuredproject1.tech4}/>
        <Fproject projecType={featuredproject2.type} prjectName={featuredproject2.name} projectDescription={featuredproject2.description} tech1={featuredproject2.tech1} tech2={featuredproject2.tech2} tech3={featuredproject2.tech3} tech4={featuredproject2.tech4}/>
 
      
    </section>
  )
}

export default Featuredproj
