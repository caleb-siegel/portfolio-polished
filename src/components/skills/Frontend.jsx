import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend 
            <i class='bx bx-badge-check skills-icon'></i>
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-javascript skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-react skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                
                <div className="skills__data">
                    <i class='bx bxl-html5 skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-css3 skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-buildings skills-icon'></i>

                    <div>
                        <h3 className="skills__name">Vite</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-google skills-icon'></i>

                    <div>
                        <h3 className="skills__name">Material UI</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend