import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "rgb(11, 50, 108)", color: "#fff" }}
      className="py-4"
    >
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <div className="text-center   mt-4 rounded">
              <h5 className="fw-bold mb-3">Stay Updated!</h5>
              <p className="text-muted bg-white rounded mb-3">
                Subscribe to get the latest offers, updates, and exclusive
                deals.
              </p>
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  className="form-control w-50 me-3"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li>School List</li>
              <li>Children</li>
              <li>Gift Packs</li>
              <li>By Language</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Sign Up / Login</li>
              <li>My Account</li>
              <li>Wishlist</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li>Shipping & Return Policy</li>
              <li>Privacy And Cookies Policy</li>
              <li>Terms & Conditions</li>
              <li>Payment Policy</li>
              <li>Coupon T&C</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h6>Contact Details</h6>
            <ul className="list-unstyled">
              <li>
                No.20, Stanley Thilakarathne Mawatha, Nugegoda, Sri Lanka, 10250
              </li>
              <li>📞 +94 765252133 / 0111234567</li>
              <li>📧 bookhaven.lk</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <h6>Follow Us</h6>
            <div className="d-flex justify-content-center">
              <a href="#" className="mx-2">
                <img src="fb.png" alt="Facebook" />
              </a>
              <a href="#" className="mx-2">
                <img src="twitter.png" alt="Twitter" />
              </a>
              <a href="#" className="mx-2">
                <img src="in.png" alt="LinkedIn" />
              </a>

              <a href="#" className="mx-2">
                <img src="youtube.png" alt="YouTube" />
              </a>
              <a href="#" className="mx-2">
                <img src="ins.png" alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <h6>We Accept</h6>
            <div className="d-flex justify-content-center">
              <img
                src="visa.png"
                alt="Visa"
                className="mx-2 rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
              <img
                src="master.png"
                alt="MasterCard"
                className="mx-2 rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
