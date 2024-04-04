import React from 'react'
import './ContactMe.css'
import ContactinfoCard from './ContactinfoCard/ContactinfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
  
    <section className="contact-container">
        <h5>Contact Me </h5>

        <div className="contact-content">
            <div style={{flex: 1}}> 
            <ContactinfoCard
            iconUrl="./assets/email.png"
            text="adegokem9@gmail.com"
            />
            <ContactinfoCard
            iconUrl="./assets/github.png"
            text="https://github.com/portfolioweb"
            />
            </div>
            <div style={{flex: 1}}> 
            <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
