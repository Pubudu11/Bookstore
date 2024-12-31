import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/SlideShow/SlideShow";
import UserLogin from "./components/Login/UserLogin";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="body-background">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slideshow />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
