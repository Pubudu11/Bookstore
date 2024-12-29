import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import backgroundImage from "./assets/library.jpg";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="body-background"></div>
    </div>
  );
};

export default App;
