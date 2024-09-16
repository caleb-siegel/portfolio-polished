import React from 'react';
import { Data } from './Data';
import "./interests.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Interests = () => {
  return (
    <section className="interests container section">
        <h2 className="section__title">Interests</h2>
        <span className="section__subtitle">What Makes Me... Me </span>

        <Swiper className="interests__container"
            modules={[ Pagination ]}
            spaceBetween={24}
            slidesPerView={1.3}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
                350: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                }
            }}
            pagination={{ clickable: true }}
        >
            {Data.map(({id, image, title, description, link_title, link, name_icon}) => {
                return (
                    <SwiperSlide className='interests__card' key={id}>
                        {/* <img src={image} alt="" className="interests__img" /> */}

                        <h3 className="interests__name">{title}
                            <i className={name_icon}></i>
                        </h3>
                        <p className="interests__description">{description}</p>
                        {link ? <a href={link} className="interests__button" target="_blank" rel="noopener noreferrer">
                            {link_title} <i className="bx bx-right-arrow-alt interests__button-icon"></i>
                        </a>
                        : ""}
                        {title === "Microsoft Excel" && 
                        <a href="../../public/mouse-less-modeling.eml" download="mouse-less-modeling.eml" className="interests__button">Download Sample Email <i className="bx bx-right-arrow-alt interests__button-icon"></i></a>  }
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Interests