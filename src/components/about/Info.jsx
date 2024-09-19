import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">7+ Years Working</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">300+ Github Contributions</span>
        </div>

        <div className="about__box">
          <i class='bx bx-video about__icon'></i>
          <h3 className="about__title">Featured</h3>
          <span className="about__subtitle">215mn Youtube Views</span>
        </div>
    </div>
  )
}

export default Info