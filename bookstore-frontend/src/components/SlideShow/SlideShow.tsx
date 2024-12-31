import React, { useState, useEffect } from "react";
import "./SlideShow.css";
import bannerImage1 from "../../images/banner 1.jpg";
import bannerImage2 from "../../images/banner 2.jpg";
import bannerImage3 from "../../images/banner 3.jpg";

const Slideshow = () => {
  const slides = [
    { src: bannerImage1, alt: "Banner 1" },
    { src: bannerImage2, alt: "Banner 2" },
    { src: bannerImage3, alt: "Banner 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.src} alt={slide.alt} className="banner" />
          {/* Overlay only for Banner 1 */}
          {index === 0 && index === currentIndex && (
            <div className="overlay">
              <h2>The Bookshop</h2>
              <p>eBook Store</p>
              <button>
                <a href="https://play.google.com">
                  Start Your Journey on Google Play!
                </a>
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="nav-button prev-button"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        ❮
      </button>
      <button
        className="nav-button next-button"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default Slideshow;
