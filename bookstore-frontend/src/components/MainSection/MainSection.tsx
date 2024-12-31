import React from "react";
import "./MainSection.css";
import bannerImage from "../../images/banner 2.jpg";
import Slideshow from "../SlideShow/SlideShow";
const MainSection = () => {
  return (
    <section className="main-section">
      <img src={bannerImage} alt="Banner" className="banner" />
      <div className="overlay">
        <h2>The Bookshop</h2>
        <p>eBook Store</p>
        <button>
          <a href="https://play.google.com">
            Start Your Journey on Google Play!
          </a>
        </button>
      </div>
    </section>
  );
};

export default MainSection;
