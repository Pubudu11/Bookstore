import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state;

  if (!book) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">No book details found!</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {/* Back Button */}
      <button
        className="btn btn-secondary mb-3 mt-5"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px" }}
      >
        &larr; Back
      </button>

      {/* Main Content */}
      <div className="row shadow-lg p-4 bg-white rounded">
        {/* Book Image Section */}
        <div className="col-md-2 text-center mb-4 mb-md-0">
          <img
            src={book.image}
            alt={book.title}
            className="img-fluid rounded border"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",

              margin: "100px",
            }}
          />
        </div>

        {/* Book Details Section */}
        <div
          className="col-md-7 p-4"
          style={{
            marginLeft: "auto", // Adds space between the image and details
            paddingLeft: "20px", // Extra padding for better readability
          }}
        >
          <h2 className="text-primary mb-4">{book.title}</h2>
          <div className="mb-4">
            <span className="badge bg-success fs-6 me-2">In Stock</span>
            <span className="text-decoration-line-through text-muted fs-5 me-2">
              LKR {book.originalPrice}
            </span>
            <span className="fs-4 text-danger">LKR {book.price}</span>
          </div>

          {/* Book Details */}
          <div className="mb-4">
            <h6>Details</h6>
            <p>
              <strong>Discount :</strong> {book.discount}
            </p>
            <p>
              <strong>Author :</strong> {book.author || "N/A"}
            </p>
            <p>
              <strong>Publisher :</strong> {book.publisher || "N/A"}
            </p>
            <p>
              <strong>Language:</strong> {book.language || "N/A"}
            </p>
            <p>
              <strong>Description:</strong> {book.isbn || "N/A"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="d-flex">
            <button className="btn btn-primary me-3">Add to Cart</button>
            <button className="btn btn-outline-success">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
