import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import Slideshow from "./components/SlideShow/SlideShow";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="body-background">
        <div>
          <Slideshow />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
