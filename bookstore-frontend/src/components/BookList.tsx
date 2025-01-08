import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FaShoppingCart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import book images
import bookImage1 from "./../images/1.jpg";
import bookImage2 from "./../images/2.jpeg";
import bookImage3 from "./../images/3.jpeg";
import bookImage4 from "./../images/4.jpeg";
import bookImage5 from "./../images/5.jpeg";
import bookImage6 from "./../images/6.jpeg";
import bookImage7 from "./../images/7.jpeg";
import bookImage8 from "./../images/8.jpeg";
import bookImage9 from "./../images/9.jpeg";
import bookImage10 from "./../images/10.jpeg";
import bookImage11 from "./../images/11.jpeg";
import bookImage12 from "./../images/12.jpeg";
import bookImage13 from "./../images/13.jpeg";
import bookImage14 from "./../images/14.jpeg";
import bookImage15 from "./../images/15.jpeg";
import bookImage16 from "./../images/16.jpeg";
import bookImage17 from "./../images/17.jpeg";
import bookImage18 from "./../images/18.jpeg";
import bookImage19 from "./../images/19.jpeg";
import bookImage20 from "./../images/20.jpeg";
import bookImage21 from "./../images/21.jpeg";
import bookImage22 from "./../images/11.jpeg";
import bookImage23 from "./../images/23.jpeg";
import bookImage24 from "./../images/24.jpeg";
import bookImage25 from "./../images/25.jpeg";
import bookImage26 from "./../images/26.jpeg";
import bookImage27 from "./../images/27.jpeg";
import bookImage28 from "./../images/28.jpeg";
import bookImage29 from "./../images/29.jpeg";
import bookImage30 from "./../images/30.jpeg";
import bookImage31 from "./../images/31.jpeg";
import bookImage32 from "./../images/32.jpeg";
import bookImage33 from "./../images/33.jpeg";
import bookImage34 from "./../images/34.jpeg";
import bookImage35 from "./../images/35.jpeg";
import bookImage36 from "./../images/36.jpeg";
import bookImage37 from "./../images/37.jpeg";
import bookImage38 from "./../images/38.jpeg";
import bookImage39 from "./../images/39.jpeg";
import bookImage40 from "./../images/40.jpeg";
import bookImage41 from "./../images/41.jpeg";
import bookImage42 from "./../images/42.jpeg";
import bookImage43 from "./../images/43.jpeg";
import bookImage44 from "./../images/44.jpeg";
import bookImage45 from "./../images/45.jpeg";
import bookImage46 from "./../images/46.jpeg";
import bookImage47 from "./../images/47.jpeg";
import bookImage48 from "./../images/48.jpeg";
import bookImage49 from "./../images/49.jpeg";
import bookImage50 from "./../images/50.jpeg";

// Define books and moreBooks data
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
  {
    title: "GOTHIC TALES",
    price: "LKR 1000.00",
    discountPrice: "LKR 800.00",
    discount: "20%",
    image: bookImage12,
  },
  {
    title: "THIRST",
    price: "LKR 975.00",
    discountPrice: "LKR 780.00",
    discount: "20%",
    image: bookImage13,
  },
  {
    title: "KAMILIYA",
    price: "LKR 1000.00",
    discountPrice: "LKR 900.00",
    discount: "10%",
    image: bookImage14,
  },
  {
    title: "THE SON",
    price: "LKR 3500.00",
    discountPrice: "LKR 3150.00",
    discount: "10%",
    image: bookImage15,
  },
  {
    title: "THE KINGDOM",
    price: "LKR 1750.00",
    discountPrice: "LKR 1400.00",
    discount: "20%",
    image: bookImage16,
  },
  {
    title: "DON KIHOTHE",
    price: "LKR 950.00",
    discountPrice: "LKR 760.00",
    discount: "20%",
    image: bookImage17,
  },
  {
    title: "GOTHIC TALES",
    price: "LKR 1000.00",
    discountPrice: "LKR 800.00",
    discount: "20%",
    image: bookImage18,
  },
];

const BookList = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header
        className="mb-4 text-center py-3"
        style={{
          backgroundColor: "#808080",
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
      <div className="d-flex justify-content-start flex-wrap gap-3">
        {books.map((book, index) => (
          <div
            key={index}
            className="card"
            style={{ width: "200px", borderRadius: "10px" }}
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
              <span
                className="badge bg-danger text-white position-absolute top-0 end-0"
                style={{ borderBottomLeftRadius: "8px" }}
              >
                {book.discount}
              </span>
            </div>
            <div className="card-body text-center">
              <h6 className="card-title">{book.title}</h6>
              <p className="text-muted text-decoration-line-through small">
                {book.price}
              </p>
              <p className="text-primary fw-bold">{book.discountPrice}</p>
              <div className="d-flex justify-content-around mt-3">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Add to Cart</Tooltip>}
                >
                  <button className="btn btn-outline-primary btn-sm">
                    <FaShoppingCart />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Add to Wishlist</Tooltip>}
                >
                  <button className="btn btn-outline-danger btn-sm">
                    <FaHeart />
                  </button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
