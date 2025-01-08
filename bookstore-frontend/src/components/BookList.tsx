import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import book images
import bookImage1 from "./../images/1.jpg";
import bookImage2 from "./../images/2.jpeg";
import bookImage3 from "./../images/3.jpeg";
import bookImage4 from "./../images/4.jpeg";
import bookImage5 from "./../images/5.jpeg";
import bookImage6 from "./../images/6.jpeg";

const books = [
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
];

const BookList = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header
        className="mb-4 text-center py-3"
        style={{
          backgroundColor: " #808080",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <p className="lead">
          <strong>Explore Best Novels</strong>
        </p>
        <p className="text-muted" style={{ color: "white" }}>
          <b>Find Your Books.</b>
        </p>
      </header>

      {/* Book List */}
      <div
        className="d-flex justify-content-between align-items-start flex-wrap"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        {books.map((book, index) => (
          <div
            className="card mx-2 mb-4 shadow-lg"
            key={index}
            style={{
              width: "200px",
              display: "inline-block",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="position-relative">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div
                className="badge bg-danger text-white position-absolute top-0 end-0"
                style={{
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                {book.discount}
              </div>
            </div>
            <div className="card-body text-center">
              <h6
                className="card-title"
                style={{ fontSize: "1.1rem", fontWeight: "600" }}
              >
                {book.title}
              </h6>
              <p className="text-muted text-decoration-line-through small">
                {book.price}
              </p>
              <p className="text-primary fw-bold small">{book.discountPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
