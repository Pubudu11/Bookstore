import React from "react";
import ChildrenPage from "./components/Children/Children"; // Import the correct component
import {
  Routes,
  Route,
  useLocation, BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/SlideShow/SlideShow";
import BookList from "./components/BookList/BookList"; // Ensure this path is correct
import NovelsPage from "./components/NovelsPage/Novels"; // Import NovelsPage
import CombinedAuth from "./components/CombinedAuth/CombinedAuth";
import BookCategories from "./components/BookCategories/BookCategories";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.tsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewArrivals from "./components/NewArrivalsPage/NewArrivals";
import Educational from "./components/Education/Education";
import BookDetails from "./components/BookDetails/BookDetails"; // Import BookDetails component

import BackgroundImageComponent from "./components/BackGround/background";
import AdminLayout from "./admin/Layouts/admin_layout";

import ShippingDetails from "./components/ShippingDetails/ShippingDetails.tsx";
import CardDetails from "./components/CardDetails/CardDetails.tsx";
import OrderSummary from "./components/OrderSummary/OrderSummary.tsx";
//import Books from "./admin/components/bookDetails.tsx";
//import Sidebar from "./admin/components/Sidebar.tsx";



// Define the pages where the footer or navbar should not be displayed
const noFooterPages = ["/login", "/register", "/admin"];
const noNavbarPages = ["/login", "/register", "/admin"];


const App: React.FC = () => {
  const location = useLocation(); // Get the current route

  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <div className="app">
      {/* Conditionally render Navbar on pages except specified ones */}
      {!noNavbarPages.includes(location.pathname) && !isAdminPath && <Navbar />}

      <div className="main-content">
        <Routes>
          {/* Home Page */}
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
            {/* Book Details Page */}
          <Route path="/book-details" element={<BookDetails />} />
          {/* Novels Page */}
          <Route path={"/admin/*"} element={<AdminLayout />} />
          <Route path="/novels" element={<NovelsPage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/educational" element={<Educational />} />
          {/* Add this route */}
          {/* Login Page */}
          <Route path="/login" element={<CombinedAuth />} />
          {/* Register Page */}
          <Route path="/register" element={<CombinedAuth />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/shipping-details" element={<ShippingDetails />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/order-summary" element={<OrderSummary subtotal={0} />} />





        </Routes>
      </div>

      {/* Conditionally render Footer on pages except specified ones */}
      {!noFooterPages.includes(location.pathname) && !isAdminPath && <Footer />}
    </div>
  );
};

// Wrap the App component with Router to provide routing context
const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
