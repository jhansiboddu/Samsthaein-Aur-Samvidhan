import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../styles/ImageSlider.css';

export default function ImageSlider() {
  const slides = [
    {
      backgroundImage: '../components/images/image.png',
      subtitle: 'Explore the Indian Constitution',
      title: 'Interactive Learning',
      description: 'Engage with interactive modules and expand your knowledge.',
      buttonText: 'Learn More',
    },
    {
      backgroundImage: '../components/images/image.png',
      subtitle: 'Gamified Experience',
      title: 'Make Learning Fun',
      description: 'Enjoy an immersive and engaging educational journey.',
      buttonText: 'Start Now',
    },
    {
      backgroundImage: '../components/images/image.png',
      subtitle: 'Track Your Progress',
      title: 'Real-Time Analytics',
      description: 'Monitor your learning milestones and achievements.',
      buttonText: 'View Insights',
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="slider-wrapper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="slider-item" key={index}>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              <div className="slide-content">
                <div className="slide-subtitle">{slide.subtitle}</div>
                <div className="slide-title">{slide.title}</div>
                <div className="slide-description">{slide.description}</div>
                <a href="#" className="slide-button">
                  <span>{slide.buttonText}</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controls">
        <ul className="slider-pagination">
          {slides.map((_, index) => (
            <li key={index} className="slider-tab">
              Slide {index + 1}
            </li>
          ))}
          <div className="slider-indicator"></div>
        </ul>
      </div>
    </div>
  );
}
