/* eslint-disable react/prop-types */
import React from 'react'
import "./SkillsinfoCard.css"
const SkillsinfoCard = ({ heading, skills}) => {
  
  return (
    <div className='skills-info-card'>
      <h4>{heading}</h4>

      <div className="skills-info-content">
        {skills.map((item, index)=> ( <React.Fragment key={`skill_${index}`}>
                <div className="skill-info">
                    <p>{item.skill}</p>
                    <p className="pecentage">{item.percentage}</p>
                </div>
                <div className="skill-progress-bg">
                    <div className="skill-progress" style={{width: item.percentage}}
                    />
                </div>
                </React.Fragment>)
        )}
      </div>
    </div>
  )
}

export default SkillsinfoCard
