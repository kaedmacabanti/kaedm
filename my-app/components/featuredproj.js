import React from 'react'
 
const Fproject = () => {
  return (
    <div className='fproject'>
      <div className='fprojimg'>

      </div>
      <div className='fprojdesc'>
        <h4>Clone Project</h4>
        <h3>Netflix Clone</h3>
        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>

      </div>
    </div>
  )
}
 
const Featuredproj = () => {
  return (
    <section className='featuredprojcont'>
        <h1 className='textintro'>Featured Projects</h1>
        <Fproject/>
      
    </section>
  )
}

export default Featuredproj
