import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
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
import bookImage22 from "./../../images/22.jpeg";
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
import bookImage65 from "./../../images/65.jpeg";
import bookImage66 from "./../../images/66.jpeg";
import bookImage67 from "./../../images/67.jpeg";
import bookImage68 from "./../../images/68.jpeg";
import bookImage69 from "./../../images/69.jpeg";
import bookImage70 from "./../../images/70.jpeg";
import bookImage71 from "./../../images/71.jpeg";
import bookImage72 from "./../../images/72.jpeg";
import bookImage73 from "./../../images/73.jpeg";
import bookImage74 from "./../../images/74.jpeg";
import bookImage75 from "./../../images/75.jpeg";
import bookImage76 from "./../../images/76.jpeg";
import bookImage77 from "./../../images/77.jpeg";
import bookImage78 from "./../../images/78.jpeg";
import bookImage79 from "./../../images/79.jpeg";
import bookImage80 from "./../../images/80.jpeg";
import bookImage81 from "./../../images/81.jpeg";
import bookImage82 from "./../../images/82.jpeg";
import bookImage83 from "./../../images/83.jpeg";
import bookImage84 from "./../../images/84.jpeg";
import bookImage85 from "./../../images/85.jpeg";
import bookImage86 from "./../../images/86.jpeg";

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
    title: "SAYAKA MURATA LIFE CEREMONY",
    price: "LKR 975.00",
    discountPrice: "LKR 780.00",
    discount: "20%",
    image: bookImage7,
  },
  {
    title: "ELIZA CLARK PENANCE",
    price: "LKR 1000.00",
    discountPrice: "LKR 900.00",
    discount: "10%",
    image: bookImage8,
  },
  {
    title: "ELIZA CLARK",
    price: "LKR 3500.00",
    discountPrice: "LKR 3150.00",
    discount: "10%",
    image: bookImage9,
  },
  {
    title: "WANALIYA",
    price: "LKR 1750.00",
    discountPrice: "LKR 1400.00",
    discount: "20%",
    image: bookImage10,
  },
  {
    title: "SODURU DANAWWA",
    price: "LKR 950.00",
    discountPrice: "LKR 760.00",
    discount: "20%",
    image: bookImage11,
  },
  {
    title: "KARUNAWATHI SAHA PUSTHAKALAYA",
    price: "LKR 1000.00",
    discountPrice: "LKR 800.00",
    discount: "20%",
    image: bookImage12,
  },
  {
    title: "THATHTHA AWIDIN",
    price: "LKR 975.00",
    discountPrice: "LKR 780.00",
    discount: "20%",
    image: bookImage13,
  },
  {
    title: "HOO LUSI LUSI",
    price: "LKR 1000.00",
    discountPrice: "LKR 900.00",
    discount: "10%",
    image: bookImage14,
  },
  {
    title: "SULAGA NUBA",
    price: "LKR 3500.00",
    discountPrice: "LKR 3150.00",
    discount: "10%",
    image: bookImage15,
  },
  {
    title: "IRANAMA OBE NAMATA LIYA",
    price: "LKR 1750.00",
    discountPrice: "LKR 1400.00",
    discount: "20%",
    image: bookImage16,
  },
  {
    title: "ALUTH MANAMALI",
    price: "LKR 950.00",
    discountPrice: "LKR 760.00",
    discount: "20%",
    image: bookImage17,
  },
  {
    title: "JAYA HE SAIMAN",
    price: "LKR 1000.00",
    discountPrice: "LKR 800.00",
    discount: "20%",
    image: bookImage18,
  },
];
const moreBooks = [
  {
    title: "THAL WATA ADDARA",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    discount: "20%",
    image: bookImage19,
  },
  {
    title: "MITIYAWATHATA HRUNU KAULUWA",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    discount: "20%",
    image: bookImage20,
  },
  {
    title: "RAHAS PARIKSHAKAYO",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    discount: "10%",
    image: bookImage21,
  },
  {
    title: "SODURU DANAUWA",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    discount: "10%",
    image: bookImage22,
  },
  {
    title: "CHUN PAN",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    discount: "20%",
    image: bookImage23,
  },
  {
    title: "MUHUDU SINHAYA 1",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    discount: "20%",
    image: bookImage24,
  },
  {
    title: "MUHUDU SINHAYA 2",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    discount: "20%",
    image: bookImage25,
  },
  {
    title: "EKATHMA",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    discount: "10%",
    image: bookImage26,
  },
  {
    title: "THE SECRET",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    discount: "10%",
    image: bookImage27,
  },
  {
    title: "THE MOON CHILD",
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
    title: "RORY AND HIS LIEN FRIEND BOT",
    price: "LKR 1500.00",
    discountPrice: "LKR 1200.00",
    image: bookImage51,
  },
  {
    title: "KUKU",
    price: "LKR 1400.00",
    discountPrice: "LKR 1120.00",
    image: bookImage52,
  },
  {
    title: "TREASURE ISLAND",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage53,
  },
  {
    title: "DISCOVER DINOSAURS",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage54,
  },
  {
    title: "PHONICS WORK BOOK",
    price: "LKR 1500.00",
    discountPrice: "LKR 1250.00",
    image: bookImage55,
  },
  {
    title: "SAI'S MAGIC SILK",
    price: "LKR 2000.00",
    discountPrice: "LKR 1600.00",
    image: bookImage56,
  },
  {
    title: "FORCES AND MOTION",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    image: bookImage57,
  },
  {
    title: "JACK AND BEANSTALK",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage58,
  },
  {
    title: "FRANKENSTEIN",
    price: "LKR 1750.00",
    discountPrice: "LKR 1575.00",
    image: bookImage59,
  },
  {
    title: "DINO",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage60,
  },
  {
    title: "THE BEAR",
    price: "LKR 1800.00",
    discountPrice: "LKR 1440.00",
    image: bookImage61,
  },
  {
    title: "BABY TOUCH WORDS",
    price: "LKR 1500.00",
    discountPrice: "LKR 1350.00",
    image: bookImage63,
  },

  {
    title: "MY FIRST 123",
    price: "LKR 1200.00",
    discountPrice: "LKR 960.00",
    image: bookImage64,
  },
];
const Educationalbooks = [
  {
    title: "RASAYANA WIDYAWA",
    price: "LKR 800.00",
    discountPrice: "LKR 725.00",
    image: bookImage65,
  },
  {
    title: "JIWA WIDYAWA",
    price: "LKR 800.00",
    discountPrice: "LKR 720.00",
    image: bookImage66,
  },
  {
    title: "JIWA WIDYAWA 12",
    price: "LKR 1600.00",
    discountPrice: "LKR 1440.00",
    image: bookImage67,
  },
  {
    title: "BAUTHIKA WIDYAWA 13",
    price: "LKR 2100.00",
    discountPrice: "LKR 1890.00",
    image: bookImage68,
  },
  {
    title: "JIWA WIDYAWA 13",
    price: "LKR 2100.00",
    discountPrice: "LKR 1890.00",
    image: bookImage69,
  },
  {
    title: "BUDDHADARMAYA 9",
    price: "LKR 250.00",
    discountPrice: "LKR 200.00",
    image: bookImage70,
  },
  {
    title: "ITHIHASAYA 9",
    price: "LKR 250.00",
    discountPrice: "LKR 225.00",
    image: bookImage71,
  },
  {
    title: "GANITHAYA 9",
    price: "LKR 295.00",
    discountPrice: "LKR 265.00",
    image: bookImage72,
  },
  {
    title: "SINHALA 9",
    price: "LKR 295.00",
    discountPrice: "LKR 260.00",
    image: bookImage73,
  },
  {
    title: "ENGLISH 9",
    price: "LKR 250.00",
    discountPrice: "LKR 225.00",
    image: bookImage74,
  },
  {
    title: "DEMALA 5",
    price: "LKR 250.00",
    discountPrice: "LKR 225.00",
    image: bookImage75,
  },
  {
    title: "DEMALA 9",
    price: "LKR 250.00",
    discountPrice: "LKR 225.00",
    image: bookImage76,
  },
  {
    title: "DEMALA 4",
    price: "LKR 300.00",
    discountPrice: "LKR 270.00",
    image: bookImage77,
  },
  {
    title: "DEMALA 5",
    price: "LKR 300.00",
    discountPrice: "LKR 270.00",
    image: bookImage78,
  },
  {
    title: "DEMALA 7",
    price: "LKR 300.00",
    discountPrice: "LKR 270.00",
    image: bookImage79,
  },

  {
    title: "DEMALA 6",
    price: "LKR 300.00",
    discountPrice: "LKR 270.00",
    image: bookImage80,
  },
  {
    title: "KUMARA RACHANAYA 6",
    price: "LKR 500.00",
    discountPrice: "LKR 450.00",
    image: bookImage81,
  },
  {
    title: "RACHANA",
    price: "LKR 490.00",
    discountPrice: "LKR 450.00",
    image: bookImage82,
  },
  {
    title: "SINHALA BASNAHIRA PALATH",
    price: "LKR 500.00",
    discountPrice: "LKR 450.00",
    image: bookImage83,
  },
];

const BookList = () => {
  const navigate = useNavigate();
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
        className="d-flex justify-content-between align-items-center mb-4 py-3 px-4"
        style={{
          backgroundColor: "rgb(112, 141, 210)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <div className="text-center w-100">
          <p className="lead mb-1">
            <strong>New Arrivals</strong>
          </p>
          <p className="text-muted mb-0" style={{ color: "white" }}>
            <b>Discover the Latest Books.</b>
          </p>
        </div>
        <button
          className="btn btn-primary"
          style={{
            color: "rgb(13, 12, 13)",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            borderColor: "white",
            fontStyle: "italic",
          }}
          onClick={() => navigate("/novels")}
        >
          Explore All
        </button>
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
        className="d-flex justify-content-between align-items-center mb-4 py-3 px-4"
        style={{
          backgroundColor: "rgb(136, 217, 225)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <div className="text-center w-100">
          <p className="lead mb-1">
            <strong>නවකතා</strong>
          </p>
          <p className="text-muted mb-0" style={{ color: "white" }}>
            <b>Best Sinhala Novels.</b>
          </p>
        </div>
        <button
          className="btn btn-primary"
          style={{
            color: "rgb(13, 12, 13)",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            borderColor: "white",
            fontStyle: "italic",
          }}
          onClick={() => navigate("/novels")}
        >
          Explore All
        </button>
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
        className="d-flex justify-content-between align-items-center mb-4 py-3 px-4"
        style={{
          backgroundColor: "rgb(99, 127, 236)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <div className="text-center w-100">
          <p className="lead mb-1">
            <strong>CHILDREN</strong>
          </p>
        </div>
        <button
          className="btn btn-primary"
          style={{
            color: "rgb(13, 12, 13)",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            borderColor: "white",
            fontStyle: "italic",
          }}
          onClick={() => navigate("/novels")}
        >
          Explore All
        </button>
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
      {/* fifth Swiper Slider Section */}
      <header
        className="d-flex justify-content-between align-items-center mb-4 py-3 px-4"
        style={{
          backgroundColor: "rgb(242, 86, 198)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <div className="text-center w-100">
          <p className="lead mb-1">
            <strong>EDUCATIONAL</strong>
          </p>
        </div>
        <button
          className="btn btn-primary"
          style={{
            color: "rgb(13, 12, 13)",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            borderColor: "white",
            fontStyle: "italic",
          }}
          onClick={() => navigate("/novels")}
        >
          Explore All
        </button>
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
          {Educationalbooks.map((book, index) => (
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
