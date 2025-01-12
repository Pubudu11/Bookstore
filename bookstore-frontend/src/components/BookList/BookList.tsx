import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper modules
import { Navigation } from "swiper/modules";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// Import book images
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
import bookImage12 from "./../../images/12.jpeg";
import bookImage13 from "./../../images/13.jpeg";
import bookImage14 from "./../../images/14.jpeg";
import bookImage15 from "./../../images/15.jpeg";
import bookImage16 from "./../../images/16.jpeg";
import bookImage17 from "./../../images/17.jpeg";
import bookImage18 from "./../../images/18.jpeg";
import bookImage19 from "./../../images/19.jpeg";
import bookImage20 from "./../../images/20.jpeg";
import bookImage21 from "./../../images/21.jpeg";
import bookImage22 from "./../../images/11.jpeg";
import bookImage23 from "./../../images/23.jpeg";
import bookImage24 from "./../../images/24.jpeg";
import bookImage25 from "./../../images/25.jpeg";
import bookImage26 from "./../../images/26.jpeg";
import bookImage27 from "./../../images/27.jpeg";
import bookImage28 from "./../../images/28.jpeg";
import bookImage31 from "./../../images/31.jpeg";
import bookImage32 from "./../../images/32.jpeg";
import bookImage33 from "./../../images/33.jpeg";
import bookImage34 from "./../../images/34.jpeg";
import bookImage35 from "./../../images/35.jpeg";
import bookImage36 from "./../../images/36.jpeg";
import bookImage37 from "./../../images/37.jpeg";
import bookImage38 from "./../../images/38.jpeg";
import bookImage39 from "./../../images/39.jpeg";
import bookImage40 from "./../../images/40.jpeg";
import bookImage41 from "./../../images/41.jpeg";
import bookImage42 from "./../../images/42.jpeg";
import bookImage43 from "./../../images/43.jpeg";
import bookImage44 from "./../../images/44.jpeg";
import bookImage45 from "./../../images/45.jpeg";
import bookImage47 from "./../../images/47.jpeg";
import bookImage48 from "./../../images/48.jpeg";
import bookImage49 from "./../../images/49.jpeg";
import bookImage50 from "./../../images/50.jpeg";
import bookImage51 from "./../../images/51.jpeg";
import bookImage52 from "./../../images/52.jpeg";
import bookImage53 from "./../../images/53.jpeg";
import bookImage54 from "./../../images/54.jpeg";
import bookImage55 from "./../../images/55.jpeg";
import bookImage56 from "./../../images/56.jpeg";
import bookImage57 from "./../../images/57.jpeg";
import bookImage58 from "./../../images/58.jpeg";
import bookImage59 from "./../../images/59.jpeg";
import bookImage60 from "./../../images/60.jpeg";
import bookImage61 from "./../../images/61.jpeg";
import bookImage63 from "./../../images/63.jpeg";
import bookImage64 from "./../../images/64.jpeg";

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
const moreBooks = [
  {
    title: "WAR AND PEACE",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    discount: "20%",
    image: bookImage19,
  },
  {
    title: "CRIME AND PUNISHMENT",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    discount: "20%",
    image: bookImage20,
  },
  {
    title: "PRIDE AND PREJUDICE",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    discount: "10%",
    image: bookImage21,
  },
  {
    title: "MOBY DICK",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    discount: "10%",
    image: bookImage22,
  },
  {
    title: "GREAT EXPECTATIONS",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    discount: "20%",
    image: bookImage23,
  },
  {
    title: "WAR AND PEACE",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    discount: "20%",
    image: bookImage24,
  },
  {
    title: "CRIME AND PUNISHMENT",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    discount: "20%",
    image: bookImage25,
  },
  {
    title: "PRIDE AND PREJUDICE",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    discount: "10%",
    image: bookImage26,
  },
  {
    title: "MOBY DICK",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    discount: "10%",
    image: bookImage27,
  },
  {
    title: "GREAT EXPECTATIONS",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    discount: "20%",
    image: bookImage28,
  },
];
const anotherBooks = [
  {
    title: "SNEHA SANKARA",
    price: "LKR 1500.00",
    discountPrice: "LKR 1200.00",
    image: bookImage31,
  },
  {
    title: "MEDUSA",
    price: "LKR 1400.00",
    discountPrice: "LKR 1120.00",
    image: bookImage32,
  },
  {
    title: "MARILA IPADUNU MINISSU",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage33,
  },
  {
    title: "OOI",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage34,
  },
  {
    title: "BADDEGAMA",
    price: "LKR 1500.00",
    discountPrice: "LKR 1250.00",
    image: bookImage35,
  },
  {
    title: "NUBA HINDA",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    image: bookImage36,
  },
  {
    title: "LAKSHMI",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    image: bookImage37,
  },
  {
    title: "SIHINA VIMAN",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage38,
  },
  {
    title: "AURUDU TAGGA",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage39,
  },
  {
    title: "BARETHTHU",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage40,
  },
  {
    title: "IRTHU",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    image: bookImage41,
  },
  {
    title: "SHASHAI MAMAI",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage42,
  },
  {
    title: "DROHI",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage43,
  },
  {
    title: "MAYAVI",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage44,
  },
  {
    title: "HITH",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    image: bookImage45,
  },

  {
    title: "THEVI",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage47,
  },
  {
    title: "THARU DEKAK",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage48,
  },
  {
    title: "DEVA",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage49,
  },
  {
    title: "ABIRAHAS BALAGANAYA",
    price: "LKR 1200.00",
    discountPrice: "LKR 1000.00",
    image: bookImage50,
  },
];
const childernBooks = [
  {
    title: "tyS",
    price: "LKR 1500.00",
    discountPrice: "LKR 1200.00",
    image: bookImage51,
  },
  {
    title: "MEDUSA",
    price: "LKR 1400.00",
    discountPrice: "LKR 1120.00",
    image: bookImage52,
  },
  {
    title: "MARILA IPADUNU MINISSU",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage53,
  },
  {
    title: "OOI",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage54,
  },
  {
    title: "BADDEGAMA",
    price: "LKR 1500.00",
    discountPrice: "LKR 1250.00",
    image: bookImage55,
  },
  {
    title: "NUBA HINDA",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    image: bookImage56,
  },
  {
    title: "LAKSHMI",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    image: bookImage57,
  },
  {
    title: "SIHINA VIMAN",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage58,
  },
  {
    title: "AURUDU TAGGA",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage59,
  },
  {
    title: "BARETHTHU",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage60,
  },
  {
    title: "IRTHU",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    image: bookImage61,
  },
  {
    title: "SHASHAI MAMAI",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage63,
  },
  {
    title: "DROHI",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage63,
  },
  {
    title: "MAYAVI",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage64,
  },
];

const BookList = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header
        className="mb-4 text-center py-3"
        style={{
          backgroundColor: "rgb(202, 139, 233)",
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

      {/* Swiper Slider Section */}
      <div className="vertical-slideshow mb-5 swiper-slide-books">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6} // Display 6 books per slide
          spaceBetween={10} // Reduced spacing between slides
          breakpoints={{
            1200: {
              slidesPerView: 6, // Large desktops
            },
            992: {
              slidesPerView: 4, // Tablets
            },
            768: {
              slidesPerView: 3, // Small tablets
            },
            576: {
              slidesPerView: 2, // Mobile phones
            },
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div
                className="card"
                style={{ width: "150px", borderRadius: "10px" }}
              >
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
                  <div className="d-flex justify-content-around mt-2">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Second Swiper Slider Section */}
      <header
        className="mb-4 text-center py-3"
        style={{
          backgroundColor: "rgb(20, 140, 220)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <p className="lead">
          <strong>New Arrivals</strong>
        </p>
        <p className="text-muted" style={{ color: "white" }}>
          <b>Discover the Latest Books.</b>
        </p>
      </header>

      <div className="vertical-slideshow mb-5 swiper-slide-books">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 6 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
          }}
        >
          {moreBooks.map((book, index) => (
            <SwiperSlide key={index}>
              {/* Card Content */}
              <div
                className="card"
                style={{ width: "150px", borderRadius: "10px" }}
              >
                {/* Book Image and Discount */}
                <div className="position-relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
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
                {/* Book Details */}
                <div className="card-body text-center">
                  <h6
                    className="card-title"
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {book.title}
                  </h6>
                  <p
                    className="text-muted text-decoration-line-through small"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {book.price}
                  </p>
                  <p
                    className="text-primary fw-bold"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {book.discountPrice}
                  </p>
                  {/* Buttons */}
                  <div className="d-flex justify-content-around mt-2">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* third Swiper Slider Section */}
      <header
        className="mb-4 text-center py-3"
        style={{
          backgroundColor: "rgb(78, 215, 227)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <p className="lead">
          <strong>නවකතා</strong>
        </p>
        <p className="text-muted" style={{ color: "white" }}>
          <b>Best Sinhala Novels</b>
        </p>
      </header>

      <div className="vertical-slideshow mb-5 swiper-slide-books">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 6 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
          }}
        >
          {anotherBooks.map((book, index) => (
            <SwiperSlide key={index}>
              {/* Card Content */}
              <div
                className="card"
                style={{ width: "150px", borderRadius: "10px" }}
              >
                {/* Book Image and Discount */}
                <div className="position-relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <span
                    className="badge bg-danger text-white position-absolute top-0 end-0"
                    style={{ borderBottomLeftRadius: "8px" }}
                  ></span>
                </div>
                {/* Book Details */}
                <div className="card-body text-center">
                  <h6
                    className="card-title"
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {book.title}
                  </h6>
                  <p
                    className="text-muted text-decoration-line-through small"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {book.price}
                  </p>
                  <p
                    className="text-primary fw-bold"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {book.discountPrice}
                  </p>
                  {/* Buttons */}
                  <div className="d-flex justify-content-around mt-2">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Fourth Swiper Slider Section */}
      <header
        className="mb-4 text-center py-3"
        style={{
          backgroundColor: "rgb(20, 140, 220)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <p className="lead">
          <strong>CHILDREN</strong>
        </p>
      </header>

      <div className="vertical-slideshow mb-5 swiper-slide-books">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 6 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
          }}
        >
          {childernBooks.map((book, index) => (
            <SwiperSlide key={index}>
              {/* Card Content */}
              <div
                className="card"
                style={{ width: "150px", borderRadius: "10px" }}
              >
                {/* Book Image and Discount */}
                <div className="position-relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <span
                    className="badge bg-danger text-white position-absolute top-0 end-0"
                    style={{ borderBottomLeftRadius: "8px" }}
                  ></span>
                </div>
                {/* Book Details */}
                <div className="card-body text-center">
                  <h6
                    className="card-title"
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {book.title}
                  </h6>
                  <p
                    className="text-muted text-decoration-line-through small"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {book.price}
                  </p>
                  <p
                    className="text-primary fw-bold"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {book.discountPrice}
                  </p>
                  {/* Buttons */}
                  <div className="d-flex justify-content-around mt-2">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookList;
