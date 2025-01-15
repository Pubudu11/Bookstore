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

import "./Novels.css"; // Ensure this file contains appropriate styles

// Novels data
const novels = [
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

const NovelsComponent = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header
        className="d-flex justify-content-between align-items-center mb-4 py-3 px-4"
        style={{
          backgroundColor: "rgb(202, 139, 233)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <div className="text-center w-100">
          <p className="lead mb-1">
            <strong>Explore Best Novels</strong>
          </p>
          <p className="text-muted mb-0" style={{ color: "white" }}>
            <b>Find Your Books.</b>
          </p>
        </div>
      </header>
      {novels.map((book, index) => (
        <div className="card" style={{ width: "150px", borderRadius: "10px" }}>
          <div className="position-relative">
            <img
              src={book.image}
              alt={book.title}
              className="card-img-top"
              style={{
                height: "200px", // Reduced height for book images
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <span
              className="badge bg-danger text-white position-absolute top-0 end-0"
              style={{ borderBottomLeftRadius: "8px" }}
            >
              {book.discount}
            </span>
          </div>
          <div className="card-body text-center">
            <h6
              className="card-title"
              style={{
                fontSize: "0.85rem", // Reduced title font size
                lineHeight: "1.2",
              }}
            >
              {book.title}
            </h6>
            <p
              className="text-muted text-decoration-line-through small"
              style={{ fontSize: "0.75rem" }} // Reduced price font size
            >
              {book.price}
            </p>
            <p
              className="text-primary fw-bold"
              style={{ fontSize: "0.85rem" }} // Reduced discount price font size
            >
              {book.discountPrice}
            </p>
            <div className="d-flex justify-content-around mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NovelsComponent;
