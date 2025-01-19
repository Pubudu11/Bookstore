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
];

const Novels = () => {
  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">All Sinhala Novels</h4>
      <div className="row">
        {novels.map((novel, index) => (
          <div className="col-6 col-md-2 col-lg-1-4 mb-3" key={index}>
            <div className="card text-center shadow-sm">
              <img
                src={novel.image}
                alt={novel.title}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-title">{novel.title}</h6>
                <p className="text-muted">
                  <s>{novel.discountPrice}</s>
                </p>
                <p className="text-primary fw-bold">{novel.price}</p>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-sm btn-outline-primary mx-1">
                    🛒
                  </button>
                  <button className="btn btn-sm btn-outline-danger mx-1">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novels;
