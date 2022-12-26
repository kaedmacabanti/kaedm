import React from 'react'


const ContactForm = () => {
    return ( 
      <form className='inputboxcontainer'> 
          <input type="text" name="" id="" placeholder='Name'/>
          <input type="text" name="" id="" placeholder='E-mail'/>
          <textarea name="" id="" cols="30"   placeholder='Message'></textarea>
          <button type="button">Send Message</button> 
      </form> 
    )
  }
  
  

const Contact = () => {
  return (
    <div className='contactcontainer sectioncontpaddingY'>
        <h1 className=' '>Contact me</h1>
        <hr className='contacthr'/>
        <h2>Have a question or message?</h2>
        <ContactForm/>
    </div>
  )
}



export default Contact
