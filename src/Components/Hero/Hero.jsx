import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
        <h2>Building digital Experiences that Inspire</h2>
        <p>Passionate Frontend Developer | Transforming  ideas with seamless and visually stunning Web Solutions</p>
        </div>
       
        <div className="hero-img">
            <div>
                <div className='tech-icon'>
                    <img src="./assets/react.png" alt="" />
                </div>
                <img src="./assets/teac.png" alt=""  className='mik'/>
            </div>
       
       <div>
        <div className="tech-icon">
            <img src="./assets/javascript.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="./assets/css.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="./assets/html.png" alt="" />
        </div>
       </div>
        </div>
    </section>
  )
}

export default Hero
