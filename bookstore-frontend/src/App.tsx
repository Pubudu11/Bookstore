import "./App.css"; // Import the CSS file
import Navbar from "./components/Navbar/Navbar";
import backgroundImage from "./assets/library.jpg";

const App = () => {
  return (
    <div>
      <Navbar />
      <div
        className="background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Full viewport height
        }}
      ></div>
    </div>
  );
};

export default App;
