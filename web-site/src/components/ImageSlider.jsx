import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,              // Enable navigation dots
    infinite: true,          // Enable infinite loop
    speed: 500,              // Transition speed (in ms)
    slidesToShow: 1,         // Number of slides to show at a time
    slidesToScroll: 1,       // Number of slides to scroll at a time
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 1000,     // Time between slide changes (in ms)
    arrows: true,            // Enable navigation arrows
  };

  return (
    <div style={{ width: '80%', height: '100%', margin: '0 auto', padding: '20px 0' }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/800x300"
            alt="Slide 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x300?text=Slide+2"
            alt="Slide 2"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x300?text=Slide+3"
            alt="Slide 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
