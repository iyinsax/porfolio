import React, {useRef} from 'react';
import './WorkExperience.css';
import Experiencecard from './ExperienceCard/Experiencecard';
import { WORK_EXPERIENCE } from '../../utils/data';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";

const WorkExperience = () => {
  const sliderRef = useRef();

       const settings ={
          dots: false,
          infinite: true,
          speed: 500,
          slidesToshow: 2,
          slidesToscroll: 1,
          arrows: false,
          responsive: [
            {
            breakpoint: 769,
            settings: {
              slidesToshow: 1,
              slidesToscroll: 1,
            },
            },
          ],
          };

          const slideRight = () => {
            sliderRef.current.slickNext();
          };

          const sliderLeft = () => {
            sliderRef.current.slickPrev();
          };

  return (
<section className="experience-container">
    <h5>Work Experience</h5>


    <div className="experience-content">
      <div className="arrow-right" onClick={slideRight}>
        <span className='material-symbols-outlined'><FaChevronRight /></span>
      </div>

      <div className="arrow-left" onClick={sliderLeft}>
        <span className="material-symbols-outlined"><FaChevronLeft /></span>
      </div>
      <Slider ref={sliderRef} {...settings}>
      {WORK_EXPERIENCE.map((item) => (
        <Experiencecard key={item.title} details={item} />
      ))}
      </Slider>
    </div>
</section>
  )
}

export default WorkExperience
