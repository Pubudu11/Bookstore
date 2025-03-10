import React from "react";
import ChildrenPage from "./components/Children/Children";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/SlideShow/SlideShow";
import BookList from "./components/BookList/BookList";
import NovelsPage from "./components/NovelsPage/Novels";
import CombinedAuth from "./components/CombinedAuth/CombinedAuth";
import BookCategories from "./components/BookCategories/BookCategories";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewArrivals from "./components/NewArrivalsPage/NewArrivals";
import Educational from "./components/Education/Education";
import BookDetails from "./components/BookDetails/BookDetails";

import BackgroundImageComponent from "./components/BackGround/background";
import AdminLayout from "./admin/Layouts/admin_layout";

const noFooterPages = ["/login", "/register", "/admin"];
const noNavbarPages = ["/login", "/register", "/admin"];

const App: React.FC = () => {
  const location = useLocation();

  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <div className="app">
      {!noNavbarPages.includes(location.pathname) && !isAdminPath && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="body-background">
                <BackgroundImageComponent />
                <Slideshow />
                <BookCategories />
                <BookList />
              </div>
            }
          />
          <Route path="/" element={<BookList />} />

          <Route path="/book-details" element={<BookDetails />} />

          <Route path={"/admin/*"} element={<AdminLayout />} />
          <Route path="/novels" element={<NovelsPage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/educational" element={<Educational />} />

          <Route path="/login" element={<CombinedAuth />} />

          <Route path="/register" element={<CombinedAuth />} />
        </Routes>
      </div>

      {!noFooterPages.includes(location.pathname) && !isAdminPath && <Footer />}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
