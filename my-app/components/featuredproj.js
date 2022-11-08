import React from 'react'
 
const Fproject = () => {
  return (
    <div className='fproject'>
      <div className='fprojimg'>

      </div>
      <div className='fprojdesc'>
        <h2>Clone Project</h2>
        <h3>Netflix Clone</h3>
        <p className='featureddescription'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>

      </div>
    </div>
  )
}
 
const Featuredproj = () => {
  return (
    <section className='featuredprojcont'>
        <h1 className='featuredtxt'>Featured</h1>
        <hr className='featuredhr'/>
        <Fproject/>
      
    </section>
  )
}

export default Featuredproj
