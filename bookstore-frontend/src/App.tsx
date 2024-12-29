import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import backgroundImage from "./assets/library.jpg";

const App = () => {
  return (
    <div>
      <Navbar />
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>
  );
};

export default App;
