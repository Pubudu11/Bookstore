import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { color: "#90ee90", title: "Children's Books", icon: "📚" },
  { color: "#ffcc99", title: "නවකතා", icon: "📖" },
  { color: "#add8e6", title: "පරිවර්තන", icon: "📘" },
  { color: "#90ee90", title: "කෙටිකතා", icon: "📚" },
  { color: "#add8e6", title: "Educational", icon: "📘" },
];

const BookCategories = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between flex-wrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center justify-content-center p-3"
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: category.color,
              borderRadius: "10px",
              color: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              margin: "2px",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              {category.icon}
            </div>
            <h5 className="mb-0">{category.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
