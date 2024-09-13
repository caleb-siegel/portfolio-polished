import React from 'react';
import { Data } from './Data';
import "./testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Testimonials = () => {
  return (
    <section className="testimonial container section">
        <h2 className="section__title">Interests</h2>
        <span className="section__subtitle">What Makes Me... Me </span>

        <Swiper className="testimonial__container"
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
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials