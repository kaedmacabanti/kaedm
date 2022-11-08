import React from 'react'


const ContactForm = () => {
    return (
      <form className='contactformcontainer'>
        <form className='inputboxcontainer'>
            <input type="text" name="name" placeholder='Name' className='name'/>
            <input type="email" name="name" placeholder='Your email' className='email'/>
            <input type="text" name="name" placeholder='Message'className='message'/>
            <input type="submit" value="Submit" className='sbtn'/>
        </form> 
          
         
 
      </form>
    )
  }
  
  

const Contact = () => {
  return (
    <div className='contactcontainer'>
        <h1 className='contacttxt'>Contact me</h1>
        <hr className='contacthr'/>
        <h2>Have a question or message?</h2>
        <ContactForm/>
    </div>
  )
}



export default Contact
