import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h5>Receive The Latest Offers & Updates Via Email</h5>
            <p>
              Signup To Be The First To Hear About Exclusive Deals, Special
              Offers And Upcoming Collections
            </p>
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                className="me-2"
              />
              <Button variant="primary">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li>School List</li>
              <li>Sarasavi Publications</li>
              <li>Sumitha Publications</li>
              <li>Children</li>
              <li>Galle Literary</li>
              <li>Gift Packs</li>
              <li>By Language</li>
              <li>Promotions</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Awards</li>
              <li>Branch Network</li>
              <li>Contact Us</li>
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
                No.30, Stanley Thilakarathne Mawatha, Nugegoda, Sri Lanka, 10250
              </li>
              <li>📞 +94 711304050 / 0112820820</li>
              <li>📧 webadmin@sarasavi.lk</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <h6>Follow Us</h6>
            <div className="d-flex justify-content-center">
              <a href="#" className="mx-2">
                <img src="facebook-icon.png" alt="Facebook" />
              </a>
              <a href="#" className="mx-2">
                <img src="twitter-icon.png" alt="Twitter" />
              </a>
              <a href="#" className="mx-2">
                <img src="linkedin-icon.png" alt="LinkedIn" />
              </a>
              <a href="#" className="mx-2">
                <img src="pinterest-icon.png" alt="Pinterest" />
              </a>
              <a href="#" className="mx-2">
                <img src="youtube-icon.png" alt="YouTube" />
              </a>
              <a href="#" className="mx-2">
                <img src="instagram-icon.png" alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <h6>We Accept</h6>
            <div className="d-flex justify-content-center">
              <img src="visa-icon.png" alt="Visa" className="mx-2" />
              <img
                src="mastercard-icon.png"
                alt="MasterCard"
                className="mx-2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
