import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(book.price);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * book.price);
    }
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-5 mt-5"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "10px" }}
      >
        &larr; Back
      </button>

      <div
        className="row shadow-lg bg-white rounded g-4"
        style={{
          padding: "20px",
          marginBottom: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="col-12 col-md-2 text-center">
          <img
            src={book.image}
            alt={book.title}
            className="img-fluid rounded border"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",
              margin: "50px",
            }}
          />
        </div>

        <div
          className="col-12 col-md-8"
          style={{
            marginLeft: "auto",
            paddingLeft: "2s0px",
          }}
        >
          <h2 className="text-primary fw-bold mb-3">{book.title}</h2>
          <div className="mb-3">
            <span className="badge bg-success fs-6 me-2">In Stock</span>
            <span className="text-decoration-line-through text-muted fs-5 me-2">
              {book.originalPrice}
            </span>
            <span className="fs-4 text-danger fw-bold">{book.price}</span>
          </div>

          <h5 className="fw-semibold mt-4">Details</h5>
          <ul className="list-unstyled">
            <li>
              <strong>Discount:</strong> {book.discount}
            </li>
            <li>
              <strong>Author:</strong> {book.author || "MARTIN WICKRAMASINGHE"}
            </li>
            <li>
              <strong>Language:</strong> {book.language || "SINHALA"}
            </li>
            <li>
              <strong>Publisher:</strong> {book.publisher || "N/A"}
            </li>
            <li>
              <strong>Discription:</strong> {book.discription || "N/A"}
            </li>
          </ul>
          {/* Quantity and Buttons */}
          <div className="d-flex align-items-center mt-3">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="form-control w-25 me-3"
            />
            <h5>Total:{totalPrice}</h5>
          </div>

          <div className="d-flex mt-4">
            <button className="btn btn-primary me-3 px-4 py-2">
              Add to Cart
            </button>
            <button className="btn btn-outline-success px-4 py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
