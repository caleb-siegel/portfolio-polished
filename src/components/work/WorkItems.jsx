import React, { useState, useEffect, useRef } from 'react';

const WorkItems = ({ item }) => {
  const [toggleModal, setToggleModal] = useState(0);
  const modalRef = useRef(null); // Ref to track modal content

  const handleToggleModal = (index) => {
    setToggleModal(index);
  };

  // useEffect to handle clicks outside of modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the modal content, close the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setToggleModal(0);
      }
    };

    // Add event listener when the modal is open
    if (toggleModal === 1) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when the modal is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleModal]);

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>

      <span className="work__see-more-button" onClick={() => handleToggleModal(1)}>
        See More
        <i className="uil uil-arrow-right work__see-more-button-icon"></i>
      </span>

      <div className={toggleModal === 1 ? "work__modal active-modal" : "work__modal"}>
        <div className="work__modal-content" ref={modalRef}>
          <i onClick={() => handleToggleModal(0)} className="uil uil-times work__modal-close"></i>

          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">{item.modal_description}</p>

          <div className='work__modal-content-grid'>
            <ul className="work__modal-work grid">
              {item.modal_info.map((info, index) => (
                <li className="work__modal-qual" key={index}>
                  <i className="bx bxs-circle work__modal-icon"></i>
                  <p className="work__modal-info">{info}</p>
                </li>
              ))}
            </ul>

            <div className="work__modal-technologies">
              <div className="work__modal-label">Technologies Used</div>
              {item.modal_technologies.map((tech) => (
                <div className="work__modal-technology" key={tech.id}>
                  <i className={tech.class}></i>
                  <div>
                    <h3 className="work__modal-tech-name">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href={item.link} className="work__modal-button" target="_blank" rel="noopener noreferrer">
            Watch Demo <i className="bx bx-right-arrow-alt work__modal-button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;