import React from "react";
import bookImage1 from "./../../images/1.jpg";
import bookImage2 from "./../../images/2.jpeg";
import bookImage3 from "./../../images/3.jpeg";
import bookImage4 from "./../../images/4.jpeg";
import bookImage5 from "./../../images/5.jpeg";
import bookImage6 from "./../../images/6.jpeg";
import bookImage7 from "./../../images/7.jpeg";
import bookImage8 from "./../../images/8.jpeg";
import bookImage9 from "./../../images/9.jpeg";
import bookImage10 from "./../../images/10.jpeg";
import bookImage11 from "./../../images/11.jpeg";

import "./Novels.css"; // Add custom CSS styles for your component (optional)

// Novels data
const Novels = [
  {
    title: "THIRST",
    price: "LKR 975.00",
    discountPrice: "LKR 780.00",
    discount: "20%",
    image: bookImage1,
  },
  {
    title: "KAMILIYA",
    price: "LKR 1000.00",
    discountPrice: "LKR 900.00",
    discount: "10%",
    image: bookImage2,
  },
  {
    title: "THE SON",
    price: "LKR 3500.00",
    discountPrice: "LKR 3150.00",
    discount: "10%",
    image: bookImage3,
  },
  {
    title: "THE KINGDOM",
    price: "LKR 1750.00",
    discountPrice: "LKR 1400.00",
    discount: "20%",
    image: bookImage4,
  },
  {
    title: "DON KIHOTHE",
    price: "LKR 950.00",
    discountPrice: "LKR 760.00",
    discount: "20%",
    image: bookImage5,
  },
  {
    title: "GOTHIC TALES",
    price: "LKR 1000.00",
    discountPrice: "LKR 800.00",
    discount: "20%",
    image: bookImage6,
  },
  {
    title: "THIRST",
    price: "LKR 975.00",
    discountPrice: "LKR 780.00",
    discount: "20%",
    image: bookImage7,
  },
  {
    title: "KAMILIYA",
    price: "LKR 1000.00",
    discountPrice: "LKR 900.00",
    discount: "10%",
    image: bookImage8,
  },
  {
    title: "THE SON",
    price: "LKR 3500.00",
    discountPrice: "LKR 3150.00",
    discount: "10%",
    image: bookImage9,
  },
  {
    title: "THE KINGDOM",
    price: "LKR 1750.00",
    discountPrice: "LKR 1400.00",
    discount: "20%",
    image: bookImage10,
  },
  {
    title: "DON KIHOTHE",
    price: "LKR 950.00",
    discountPrice: "LKR 760.00",
    discount: "20%",
    image: bookImage11,
  },
];

const NovelsPage: React.FC = () => {
  return (
    <div className="novels-container">
      <h1 className="novels-title">Explore Our Novels</h1>
      <p className="novels-subtitle">
        Discover our exciting collection of books.
      </p>
      <div className="novels-grid">
        {Novels.map((novel, index) => (
          <div key={index} className="novel-card">
            <img src={novel.image} alt={novel.title} className="novel-image" />
            <h2 className="novel-title">{novel.title}</h2>
            <p className="novel-price">Price: {novel.price}</p>
            <p className="novel-discount-price">
              Discount Price: {novel.discountPrice}
            </p>
            <p className="novel-discount">Discount: {novel.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovelsPage;
