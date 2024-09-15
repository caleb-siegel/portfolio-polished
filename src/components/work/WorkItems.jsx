import React, { useState } from 'react'

const WorkItems = ({ item }) => {
  const [toggleModal, setToggleModal] = useState(0);

  const handleToggleModal = (index) => {
      setToggleModal(index);
  };
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>

        <span className="work__see-more-button" onClick={() => handleToggleModal(1)}>See More
            <i className="uil uil-arrow-right work__see-more-button-icon"></i>
        </span>

        <div className={toggleModal === 1 ? "work__modal active-modal" : "work__modal"}>
            <div className="work__modal-content">
                <i onClick={() => handleToggleModal(0)} className="uil uil-times work__modal-close"></i>

                <h3 className="work__modal-title">{item.title}</h3>
                <p className="work__modal-description">{item.modal_description}</p>

                <div className='work__modal-content-grid'>
                  <ul className="work__modal-work grid">
                    {item.modal_info.map((info, index) => {
                      return (
                        <li className="work__modal-qual" key={index}>
                          <i className="bx bxs-circle work__modal-icon"></i>
                          <p className="work__modal-info">{info}</p>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="work__modal-technologies">
                    <div className="work__modal-label">Technologies Used</div>
                    {item.modal_technologies.map((tech) => {
                      return (
                        <div className="work__modal-technology" key={tech.id}>
                          <i class={tech.class}></i>

                          <div>
                              <h3 className="work__modal-tech-name">{tech.name}</h3>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <a href={item.link} className="work__modal-button" target="_blank" rel="noopener noreferrer">
                  Watch Demo <i className="bx bx-right-arrow-alt work__modal-button-icon"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default WorkItems