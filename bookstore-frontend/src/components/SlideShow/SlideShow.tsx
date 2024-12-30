import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import bannerImage from "../../images/banner.jpg";
import bannerImage2 from "../../images/banner 1.jpg";
import bannerImage3 from "../../images/banner 2.jpg";

const Slideshow = () => {
  const slides = [
    { src: "banner.jpg", alt: "Banner 1" },
    { src: "banner 2.jpg", alt: "Banner 2" },
    { src: "banner 3.jpg", alt: "Banner 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          {index === currentIndex && (
            <img src={slide.src} alt={slide.alt} style={{ width: "100%" }} />
          )}
        </div>
      ))}

      {/* Navigation buttons */}
      <button className="nav-button prev-button" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav-button next-button" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slideshow;
