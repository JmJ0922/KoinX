import React, { useState } from 'react';
import './Slides.css';
import image from './image.svg';
import image2 from './image2.svg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image,
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
            Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
            bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
          </p>
        </>
      ),
      backgroundColor: '#E8F4FD',
    },
    {
      image: image2,
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
            Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
            bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
          </p>
        </>
      ),
      backgroundColor: '#EBF9F4',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='carousel'>
      <div className='slides-container' style={{ transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className='slide' style={{ backgroundColor: slide.backgroundColor }}>
            <div className='image-container'>
              <img src={slide.image} width="35px" height="35px" alt={`Slide ${index + 1}`} />
            </div>
            <div className='content-container'>{slide.content}</div>
          </div>
        ))}
      </div>
      <button className='prev-btn' onClick={nextSlide}>
        &#10094;
      </button>
      <button className='next-btn' onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
