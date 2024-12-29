import React from "react";
import "./MainSection.css";
import bannerImage from "../../images/banner.jpg";

const MainSection = () => {
  return (
    <section className="main-section">
      <img src={bannerImage} alt="Banner" className="banner" />
      <div className="overlay">
        <h2>The Bookshop</h2>
        <p>eBook Store</p>
        <button>
          <a href="">Start Your Journey on Google Play!</a>
        </button>
      </div>
    </section>
  );
};

export default MainSection;
