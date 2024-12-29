import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="body-background">
        <MainSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
