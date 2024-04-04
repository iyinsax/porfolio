/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import "./MobileNav.css"
const MobileNav = ({isOpen, toggleMenu}) => {
  return (

      
    <>
    <div
     className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
            <img src="./assets/mic.png" alt="" />
          <ul>
            <li>
                <a className='menu-item'>Home</a>
            </li>

            <li>
            <a className="menu-item">Skills</a>
          </li>

          <li>
            <a className="menu-item">Work Experience</a>
          </li>

          <li>
            <a className="menu-item">Contact me</a>
          </li>
          <button className="contact-btn" onClick={()=>{}}>Hire</button>
          </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav
