import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer
            <i class='bx bx-badge-check skills-icon'></i>
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-python skills-icon'></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-flask skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">Flask</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-postgresql skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check skills-icon'></i>

                    <div>
                        <h3 className="skills__name">SQLAlchemy</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-git-branch skills-icon' ></i>

                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check skills-icon'></i>

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend