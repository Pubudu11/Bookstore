import React from "react";

const BackgroundImageComponent = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: 'url("bookstore.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.7)",
  };

  const headingStyle = {
    fontSize: "3.5rem",
    fontWeight: "bold",
    letterSpacing: "2px",
    textShadow: "10px 6px 15px rgba(0, 0, 0, 1)",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: "1rem",
    color: "rgb(255, 251, 251)", // Attractive gold color
  };

  const paragraphStyle = {
    fontSize: "1.5rem",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "1rem 2rem",
    color: "rgb(239, 239, 87)", // Softer yellow for better readability
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <h1 style={headingStyle}>Welcome to the Bookstore</h1>
        <p style={paragraphStyle}>
          Books are a gateway to knowledge and adventure. They inspire, educate,
          and transport us to places beyond our imagination.
        </p>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
