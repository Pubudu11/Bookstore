import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // For navigation

const categories = [
  {
    color: "linear-gradient(135deg, #90ee90, #66cc66)",
    title: "Children's Books",
    icon: "📚",
    route: "/children",
  },
  {
    color: "linear-gradient(135deg, #ffcc99, #ff9966)",
    title: "නවකතා",
    icon: "📖",
    route: "/novels",
  },
  {
    color: "linear-gradient(135deg, #add8e6, #3399ff)",
    title: "පරිවර්තන",
    icon: "📘",
    route: "/translations",
  },
  {
    color: "linear-gradient(135deg, #90ee90, #33cc33)",
    title: "කෙටිකතා",
    icon: "📚",
    route: "/shortstories",
  },
  {
    color: "linear-gradient(135deg, #add8e6, #0073e6)",
    title: "Educational",
    icon: "📘",
    route: "/educational",
  },
];

const BookCategories: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container mt-4">
      <div
        className="d-flex overflow-auto"
        style={{
          whiteSpace: "nowrap",
          padding: "10px 0",
          justifyContent: "space-between",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="mx-2 d-inline-block"
            onClick={() => navigate(category.route)} // Navigate on click
            style={{ cursor: "pointer", minWidth: "160px" }}
          >
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{
                height: "150px",
                background: category.color,
                borderRadius: "15px",
                color: "white",
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 15px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 12px rgba(0, 0, 0, 0.15)";
              }}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
