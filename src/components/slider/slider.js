import React, { useState, useEffect } from 'react';
import './slider.css';

const images = [
  "../images/images1.png",
  "../images/images2.png",
  "../images/images3.png"
];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          className={`slider-image ${index === currentImageIndex ? "visible" : "hidden"}`}
          src={image}
          alt={`Slide ${index}`}
        />
      ))}
    </div>
  );
}

export default Slider;
