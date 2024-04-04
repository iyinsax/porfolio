import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form >
        <div className="name-container">
            <input type="text" name='Firstname' placeholder='Firstname'/>
            <input type="text" name='lastname' placeholder='Last name' />
        </div>
        <input type="text" name='email' placeholder='Email' />
        <textarea type="text" name="message" placeholder='Message' cols="30" rows="3"></textarea>
      

      <button>SEND</button>
      </form>
       
    </div>
  )
}

export default ContactForm
